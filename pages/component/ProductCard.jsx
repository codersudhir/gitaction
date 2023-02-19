import { Button, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const ProductCard = ({image,title,id,category}) => {
  return (
    <Link href={`/Single/${id}`} >
    <div style={{border:"1px solid red",alignItems:"center"}}>
      <Image src={image} alt={title} boxSize={"200px"} />
      <h1>{title}</h1>
      <p>{category}</p>
      <Button w={'full'}>ADD TO CART</Button>
    </div></Link>
  )
}

export default ProductCard