import { ChakraProvider } from '@chakra-ui/react'
import Home from '.'
import '../styles/globals.css'
import Nav from './Navbar'


export default function App({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider>
    <Nav/>
    <Component {...pageProps} />

    </ChakraProvider>
   
    </>
  )
}
