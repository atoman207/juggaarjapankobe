import { Link as RouterLink } from 'react-router-dom'
import { HeroCarousel } from '@/components/HeroCarousel'
import { LineBanner } from '@/components/LineBanner'
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
import parallax1 from '@/assets/image/parallax1.jpg'
import serviceImg from '@/assets/image/service.jpg'

const HERO_IMAGES = [mv1, mv2, mv3]

export function HomePage(): React.ReactElement {
  return (
    <div className={styles.page}>
      {/* Hero Carousel */}
      <HeroCarousel
        images={HERO_IMAGES}
        title="誠実なサービスが地元神戸で好評です"
        subtitle="ご期待にお応えするようドライバー・配布スタッフが尽力"
      />

      {/* LINE Registration Banner */}
      <LineBanner />

      {/* ============================================ */}
      {/* CONCEPT Section */}
      {/* ============================================ */}
      <section className={styles.conceptSection}>
        <div className={styles.container}>
          <div className={styles.conceptBusinessTypes}>
            貨物軽自動車運送事業　ポスティング事業　BPO事業（事業開発・営業支援）　ドローン空撮　グラフィックデザイン・WEBデザイン制作事業
          </div>
          <span className={styles.sectionLabel}>CONCEPT</span>
          <h2 className={styles.conceptTitle}>
            弊社のサービスを通じて人々の<br />
            幸福と生活の向上に関われる企業でありたい
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
            <span className={`${styles.sectionLabel} ${styles.labelLight}`}>SERVICE</span>
            <h2 className={`${styles.sectionTitle} ${styles.titleLight}`}>信頼できる集荷と配送のプロとして神戸市で高評価を獲得</h2>
          </div>
        </div>
      </section>


      {/* ============================================ */}
      {/* SERVICE Detail Cards with Images */}
      {/* ============================================ */}
      <section className={styles.serviceCardsSection}>
        <div className={styles.container}>
          <div className={styles.serviceCards}>
            {/* Service Card 01 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImageTop}>
                <img src={service01} alt="地道な努力で信頼を積み重ねております" />
              </div>
              <div className={styles.serviceCardBody}>
                <span className={styles.serviceCardNumber}>SERVICE 01</span>
                <h3 className={styles.serviceCardTitle}>地道な努力で信頼を積み重ねております</h3>
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
                <span className={styles.serviceCardNumber}>SERVICE 02</span>
                <h3 className={styles.serviceCardTitle}>お客様が求めるサービスを形にしております</h3>
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
                <span className={styles.serviceCardNumber}>SERVICE 03</span>
                <h3 className={styles.serviceCardTitle}>依頼して良かったと喜ばれるように尽力</h3>
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
      <section className={styles.postingSection}>
        <div className={styles.container}>
          {/* Text Content */}
          <div className={styles.postingText}>
            <h2 className={styles.postingTitle}>
              誠実なポスティングサービスが地元KOBEで好評です
            </h2>
            <div className={styles.postingBadge}>
              <span className={styles.badgeLabel}>顧客様リピート率</span>
              <span className={styles.badgeValue}>95<small>％</small></span>
            </div>
            <p className={styles.postingDescription}>
              弊社の理念でもある誠実さをいかなる場合も貫き<br />
              1枚1枚を誠実に・丁寧に・確実に配布いたします。
            </p>
            <p className={styles.postingDescription}>
              配布の際は取引先様の社員になった気持ちで<br />
              反響のでるポスティングを徹底致します。
            </p>
            <p className={styles.postingTagline}>
              神戸市　ポスティング　業者　なら迷わず<br />
              ジュガールジャパンまで
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
      {/* Parallax 1 */}
      {/* ============================================ */}
      <section className={styles.parallaxSection} style={{ backgroundImage: `url(${parallax1})` }}>
        <div className={styles.parallaxOverlay} />
      </section>

      {/* ============================================ */}
      {/* RECRUIT Section */}
      {/* ============================================ */}
      <section className={styles.recruitSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>RECRUIT</span>
          <h2 className={styles.sectionTitle}>
            誠実な方・やる気のある方を<br />
            業務委託パートナーとして歓迎しています
          </h2>
          {/* Recruit Illustrated Cards - No overlay, images already have text */}
          <div className={styles.recruitCards}>
            <div className={styles.recruitCard}>
              <img src={recruit01} alt="宅配ドライバー、ポスティングスタッフ" />
              <div className={styles.recruitCardCaption}>
                <h3>宅配ドライバー、ポスティングスタッフ</h3>
                <p>神戸市北区・三田市在住の方！！</p>
              </div>
            </div>
            <div className={styles.recruitCard}>
              <img src={recruit02} alt="夕方～の宅配ドライバー、チャーター便" />
              <div className={styles.recruitCardCaption}>
                <h3>夕方～の宅配ドライバー、チャーター便</h3>
                <p>在宅率の高い時間帯で効率よく稼ぎませんか？？</p>
              </div>
            </div>
          </div>
          <RouterLink to="/recruit" className={styles.recruitLink}>
            採用情報へ
          </RouterLink>
        </div>
      </section>

      {/* ============================================ */}
      {/* Info/Blog/QA Grid - 3 Column Section */}
      {/* ============================================ */}
      <section className={styles.infoGridSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Column 1: Q&A */}
            <div className={styles.infoColumn}>
              <h3 className={styles.infoColumnTitle}>よくある質問</h3>
              <p className={styles.infoColumnLabel}>Q&A</p>
              <ul className={styles.infoList}>
                <li><RouterLink to="/faq">給料日・報酬日はいつですか？</RouterLink></li>
                <li><RouterLink to="/faq">マイカー・バイク通勤は可能ですか？</RouterLink></li>
                <li><RouterLink to="/faq">未経験ですが大丈夫ですか？</RouterLink></li>
                <li><RouterLink to="/faq">雇用形態は選べますか？</RouterLink></li>
              </ul>
              <RouterLink to="/faq" className={styles.infoViewMore}>
                VIEW MORE
              </RouterLink>
            </div>

            {/* Column 2: News & Blog */}
            <div className={styles.infoColumn}>
              <h3 className={styles.infoColumnTitle}>新着情報・ブログ</h3>
              <p className={styles.infoColumnLabel}>NEWS & BLOG</p>
              <ul className={styles.infoList}>
                <li><RouterLink to="/blog">神戸電鉄五社駅から徒歩1分！</RouterLink></li>
                <li><RouterLink to="/blog">キッチンカースペースをご用意</RouterLink></li>
                <li><RouterLink to="/blog">軽貨物の仕事をお探しの方に朗報</RouterLink></li>
              </ul>
              <RouterLink to="/blog" className={styles.infoViewMore}>
                VIEW MORE
              </RouterLink>
            </div>

            {/* Column 3: Logistics Service */}
            <div className={styles.infoColumn}>
              <h3 className={styles.infoColumnTitle}>物流サービス</h3>
              <p className={styles.infoColumnLabel}>LOGISTICS SERVICE</p>
              <ul className={styles.infoList}>
                <li><RouterLink to="/service">軽貨物配送サービス</RouterLink></li>
                <li><RouterLink to="/service">ポスティングサービス</RouterLink></li>
                <li><RouterLink to="/service">チャーター便</RouterLink></li>
                <li><RouterLink to="/service">BPO事業</RouterLink></li>
              </ul>
              <RouterLink to="/service" className={styles.infoViewMore}>
                VIEW MORE
              </RouterLink>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STAFF Section - with parallax background */}
      {/* ============================================ */}
      <section className={styles.staffSection} style={{ backgroundImage: `url(${parallax1})` }}>
        <div className={styles.staffOverlay}>
          <div className={styles.container}>
            <span className={`${styles.sectionLabel} ${styles.labelLight}`}>STAFF</span>
            <h2 className={`${styles.sectionTitle} ${styles.titleLight}`}>熱意あるスタッフが物流や営業の現場で活躍しております</h2>
            <p className={styles.staffDescription}>
              知識と経験の豊富なスタッフが地域密着型のスタッフがお客様のために尽力
            </p>
            <RouterLink to="/staff" className={styles.linkButton}>
              スタッフへ
            </RouterLink>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* COMPANY Section */}
      {/* ============================================ */}
      <section className={styles.companySection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>COMPANY</span>
          <h2 className={styles.sectionTitle}>地元に根差した丁寧な物流サービスに力を入れております</h2>
          <div className={styles.companyContent}>
            <div className={styles.companyText}>
              <p>
                地域社会への貢献を目指す神戸市の運送会社、地域密着型のポスティングをメインで、兵庫県全域を対象とした軽貨物宅配サービスやポスティングを行っております。お客様からお預かりする大切なお荷物や商品を、安全・迅速に個人宅や企業へお届けいたします。現在、軽貨物ドライバーやポスティングスタッフとしてご活躍いただける新規スタッフを募集しております。未経験から始められる求人です。
              </p>
              <div className={styles.companyInfo}>
                <h3 className={styles.companyName}>株式会社Juggaar Japan　ジュガールジャパン</h3>
                <a href="tel:0789870902" className={styles.companyPhone}>078-987-0902</a>
              </div>
              <RouterLink to="/company" className={styles.linkButton}>
                会社概要へ
              </RouterLink>
            </div>
            <div className={styles.companyImage}>
              <img src={companyImg} alt="株式会社Juggaar Japan" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ABOUT US Section */}
      {/* ============================================ */}
      <section className={styles.aboutSection} id="main">
        <div className={styles.container}>
          <span className={styles.sectionLabel}>ABOUT US</span>
          <h2 className={styles.sectionTitle}>幅広い配送サービスをメインに拠点を置く神戸市の方から好評です</h2>

          <div className={styles.aboutColumns}>
            {/* Column 1 */}
            <div className={styles.aboutColumn}>
              <div className={styles.aboutImage}>
                <img src={serviceImg} alt="荷物と共にお客様の思いも配送するサービスが神戸市で好評です" />
              </div>
              <h3 className={styles.aboutColumnTitle}>荷物と共にお客様の思いも配送するサービスが神戸市で好評です</h3>
              <p className={styles.aboutColumnText}>
                お客様にお喜びいただける物流のサービスとはどのようなものか、スタッフ一同が真摯に考えております。お客様からお預かりしたお荷物を単に目的地まで運ぶのではなく、荷物と一緒にお客様の気持ちまで目的地まで届けられるよう、ドライバーをはじめスタッフ一同が日々の努力を重ねております。
              </p>
              <p className={styles.aboutColumnText}>
                これまで、大手の企業様と提携して様々なお仕事をいただくなど、地域に根差したサービスを展開してまいりましたが、現状に満足することなく、今後もクオリティーの高いサービスを継続できるよう、尽力してまいります。
              </p>
            </div>

            {/* Column 2 */}
            <div className={styles.aboutColumn}>
              <div className={styles.aboutImage}>
                <img src={companyImg} alt="堅実な配送サービスが地元の神戸市で高く評価されております" />
              </div>
              <h3 className={styles.aboutColumnTitle}>堅実な配送サービスが地元の神戸市で高く評価されております</h3>
              <p className={styles.aboutColumnText}>
                軽貨物輸送のお仕事をお任せするなら、地元で実績が豊富なプロフェッショナルに依頼したい、というようなお客様のお声にしっかりお答えしております。スタッフ一人ひとりの努力が、お客様にご満足いただけるような、クオリティーの高いサービスに繋がっております。
              </p>
              <p className={styles.aboutColumnText}>
                大手の企業様からお仕事をいただくなど、拠点を置く地域で着実に実績を積み重ねておりますが、現状に甘んじることなく、今後もクオリティーの高いサービスを継続できるよう、スタッフ一同が更なる努力を重ねてまいります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Reviews / Testimonials Section */}
      {/* ============================================ */}
      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.reviewsGrid}>
            <RouterLink to="/concept/reviews" className={styles.reviewCard}>
              <div className={styles.reviewImage}>
                <img src={service01} alt="口コミ情報" />
              </div>
              <h3 className={styles.reviewTitle}>
                神戸市の配送･株式会社JuggaarJapanの口コミ情報
              </h3>
              <span className={styles.reviewLink}>をもっと見る　＞</span>
            </RouterLink>

            <RouterLink to="/concept/reputation" className={styles.reviewCard}>
              <div className={styles.reviewImage}>
                <img src={service02} alt="評判" />
              </div>
              <h3 className={styles.reviewTitle}>
                神戸市の配送･株式会社JuggaarJapanの評判
              </h3>
              <span className={styles.reviewLink}>をもっと見る　＞</span>
            </RouterLink>

            <RouterLink to="/concept/voice" className={styles.reviewCard}>
              <div className={styles.reviewImage}>
                <img src={service03} alt="お客様の声" />
              </div>
              <h3 className={styles.reviewTitle}>
                神戸市の配送･株式会社JuggaarJapanのお客様の声
              </h3>
              <span className={styles.reviewLink}>をもっと見る　＞</span>
            </RouterLink>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* Professional Column Teasers - 3 Column */}
      {/* ============================================ */}
      <section className={styles.columnTeasersSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>COLUMN</span>
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
                <span className={styles.columnDate}>2025.01.15</span>
                <h3 className={styles.columnCardTitle}>軽貨物配送で成功するための秘訣</h3>
                <p className={styles.columnCardExcerpt}>
                  効率的な配送ルートの組み方や、お客様とのコミュニケーションのコツをご紹介...
                </p>
                <span className={styles.columnReadMore}>READ MORE →</span>
              </div>
            </RouterLink>

            <RouterLink to="/column/detail/2" className={styles.columnCard}>
              <div className={styles.columnCardImage}>
                <img src={service02} alt="コラム記事2" />
              </div>
              <div className={styles.columnCardBody}>
                <span className={styles.columnDate}>2025.01.10</span>
                <h3 className={styles.columnCardTitle}>ポスティングの効果を最大化する方法</h3>
                <p className={styles.columnCardExcerpt}>
                  配布エリアの選定から、反響率を高めるタイミングまで詳しく解説...
                </p>
                <span className={styles.columnReadMore}>READ MORE →</span>
              </div>
            </RouterLink>

            <RouterLink to="/column/detail/3" className={styles.columnCard}>
              <div className={styles.columnCardImage}>
                <img src={service03} alt="コラム記事3" />
              </div>
              <div className={styles.columnCardBody}>
                <span className={styles.columnDate}>2025.01.05</span>
                <h3 className={styles.columnCardTitle}>地域密着型サービスの価値とは</h3>
                <p className={styles.columnCardExcerpt}>
                  神戸市で長年培ってきた信頼関係と、地域に根差したサービスの強みについて...
                </p>
                <span className={styles.columnReadMore}>READ MORE →</span>
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
