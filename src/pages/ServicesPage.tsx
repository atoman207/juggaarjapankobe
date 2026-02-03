import { Link as RouterLink } from 'react-router-dom'
import styles from './ServicesPage.module.css'
import serviceImg from '@/assets/image/service.jpg'
import service1Img from '@/assets/image/service1.webp'
import service2Img from '@/assets/image/sevice2.webp'
import service3Img from '@/assets/image/service3.webp'

const SERVICES = [
  {
    id: 'cargo',
    title: '貨物軽自動車運送事業',
    description: '神戸市を中心に、迅速で丁寧な軽貨物配送サービスを提供しております。経験豊富なドライバーが、お客様の大切なお荷物を安全・確実にお届けします。',
    image: service1Img,
  },
  {
    id: 'charter',
    title: 'チャーター便',
    description: 'お客様のご要望に合わせた専用車両での配送サービスです。緊急配送や大量配送にも柔軟に対応いたします。',
    image: service2Img,
  },
  {
    id: 'posting',
    title: 'ポスティング事業',
    description: '地域密着型の誠実なポスティングサービス。1枚1枚を丁寧に、確実に配布いたします。顧客様リピート率95%の実績があります。',
    image: service3Img,
  },
]

const PRICING = [
  { area: '神戸市内', weight: '〜20kg', price: '¥2,000〜' },
  { area: '神戸市内', weight: '20〜50kg', price: '¥3,000〜' },
  { area: '兵庫県内', weight: '〜20kg', price: '¥3,500〜' },
  { area: '兵庫県内', weight: '20〜50kg', price: '¥5,000〜' },
]

export function ServicesPage(): React.ReactElement {
  return (
    <div className={styles.page}>
      {/* Page Header */}
      <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
        <div className={styles.pageHeaderOverlay}>
          <div className={styles.container}>
            <h1 className={styles.pageTitle}>サービス</h1>
            <p className={styles.pageSubtitle}>SERVICE</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>信頼できる集荷と配送のプロとして神戸市で高評価を獲得</h2>
          </div>
          <div className={styles.servicesGrid}>
            {SERVICES.map((service) => (
              <article key={service.id} className={styles.serviceCard}>
                <img src={service.image} alt={service.title} className={styles.serviceImage} />
                <div className={styles.serviceBody}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>料金表</h2>
            <p className={styles.sectionSubtitle}>※料金は目安です。詳細はお問い合わせください。</p>
          </div>
          <div className={styles.pricingTable}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>配送エリア</th>
                  <th>重量</th>
                  <th>料金</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((item, index) => (
                  <tr key={index}>
                    <td>{item.area}</td>
                    <td>{item.weight}</td>
                    <td className={styles.price}>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>お気軽にお問い合わせください</h2>
          <p className={styles.ctaText}>
            配送・ポスティングに関するご相談、お見積りは無料です。
          </p>
          <div className={styles.ctaButtons}>
            <RouterLink to="/contact" className={styles.ctaButton}>
              お問い合わせ
            </RouterLink>
            <a href="tel:0789870902" className={styles.ctaButtonOutline}>
              078-987-0902
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
