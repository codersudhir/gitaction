import { Flex, Link } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
   <Flex justifyContent={"space-around"} backgroundColor="blue.500" >
    <Link href='/'>Home</Link>
    <Link href='/Watchlist'>Watchlist</Link>
   </Flex>
  )
}

export default Navbar