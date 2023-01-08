import { Flex } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = ({backgroundColor1}) => {
  const [toggle,settoggle]=useState(false)
  const handletoggle=()=>{
    if(!toggle){
      settoggle(true)

    }
    if(toggle){
      settoggle(false)
    }
   
  }
  console.log(toggle)
  return (
    <Flex justifyContent={"space-around"} margin="20px" backgroundColor={toggle? "#171923" : "#edf2f7"} color={toggle? "#edf2f7" : "fffff"}>
      <div>
      <Link href={"/"} >Home</Link>
      <Link href={"/Projects"}>Project</Link>
      <Link href={"/Experience"}>experience</Link>
      </div>
      <div style={{display:"flex",marginLeft:"200px"}}  >
        <button onClick={handletoggle}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx350x4BvrqzCzHg1gWUOTzChUco_8r5zZK2lO8v8&s"  width={"30px"} style={{borderRadius:"50%"}} alt="" /></button>
        <button><img src="https://avatars.githubusercontent.com/u/105806651?v=4" width={"30px"} style={{borderRadius:"50%"}} alt="" /></button>
      </div>
     
    </Flex>
  )
}

export default Navbar

Navbar.prototype={
  backgroundColor1:" #17192g3",

}
