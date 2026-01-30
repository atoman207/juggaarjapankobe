import { Box, Heading, Link } from '@chakra-ui/react'
import { PageSection } from '@/components/PageSection'

export function BlogPage(): JSX.Element {
  return (
    <Box as="article" w="100%">
      <Heading as="h1" fontSize="1.75rem" fontWeight={700} mb={6} color="gray.900">
        ブログ
      </Heading>
      <PageSection title="スタッフの声と共にサービスの詳細や耳寄りな情報を更新">
        <p>企業としての様々な理念をお伝えしております</p>
        <Box as="ul" m="0.5rem 0 1rem" pl={6}>
          <Box as="li" mb={2}>2025/01/28 神戸電鉄 五社駅から徒歩1分！新しいスタイルのテレマーケティングスペース</Box>
          <Box as="li" mb={2}>2025/01/27 新たに話題のキッチンカースペースをご用意しました！</Box>
          <Box as="li" mb={2}>2025/01/27 軽貨物の仕事をお探しの方に朗報です！</Box>
          <Box as="li" mb={2}>2025/01/24 新しいスタートを切る絶好のチャンスです！</Box>
        </Box>
        <p><Link href="/blog" color="blue.600" _hover={{ textDecoration: 'underline' }}>ブログへ</Link></p>
      </PageSection>
    </Box>
  )
}
