import { Box, Heading } from '@chakra-ui/react'
import { PageSection } from '@/components/PageSection'

export function StaffPage(): JSX.Element {
  return (
    <Box as="article" w="100%">
      <Heading as="h1" fontSize="1.75rem" fontWeight={700} mb={6} color="gray.900">
        スタッフ
      </Heading>
      <PageSection title="熱意あるスタッフが物流や営業の現場で活躍しております">
        <p>STAFF</p>
        <p>知識と経験の豊富なスタッフが地域密着型のスタッフがお客様のために尽力</p>
        <p>スタッフへ</p>
      </PageSection>
    </Box>
  )
}
