import { useState, useEffect, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { HeroCarousel } from '@/components/HeroCarousel'
import { LineBanner } from '@/components/LineBanner'
import { PrimaryLinkButton } from '@/components/PrimaryLinkButton'
import styles from './HomePage.module.css'

// Import images
import mv1 from '@/assets/image/mv1.jpg'
import mv2 from '@/assets/image/mv2.jpg'
import mv3 from '@/assets/image/mv3.jpg'
import service01 from '@/assets/image/service01.jpg'
import service02 from '@/assets/image/service02.jpg'
import service03 from '@/assets/image/service03.jpg'
import posting01 from '@/assets/image/posting01.jpg'
import posting02 from '@/assets/image/posting02.jpg'
import recruit01 from '@/assets/image/recruit01.jpg'
import recruit02 from '@/assets/image/recruit02.jpg'
import companyImg from '@/assets/image/company.jpg'
import staff01 from '@/assets/image/staff01.jpg'
import staff02 from '@/assets/image/staff02.jpg'
import parallax2 from '@/assets/image/parallax2.jpg'

const HERO_IMAGES = [mv1, mv2, mv3]
const RECRUIT_IMAGES = [recruit01, recruit02]
const POSTING_COUNT_TARGET = 95
const POSTING_COUNT_DURATION_MS = 2000

const HOME_QA_OPEN_DEFAULT = new Set([0])

export function HomePage(): React.ReactElement {
  const [postingCount, setPostingCount] = useState(1)
  const [recruitModalIndex, setRecruitModalIndex] = useState<number | null>(null)
  const [aboutImageModalSrc, setAboutImageModalSrc] = useState<string | null>(null)
  const [homeQaOpen, setHomeQaOpen] = useState<Set<number>>(HOME_QA_OPEN_DEFAULT)
  const postingSectionRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)

  const toggleHomeQa = (index: number) => {
    setHomeQaOpen((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  useEffect(() => {
    if (recruitModalIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setRecruitModalIndex(null)
      if (e.key === 'ArrowLeft') setRecruitModalIndex((prev) => (prev === 0 ? RECRUIT_IMAGES.length - 1 : prev! - 1))
      if (e.key === 'ArrowRight') setRecruitModalIndex((prev) => (prev === RECRUIT_IMAGES.length - 1 ? 0 : prev! + 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [recruitModalIndex])

  useEffect(() => {
    if (aboutImageModalSrc === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAboutImageModalSrc(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [aboutImageModalSrc])

  useEffect(() => {
    const el = postingSectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (hasAnimated.current) return
        if (!entries[0]?.isIntersecting) return
        hasAnimated.current = true
        const start = 1
        const end = POSTING_COUNT_TARGET
        const startTime = performance.now()
        const tick = (now: number) => {
          const elapsed = now - startTime
          const progress = Math.min(elapsed / POSTING_COUNT_DURATION_MS, 1)
          const easeOutQuart = 1 - (1 - progress) ** 4
          const value = Math.round(start + (end - start) * easeOutQuart)
          setPostingCount(value)
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.page}>
      {/* Hero Carousel */}
      <HeroCarousel
        images={HERO_IMAGES}
        title={'誠実なサービスが地元神戸で好評です'}
        subtitle="ご期待にお応えするようドライバー・配布スタッフが尽力"
        scrollTarget="#content-start"
      />

      {/* LINE Registration Banner */}
      <LineBanner />

      {/* ============================================ */}
      {/* CONCEPT Section */}
      {/* ============================================ */}
      <section className={styles.conceptSection} id="content-start">
        <div className={`${styles.container} ${styles.conceptContainer}`}>
          <span className="englishSectionLabel">CONCEPT</span>
          <ul className={styles.conceptServicesList}>
            <li>貨物軽自動車運送事業</li>
            <li>ポスティング事業</li>
            <li>BPO事業（事業開発・営業支援）</li>
            <li>ドローン空撮</li>
            <li>グラフィックデザイン・WEBデザイン制作事業</li>
          </ul>
          <h2 className={styles.conceptTitle}>
            弊社のサービスを通じて人々の幸福と生活の向上に関われる企業でありたい
          </h2>
          <div className={styles.conceptContent}>
            <p>
              地元神戸市にお住まいの方から、｢運びたい荷物・配ってほしいチラシなどがある場合に、頼んでみよう｣とお問い合わせいただけるような配送・配布のプロフェッショナルを目指してスタッフ一同が日々の努力を重ねております。
            </p>
            <p>
              スタッフ一人ひとりが、自分に任された仕事に誠実に責任を持って取り組みお客様のお声を真摯に反映したサービスを目指しております。<br />
              株式会社Juggaar Japanでは、貨物軽自動車運送事業の他、ポスティング事業、BPO事業（事業開発・営業支援）、ドローン空撮、グラフィックデザイン・WEBデザイン制作事業、を行っています。
            </p>
            <p>
              過労やパンデミックが社会問題として注目される今企業の労働時間短縮や会社のあり方を再検討される動きが急加速中です。<br />
              その流れからスタッフの労働時間を短縮しようと業務をアウトソーシングする企業が急増しています。<br />
              現代の経済状況の中で生き残るために委託元の会社と互いに協力し合いwinwinの関係を築くことが大切だと考えております。
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SERVICE Header with Parallax Background */}
      {/* ============================================ */}
      <section className={styles.serviceParallaxSection}>
        <div className={styles.serviceParallaxOverlay}>
          <div className={styles.container}>
            <span className="englishSectionLabel englishSectionLabelLight">SERVICE</span>
            <h2 className={`${styles.sectionTitle} ${styles.titleLight}`}>信頼できる集荷と配送のプロとして神戸市で高評価を獲得</h2>
          </div>
        </div>
      </section>


      {/* ============================================ */}
      {/* SERVICE Detail Cards with Images */}
      {/* ============================================ */}
      <section className={styles.serviceCardsSection}>
        <div className={styles.container}>
          <h2 className={styles.serviceCardsSectionTitle}>誠実な配送・配布サービスが地元KOBEで好評です</h2>
          <div className={styles.serviceCards}>
            {/* Service Card 01 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImageTop}>
                <img src={service01} alt="地道な努力で信頼を積み重ねております" />
              </div>
              <div className={styles.serviceCardBody}>
                <h3 className={styles.serviceCardTitle}>地道な努力で信頼を積み重ねております</h3>
                <span className={styles.serviceCardNumber}>SERVICE 01</span>
                <p className={styles.serviceCardText}>
                  ドライバーをはじめ、スタッフ一人ひとりが自分に任された仕事に自覚と責任を持ち、創業以来長きに亘って、お客様からの信頼を積み重ねてまいりました。<br /><br />
                  現状に甘んじることなく、今後もクオリティーの高いサービスを継続し、お客様に笑顔をお届けできるよう、尽力いたします。
                </p>
              </div>
            </div>

            {/* Service Card 02 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImageTop}>
                <img src={service02} alt="お客様が求めるサービスを形にしております" />
              </div>
              <div className={styles.serviceCardBody}>
                <h3 className={styles.serviceCardTitle}>お客様が求めるサービスを形にしております</h3>
                <span className={styles.serviceCardNumber}>SERVICE 02</span>
                <p className={styles.serviceCardText}>
                  お客様のお声を真摯にお伺いし、画一的なご提案をするのではなく、お客様が求めるものをサービスとして形にしております。<br /><br />
                  難しくニッチなご要望にもできる限り真摯にお答えするよう、心掛けております。<br />
                  お客様からは、ご満足のお声を多数いただいております。
                </p>
              </div>
            </div>

            {/* Service Card 03 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImageTop}>
                <img src={service03} alt="依頼して良かったと喜ばれるように尽力" />
              </div>
              <div className={styles.serviceCardBody}>
                <h3 className={styles.serviceCardTitle}>依頼して良かったと喜ばれるように尽力</h3>
                <span className={styles.serviceCardNumber}>SERVICE 03</span>
                <p className={styles.serviceCardText}>
                  お客様から｢運びたい荷物・配ってほしいチラシがあった時に、地元で実績が豊富なプロが見つかって良かった｣というようなご納得のお言葉を多数いただいております。<br /><br />
                  今後も、物流の分野をはじめ様々な分野で実績を積み重ね、お客様からお喜びいただけるよう、スタッフ一同が尽力してまいります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* POSTING Section - Single Column Stacked */}
      {/* ============================================ */}
      <section ref={postingSectionRef} className={styles.postingSection}>
        <div className={styles.container}>
          {/* Text Content - style matching second image: blue left border, stat line, grey separator */}
          <div className={styles.postingText}>
            <h2 className={styles.postingTitle}>
              誠実なポスティングサービスが地元KOBEで好評です
            </h2>
            <p className={styles.postingStatLine}>
              顧客様リピート率<span className={styles.postingStatNumber}>{postingCount}</span>％
            </p>
            <hr className={styles.postingSeparator} />
            <p className={styles.postingDescription}>
              <span className={styles.postingLine}>弊社の理念でもある誠実さをいかなる場合も貫き</span>
              <span className={styles.postingLine}>1枚1枚を誠実に・丁寧に・確実に配布いたします。</span>
            </p>
            <p className={styles.postingDescription}>
              <span className={styles.postingLine}>配布の際は取引先様の社員になった気持ちで</span>
              <span className={styles.postingLine}>反響のでるポスティングを徹底致します。</span>
            </p>
            <p className={styles.postingTagline}>
              <span className={styles.postingLine}>神戸市　ポスティング　業者　なら迷わず</span>
              <span className={styles.postingLine}>ジュガールジャパンまで</span>
            </p>
          </div>

          {/* Flyer Images - Stacked Below Text */}
          <div className={styles.postingFlyers}>
            <img src={posting01} alt="ポスティング案内チラシ" className={styles.postingFlyerImg} />
            <img src={posting02} alt="ポスティング実績・反響" className={styles.postingFlyerImg} />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* RECRUIT Section */}
      {/* ============================================ */}
      <section className={styles.recruitSection}>
        <div className={styles.container}>
          <span className="englishSectionLabel">RECRUIT</span>
          <h2 className={styles.sectionTitle}>
            誠実な方・やる気のある方を<br />
            業務委託パートナーとして歓迎しています
          </h2>
          <div className={styles.recruitCards}>
            <div className={styles.recruitCard}>
              <button
                type="button"
                className={styles.recruitCardImageWrap}
                onClick={() => setRecruitModalIndex(0)}
                aria-label="画像を拡大"
              >
                <img src={recruit01} alt="宅配ドライバー、ポスティングスタッフ" />
              </button>
              <div className={styles.recruitCardCaption}>
                <h3>宅配ドライバー、ポスティングスタッフ</h3>
                <p>神戸市北区・三田市在住の方！！</p>
              </div>
            </div>
            <div className={styles.recruitCard}>
              <button
                type="button"
                className={styles.recruitCardImageWrap}
                onClick={() => setRecruitModalIndex(1)}
                aria-label="画像を拡大"
              >
                <img src={recruit02} alt="夕方～の宅配ドライバー、チャーター便" />
              </button>
              <div className={styles.recruitCardCaption}>
                <h3>夕方～の宅配ドライバー、チャーター便</h3>
                <p>在宅率の高い時間帯で効率よく稼ぎませんか？？</p>
              </div>
            </div>
          </div>

          {recruitModalIndex !== null && (
            <div
              className={styles.recruitModalBackdrop}
              onClick={() => setRecruitModalIndex(null)}
              role="dialog"
              aria-modal="true"
              aria-label="採用画像"
            >
              <div className={styles.recruitModalContent} onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className={styles.recruitModalClose}
                  onClick={() => setRecruitModalIndex(null)}
                  aria-label="閉じる"
                >
                  ×
                </button>
                <button
                  type="button"
                  className={styles.recruitModalArrowLeft}
                  onClick={(e) => { e.stopPropagation(); setRecruitModalIndex((prev) => (prev === null || prev === 0 ? RECRUIT_IMAGES.length - 1 : prev - 1)); }}
                  aria-label="前の画像"
                >
                  ‹
                </button>
                <img
                  src={RECRUIT_IMAGES[recruitModalIndex]}
                  alt={recruitModalIndex === 0 ? '宅配ドライバー、ポスティングスタッフ' : '夕方～の宅配ドライバー、チャーター便'}
                  className={styles.recruitModalImage}
                />
                <button
                  type="button"
                  className={styles.recruitModalArrowRight}
                  onClick={(e) => { e.stopPropagation(); setRecruitModalIndex((prev) => (prev === null || prev === RECRUIT_IMAGES.length - 1 ? 0 : prev + 1)); }}
                  aria-label="次の画像"
                >
                  ›
                </button>
              </div>
            </div>
          )}
          <RouterLink to="/recruit" className={styles.recruitLink}>
            採用情報へ
          </RouterLink>
        </div>
      </section>

      {/* ============================================ */}
      {/* STAFF Section - with parallax background */}
      {/* ============================================ */}
      <section className={styles.staffSection}>
        <div className={styles.staffOverlay}>
          <div className={styles.container}>
            <span className="englishSectionLabel englishSectionLabelLight">STAFF</span>
            <h2 className={`${styles.sectionTitle} ${styles.titleLight}`}>熱意あるスタッフが物流や営業の現場で活躍しております</h2>
            <p className={styles.staffDescription}>
              知識と経験の豊富なスタッフが地域密着型のスタッフがお客様のために尽力
            </p>
            <PrimaryLinkButton to="/staff">スタッフへ</PrimaryLinkButton>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Q&A Section - First 3 FAQs + link to FAQ page */}
      {/* ============================================ */}
      <section className={styles.homeQaSection}>
        <div className={styles.container}>
          <span className="englishSectionLabel">Q&A</span>
          <p className={styles.homeQaSubtitle}>
            サービスや求人に関する様々なご質問に回答しております
          </p>
          <div className={styles.homeQaList}>
            <div className={styles.homeQaItem}>
              <button
                type="button"
                className={styles.homeQaQuestionBtn}
                onClick={() => toggleHomeQa(0)}
                aria-expanded={homeQaOpen.has(0)}
                aria-controls="home-qa-answer-0"
                id="home-qa-question-0"
              >
                <span className={styles.homeQaIcon}>Q</span>
                <span className={styles.homeQaText}>給料日・報酬日はいつですか？</span>
              </button>
              {homeQaOpen.has(0) && (
                <div id="home-qa-answer-0" role="region" aria-labelledby="home-qa-question-0" className={`${styles.homeQaRow} ${styles.homeQaAnswerRow}`}>
                  <span className={styles.homeQaIcon}>A</span>
                  <p className={styles.homeQaAnswerText}>
                    月末〆翌月25日ご入金<br />⇒正社員<br /><br />月末〆翌々月5日ご入金<br />⇒業務委託
                  </p>
                </div>
              )}
            </div>
            <div className={styles.homeQaItem}>
              <button
                type="button"
                className={styles.homeQaQuestionBtn}
                onClick={() => toggleHomeQa(1)}
                aria-expanded={homeQaOpen.has(1)}
                aria-controls="home-qa-answer-1"
                id="home-qa-question-1"
              >
                <span className={styles.homeQaIcon}>Q</span>
                <span className={styles.homeQaText}>マイカー・バイク通勤は可能ですか？</span>
              </button>
              {homeQaOpen.has(1) && (
                <div id="home-qa-answer-1" role="region" aria-labelledby="home-qa-question-1" className={`${styles.homeQaRow} ${styles.homeQaAnswerRow}`}>
                  <span className={styles.homeQaIcon}>A</span>
                  <p className={styles.homeQaAnswerText}>
                    はい、マイカー・バイクでの通勤も可能です。駐車場完備。
                  </p>
                </div>
              )}
            </div>
            <div className={styles.homeQaItem}>
              <button
                type="button"
                className={styles.homeQaQuestionBtn}
                onClick={() => toggleHomeQa(2)}
                aria-expanded={homeQaOpen.has(2)}
                aria-controls="home-qa-answer-2"
                id="home-qa-question-2"
              >
                <span className={styles.homeQaIcon}>Q</span>
                <span className={styles.homeQaText}>未経験ですが大丈夫ですか？</span>
              </button>
              {homeQaOpen.has(2) && (
                <div id="home-qa-answer-2" role="region" aria-labelledby="home-qa-question-2" className={`${styles.homeQaRow} ${styles.homeQaAnswerRow}`}>
                  <span className={styles.homeQaIcon}>A</span>
                  <p className={styles.homeQaAnswerText}>
                    はい、大丈夫です。ベテラン社員より新人研修を行っておりますのでご安心ください！
                  </p>
                </div>
              )}
            </div>
          </div>
          <RouterLink to="/faq" className={styles.homeQaLinkBtn}>
            もっと見る
          </RouterLink>
        </div>
      </section>

      {/* ============================================ */}
      {/* COMPANY Section */}
      {/* ============================================ */}
      <section className={styles.companySection}>
        <div className={styles.container}>
          <span className="englishSectionLabel">COMPANY</span>
          <h2 className={styles.sectionTitle}>地元に根差した丁寧な物流サービスに力を入れております</h2>
          <div className={styles.companyImageRow}>
            <img src={companyImg} alt="株式会社Juggaar Japan" className={styles.companyImageImg} />
          </div>
          <div className={styles.companyDetails}>
            <p className={styles.companyNameSub}>株式会社Juggaar Japan　ジュガールジャパン</p>
              <dl className={styles.companyIntroList}>
                <div className={styles.companyIntroRow}>
                  <dt className={styles.companyIntroLabel}>電話番号</dt>
                  <dd className={styles.companyIntroValue}><a href="tel:0789870902" className={styles.companyPhone}>078-987-0902</a></dd>
                </div>
                <div className={styles.companyIntroRow}>
                  <dt className={styles.companyIntroLabel}>所在地</dt>
                  <dd className={styles.companyIntroValue}>〒651-1312<br />兵庫県神戸市北区有野町有野７９８−４</dd>
                </div>
                <div className={styles.companyIntroRow}>
                  <dt className={styles.companyIntroLabel}>営業所</dt>
                  <dd className={styles.companyIntroValue}>神戸市北区八多町<br />加古川市平岡町</dd>
                </div>
                <div className={styles.companyIntroRow}>
                  <dt className={styles.companyIntroLabel}>営 業 時 間</dt>
                  <dd className={styles.companyIntroValue}>10:00 〜 19:00</dd>
                </div>
                <div className={styles.companyIntroRow}>
                  <dt className={styles.companyIntroLabel}>定 休 日</dt>
                  <dd className={styles.companyIntroValue}>日曜日・祝日</dd>
                </div>
                <div className={styles.companyIntroRow}>
                  <dt className={styles.companyIntroLabel}>ク レ ジ ッ ト カ ー ド</dt>
                  <dd className={styles.companyIntroValue}>VISA、Mastercard、JCB、American Express、Diners Club</dd>
                </div>
                <div className={styles.companyIntroRow}>
                  <dt className={styles.companyIntroLabel}>代 表 取 締 役 / C E O</dt>
                  <dd className={styles.companyIntroValue}>加納 侑青</dd>
                </div>
                <div className={styles.companyIntroRow}>
                  <dt className={styles.companyIntroLabel}>設 立</dt>
                  <dd className={styles.companyIntroValue}>（令和元年） 2019年 11月 7日</dd>
                </div>
                <div className={styles.companyIntroRow}>
                  <dt className={styles.companyIntroLabel}>資 本 金</dt>
                  <dd className={styles.companyIntroValue}>1,170,000円</dd>
                </div>
                <hr className={styles.companyIntroSep} />
                <div className={styles.companyIntroRow}>
                  <dt className={styles.companyIntroLabel}>事 業 内 容</dt>
                  <dd className={styles.companyIntroValue}>
                    貨物軽自動車運送業<br />
                    BPO事業（事業開発・営業支援）<br />
                    営業、経営及び販売に関するコンサルティング業<br />
                    不動産の保有、売買、賃貸借、仲介及び管理<br />
                    ドローンを利用した撮影に関する企画<br />
                    出版物、写真、画像等のデザイン、制作及び編集、広告業<br />
                    制作及び販売<br />
                    労働者派遣事業<br />
                    インターネット、その他の通信を利用した通信販売業<br />
                    各種イベント企画、運営及びサポート業務<br />
                    前各号に付帯する一切の業務
                  </dd>
                </div>
                <hr className={styles.companyIntroSep} />
                <div className={styles.companyIntroRow}>
                  <dt className={styles.companyIntroLabel}>取 引 先 金 融 機 関</dt>
                  <dd className={styles.companyIntroValue}>三井住友銀行　藤原台支店<br />中兵庫信用金庫　神戸北支店<br />神戸信用金庫　中央支店</dd>
                </div>
                <hr className={styles.companyIntroSep} />
                <div className={styles.companyIntroRow}>
                  <dt className={styles.companyIntroLabel}>沿 革</dt>
                  <dd className={styles.companyIntroValue}>
                    2019 /11 加納代表 1名でstart<br />
                    <span className={styles.companyIntroDots}>････････････････････････････････････････</span><br />
                    2019 /12 staff合計 4名<br />
                    <span className={styles.companyIntroDots}>････････････････････････････････････････</span><br />
                    2020 /12 staff合計 11名<br />
                    <span className={styles.companyIntroDots}>････････････････････････････････････････</span><br />
                    2021 / 1 staff合計 17名<br />
                    <span className={styles.companyIntroDots}>････････････････････････････････････････</span><br />
                    2021 / 6 staff合計 22名<br />
                    <span className={styles.companyIntroDots}>････････････････････････････････････････</span><br />
                    2022 / 3 staff合計 35名　内)正社員3名<br />
                    <span className={styles.companyIntroDots}>････････････････････････････････････････</span><br />
                    2023 / 9 staff合計 48名<br />
                    <span className={styles.companyIntroDots}>････････････････････････････････････････</span><br />
                    2024 / 7 staff合計 56名<br />
                    <span className={styles.companyIntroDots}>････････････････････････････････････････</span><br />
                    2024 /11 合同会社から株式会社へ組織変更<br />
                    <span className={styles.companyIntroDots}>････････････････････････････････････････</span><br />
                    2024 /11 staff合計 72名
                  </dd>
                </div>
              </dl>
          </div>
        </div>
        <div className={styles.companyMapWrap}>
          <iframe
            title="株式会社Juggaar Japan 所在地"
            src="https://www.google.com/maps?q=Arino-798-4+Arinocho,+Kita+Ward,+Kobe,+Hyogo+651-1312&output=embed&t=k"
            className={styles.companyMapIframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className={styles.container}>
          <div className={styles.companyButtonWrap}>
            <PrimaryLinkButton to="/company">会社概要へ</PrimaryLinkButton>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ABOUT US Section */}
      {/* ============================================ */}
      <section className={styles.aboutSection} id="main">
        <div className={styles.aboutSectionHeader}>
          <span className={styles.aboutSectionHeaderLabel}>ABOUT US</span>
          <hr className={styles.aboutSectionHeaderLine} />
          <h2 className={styles.aboutSectionHeaderTitle}>幅広い配送サービスをメインに拠点を置く神戸市の方から好評です</h2>
        </div>
        <div className={styles.aboutGrid}>
          {/* Top row: image left, text right */}
          <div className={styles.aboutCellImage} onClick={() => setAboutImageModalSrc(staff01)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setAboutImageModalSrc(staff01)} aria-label="画像を拡大">
            <img src={staff01} alt="荷物と共にお客様の思いも配送するサービスが神戸市で好評です" />
          </div>
          <div className={styles.aboutCellText}>
            <h3 className={styles.aboutCellTitle}>荷物と共にお客様の思いも配送するサービスが神戸市で好評です</h3>
            <p className={styles.aboutCellParagraph}>
              お客様にお喜びいただける物流のサービスとはどのようなものか、スタッフ一同が真摯に考えております。
            </p>
            <p className={styles.aboutCellParagraph}>
              お客様からお預かりしたお荷物を単に目的地まで運ぶのではなく、荷物と一緒にお客様の気持ちまで目的地まで届けられるよう、ドライバーをはじめスタッフ一同が日々の努力を重ねております。
            </p>
            <p className={styles.aboutCellParagraph}>
              これまで、大手の企業様と提携して様々なお仕事をいただくなど、地域に根差したサービスを展開してまいりましたが、現状に満足することなく、今後もクオリティーの高いサービスを継続できるよう、尽力してまいります。
            </p>
            <p className={styles.aboutCellParagraph}>
              何か運びたい物がある場合に、それがどのような物でも、責任を持って目的地までお届けできるようなサービスを目指しております。
            </p>
            <p className={styles.aboutCellParagraph}>
              サービスのクオリティーでお客様からお喜びいただけるよう、スタッフの教育にも力を入れております。
              サービスのクオリティーアップを目指して、新たなスタッフの募集にも力を入れておりますので、軽貨物輸送のお仕事にご興味がありましたら、担当者までお気軽にお問い合わせください。
            </p>
            <p className={styles.aboutCellParagraph}>
              若手とベテランが協力し合い、一人ひとりが能力や個性を活かして、地元でドライバーとして輝いております。
            </p>
          </div>
          {/* Bottom row: text left, image right */}
          <div className={styles.aboutCellText}>
            <h3 className={styles.aboutCellTitle}>堅実な配送サービスが地元の神戸市で高く評価されております</h3>
            <p className={styles.aboutCellParagraph}>
              軽貨物輸送のお仕事をお任せするなら、地元で実績が豊富なプロフェッショナルに依頼したい、というようなお客様のお声にしっかりお答えしております。
            </p>
            <p className={styles.aboutCellParagraph}>
              スタッフ一人ひとりの努力が、お客様にご満足いただけるような、クオリティーの高いサービスに繋がっております。
              大手の企業様からお仕事をいただくなど、拠点を置く地域で着実に実績を積み重ねておりますが、現状に甘んじることなく、今後もクオリティーの高いサービスを継続できるよう、スタッフ一同が更なる努力を重ねてまいります。
            </p>
            <p className={styles.aboutCellParagraph}>
              何か運びたい軽貨物がありましたら、どのようなものでも一度ご相談ください。
              難しくニッチなご要望にも、可能な限りフレキシブルに対応できるよう、これまで培ってきたノウハウを活かして尽力いたします。
            </p>
            <p className={styles.aboutCellParagraph}>
              また、お客様のご要望にしっかりとお応えしていくためには、新たなスタッフの力が必要です。
              物流に関わるお仕事をお任せするドライバーを正社員として積極的に募集しております。
              お客様からお預かりした大切なお荷物を目的地まで運ぶ仕事で、地域社会に貢献したいとお考えの方は、ぜひお気軽に担当者までお問い合わせください。
            </p>
          </div>
          <div className={styles.aboutCellImage} onClick={() => setAboutImageModalSrc(staff02)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setAboutImageModalSrc(staff02)} aria-label="画像を拡大">
            <img src={staff02} alt="堅実な配送サービスが地元の神戸市で高く評価されております" />
          </div>
        </div>

        {aboutImageModalSrc && (
          <div
            className={styles.aboutModalBackdrop}
            onClick={() => setAboutImageModalSrc(null)}
            role="dialog"
            aria-modal="true"
            aria-label="画像"
          >
            <div className={styles.aboutModalContent} onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className={styles.aboutModalClose}
                onClick={() => setAboutImageModalSrc(null)}
                aria-label="閉じる"
              >
                ×
              </button>
              <img src={aboutImageModalSrc} alt="" className={styles.aboutModalImage} />
            </div>
          </div>
        )}
      </section>

      {/* ============================================ */}
      {/* BLOG Section - parallax background */}
      {/* ============================================ */}
      <section className={styles.blogParallaxSection} style={{ backgroundImage: `url(${parallax2})` }}>
        <div className={styles.blogParallaxOverlay} />
        <div className={styles.container}>
          <div className={styles.blogParallaxHeader}>
            <h2 className={styles.blogParallaxTitle}>BLOG</h2>
            <hr className={styles.blogParallaxLine} />
            <p className={styles.blogParallaxSubtitle}>スタッフの声と共にサービスの詳細や耳寄りな情報を更新</p>
            <p className={`${styles.blogParallaxSubtitle} ${styles.blogParallaxSubtitleSecond}`}>企業としての様々な理念をお伝えしております</p>
          </div>
          <div className={styles.blogParallaxGrid}>
            <RouterLink to="/blog" className={styles.blogParallaxCard}>
              <span className={styles.blogParallaxMeta}>&gt; 2025/01/28</span>
              <h3 className={styles.blogParallaxCardTitle}>神戸電鉄 五社駅から徒歩1分! 新しいスタイルのテレマーケティングスペース</h3>
            </RouterLink>
            <RouterLink to="/blog" className={styles.blogParallaxCard}>
              <span className={styles.blogParallaxMeta}>&gt; 2025/01/27</span>
              <h3 className={styles.blogParallaxCardTitle}>新たに話題のキッチンカースペースをご用意しました!</h3>
            </RouterLink>
            <RouterLink to="/blog" className={styles.blogParallaxCard}>
              <span className={styles.blogParallaxMeta}>&gt; 2025/01/27</span>
              <h3 className={styles.blogParallaxCardTitle}>軽貨物の仕事をお探しの方に朗報です!</h3>
            </RouterLink>
            <RouterLink to="/blog" className={styles.blogParallaxCard}>
              <span className={styles.blogParallaxMeta}>&gt; 2025/01/24</span>
              <h3 className={styles.blogParallaxCardTitle}>新しいスタートを切る絶好のチャンスです!</h3>
            </RouterLink>
          </div>
          <div className={styles.blogParallaxActions}>
            <RouterLink to="/blog" className={styles.blogParallaxButton}>&gt; ブログへ</RouterLink>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* MEDIA Section */}
      {/* ============================================ */}
      <section className={styles.mediaSection}>
        <div className={styles.container}>
          <div className={styles.mediaSectionHeader}>
            <h2 className={styles.mediaSectionTitle}>MEDIA</h2>
            <hr className={styles.mediaSectionLine} />
            <p className={styles.mediaSectionSubtitle}>配送のプロが語る生活に役立つ情報発信ページ</p>
            <p className={styles.mediaSectionDescription}>
              日々の生活に役立つ配送のヒントや、物流業界の最新動向、地域密着型サービスの魅力をわかりやすくお伝えします。
            </p>
          </div>
          <div className={styles.mediaCardsRow}>
            <RouterLink to="/media" className={styles.mediaCard}>
              <span className={styles.mediaCardMeta}>&gt; 2025/12/30</span>
              <h3 className={styles.mediaCardTitle}>神戸市兵庫区で軽貨物の求人を探す方必見!未経験から高収入も可能な仕事と応募ポイント徹底解説</h3>
            </RouterLink>
            <RouterLink to="/media" className={styles.mediaCard}>
              <span className={styles.mediaCardMeta}>&gt; 2025/12/29</span>
              <h3 className={styles.mediaCardTitle}>神戸市灘区で軽貨物求人!未経験から始めるドライバーの仕事探し</h3>
            </RouterLink>
            <RouterLink to="/media" className={styles.mediaCard}>
              <span className={styles.mediaCardMeta}>&gt; 2025/12/28</span>
              <h3 className={styles.mediaCardTitle}>軽貨物求人おすすめの会社比較と選び方最新ガイド|仕事内容や収入相場・口コミも解説</h3>
            </RouterLink>
            <RouterLink to="/media" className={styles.mediaCard}>
              <span className={styles.mediaCardMeta}>&gt; 2025/12/27</span>
              <h3 className={styles.mediaCardTitle}>軽貨物引越し求人の仕事内容と収入相場!未経験から始めるドライバー仕事の探し方と応募ポイント</h3>
            </RouterLink>
            <RouterLink to="/media" className={styles.mediaCard}>
              <span className={styles.mediaCardMeta}>&gt; 2025/12/26</span>
              <h3 className={styles.mediaCardTitle}>軽貨物の求人で日払いの仕事で稼ぐ!未経験OKのドライバー募集と収入・応募条件を解説</h3>
            </RouterLink>
          </div>
          <div className={styles.mediaSectionActions}>
            <RouterLink to="/media" className={styles.mediaSectionButton}>&gt; メディアへ</RouterLink>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Professional Column Teasers - 3 Column */}
      {/* ============================================ */}
      <section className={styles.columnTeasersSection}>
        <div className={styles.container}>
          <span className="englishSectionLabel">COLUMN</span>
          <h2 className={styles.sectionTitle}>配送のプロが語る生活に役立つ情報発信ページ</h2>
          <p className={styles.columnSubtitle}>
            日々の生活に役立つ配送のヒントや、物流業界の最新動向、地域密着型サービスの魅力をわかりやすくお伝えします。
          </p>

          <div className={styles.columnCards}>
            <RouterLink to="/column/detail/1" className={styles.columnCard}>
              <div className={styles.columnCardImage}>
                <img src={service01} alt="コラム記事1" />
              </div>
              <div className={styles.columnCardBody}>
               
                <h3 className={styles.columnCardTitle}>軽貨物配送で成功するための秘訣</h3>
                <p className={styles.columnCardExcerpt}>
                  効率的な配送ルートの組み方や、お客様とのコミュニケーションのコツをご紹介...
                </p>
                <span className={styles.columnReadMore}>もっと読む →</span>
              </div>
            </RouterLink>

            <RouterLink to="/column/detail/2" className={styles.columnCard}>
              <div className={styles.columnCardImage}>
                <img src={service02} alt="コラム記事2" />
              </div>
              <div className={styles.columnCardBody}>
                
                <h3 className={styles.columnCardTitle}>ポスティングの効果を最大化する方法</h3>
                <p className={styles.columnCardExcerpt}>
                  配布エリアの選定から、反響率を高めるタイミングまで詳しく解説...
                </p>
                <span className={styles.columnReadMore}>もっと読む →</span>
              </div>
            </RouterLink>

            <RouterLink to="/column/detail/3" className={styles.columnCard}>
              <div className={styles.columnCardImage}>
                <img src={service03} alt="コラム記事3" />
              </div>
              <div className={styles.columnCardBody}>
             
                <h3 className={styles.columnCardTitle}>地域密着型サービスの価値とは</h3>
                <p className={styles.columnCardExcerpt}>
                  神戸市で長年培ってきた信頼関係と、地域に根差したサービスの強みについて...
                </p>
                <span className={styles.columnReadMore}>もっと読む →</span>
              </div>
            </RouterLink>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Bottom Text Section */}
      {/* ============================================ */}
      <section className={styles.bottomTextSection}>
        <div className={styles.container}>
          <p className={styles.bottomText}>
            クオリティーの高い<strong>配送</strong>サービスを行い、拠点を置く<strong>神戸市</strong>を中心に高い評価をいただいております。今後もお客様のご要望にしっかりお答えできるよう、スタッフ一同が日々の努力を重ねてまいります。軽貨物輸送のプロフェッショナルとして、お客様からお預かりした様々なお荷物を目的地まで責任を持ってお運びすると同時に、お客様のお気持ちもお届けするように心掛けております。お客様からは、｢丁寧な接客も含めて、真心のこもったサービスが印象に残った｣というようなご納得のお言葉を多数いただいております。
          </p>
          <p className={styles.bottomText}>
            <RouterLink to="/">神戸市</RouterLink>で豊富な経験を積み重ねてきた軽貨物輸送のプロフェッショナルとして、大手の企業様からも多数のお仕事をお引き受けしております。お客様のご要望にしっかりとお応えできている背景には、<RouterLink to="/">配送</RouterLink>のプロフェッショナルとしての自覚を持ち、様々な現場で汗を流すスタッフ一人ひとりの人力があります。
          </p>
        </div>
      </section>
    </div>
  )
}

export default HomePage
