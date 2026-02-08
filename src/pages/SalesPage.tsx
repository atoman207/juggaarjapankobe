import styles from './CharterPricePage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function SalesPage(): React.ReactElement {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>営業　セールススタッフ</h1>
                        <p className={styles.pageSubtitle}>SALES STAFF</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.introBlock}>
                        <h2 className={styles.mainHeading}>
                            営業・セールススタッフ募集
                        </h2>
                        <p>
                            配送サービス、ポスティングサービスなど、当社のサービスを企業・店舗様にご提案していただく営業スタッフを募集しております。
                        </p>
                    </div>

                    {/* Job Details Table */}
                    <div className={styles.pricingSection}>
                        <h3 className={styles.sectionTitle}>募集要項</h3>
                        <div className={styles.tableWrapper}>
                            <table className={styles.priceTable}>
                                <tbody>
                                    <tr>
                                        <th>雇用形態</th>
                                        <td>正社員・契約社員</td>
                                    </tr>
                                    <tr>
                                        <th>仕事内容</th>
                                        <td>・配送サービスの営業・提案<br />・ポスティングサービスの営業・提案<br />・既存顧客のフォロー<br />・新規顧客の開拓</td>
                                    </tr>
                                    <tr>
                                        <th>勤務地</th>
                                        <td>神戸市北区（本社）<br />兵庫県内の営業活動</td>
                                    </tr>
                                    <tr>
                                        <th>勤務時間</th>
                                        <td>9:00～18:00（実働8時間）<br />※残業あり</td>
                                    </tr>
                                    <tr>
                                        <th>給与</th>
                                        <td>月給 230,000円～400,000円<br />※経験・能力による<br />※インセンティブあり</td>
                                    </tr>
                                    <tr>
                                        <th>応募資格</th>
                                        <td>・普通自動車免許<br />・営業経験者優遇<br />・未経験者も歓迎</td>
                                    </tr>
                                    <tr>
                                        <th>休日</th>
                                        <td>日曜日、祝日<br />※週休2日制</td>
                                    </tr>
                                    <tr>
                                        <th>待遇・福利厚生</th>
                                        <td>・社会保険完備<br />・交通費支給<br />・営業車貸与<br />・インセンティブ制度<br />・昇給・昇格あり</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Appeal Points */}
                    <div className={styles.featuresSection}>
                        <h3 className={styles.sectionTitle}>こんな方を歓迎します！</h3>
                        <ul className={styles.featureList}>
                            <li>コミュニケーション能力が高い方</li>
                            <li>チャレンジ精神旺盛な方</li>
                            <li>成果を上げて収入を増やしたい方</li>
                            <li>地域に貢献したい方</li>
                            <li>チームで目標達成を目指せる方</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SalesPage
