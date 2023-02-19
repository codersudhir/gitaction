import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <Flex justifyContent={"space-around"}>
        <Link href={"/"}><Button>Home</Button></Link>
        
        <Link href={"/Cart"}><Button>CART {0}</Button></Link>
    </Flex>
  )
}

export default Navbar