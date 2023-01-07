import { Button, Flex, Image } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Watchlist = ({data}) => {


  return (
  
    <div >
      {data.map((el)=>{
      return <Flex justifyContent={"space-around"} border="1px solid red" key={el.imdbID} >
        <Image src={el.Images} width="200px" height={"80px"} alt="" />
        <h1 style={{marginTop:"30px"}}>{el.Title}</h1>
      
       
      </Flex>
    })}

    </div>
    
  
  )
}
export async function getServerSideProps() { 
  const res = await fetch ('http://localhost:8080/wishlist')
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
export default Watchlist