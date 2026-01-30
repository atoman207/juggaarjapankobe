import { Link as RouterLink } from 'react-router-dom'
import { Box, Heading, Link } from '@chakra-ui/react'
import { PageSection } from '@/components/PageSection'

export function RecruitmentPage(): JSX.Element {
  return (
    <Box as="article" w="100%">
      <Heading as="h1" fontSize="1.75rem" fontWeight={700} mb={6} color="gray.900">
        採用情報
      </Heading>
      <PageSection title="誠実な方・やる気のある方を業務委託パートナーとして歓迎しています">
        <p>RECRUIT</p>
      </PageSection>
      <PageSection title="募集職種">
        <Box as="ul" m="0.5rem 0 1rem" pl={6}>
          <Box as="li" mb={2}>
            <Link as={RouterLink} to="/recruitment/driver" color="blue.600" _hover={{ textDecoration: 'underline' }}>
              3ヶ月ごとにボーナスが !? 神戸市北区 軽貨物 ドライバー
            </Link>
          </Box>
          <Box as="li" mb={2}>
            <Link as={RouterLink} to="/recruitment/flex" color="blue.600" _hover={{ textDecoration: 'underline' }}>
              週１のみでも！午前中のみでも！午後のみでも！ok！
            </Link>
          </Box>
          <Box as="li" mb={2}>
            <Link as={RouterLink} to="/recruitment/posting-staff" color="blue.600" _hover={{ textDecoration: 'underline' }}>
              ポスティングスタッフ【兵庫県全域】
            </Link>
          </Box>
          <Box as="li" mb={2}>
            <Link as={RouterLink} to="/recruitment/sales" color="blue.600" _hover={{ textDecoration: 'underline' }}>
              営業セールススタッフ
            </Link>
          </Box>
          <Box as="li" mb={2}>
            <Link as={RouterLink} to="/recruitment/continuation" color="blue.600" _hover={{ textDecoration: 'underline' }}>
              継続確認セールススタッフ
            </Link>
          </Box>
        </Box>
      </PageSection>
      <PageSection title="宅配ドライバー、ポスティングスタッフ">
        <p>神戸市北区・三田市在住の方！！</p>
      </PageSection>
      <PageSection title="夕方～の宅配ドライバー、チャーター便">
        <p>在宅率の高い時間帯で効率よく稼ぎませんか？？ 採用情報へ</p>
      </PageSection>
    </Box>
  )
}
