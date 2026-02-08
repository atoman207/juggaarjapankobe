import styles from './CharterPricePage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function PostingServicePage(): React.ReactElement {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>ポスティング　サービス内容</h1>
                        <p className={styles.pageSubtitle}>POSTING SERVICE</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.introBlock}>
                        <h2 className={styles.mainHeading}>
                            効果的なポスティングサービスで集客をサポート
                        </h2>
                        <p>
                            神戸市・兵庫県全域でポスティングサービスを提供しております。チラシ・フライヤーの配布を通じて、お客様のビジネスの集客をサポートいたします。
                        </p>
                    </div>

                    {/* Service Features */}
                    <div className={styles.featuresSection}>
                        <h3 className={styles.sectionTitle}>サービスの特徴</h3>
                        <ul className={styles.featureList}>
                            <li>兵庫県全域に対応した広範囲なポスティングエリア</li>
                            <li>集合住宅・戸建て住宅のターゲット別配布</li>
                            <li>配布状況のレポート提出で透明性を確保</li>
                            <li>GPSによる配布エリアの確認が可能</li>
                            <li>少部数から大部数まで柔軟に対応</li>
                        </ul>
                    </div>

                    {/* Service Details */}
                    <div className={styles.pricingSection}>
                        <h3 className={styles.sectionTitle}>サービス詳細</h3>
                        <div className={styles.tableWrapper}>
                            <table className={styles.priceTable}>
                                <tbody>
                                    <tr>
                                        <th>対応エリア</th>
                                        <td>神戸市、兵庫県全域</td>
                                    </tr>
                                    <tr>
                                        <th>配布物</th>
                                        <td>チラシ、フライヤー、パンフレット、冊子など</td>
                                    </tr>
                                    <tr>
                                        <th>配布方法</th>
                                        <td>ポスト投函</td>
                                    </tr>
                                    <tr>
                                        <th>配布報告</th>
                                        <td>配布完了後、報告書を提出</td>
                                    </tr>
                                    <tr>
                                        <th>最小配布部数</th>
                                        <td>1,000部～</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className={styles.featuresSection}>
                        <h3 className={styles.sectionTitle}>選ばれる理由</h3>
                        <div className={styles.reasonsGrid}>
                            <div className={styles.reasonCard}>
                                <h4>高い配布精度</h4>
                                <p>経験豊富なスタッフが、確実に配布いたします。</p>
                            </div>
                            <div className={styles.reasonCard}>
                                <h4>柔軟な対応</h4>
                                <p>配布エリアや配布日時など、ご要望に柔軟に対応いたします。</p>
                            </div>
                            <div className={styles.reasonCard}>
                                <h4>コストパフォーマンス</h4>
                                <p>リーズナブルな料金設定で、効果的な集客をサポートします。</p>
                            </div>
                            <div className={styles.reasonCard}>
                                <h4>信頼の実績</h4>
                                <p>多くの企業様・店舗様にご利用いただいております。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PostingServicePage
