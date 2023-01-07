import { Button, Grid, GridItem, Image } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Movie = ({data}) => {


 console.log(data)
  const handleadd=(el)=>{
  
    fetch(`http://localhost:8080/wishlist`,{
      method:"POST",
      headers: {
        'Content-type': 'application/json'
       },
       body:JSON.stringify(el)
    })
    .then((res)=>res.json())
    .then((res)=>console.log(res))
    

  }
  


  return (
    <div>
     
    <Grid  textAlign={"center"} alignContent="center" >
   {data.map((el)=>{
     return <GridItem border="1px solid black"  key={el.imdbID} marginTop="50px">
       <Image src={el.Images[2]} width="800px" height={"500px"} marginLeft="280px" />
       <h4>{el.Title}</h4>
       <p>{el.Genre}</p>
       <p>{el.imdbRating}</p>
        <p>{el.imdbVotes}</p>
        <Button onClick={()=>handleadd(el)}  >ADD TO WATCHLIST</Button>
     </GridItem>
   })}
   </Grid>
   
 </div>
  )
}

export async function getServerSideProps(context) {
  
  let id=context.params.id
  console.log(id)
  const res = await fetch (`https://movies-database-gold.vercel.app/movies?imdbID=${id}`)
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


export default Movie
