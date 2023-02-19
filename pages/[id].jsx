import { Button,Image } from '@chakra-ui/react'

import React from 'react'


const Single = ({data}) => {
  
 
  return (
    <div>
         <Image src={data.image} alt={data.title} boxSize={200} />
        <h1>{data.title}</h1>
        <p>{data.price}</p>
        <Button>ADD TO CART</Button>
    </div>
  )
}
export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3000/data`)
  const posts = await res.json()
    return {
      paths: posts.map((el)=>({params:{id:String(el.id)}})),
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps(context) {
    let id=context.params.id
    console.log(id)
   
    const res = await fetch(`http://localhost:3000/data/${id}`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
  }
  
export default Single