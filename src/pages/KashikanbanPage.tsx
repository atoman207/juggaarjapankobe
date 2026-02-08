import styles from './CharterPricePage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function KashikanbanPage(): React.ReactElement {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>貸し看板料金表</h1>
                        <p className={styles.pageSubtitle}>SIGNBOARD RENTAL PRICE</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.introBlock}>
                        <h2 className={styles.mainHeading}>
                            貸し看板サービスのご案内
                        </h2>
                        <p>
                            神戸市周辺で貸し看板サービスを提供しております。店舗の宣伝や集客にご活用いただけます。設置場所や看板のサイズなど、お客様のご要望に合わせてご提案いたします。
                        </p>
                    </div>

                    {/* Pricing Table */}
                    <div className={styles.pricingSection}>
                        <h3 className={styles.sectionTitle}>料金表</h3>
                        <div className={styles.tableWrapper}>
                            <table className={styles.priceTable}>
                                <thead>
                                    <tr>
                                        <th>看板サイズ</th>
                                        <th>月額料金（税込）</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>小型看板（A1サイズ程度）</td>
                                        <td>¥5,500～</td>
                                    </tr>
                                    <tr>
                                        <td>中型看板（B1サイズ程度）</td>
                                        <td>¥8,800～</td>
                                    </tr>
                                    <tr>
                                        <td>大型看板（A0サイズ程度）</td>
                                        <td>¥11,000～</td>
                                    </tr>
                                    <tr>
                                        <td>特大看板</td>
                                        <td>要相談</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className={styles.note}>
                            ※上記料金は目安です。設置場所、看板の種類、契約期間などにより変動いたします。<br />
                            ※設置工事費用は別途お見積りいたします。<br />
                            ※長期契約の場合、割引が適用される場合がございます。<br />
                            ※詳細な料金については、お気軽にお問い合わせください。
                        </p>
                    </div>

                    {/* Features */}
                    <div className={styles.featuresSection}>
                        <h3 className={styles.sectionTitle}>サービスの特徴</h3>
                        <ul className={styles.featureList}>
                            <li>神戸市周辺の好立地に設置可能</li>
                            <li>デザイン制作から設置まで一貫してサポート</li>
                            <li>定期的なメンテナンス付き</li>
                            <li>短期・長期どちらの契約にも対応</li>
                            <li>看板の種類や設置場所をカスタマイズ可能</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default KashikanbanPage
