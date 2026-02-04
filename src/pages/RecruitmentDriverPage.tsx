import { Box, Heading } from '@chakra-ui/react'
import { PageSection } from '@/components/PageSection'

export function RecruitmentDriverPage(): JSX.Element {
  return (
    <Box as="article" w="100%">
      <Heading as="h1" fontSize="1.75rem" fontWeight={700} mb={6} color="gray.900">
        3ヶ月ごとにボーナスが !? 神戸市北区 軽貨物 ドライバー
      </Heading>
      <PageSection title="募集要項">
        <p>神戸市北区・三田市在住の方歓迎。詳細はお問い合わせください。</p>
      </PageSection>
    </Box>
  )
}
