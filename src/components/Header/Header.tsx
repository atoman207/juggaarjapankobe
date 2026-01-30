import React, { useState, useCallback, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Flex, Button, Image } from '@chakra-ui/react'
import { Navigation } from '@/components/Navigation/Navigation'
import logoImage from '@/assets/image/logo_header.png'

const MOBILE_BREAKPOINT = 768

export function Header(): React.ReactElement {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [closeMenu])

  useEffect(() => {
    if (!menuOpen) return
    const isMobile = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches
    if (!isMobile) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [menuOpen])

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      bg="white"
      color="black"
      boxShadow="0 1px 3px rgba(0,0,0,0.08)"
    >
      <Flex
        align="center"
        justify="space-between"
        gap={4}
        px={{ base: 6, md: '100px' }}
        py={4}
        w="100%"
        boxSizing="border-box"
      >
        <Box flexShrink={0}>
          <Box
            as={RouterLink}
            to="/"
            aria-label="ホーム"
            display="flex"
            alignItems="center"
            textDecoration="none"
            color="inherit"
            _hover={{ opacity: 0.85 }}
          >
            <Image
              src={logoImage}
              alt="Juggaar Japan"
              h={{ base: '40px', md: '56px' }}
              maxW={{ base: '180px', md: '220px' }}
              objectFit="contain"
              objectPosition="left center"
            />
          </Box>
        </Box>
        <Box display={{ base: 'none', md: 'flex' }} flex={1} justifyContent="flex-end" minW={0}>
          <Navigation
            open={menuOpen}
            onClose={closeMenu}
            className="headerNav"
          />
        </Box>
        <Button
          display={{ base: 'flex', md: 'none' }}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="6px"
          w={12}
          h={12}
          p={0}
          bg="transparent"
          border="none"
          cursor="pointer"
          color="black"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          onClick={toggleMenu}
          _hover={{ bg: 'transparent' }}
        >
          <Box w={6} h="2px" bg="currentColor" borderRadius={0} />
          <Box w={6} h="2px" bg="currentColor" borderRadius={0} />
          <Box w={6} h="2px" bg="currentColor" borderRadius={0} />
        </Button>
      </Flex>
      {menuOpen && (
        <Box
          position="fixed"
          inset={0}
          zIndex={99}
          bg="blackAlpha.400"
          cursor="pointer"
          display={{ base: 'block', md: 'none' }}
          aria-hidden
          onClick={closeMenu}
          role="presentation"
        />
      )}
      <Box display={{ base: 'block', md: 'none' }}>
        <Navigation
          open={menuOpen}
          onClose={closeMenu}
          className="drawerNav"
        />
      </Box>
    </Box>
  )
}
