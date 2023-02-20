import { Button, Flex } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [cart,setcart]=useState([])
  const getdata=async()=>{
    let res=await axios.get("https://emerald-gecko-tie.cyclic.app/cart")
    return res.data
  }

  useEffect(()=>{
    getdata().then((res)=>setcart(res))
  },[setcart])
  return (
    <Flex justifyContent={"space-around"}>
        <Link href={"/"}><Button>Home</Button></Link>
        <Link href={"/Cart"}><Button>CART {cart.length}</Button></Link>
    </Flex>
  )
}

export default Navbar