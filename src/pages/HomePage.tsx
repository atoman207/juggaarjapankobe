import React from 'react'
import { Box, Heading, Text, Link } from '@chakra-ui/react'
import { Hero } from '@/components/Hero'
import { PageSection } from '@/components/PageSection'
import mv1 from '@/assets/image/mv1.jpg'
import mv2 from '@/assets/image/mv2.jpg'
import mv3 from '@/assets/image/mv3.jpg'

const HERO_IMAGES = [mv1, mv2, mv3]
const HERO_INTERVAL_MS = 5000

export function HomePage(): React.ReactElement {
  return (
    <>
      <Hero
        images={HERO_IMAGES}
        intervalMs={HERO_INTERVAL_MS}
        overlayTitle="誠実なサービスが地元神戸で好評です"
        overlaySubtitle="ご期待にお応えするようドライバー・配布スタッフが尽力"
      />
      <Box as="article" w="100%">
        <Heading
          as="h1"
          fontSize="2.75rem"
          fontWeight={700}
          mb={6}
          color="gray.900"
          lineHeight={1.3}
        >
          軽貨物配送の求人なら神戸市にある株式会社Juggaar Japan
        </Heading>
        <Text fontSize="lg" color="gray.600" mb={8}>
          合同会社Juggaar Japan
        </Text>
        <PageSection title="誠実なサービスが地元神戸で好評です">
          <p>ご期待にお応えするようドライバー・配布スタッフが尽力</p>
          <p>SCROLL DOWN</p>
        </PageSection>
        <PageSection title="公式LINEご登録のお願い">
          <p>
            下記URLクリック ⇩<br />
            <Link
              href="https://lin.ee/4K8fXOC8"
              target="_blank"
              rel="noopener noreferrer"
              color="blue.600"
            >
              https://lin.ee/4K8fXOC8
            </Link>
            <br />
            追加後、アナタのフルネームを送信 ⇩ 直接、当社Staffとやり取りStart！！
          </p>
        </PageSection>
        <PageSection title="事業内容">
          <Box as="ul" m="0.5rem 0 1rem" pl={6}>
            <Box as="li" mb={2}>貨物軽自動車運送事業</Box>
            <Box as="li" mb={2}>ポスティング事業</Box>
            <Box as="li" mb={2}>BPO事業（事業開発・営業支援）</Box>
            <Box as="li" mb={2}>ドローン空撮</Box>
            <Box as="li" mb={2}>グラフィックデザイン・WEBデザイン制作事業</Box>
          </Box>
        </PageSection>
      </Box>
    </>
  )
}
