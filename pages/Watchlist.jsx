import { Button, Flex, Image } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Watchlist = () => {
  // const [data,setdata]=useState([])
  

  // useEffect(() => {
  //   let data=JSON.parse(localStorage.getItem("data"))
  //   setdata(data)
  // }, [])

  // const handledelet=(el)=>{
  //   // console.log(el)
  //   // fetch(`http://localhost:8080/wishlist/${el.id}`, {
  //   //   method: 'DELETE',
  //   // })
  //   // .then(res => res.json()) 
  //   // .then((res)=>console.log(res))

  // }
  return (
  
    <div >
      {/* {data.map((el)=>{
      return <Flex justifyContent={"space-around"} border="1px solid red" key={el.id} >
        <Image src={el.Images} width="200px" height={"80px"} alt="" />
        <h1 style={{marginTop:"30px"}}>{el.Title}</h1>
      
        <Button marginTop={"20px"} onClick={()=>handledelet(el)}>Remove from Wishlist</Button>
      </Flex>
    })} */}

    </div>
    
  
  )
}

export default Watchlist