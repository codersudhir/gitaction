import { Button, Flex, Image } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Watchlist = ({data}) => {
  // const [data,setdata]=useState([])
  
console.log(data)
  // useEffect(() => {
  //   let data=JSON.parse(localStorage.getItem("data"))
  //   setdata(data)
  // }, [])

  const handledelet=(el)=>{
    console.log(el)
    fetch(`http://localhost:8080/wishlist/${el.id}`, {
      method: 'DELETE',
    })
    .then(res => res.json()) 
    .then((res)=>console.log(res))

  }
  return (
  
    <div >
      {data.map((el)=>{
      return <Flex justifyContent={"space-around"} border="1px solid red" key={el.id} >
        <Image src={el.Images} width="200px" height={"80px"} alt="" />
        <h1 style={{marginTop:"30px"}}>{el.Title}</h1>
      
        <Button marginTop={"20px"} onClick={()=>handledelet(el)}>Remove from Wishlist</Button>
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