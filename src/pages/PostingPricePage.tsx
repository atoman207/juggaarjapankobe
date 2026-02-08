import styles from './CharterPricePage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function PostingPricePage(): React.ReactElement {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>ポスティング　料金表</h1>
                        <p className={styles.pageSubtitle}>POSTING PRICE</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.introBlock}>
                        <h2 className={styles.mainHeading}>
                            ポスティングの料金について
                        </h2>
                        <p>
                            神戸市・兵庫県全域でのポスティングサービスの料金表です。エリアや配布部数によって料金が異なりますので、詳細はお問い合わせください。
                        </p>
                    </div>

                    {/* Pricing Table */}
                    <div className={styles.pricingSection}>
                        <h3 className={styles.sectionTitle}>エリア別料金表</h3>
                        <div className={styles.tableWrapper}>
                            <table className={styles.priceTable}>
                                <thead>
                                    <tr>
                                        <th>エリア</th>
                                        <th>単価（1枚あたり・税込）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>神戸市中央区</td>
                                        <td>¥5～</td>
                                    </tr>
                                    <tr>
                                        <td>神戸市北区</td>
                                        <td>¥4～</td>
                                    </tr>
                                    <tr>
                                        <td>神戸市東灘区</td>
                                        <td>¥5～</td>
                                    </tr>
                                    <tr>
                                        <td>神戸市灘区</td>
                                        <td>¥5～</td>
                                    </tr>
                                    <tr>
                                        <td>神戸市兵庫区</td>
                                        <td>¥5～</td>
                                    </tr>
                                    <tr>
                                        <td>神戸市長田区</td>
                                        <td>¥4～</td>
                                    </tr>
                                    <tr>
                                        <td>神戸市須磨区</td>
                                        <td>¥4～</td>
                                    </tr>
                                    <tr>
                                        <td>神戸市垂水区</td>
                                        <td>¥4～</td>
                                    </tr>
                                    <tr>
                                        <td>神戸市西区</td>
                                        <td>¥4～</td>
                                    </tr>
                                    <tr>
                                        <td>その他兵庫県内</td>
                                        <td>要相談</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className={styles.note}>
                            ※上記料金は目安です。配布部数、配布物のサイズ、配布条件などにより変動いたします。<br />
                            ※最小配布部数は1,000部からとなります。<br />
                            ※詳細な料金については、お気軽にお問い合わせください。
                        </p>
                    </div>

                    {/* Volume Discount */}
                    <div className={styles.pricingSection}>
                        <h3 className={styles.sectionTitle}>部数別割引</h3>
                        <div className={styles.tableWrapper}>
                            <table className={styles.priceTable}>
                                <thead>
                                    <tr>
                                        <th>配布部数</th>
                                        <th>割引率</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1,000～4,999部</td>
                                        <td>通常料金</td>
                                    </tr>
                                    <tr>
                                        <td>5,000～9,999部</td>
                                        <td>5% OFF</td>
                                    </tr>
                                    <tr>
                                        <td>10,000部以上</td>
                                        <td>10% OFF</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PostingPricePage
