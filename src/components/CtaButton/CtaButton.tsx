import type { ReactNode } from 'react'
import { Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const gradient = 'linear-gradient(135deg, #7ec8e3 0%, #5BA3C6 50%, #4a9bb8 100%)'

interface CtaButtonProps {
  to: string
  children: ReactNode
}

export function CtaButton({ to, children }: CtaButtonProps): JSX.Element {
  return (
    <Link
      asChild
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      px={8}
      pt={4}
      pb={3}
      minH="48px"
      minW="48px"
      background={gradient}
      color="white"
      fontWeight={600}
      borderRadius={0}
      textDecoration="none"
      cursor="pointer"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        color: 'white',
        textDecoration: 'none',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(91, 163, 198, 0.4)',
      }}
      _active={{
        color: 'white',
        textDecoration: 'none',
        transform: 'translateY(0)',
        boxShadow: '0 2px 6px rgba(91, 163, 198, 0.3)',
      }}
    >
      <RouterLink to={to}>{children}</RouterLink>
    </Link>
  )
}
