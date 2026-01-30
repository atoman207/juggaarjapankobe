import { Box, Heading } from '@chakra-ui/react'
import { PageSection } from '@/components/PageSection'

export function ConceptPage(): JSX.Element {
  return (
    <Box as="article" w="100%">
      <Heading as="h1" fontSize="1.75rem" fontWeight={700} mb={6} color="gray.900">
        コンセプト
      </Heading>
      <PageSection title="弊社のサービスを通じて人々の幸福と生活の向上に関われる企業でありたい">
        <p>地元神戸市にお住まいの方から、「運びたい荷物・配ってほしいチラシなどがある場合に、頼んでみよう」とお問い合わせいただけるような配送・配布のプロフェッショナルを目指してスタッフ一同が日々の努力を重ねております。</p>
        <p>スタッフ一人ひとりが、自分に任された仕事に誠実に責任を持って取り組みお客様のお声を真摯に反映したサービスを目指しております。株式会社Juggaar Japanでは、貨物軽自動車運送事業の他、ポスティング事業、BPO事業（事業開発・営業支援）、ドローン空撮、グラフィックデザイン・WEBデザイン制作事業、を行っています。</p>
        <p>過労やパンデミックが社会問題として注目される今、企業の労働時間短縮や会社のあり方を再検討される動きが急加速中です。その流れからスタッフの労働時間を短縮しようと業務をアウトソーシングする企業が急増しています。現代の経済状況の中で生き残るために委託元の会社と互いに協力し合いwinwinの関係を築くことが大切だと考えております。</p>
      </PageSection>
    </Box>
  )
}
