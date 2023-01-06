import { Button, Flex, Grid, GridItem, Image, Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";


export default function Home({data}) {
 
  console.log(data)
  return (
    <>
    <div>
      <h1 style={{textAlign:"center",fontSize:"40px"}}>movies App</h1>
      <Grid templateColumns='repeat(4, 1fr)' gap={25}  textAlign={"center"} >
      {data.map((el)=>{
        return <GridItem border="1px solid black"  key={el.imdbID}>
          <Image src={el.Images[2]}  height={"300px"} />
          <h4>{el.Title}</h4>
          <p>{el.Genre}</p>
          <p>{el.imdbRating}</p>
           <p>{el.imdbVotes}</p>
           <Link href={`${el.imdbID}`}>
           <Button style={{backgroundColor:"black",color:"white"}}>Watch movie</Button></Link>
          
        </GridItem>
      })}
      </Grid>
      
    </div>
    </>
  )
  
}

export async function getServerSideProps() { 
  const res = await fetch ('https://movies-database-gold.vercel.app/movies')
  const data = await res.json();

  // The next line will only be logged on the server and never on the browser console even if we make 
  // client-side navigation.
  // This confirms that `getServerSideProps` is guaranteed to run on the server and never on the client (or browser).
  

  return {
      props: {
          data
      }
  }
}