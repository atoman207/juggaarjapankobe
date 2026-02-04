import type { ReactNode } from 'react'
import { Box, Text } from '@chakra-ui/react'
import { SectionTitle } from '@/components/SectionTitle'

interface PageSectionProps {
  id?: string
  title?: string
  children: ReactNode
  className?: string
}

export function PageSection({
  id,
  title,
  children,
}: PageSectionProps): JSX.Element {
  return (
    <Box id={id} mb={12} as="section">
      {title ? <SectionTitle>{title}</SectionTitle> : null}
      <Text as="div" lineHeight={1.7} color="#1a1a1a">
        {children}
      </Text>
    </Box>
  )
}
