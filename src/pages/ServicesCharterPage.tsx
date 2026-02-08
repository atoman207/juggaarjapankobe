import { Box, Heading } from '@chakra-ui/react'
import { PageSection } from '@/components/PageSection'

export function ServicesCharterPage(): JSX.Element {
  return (
    <Box as="article" w="100%">
      <Heading as="h1" fontSize="1.75rem" fontWeight={700} mb={6} color="gray.900">
        チャーター便（軽貨物貸切便）料金表
      </Heading>
      <PageSection title="料金表">
        <p>料金の詳細はお問い合わせください。078-987-0902</p>
      </PageSection>
    </Box>
  )
}
