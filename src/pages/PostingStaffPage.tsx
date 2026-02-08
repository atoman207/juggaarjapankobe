import styles from './CharterPricePage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function PostingStaffPage(): React.ReactElement {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>ポスティングスタッフ【兵庫県全域】</h1>
                        <p className={styles.pageSubtitle}>POSTING STAFF</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.introBlock}>
                        <h2 className={styles.mainHeading}>
                            兵庫県全域でポスティングスタッフ募集中！
                        </h2>
                        <p>
                            チラシやフライヤーのポスティング業務を担当していただくスタッフを募集しております。週1日～、短時間からOK！自分のペースで働けます。
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
                                        <td>アルバイト・パート</td>
                                    </tr>
                                    <tr>
                                        <th>仕事内容</th>
                                        <td>チラシ・フライヤーのポスティング業務<br />指定されたエリアの各家庭のポストに投函</td>
                                    </tr>
                                    <tr>
                                        <th>勤務地</th>
                                        <td>兵庫県全域（ご自宅近くのエリアを担当可能）</td>
                                    </tr>
                                    <tr>
                                        <th>勤務時間</th>
                                        <td>週1日～、1日2時間～OK<br />時間帯は相談可能</td>
                                    </tr>
                                    <tr>
                                        <th>給与</th>
                                        <td>完全出来高制<br />1枚あたり 3円～5円<br />※エリアや配布物により変動</td>
                                    </tr>
                                    <tr>
                                        <th>応募資格</th>
                                        <td>・18歳以上（高校生不可）<br />・学歴不問<br />・未経験者歓迎<br />・主婦(夫)、学生、フリーター歓迎</td>
                                    </tr>
                                    <tr>
                                        <th>待遇・福利厚生</th>
                                        <td>・交通費支給（規定あり）<br />・自転車・バイク・車での配布OK</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Appeal Points */}
                    <div className={styles.featuresSection}>
                        <h3 className={styles.sectionTitle}>こんな方におすすめ！</h3>
                        <ul className={styles.featureList}>
                            <li>自分のペースで働きたい方</li>
                            <li>スキマ時間を有効活用したい方</li>
                            <li>運動不足を解消したい方</li>
                            <li>副業をお探しの方</li>
                            <li>人と話すのが苦手だけど働きたい方</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PostingStaffPage
