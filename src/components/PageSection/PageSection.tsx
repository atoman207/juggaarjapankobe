import type { ReactNode } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

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
      {title ? (
        <Heading
          as="h2"
          size="md"
          fontSize="1.5rem"
          fontWeight={600}
          mb={4}
          pb={2}
          borderBottom="2px solid"
          borderColor="gray.300"
          color="gray.900"
        >
          {title}
        </Heading>
      ) : null}
      <Text as="div" lineHeight={1.7} color="gray.800">
        {children}
      </Text>
    </Box>
  )
}
