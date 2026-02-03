import styles from './StaffPage.module.css'

const STAFF_MEMBERS = [
  {
    id: 1,
    name: '山田太郎',
    role: '代表取締役',
    message: 'お客様の期待に応えるサービスを提供することを常に心がけています。',
  },
  {
    id: 2,
    name: '佐藤花子',
    role: 'ドライバーマネージャー',
    message: 'チームワークを大切に、お客様に笑顔をお届けします。',
  },
  {
    id: 3,
    name: '鈴木一郎',
    role: 'シニアドライバー',
    message: '安全第一で、丁寧な配送を心がけています。',
  },
  {
    id: 4,
    name: '田中美咲',
    role: 'ポスティングリーダー',
    message: '一枚一枚、心を込めて配布しています。',
  },
  {
    id: 5,
    name: '高橋健太',
    role: 'ドライバー',
    message: '迅速かつ丁寧な配送で、お客様の信頼に応えます。',
  },
  {
    id: 6,
    name: '伊藤さくら',
    role: 'カスタマーサポート',
    message: 'お客様のお声を大切に、サービス向上に努めています。',
  },
]

export function StaffPage(): React.ReactElement {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>スタッフ紹介</h1>
          <p className={styles.pageSubtitle}>STAFF</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>私たちがお客様のために尽力いたします</h2>
          </div>
          <div className={styles.staffGrid}>
            {STAFF_MEMBERS.map((staff) => (
              <div key={staff.id} className={styles.staffCard}>
                <div className={styles.staffAvatar}>
                  {staff.name.charAt(0)}
                </div>
                <h3 className={styles.staffName}>{staff.name}</h3>
                <span className={styles.staffRole}>{staff.role}</span>
                <p className={styles.staffMessage}>{staff.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default StaffPage
