import { Link as RouterLink } from 'react-router-dom'
import styles from './ConceptPage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function ConceptPage(): React.ReactElement {
  return (
    <div className={styles.page}>
      {/* Page Header with Background */}
      <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
        <div className={styles.pageHeaderOverlay}>
          <div className={styles.container}>
            <h1 className={styles.pageTitle}>コンセプト</h1>
            <p className={styles.pageSubtitle}>CONCEPT</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.missionBlock}>
            <h2 className={styles.missionTitle}>
              弊社のサービスを通じて人々の<br />
              幸福と生活の向上に関われる企業でありたい
            </h2>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>📦</div>
              <h3 className={styles.serviceTitle}>貨物軽自動車運送事業</h3>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>📮</div>
              <h3 className={styles.serviceTitle}>ポスティング事業</h3>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>💼</div>
              <h3 className={styles.serviceTitle}>BPO事業（事業開発・営業支援）</h3>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>🚁</div>
              <h3 className={styles.serviceTitle}>ドローン空撮</h3>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>🎨</div>
              <h3 className={styles.serviceTitle}>グラフィックデザイン・WEBデザイン制作事業</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>私たちの理念</h2>
          </div>
          
          <div className={styles.philosophyContent}>
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyIcon}>誠</div>
              <h3 className={styles.philosophyTitle}>誠実</h3>
              <p className={styles.philosophyText}>
                お客様との約束を守り、正直で誠実なサービスを提供します。
              </p>
            </div>
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyIcon}>丁</div>
              <h3 className={styles.philosophyTitle}>丁寧</h3>
              <p className={styles.philosophyText}>
                一つひとつの仕事に心を込めて、丁寧に取り組みます。
              </p>
            </div>
            <div className={styles.philosophyCard}>
              <div className={styles.philosophyIcon}>迅</div>
              <h3 className={styles.philosophyTitle}>迅速</h3>
              <p className={styles.philosophyText}>
                お客様のニーズにスピーディーに対応します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutContent}>
            <p>
              地元神戸市にお住まいの方から、｢運びたい荷物・配ってほしいチラシなどがある場合に、頼んでみよう｣とお問い合わせいただけるような配送・配布のプロフェッショナルを目指してスタッフ一同が日々の努力を重ねております。
            </p>
            <p>
              スタッフ一人ひとりが、自分に任された仕事に誠実に責任を持って取り組みお客様のお声を真摯に反映したサービスを目指しております。株式会社Juggaar Japanでは、貨物軽自動車運送事業の他、ポスティング事業、BPO事業（事業開発・営業支援）、ドローン空撮、グラフィックデザイン・WEBデザイン制作事業、を行っています。
            </p>
            <p>
              過労やパンデミックが社会問題として注目される今企業の労働時間短縮や会社のあり方を再検討される動きが急加速中です。その流れからスタッフの労働時間を短縮しようと業務をアウトソーシングする企業が急増しています。現代の経済状況の中で生き残るために委託元の会社と互いに協力し合いwinwinの関係を築くことが大切だと考えております。
            </p>
          </div>
          
          <div className={styles.ctaSection}>
            <RouterLink to="/contact" className={styles.ctaButton}>
              お問い合わせはこちら
            </RouterLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConceptPage
