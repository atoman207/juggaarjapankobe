import React, { useState } from 'react'
import { Box, Dialog, Heading, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { Hero } from '@/components/Hero'
import { PageSection } from '@/components/PageSection'
import { SectionTitle } from '@/components/SectionTitle'
import { CtaButton } from '@/components/CtaButton'
import conceptStyles from '@/assets/css/ConceptSection.module.css'
import serviceStyles from '@/assets/css/ServiceSection.module.css'
import mv1 from '@/assets/image/mv1.jpg'
import mv2 from '@/assets/image/mv2.jpg'
import mv3 from '@/assets/image/mv3.jpg'
import serviceImg from '@/assets/image/service.jpg'
import service1Img from '@/assets/image/service1.webp'
import service2Img from '@/assets/image/sevice2.webp'
import service3Img from '@/assets/image/service3.webp'
import se4Img from '@/assets/image/se4.webp'
import se5Img from '@/assets/image/se5.webp'
import re1Img from '@/assets/image/re1.webp'
import re2Img from '@/assets/image/re2.webp'

const HERO_IMAGES = [mv1, mv2, mv3]
const HERO_INTERVAL_MS = 5000

type RecruitImageKey = 're1' | 're2' | null

export function HomePage(): React.ReactElement {
  const [imageModal, setImageModal] = useState<RecruitImageKey>(null)

  return (
    <>
      <Hero
        images={HERO_IMAGES}
        intervalMs={HERO_INTERVAL_MS}
        overlayTitle="誠実なサービスが地元神戸で好評です"
        overlaySubtitle="ご期待にお応えするようドライバー・配布スタッフが尽力"
      />
      <Box as="article" w="100%" maxW="1200px" mx="auto" px={6} py={8}>
        <PageSection id="line" title="公式LINEご登録のお願い">
          <Box as="p" mb={2}>
            下記URLクリック ⇩
          </Box>
          <Link
            href="https://lin.ee/4K8fXOCc8"
            target="_blank"
            rel="noopener noreferrer"
            color="#5BA3C6"
          >
            https://lin.ee/4K8fXOCc8
          </Link>
          <Box as="p" mt={2}>
            追加後、アナタのフルネームを送信 ⇩ 直接、当社Staffとやり取りStart！！
          </Box>
        </PageSection>

        <Box id="concept" as="section" className={conceptStyles.conceptSection}>
          <SectionTitle>CONCEPT</SectionTitle>
          <div className={conceptStyles.conceptContent}>
            <ul className={conceptStyles.conceptList}>
              <li>貨物軽自動車運送事業</li>
              <li>ポスティング事業</li>
              <li>BPO事業（事業開発・営業支援）</li>
              <li>ドローン空撮</li>
              <li>グラフィックデザイン・WEBデザイン制作事業</li>
            </ul>
            <p className={conceptStyles.conceptQuote}>
              弊社のサービスを通じて人々の
              <br />
              幸福と生活の向上に関われる企業でありたい
            </p>
            <div className={conceptStyles.conceptBody}>
              <p>
                地元神戸市にお住まいの方から、｢運びたい荷物・配ってほしいチラシなどがある場合に、頼んでみよう｣とお問い合わせいただけるような配送・配布のプロフェッショナルを目指してスタッフ一同が日々の努力を重ねております。
              </p>
              <p>
                スタッフ一人ひとりが、自分に任された仕事に誠実に責任を持って取り組みお客様のお声を真摯に反映したサービスを目指しております。
                株式会社Juggaar Japanでは、貨物軽自動車運送事業の他、ポスティング事業、BPO事業（事業開発・営業支援）、ドローン空撮、グラフィックデザイン・WEBデザイン制作事業、を行っています。
              </p>
              <p>
                過労やパンデミックが社会問題として注目される今企業の労働時間短縮や会社のあり方を再検討される動きが急加速中です。
                その流れからスタッフの労働時間を短縮しようと業務をアウトソーシングする企業が急増しています。
                現代の経済状況の中で生き残るために委託元の会社と互いに協力し合いwinwinの関係を築くことが大切だと考えております。
              </p>
            </div>
          </div>
        </Box>
      </Box>

      <Box id="service" as="section" className={serviceStyles.sectionWrapper} mb={12}>
          <Box
            className={serviceStyles.banner}
            style={{ backgroundImage: `url(${serviceImg})` }}
            w="100%"
          >
            <div className={serviceStyles.overlay}>
              <SectionTitle variant="light">SERVICE</SectionTitle>
              <p className={serviceStyles.subtitle}>
                信頼できる集荷と配送のプロとして神戸市で高評価を獲得
              </p>
            </div>
          </Box>
          <div className={serviceStyles.contentArea}>
            <h2 className={serviceStyles.sectionHeading}>
              誠実な配送・配布サービスが地元KOBEで好評です
            </h2>
            <div className={serviceStyles.cardsGrid}>
              <article className={serviceStyles.card}>
                <img src={service1Img} alt="配送スタッフが荷物を積み下ろし" className={serviceStyles.cardImage} />
                <div className={serviceStyles.cardBody}>
                  <h3 className={serviceStyles.cardTitle}>地道な努力で信頼を積み重ねております</h3>
                  <span className={serviceStyles.cardSubtitle}>SERVICE 01</span>
                  <p className={serviceStyles.cardDescription}>
                    ドライバーをはじめ、スタッフ一人ひとりが自分に任された仕事に自覚と責任を持ち、創業以来長きに亘って、お客様からの信頼を積み重ねてまいりました。
                    現状に甘んじることなく、今後もクオリティーの高いサービスを継続し、お客様に笑顔をお届けできるよう、尽力いたします。
                  </p>
                </div>
              </article>
              <article className={serviceStyles.card}>
                <img src={service2Img} alt="スタッフがお客様に荷物をお渡し" className={serviceStyles.cardImage} />
                <div className={serviceStyles.cardBody}>
                  <h3 className={serviceStyles.cardTitle}>お客様が求めるサービスを形にしております</h3>
                  <span className={serviceStyles.cardSubtitle}>SERVICE 02</span>
                  <p className={serviceStyles.cardDescription}>
                    お客様のお声を真摯にお伺いし、画一的なご提案をするのではなく、お客様が求めるものをサービスとして形にしております。
                    難しくニッチなご要望にもできる限り真摯にお答えするよう、心掛けております。
                    お客様からは、ご満足のお声を多数いただいております。
                  </p>
                </div>
              </article>
              <article className={serviceStyles.card}>
                <img src={service3Img} alt="スタッフ会議の様子" className={serviceStyles.cardImage} />
                <div className={serviceStyles.cardBody}>
                  <h3 className={serviceStyles.cardTitle}>依頼して良かったと喜ばれるように尽力</h3>
                  <span className={serviceStyles.cardSubtitle}>SERVICE 03</span>
                  <p className={serviceStyles.cardDescription}>
                    お客様から｢運びたい荷物・配ってほしいチラシがあった時に、地元で実績が豊富なプロが見つかって良かった｣というようなご納得のお言葉を多数いただいております。
                    今後も、物流の分野をはじめ様々な分野で実績を積み重ね、お客様からお喜びいただけるよう、スタッフ一同が尽力してまいります。
                  </p>
                </div>
              </article>
            </div>
            <Box maxW="1200px" mx="auto" px={6}>
              <div style={{ textAlign: "center", margin: "2.5rem 0" }}>
                <h2 style={{ fontWeight: 700, fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                  誠実なポスティングサービスが地元KOBEで好評です
                </h2>
                <div style={{
                  fontWeight: 600,
                  color: "#5BA3C6",
                  fontSize: "1.1rem",
                  marginBottom: "1.5rem"
                }}>
                  顧客様リピート率95％
                </div>
                <p style={{ maxWidth: 520, margin: "0 auto 1.3rem", lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                  弊社の理念でもある誠実さをいかなる場合も貫き 1枚1枚を誠実に・丁寧に・確実に配布いたします。
                  <br /><br />
                  配布の際は取引先様の社員になった気持ちで反響のでるポスティングを徹底致します。
                  <br /><br />
                  神戸市　ポスティング　業者　なら迷わずジュガールジャパンまで
                  <br />
                  
                </p>
                <Box
                  display="flex"
                  flexDirection={{ base: 'column', md: 'row' }}
                  gap={4}
                  mt={6}
                  mb={4}
                  alignItems="stretch"
                >
                  <Box flex={1} minW={0}>
                    <img
                      src={se5Img}
                      alt=""
                      style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                    />
                  </Box>
                  <Box flex={1} minW={0}>
                    <img
                      src={se4Img}
                      alt=""
                      style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
                    />
                  </Box>
                </Box>
              </div>
            </Box>
            

          </div>
        </Box>

      <Box as="article" w="100%" maxW="1200px" mx="auto" px={6} py={8}>
        <PageSection id="recruit" title="RECRUIT">
          <Heading as="h3" size="sm" fontWeight={600} mb={3}>
            誠実な方・やる気のある方を業務委託パートナーとして歓迎しています
          </Heading>
          {/* Box containing two images: PC = flexbox, mobile = block */}
          <Box
            mb={4}
            display={{ base: 'block', md: 'flex' }}
            flexDirection={{ md: 'row' }}
            alignItems={{ md: 'flex-start' }}
            gap={{ md: 4 }}
          >
            {/* First image + text below */}
            <Box flex={{ md: 1 }} minW={{ md: 0 }} mb={{ base: 4, md: 0 }}>
              <button
                type="button"
                onClick={() => setImageModal('re1')}
                style={{
                  display: 'block',
                  width: '100%',
                  cursor: 'pointer',
                  padding: 0,
                  border: 'none',
                  background: 'none',
                }}
              >
                <img src={re1Img} alt="宅配ドライバー・ポスティングスタッフ募集" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </button>
              <Box as="p" mt={2} mb={0} lineHeight={1.6}>
                宅配ドライバー、ポスティングスタッフ
                <br />
                神戸市北区・三田市在住の方!!
              </Box>
            </Box>
            {/* Second image + text below */}
            <Box flex={{ md: 1 }} minW={{ md: 0 }}>
              <button
                type="button"
                onClick={() => setImageModal('re2')}
                style={{
                  display: 'block',
                  width: '100%',
                  cursor: 'pointer',
                  padding: 0,
                  border: 'none',
                  background: 'none',
                }}
              >
                <img src={re2Img} alt="夕方～宅配ドライバー・チャーター便募集" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </button>
              <Box as="p" mt={2} mb={0} lineHeight={1.6}>
                夕方〜の宅配ドライバー、チャーター便
                <br />
                在宅率の高い時間帯で効率よく稼ぎませんか??
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" mt={4}>
            <CtaButton to="/recruitment">採用情報へ</CtaButton>
          </Box>
        </PageSection>

        <PageSection id="staff" title="STAFF">
          <Box as="p" mb={2}>
            知識と経験の豊富なスタッフが地域密着型のスタッフがお客様のために尽力
          </Box>
          <Link asChild>
            <RouterLink to="/staff" style={{ color: 'var(--sky-blue-dark, #5BA3C6)' }}>スタッフへ</RouterLink>
          </Link>
        </PageSection>

        <PageSection id="qa" title="Q&A">
          <Box as="p" mb={2}>給料日・報酬日はいつですか？ — 月末〆翌月25日ご入金（正社員）／翌々月5日（業務委託）</Box>
          <Box as="p" mb={2}>マイカー・バイク通勤は可能ですか？ — はい、駐車場完備。</Box>
          <Box as="p" mb={2}>未経験ですが大丈夫ですか？ — はい、新人研修を行っております。</Box>
          <Box as="p" mb={2}>雇用形態は選べますか？ — 正社員・アルバイト・個人事業主からお選びください。</Box>
          <Link asChild>
            <RouterLink to="/faq" style={{ color: 'var(--sky-blue-dark, #5BA3C6)' }}>よくある質問へ</RouterLink>
          </Link>
        </PageSection>

        <PageSection id="company" title="COMPANY">
          <Box as="p" mb={2}>
            地域社会への貢献を目指す神戸市の運送会社、地域密着型のポスティングをメインで、兵庫県全域を対象とした軽貨物宅配サービスやポスティングを行っております。
          </Box>
          <Link asChild>
            <RouterLink to="/company" style={{ color: 'var(--sky-blue-dark, #5BA3C6)' }}>会社概要へ</RouterLink>
          </Link>
        </PageSection>

        <PageSection id="about" title="ABOUT US">
          <Heading as="h3" size="sm" fontWeight={600} mb={3}>
            荷物と共にお客様の思いも配送するサービスが神戸市で好評です
          </Heading>
          <Box as="p" mb={2}>
            お客様にお喜びいただける物流のサービスとはどのようなものか、スタッフ一同が真摯に考えております。お客様からお預かりしたお荷物を単に目的地まで運ぶのではなく、荷物と一緒にお客様の気持ちまで届けられるよう、日々の努力を重ねております。
          </Box>
          <Heading as="h3" size="sm" fontWeight={600} mb={3}>
            堅実な配送サービスが地元の神戸市で高く評価されております
          </Heading>
          <Box as="p" mb={2}>
            軽貨物輸送のお仕事をお任せするなら、地元で実績が豊富なプロフェッショナルに依頼したい、というお客様のお声にしっかりお答えしております。
          </Box>
        </PageSection>

        <PageSection id="blog" title="BLOG">
          <Box as="p" mb={3}>企業としての様々な理念をお伝えしております</Box>
          <Box as="ul" listStyleType="none" pl={0}>
            <Box as="li" mb={1}>2025/01/28 神戸電鉄 五社駅から徒歩1分！新しいスタイルのテレマーケティングスペース</Box>
            <Box as="li" mb={1}>2025/01/27 新たに話題のキッチンカースペースをご用意しました！</Box>
            <Box as="li" mb={1}>2025/01/27 軽貨物の仕事をお探しの方に朗報です！</Box>
            <Box as="li" mb={1}>2025/01/24 新しいスタートを切る絶好のチャンスです！</Box>
          </Box>
          <Link asChild>
            <RouterLink to="/blog" style={{ color: 'var(--sky-blue-dark, #5BA3C6)' }}>ブログへ</RouterLink>
          </Link>
        </PageSection>

        <PageSection id="media" title="MEDIA">
          <Box as="p" mb={3}>
            日々の生活に役立つ配送のヒントや、物流業界の最新動向、地域密着型サービスの魅力をわかりやすくお伝えします。
          </Box>
          <Box as="ul" listStyleType="none" pl={0}>
            <Box as="li" mb={1}>2025/12/30 神戸市兵庫区で軽貨物の求人を探す方必見！未経験から高収入も可能な仕事と応募ポイント徹底解説</Box>
            <Box as="li" mb={1}>2025/12/24 神戸市灘区で軽貨物求人！未経験から始めるドライバーの仕事探し</Box>
            <Box as="li" mb={1}>2025/12/18 軽貨物求人おすすめの会社比較と選び方最新ガイド</Box>
            <Box as="li" mb={1}>2025/12/12 軽貨物引越し求人の仕事内容と収入相場！未経験から始めるドライバー仕事の探し方</Box>
            <Box as="li" mb={1}>2025/12/06 軽貨物の求人で日払いの仕事で稼ぐ！未経験OKのドライバー募集と収入・応募条件を解説</Box>
          </Box>
          <Link asChild>
            <RouterLink to="/media" style={{ color: 'var(--sky-blue-dark, #5BA3C6)' }}>メディアへ</RouterLink>
          </Link>
        </PageSection>
      </Box>

      <Dialog.Root
        open={imageModal !== null}
        onOpenChange={(details) => { if (!details.open) setImageModal(null) }}
        size="full"
        placement="center"
      >
        <Dialog.Backdrop
          backdropFilter="blur(8px)"
          bg="blackAlpha.600"
        />
        <Dialog.Positioner>
          <Dialog.Content
            maxW="100vw"
            maxH="100vh"
            bg="transparent"
            boxShadow="none"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={8}
          >
            <Dialog.CloseTrigger
              position="absolute"
              top={4}
              right={4}
              zIndex={10}
              fontSize="2rem"
              color="white"
              bg="blackAlpha.600"
              borderRadius="full"
              w={10}
              h={10}
              display="flex"
              alignItems="center"
              justifyContent="center"
              _hover={{ bg: 'blackAlpha.800' }}
              aria-label="閉じる"
            >
              ×
            </Dialog.CloseTrigger>
            {imageModal === 're1' && (
              <img
                src={re1Img}
                alt="宅配ドライバー・ポスティングスタッフ募集"
                style={{
                  maxWidth: '100%',
                  maxHeight: 'calc(100vh - 4rem)',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            )}
            {imageModal === 're2' && (
              <img
                src={re2Img}
                alt="夕方～宅配ドライバー・チャーター便募集"
                style={{
                  maxWidth: '100%',
                  maxHeight: 'calc(100vh - 4rem)',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    </>
  )
}
