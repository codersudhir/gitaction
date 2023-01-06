import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import Navbar from './Navbar'

export default function App({ Component, pageProps }) {
  return (
     <>
    <ChakraProvider>
    <Navbar/>
    <Component {...pageProps} />
    </ChakraProvider>
    </>
  )
}
