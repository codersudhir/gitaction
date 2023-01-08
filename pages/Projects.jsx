import { Flex, Grid, GridItem, Link } from '@chakra-ui/react'
import React from 'react'

const Projects = ({data}) => {
  // console.log(data.items)
  return (
    
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
      {data.items.map((el)=>{
        return <GridItem style={{border:"1px solid red"}} >
         
          <Link href={`${el.html_url}`}> <h1>{el.name}</h1></Link>
          <p>{el.description}</p>
          <Flex justifyContent={"space-around"}>
            <Flex>
              <p>forks : {el.stargazers_count}</p>
              <p> star: {el.forks_count}</p>
            </Flex>
            <h3>{el.language}</h3>
          </Flex>
        </GridItem>
      })}
      
    </Grid>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/search/repositories?q=user:codersudhir+fork:true&sort=updated&per_page=10&type=Repositories`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}


export default Projects
