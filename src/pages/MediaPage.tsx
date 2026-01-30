import { Box, Heading, Link } from '@chakra-ui/react'
import { PageSection } from '@/components/PageSection'

export function MediaPage(): JSX.Element {
  return (
    <Box as="article" w="100%">
      <Heading as="h1" fontSize="1.75rem" fontWeight={700} mb={6} color="gray.900">
        コラム
      </Heading>
      <PageSection title="配送のプロが語る生活に役立つ情報発信ページ">
        <p>MEDIA</p>
        <p>日々の生活に役立つ配送のヒントや、物流業界の最新動向、地域密着型サービスの魅力をわかりやすくお伝えします。</p>
        <Box as="ul" m="0.5rem 0 1rem" pl={6}>
          <Box as="li" mb={2}>2025/12/30 神戸市兵庫区で軽貨物の求人を探す方必見！未経験から高収入も可能な仕事と応募ポイント徹底解説</Box>
          <Box as="li" mb={2}>2025/12/24 神戸市灘区で軽貨物求人！未経験から始めるドライバーの仕事探し</Box>
          <Box as="li" mb={2}>2025/12/18 軽貨物求人おすすめの会社比較と選び方最新ガイド｜仕事内容や収入相場・口コミも解説</Box>
          <Box as="li" mb={2}>2025/12/12 軽貨物引越し求人の仕事内容と収入相場！未経験から始めるドライバー仕事の探し方と応募ポイント</Box>
          <Box as="li" mb={2}>2025/12/06 軽貨物の求人で日払いの仕事で稼ぐ！未経験OKのドライバー募集と収入・応募条件を解説</Box>
        </Box>
        <p><Link href="/media" color="blue.600" _hover={{ textDecoration: 'underline' }}>メディアへ</Link></p>
      </PageSection>
    </Box>
  )
}
