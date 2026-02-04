import styles from './CharterPricePage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function CharterPricePage(): React.ReactElement {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>チャーター便（軽貨物貸切便）料金表</h1>
                        <p className={styles.pageSubtitle}>CHARTER PRICE</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.introBlock}>
                        <h2 className={styles.mainHeading}>
                            チャーター便（軽貨物貸切便）の料金について
                        </h2>
                        <p>
                            神戸市を中心に軽貨物のチャーター便サービスを提供しております。お客様のニーズに合わせた柔軟な配送プランをご用意しておりますので、お気軽にお問い合わせください。
                        </p>
                    </div>

                    {/* Pricing Table */}
                    <div className={styles.pricingSection}>
                        <h3 className={styles.sectionTitle}>料金表</h3>
                        <div className={styles.tableWrapper}>
                            <table className={styles.priceTable}>
                                <thead>
                                    <tr>
                                        <th>距離</th>
                                        <th>料金（税込）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>10km以内</td>
                                        <td>¥3,300～</td>
                                    </tr>
                                    <tr>
                                        <td>20km以内</td>
                                        <td>¥4,400～</td>
                                    </tr>
                                    <tr>
                                        <td>30km以内</td>
                                        <td>¥5,500～</td>
                                    </tr>
                                    <tr>
                                        <td>40km以内</td>
                                        <td>¥6,600～</td>
                                    </tr>
                                    <tr>
                                        <td>50km以内</td>
                                        <td>¥7,700～</td>
                                    </tr>
                                    <tr>
                                        <td>50km以上</td>
                                        <td>要相談</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className={styles.note}>
                            ※上記料金は目安です。荷物の量、配送時間、配送先などにより変動いたします。<br />
                            ※詳細な料金については、お気軽にお問い合わせください。
                        </p>
                    </div>

                    {/* Features */}
                    <div className={styles.featuresSection}>
                        <h3 className={styles.sectionTitle}>チャーター便の特徴</h3>
                        <ul className={styles.featureList}>
                            <li>お客様専用の貸切便で安全・確実な配送</li>
                            <li>時間指定・当日配送にも柔軟に対応</li>
                            <li>荷物の量に合わせた最適なプラン</li>
                            <li>神戸市周辺エリアを中心にスピーディーな配送</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CharterPricePage
