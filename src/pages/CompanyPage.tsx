import { Box, Heading, Text } from '@chakra-ui/react'
import { PageSection } from '@/components/PageSection'

export function CompanyPage(): JSX.Element {
  return (
    <Box as="article" w="100%">
      <Heading as="h1" fontSize="1.75rem" fontWeight={700} mb={6} color="gray.900">
        会社概要
      </Heading>
      <PageSection title="株式会社Juggaar Japan ジュガールジャパン">
        <Box as="dl" m={0}>
          <Text as="dt" fontWeight={600} mt={3} color="gray.800" _first={{ mt: 0 }}>電話番号</Text>
          <Text as="dd" m="0.25rem 0 0" pl={0}>078-987-0902</Text>
          <Text as="dt" fontWeight={600} mt={3} color="gray.800">所在地</Text>
          <Text as="dd" m="0.25rem 0 0" pl={0}>〒651-1312 兵庫県神戸市北区有野町有野７９８−４</Text>
          <Text as="dt" fontWeight={600} mt={3} color="gray.800">営業所</Text>
          <Text as="dd" m="0.25rem 0 0" pl={0}>神戸市北区八多町 / 加古川市平岡町</Text>
          <Text as="dt" fontWeight={600} mt={3} color="gray.800">営業時間</Text>
          <Text as="dd" m="0.25rem 0 0" pl={0}>10:00 〜 19:00</Text>
          <Text as="dt" fontWeight={600} mt={3} color="gray.800">定休日</Text>
          <Text as="dd" m="0.25rem 0 0" pl={0}>日曜日・祝日</Text>
          <Text as="dt" fontWeight={600} mt={3} color="gray.800">代表取締役 / CEO</Text>
          <Text as="dd" m="0.25rem 0 0" pl={0}>加納 侑青</Text>
          <Text as="dt" fontWeight={600} mt={3} color="gray.800">設立</Text>
          <Text as="dd" m="0.25rem 0 0" pl={0}>（令和元年）2019年11月7日</Text>
          <Text as="dt" fontWeight={600} mt={3} color="gray.800">資本金</Text>
          <Text as="dd" m="0.25rem 0 0" pl={0}>1,170,000円</Text>
        </Box>
      </PageSection>
      <PageSection title="事業内容">
        <Box as="ul" m="0.5rem 0 1rem" pl={6}>
          <Box as="li" mb={2}>貨物軽自動車運送業</Box>
          <Box as="li" mb={2}>BPO事業（事業開発・営業支援）</Box>
          <Box as="li" mb={2}>営業、経営及び販売に関するコンサルティング業</Box>
          <Box as="li" mb={2}>不動産の保有、売買、賃貸借、仲介及び管理</Box>
          <Box as="li" mb={2}>ドローンを利用した撮影に関する企画</Box>
          <Box as="li" mb={2}>出版物、写真、画像等のデザイン、制作及び編集、広告業</Box>
          <Box as="li" mb={2}>労働者派遣事業</Box>
          <Box as="li" mb={2}>インターネット、その他の通信を利用した通信販売業</Box>
          <Box as="li" mb={2}>各種イベント企画、運営及びサポート業務</Box>
        </Box>
      </PageSection>
      <PageSection title="沿革">
        <Box as="ul" listStyleType="none" p={0} m={0}>
          {['2019/11 加納代表 1名でstart', '2019/12 staff合計 4名', '2020/12 staff合計 11名', '2021/1 staff合計 17名', '2021/6 staff合計 22名', '2022/3 staff合計 35名 内)正社員3名', '2023/9 staff合計 48名', '2024/7 staff合計 56名', '2024/11 合同会社から株式会社へ組織変更', '2024/11 staff合計 72名'].map((item) => (
            <Box as="li" key={item} py="0.35rem" borderBottom="1px solid" borderColor="gray.200">
              {item}
            </Box>
          ))}
        </Box>
      </PageSection>
    </Box>
  )
}
