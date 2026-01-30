import { Box, Heading } from '@chakra-ui/react'
import { PageSection } from '@/components/PageSection'

export function ServicesPage(): JSX.Element {
  return (
    <Box as="article" w="100%">
      <Heading as="h1" fontSize="1.75rem" fontWeight={700} mb={6} color="gray.900">
        サービス・料金表
      </Heading>
      <PageSection title="誠実な配送・配布サービスが地元KOBEで好評です">
        <p>地道な努力で信頼を積み重ねております。</p>
      </PageSection>
      <PageSection title="地道な努力で信頼を積み重ねております（SERVICE 01）">
        <p>ドライバーをはじめ、スタッフ一人ひとりが自分に任された仕事に自覚と責任を持ち、創業以来長きに亘って、お客様からの信頼を積み重ねてまいりました。現状に甘んじることなく、今後もクオリティーの高いサービスを継続し、お客様に笑顔をお届けできるよう、尽力いたします。</p>
      </PageSection>
      <PageSection title="お客様が求めるサービスを形にしております（SERVICE 02）">
        <p>お客様のお声を真摯にお伺いし、画一的なご提案をするのではなく、お客様が求めるものをサービスとして形にしております。難しくニッチなご要望にもできる限り真摯にお答えするよう、心掛けております。</p>
      </PageSection>
      <PageSection title="依頼して良かったと喜ばれるように尽力（SERVICE 03）">
        <p>お客様から「運びたい荷物・配ってほしいチラシがあった時に、地元で実績が豊富なプロが見つかって良かった」というようなご納得のお言葉を多数いただいております。</p>
      </PageSection>
      <PageSection title="料金表・サービス内容">
        <Box as="ul" m="0.5rem 0 1rem" pl={6}>
          <Box as="li" mb={2}>チャーター便（軽貨物貸切便）料金表</Box>
          <Box as="li" mb={2}>ポスティングサービス内容</Box>
          <Box as="li" mb={2}>ポスティング料金表</Box>
          <Box as="li" mb={2}>貸し看板料金表</Box>
        </Box>
        <p>詳細はお問い合わせください。</p>
      </PageSection>
    </Box>
  )
}
