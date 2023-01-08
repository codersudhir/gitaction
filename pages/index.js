import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import Link from 'next/link'
import Experience from './Experience'




export default function Home({posts,data1}) {
   console.log(posts)
  return (
    < >
  
    <Flex justifyContent={"space-around"}>
    <div style={{border:"1px solid red",width:"30%",textAlign:"center"}}>
      <img src={posts.avatar_url} style={{borderRadius:"50%",width:"100px",marginLeft:"150px"}} />
      <p>{posts.name}</p>
      <p>{posts.bio}</p>
      <Flex justifyContent={"space-around"}>
      <Link href={"https://docs.google.com/document/d/1_bWH28nOAnBCozL8CrT66WpHO_9jXLN_xWea7NnGeBc/edit"}>
        <button style={{backgroundColor:"green"}}> Resume</button></Link>
        <button style={{backgroundColor:"blue"}}><Link href={posts.html_url} >Follow</Link></button>
      </Flex>
      <Experience/>
    </div>
    <div style={{border:"1px solid red",width:"60%"}}>
      <Text textAlign={"center"}>Projects</Text>
      <Grid templateColumns='repeat(2, 1fr)' gap={6}>
      {data1.items.map((el)=>{
        console.log(el.id)
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
    </div>

    </Flex>
   
     
    </>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://api.github.com/users/codersudhir')
  const posts = await res.json()

  const res1 = await fetch(`https://api.github.com/search/repositories?q=user:codersudhir+fork:true&sort=updated&per_page=10&type=Repositories`)
  const data1 = await res1.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,data1
    },
  }
}
