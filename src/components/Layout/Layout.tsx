import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

export function Layout(): JSX.Element {
  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <Header />
      <Box
        as="main"
        flex="1"
        w="100%"
        maxW="1280px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={8}
        boxSizing="border-box"
        overflowX="visible"
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
