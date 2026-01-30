import { Link as RouterLink } from 'react-router-dom'
import { Box, Flex, Link, Text } from '@chakra-ui/react'
import { NAV_ITEMS } from '@/assets/js/navigation'

const PHONE = '078-987-0902'
const LINE_URL = 'https://lin.ee/4K8fXOC8'

export function Footer(): JSX.Element {
  return (
    <Box
      as="footer"
      bg="gray.900"
      color="gray.400"
      mt="auto"
      py={8}
      px={6}
    >
      <Box maxW="1280px" mx="auto">
        <Flex
          flexWrap="wrap"
          align="center"
          gap={{ base: 2, md: 4 }}
          mb={6}
          pb={6}
          borderBottom="1px solid"
          borderColor="whiteAlpha.200"
        >
          <Link
            as="a"
            href={`tel:${PHONE.replace(/-/g, '')}`}
            color="white"
            fontSize="lg"
            fontWeight={600}
            textDecoration="none"
            _hover={{ color: 'blue.400' }}
          >
            {PHONE}
          </Link>
          <Text fontSize="sm" color="gray.500">
            [営業時間] 10:00 〜 19:00 / [定休日] 日曜日
          </Text>
          <Link
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            color="blue.400"
            fontSize="sm"
            textDecoration="none"
            _hover={{ textDecoration: 'underline' }}
          >
            お問い合わせはこちら オフィシャルサイトへ
          </Link>
        </Flex>
        <Flex as="nav" aria-label="フッターメニュー" flexWrap="wrap" gap={2} mb={6}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              as={RouterLink}
              to={item.path}
              color="gray.400"
              fontSize="sm"
              textDecoration="none"
              _hover={{ color: 'white' }}
            >
              {item.label}
            </Link>
          ))}
        </Flex>
        <Box fontSize="xs" color="gray.500">
          <Text fontWeight={600} color="gray.400" mb={1}>
            合同会社Juggaar Japan
          </Text>
          <Text m={0}>
            © {new Date().getFullYear()} 神戸市の配送は株式会社Juggaar Japan ALL
            RIGHTS RESERVED.
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
