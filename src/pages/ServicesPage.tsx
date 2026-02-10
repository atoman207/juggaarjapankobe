import { Link } from 'react-router-dom'
import { PageHero } from '@/components/PageHero'
import { RelatedPostsAndTags } from '@/components/RelatedPostsAndTags'
import styles from './ServicesPage.module.css'

// Import images - using correct images from reference site
import heroImg from '@/assets/image/hero_service_ref.jpg'
import serviceSection1Img from '@/assets/image/service_section1.jpg'
import serviceSection2Img from '@/assets/image/service_section2.jpg'
import serviceSection3Img from '@/assets/image/service_section3.jpg'
import serviceSection4Img from '@/assets/image/service_section4.jpg'

export function ServicesPage() {
  return (
    <div className={styles.page}>
      <PageHero
        title="サービス・料金表"
        backgroundImage={heroImg}
        breadcrumbs={[
          { label: '神戸市の配送は株式会社Juggaar Japan', path: '/' },
          { label: 'サービス・料金表' },
        ]}
      />

      {/* Main Title Section */}
      <section className={styles.mainTitleSection}>
        <div className={styles.container}>
          <h2 className={styles.mainTitle}>
            誠実できる集荷と配送のプロとして神戸市で高評価を獲得
          </h2>
          <div className="sectionTitleUnderline" aria-hidden="true" />
        </div>
      </section>

      {/* Service Cards Section - 3 columns matching original */}
      <section className={styles.serviceCardsSection}>
        <div className={styles.container}>
          <div className={styles.serviceCardsGrid}>
            {/* Service Card 1 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImage}>
                <img src={serviceSection1Img} alt="集荷と配送" />
                <div className={styles.serviceCardBadge}>SERVICE 01</div>
              </div>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>
                  地域を拠点にして集荷と配送を行います
                </h3>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImage}>
                <img src={serviceSection2Img} alt="お客様のニーズ" />
                <div className={styles.serviceCardBadge}>SERVICE 02</div>
              </div>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>
                  お客様の求めるサービスを形にしております
                </h3>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceCardImage}>
                <img src={serviceSection3Img} alt="スタッフ" />
                <div className={styles.serviceCardBadge}>SERVICE 03</div>
              </div>
              <div className={styles.serviceCardContent}>
                <h3 className={styles.serviceCardTitle}>
                  経験して積み上げた大切な知識を身に尽力
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posting Service Section with Stats */}
      <section className={styles.postingSection}>
        <div className={styles.container}>
          <h2 className={styles.postingSectionTitle}>
            誠実なポスティングサービスが地元KOBEで好評です
          </h2>
          <p className={styles.postingSectionSubtitle}>誠実がリピート率も高い</p>
          
          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>95<span className={styles.statPercent}>%</span></div>
            </div>
          </div>

          <p className={styles.statsDescription}>
            弊社の提案できる体制改革をよりより明確化を目指させて只今！
          </p>
          <p className={styles.statsDescription}>
            1配1枚を大切に・丁寧に・慎重に配らせていただきます。
          </p>
          <p className={styles.statsDescription}>
            配布の折目は部位別の折目による正営なりて<br />
            改善的でポスティングを徹底しております。
          </p>

          <div className={styles.postingServices}>
            <p className={styles.postingServiceText}>
              神戸市　ポスティング　業者　なにわおせび
            </p>
            <p className={styles.postingServiceText}>
              ジュガールジャパンまで
            </p>
          </div>
        </div>
      </section>

      {/* Large Promotional Banner */}
      <section className={styles.promotionalBanner}>
        <div className={styles.container}>
          <div className={styles.bannerContent}>
            <img src={serviceSection4Img} alt="プロモーションバナー" className={styles.bannerImage} />
          </div>
        </div>
      </section>

      {/* Related Links Section */}
      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <div className={styles.relatedLinks}>
            <Link to="/concept" className={styles.relatedLink}>コンセプトへ</Link>
            <Link to="/company" className={styles.relatedLink}>会社概要へ</Link>
            <Link to="/recruit" className={styles.relatedLink}>採用情報へ</Link>
          </div>
        </div>
      </section>

      {/* Same Category Section */}
      <section className={styles.categorySection}>
        <div className={styles.container}>
          <h3 className={styles.categoryTitle}>
            <span className="englishSectionLabel">SAME CATEGORY</span>
            <span className="sectionTitleJapanese">同じカテゴリーのページ</span>
          </h3>
          <div className={styles.categoryGrid}>
            <Link to="/service/posting-price" className={styles.categoryCard}>
              <span>ポスティング 料金表</span>
            </Link>
            <Link to="/service/signboard" className={styles.categoryCard}>
              <span>貸し看板 料金表</span>
            </Link>
            <Link to="/service/posting" className={styles.categoryCard}>
              <span>ポスティング サービス内容</span>
            </Link>
            <Link to="/service/charter" className={styles.categoryCard}>
              <span>チャーター便（軽貨物貸切便）料金表</span>
            </Link>
          </div>
        </div>
      </section>

      <RelatedPostsAndTags />
    </div>
  )
}

export default ServicesPage
