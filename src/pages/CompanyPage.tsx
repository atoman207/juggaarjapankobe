import styles from './CompanyPage.module.css'

const COMPANY_INFO = [
  { label: '会社名', value: '株式会社Juggaar Japan' },
  { label: '代表者', value: 'Malik Nasir' },
  { label: '所在地', value: '〒651-1221 兵庫県神戸市北区緑町7-20-10' },
  { label: '電話番号', value: '078-987-0902 / 080-7518-7910' },
  { label: '営業時間', value: '10:00〜19:00' },
  { label: '定休日', value: '日曜日' },
  { label: '事業内容', value: '貨物軽自動車運送事業、ポスティング事業、BPO事業' },
]

export function CompanyPage(): React.ReactElement {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>会社概要</h1>
          <p className={styles.pageSubtitle}>COMPANY</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.infoTable}>
            {COMPANY_INFO.map((item, index) => (
              <div key={index} className={styles.infoRow}>
                <div className={styles.infoLabel}>{item.label}</div>
                <div className={styles.infoValue}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>アクセス</h2>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              title="会社所在地"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.1234567890123!2d135.12345678901234!3d34.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA3JzI0LjQiTiAxMzXCsDA3JzI0LjQiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className={styles.accessInfo}>
            神戸電鉄 五社駅から徒歩1分
          </p>
        </div>
      </section>
    </div>
  )
}

export default CompanyPage
