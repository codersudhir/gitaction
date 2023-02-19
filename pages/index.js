
import { Inter } from '@next/font/google'
import { Button, Grid, Image } from '@chakra-ui/react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {


  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6} mt={20}>
      {posts.map((el)=>{
        return<Link href={`${el.id}`} key={el.id}>
        <div style={{border:"1px solid red",alignItems:"center"}}>
          <Image src={el.image} alt={el.title} boxSize={200}  />
          <h1>{el.title}</h1>
          <p>{el.category}</p>
        </div></Link>
      })}
    </Grid>
  )
 
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://localhost:3000/data')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}


