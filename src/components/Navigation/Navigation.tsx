import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import { NAV_ITEMS } from '@/assets/js/navigation'
import { isNavItemWithChildren } from '@/assets/js/types'
import styles from '@/assets/css/Navigation.module.css'

interface NavigationProps {
  open: boolean
  onClose: () => void
  className?: string
}

export function Navigation({
  open,
  onClose,
  className = '',
}: NavigationProps): JSX.Element {
  const location = useLocation()

  const isActive = (path: string): boolean => {
    if (path === '/') return location.pathname === '/'
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  const linkStyle = (active: boolean) => ({
    display: 'block' as const,
    py: '0.65rem',
    px: '0.9rem',
    color: 'black',
    fontSize: '15px',
    fontWeight: 500,
    textDecoration: 'none',
    _hover: { color: 'gray.700', bg: 'blackAlpha.50' },
    bg: active ? 'blackAlpha.100' : 'transparent',
  })

  return (
    <Box
      as="nav"
      className={`${styles.nav} ${open ? styles.navOpen : ''} ${className}`.trim()}
      aria-label="メインメニュー"
    >
      <Flex as="ul" className={styles.menu} wrap="wrap" align="center" justify="flex-end" gap={0} listStyleType="none" m={0} p={0}>
        {NAV_ITEMS.map((entry) => (
          <Box as="li" key={entry.path} className={styles.menuItem} position="relative">
            {isNavItemWithChildren(entry) && entry.children?.length ? (
              <>
                <Box as={RouterLink} to={entry.path} onClick={onClose} {...linkStyle(isActive(entry.path))}>
                  {entry.label}
                </Box>
                <Box
                  as="ul"
                  className={styles.submenu}
                  listStyleType="none"
                  m={0}
                  p={0}
                  position="absolute"
                  top="100%"
                  left={0}
                  minW="200px"
                  bg="white"
                  border="1px solid"
                  borderColor="blackAlpha.100"
                  borderTop="none"
                  boxShadow="0 4px 12px rgba(0,0,0,0.1)"
                  opacity={0}
                  visibility="hidden"
                  transition="opacity 0.2s, visibility 0.2s"
                  zIndex={10}
                  sx={{ '.menuItem:hover &': { opacity: 1, visibility: 'visible' } }}
                >
                  {entry.children.map((child) => (
                    <Box as="li" key={child.path} borderBottom="1px solid" borderColor="blackAlpha.60">
                      <Box
                        as={RouterLink}
                        to={child.path}
                        onClick={onClose}
                        display="block"
                        py="0.55rem"
                        px="0.9rem"
                        fontSize="14px"
                        color="black"
                        textDecoration="none"
                        _hover={{ bg: 'blackAlpha.50' }}
                        bg={location.pathname === child.path ? 'blackAlpha.100' : 'transparent'}
                      >
                        {child.label}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </>
            ) : (
              <Box as={RouterLink} to={entry.path} onClick={onClose} {...linkStyle(isActive(entry.path))}>
                {entry.label}
              </Box>
            )}
          </Box>
        ))}
      </Flex>
    </Box>
  )
}
