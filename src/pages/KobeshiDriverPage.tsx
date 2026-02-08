import styles from './CharterPricePage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function KobeshiDriverPage(): React.ReactElement {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>3ヶ月ごとにボーナスが !?<br />神戸市北区　軽貨物　ドライバー</h1>
                        <p className={styles.pageSubtitle}>DRIVER RECRUITMENT</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.introBlock}>
                        <h2 className={styles.mainHeading}>
                            3ヶ月ごとにボーナス支給！軽貨物ドライバー募集
                        </h2>
                        <p>
                            神戸市北区を中心に、軽貨物配送ドライバーを募集しております。経験者・未経験者問わず歓迎いたします。3ヶ月ごとのボーナス制度など、充実した待遇でお迎えします。
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
                                        <td>正社員</td>
                                    </tr>
                                    <tr>
                                        <th>仕事内容</th>
                                        <td>軽貨物自動車による配送業務<br />企業や個人宅への荷物配送</td>
                                    </tr>
                                    <tr>
                                        <th>勤務地</th>
                                        <td>神戸市北区およびその周辺エリア</td>
                                    </tr>
                                    <tr>
                                        <th>勤務時間</th>
                                        <td>8:00～17:00（実働8時間）<br />※配送状況により変動あり</td>
                                    </tr>
                                    <tr>
                                        <th>給与</th>
                                        <td>月給 250,000円～350,000円<br />※経験・能力による<br />※3ヶ月ごとにボーナス支給あり</td>
                                    </tr>
                                    <tr>
                                        <th>応募資格</th>
                                        <td>・普通自動車免許（AT限定可）<br />・学歴不問<br />・未経験者歓迎</td>
                                    </tr>
                                    <tr>
                                        <th>休日</th>
                                        <td>日曜日、祝日<br />※週休2日制（シフト制）</td>
                                    </tr>
                                    <tr>
                                        <th>待遇・福利厚生</th>
                                        <td>・社会保険完備<br />・交通費支給<br />・制服貸与<br />・車両貸与<br />・ガソリン代支給<br />・ボーナス年4回（3ヶ月ごと）</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Appeal Points */}
                    <div className={styles.featuresSection}>
                        <h3 className={styles.sectionTitle}>ここがポイント！</h3>
                        <ul className={styles.featureList}>
                            <li>3ヶ月ごとにボーナス支給！頑張りをしっかり評価します</li>
                            <li>未経験者も大歓迎！先輩ドライバーが丁寧に指導します</li>
                            <li>車両・ガソリン代は会社負担！自己負担はゼロ</li>
                            <li>社会保険完備で安心して働けます</li>
                            <li>地域密着型の配送で、無理のない働き方が可能</li>
                        </ul>
                    </div>

                    {/* Application Info */}
                    <div className={styles.featuresSection}>
                        <h3 className={styles.sectionTitle}>応募方法</h3>
                        <p>
                            お電話またはエントリーフォームからご応募ください。<br />
                            まずはお気軽にお問い合わせください！
                        </p>
                        <p style={{ marginTop: '16px' }}>
                            <strong>TEL: 078-987-0902</strong><br />
                            受付時間: 平日 9:00～18:00
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default KobeshiDriverPage
