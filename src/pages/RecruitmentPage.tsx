import { Link as RouterLink } from 'react-router-dom'
import styles from './RecruitmentPage.module.css'
import re1Img from '@/assets/image/re1.webp'
import re2Img from '@/assets/image/re2.webp'

const JOB_LISTINGS = [
  {
    id: 'driver',
    title: '宅配ドライバー',
    location: '神戸市北区・三田市',
    type: '業務委託・正社員',
    description: '軽貨物配送のドライバーを募集しています。未経験者歓迎、研修制度充実！',
    image: re1Img,
  },
  {
    id: 'evening-driver',
    title: '夕方〜宅配ドライバー',
    location: '神戸市全域',
    type: '業務委託',
    description: '在宅率の高い時間帯で効率よく稼ぎませんか？夕方からの配送業務です。',
    image: re2Img,
  },
  {
    id: 'posting',
    title: 'ポスティングスタッフ',
    location: '神戸市北区・須磨区・垂水区',
    type: 'アルバイト・業務委託',
    description: 'チラシ配布のお仕事です。週1日からOK！自分のペースで働けます。',
    image: null,
  },
  {
    id: 'sales',
    title: '営業スタッフ',
    location: '神戸市',
    type: '正社員',
    description: '法人営業のお仕事です。既存顧客フォローと新規開拓をお願いします。',
    image: null,
  },
]

const BENEFITS = [
  { icon: '💰', title: '高収入可能', description: '頑張った分だけ収入UP！' },
  { icon: '🕐', title: '柔軟なシフト', description: '週1日からOK、自分のペースで' },
  { icon: '🚗', title: '車両貸出あり', description: '車両がなくてもスタート可能' },
  { icon: '📚', title: '充実の研修', description: '未経験でも安心のサポート' },
]

export function RecruitmentPage(): React.ReactElement {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>採用情報</h1>
          <p className={styles.pageSubtitle}>RECRUIT</p>
        </div>
      </div>

      {/* Benefits Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Juggaar Japanで働くメリット</h2>
          </div>
          <div className={styles.benefitsGrid}>
            {BENEFITS.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>募集職種</h2>
          </div>
          <div className={styles.jobGrid}>
            {JOB_LISTINGS.map((job) => (
              <article key={job.id} className={styles.jobCard}>
                {job.image && (
                  <img src={job.image} alt={job.title} className={styles.jobImage} />
                )}
                <div className={styles.jobBody}>
                  <span className={styles.jobType}>{job.type}</span>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <p className={styles.jobLocation}>📍 {job.location}</p>
                  <p className={styles.jobDescription}>{job.description}</p>
                  <RouterLink to="/entry" className={styles.jobButton}>
                    エントリーする
                  </RouterLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>一緒に働きませんか？</h2>
          <p className={styles.ctaText}>
            誠実な方・やる気のある方を業務委託パートナーとして歓迎しています
          </p>
          <RouterLink to="/entry" className={styles.ctaButton}>
            エントリーフォームへ
          </RouterLink>
        </div>
      </section>
    </div>
  )
}

export default RecruitmentPage
