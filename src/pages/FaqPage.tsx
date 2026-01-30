import { Box, Heading } from '@chakra-ui/react'
import { PageSection } from '@/components/PageSection'

export function FaqPage(): JSX.Element {
  return (
    <Box as="article" w="100%">
      <Heading as="h1" fontSize="1.75rem" fontWeight={700} mb={6} color="gray.900">
        よくある質問
      </Heading>
      <PageSection title="サービスや求人に関する様々なご質問に回答しております">
        <p>Q&A</p>
      </PageSection>
      <PageSection title="給料日・報酬日はいつですか？">
        <p>月末〆翌月25日ご入金 ⇒ 正社員<br />月末〆翌々月5日ご入金 ⇒ 業務委託</p>
      </PageSection>
      <PageSection title="マイカー・バイク通勤は可能ですか？">
        <p>はい、マイカー・バイクでの通勤も可能です。駐車場完備。</p>
      </PageSection>
      <PageSection title="未経験ですが大丈夫ですか？">
        <p>はい、大丈夫です。ベテラン社員より新人研修を行っておりますのでご安心ください！</p>
      </PageSection>
      <PageSection title="雇用形態は選べますか？">
        <p>はい。正社員・アルバイト・個人事業主からご自身のワークスタイルに合った形態をお選びください。※正社員は枠数に限りあり</p>
      </PageSection>
    </Box>
  )
}
