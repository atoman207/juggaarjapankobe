import styles from './CharterPricePage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function WeeklyFlexiblePage(): React.ReactElement {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>週１のみでも！午前中のみでも！<br />午後のみでも！ok！</h1>
                        <p className={styles.pageSubtitle}>FLEXIBLE WORK</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.introBlock}>
                        <h2 className={styles.mainHeading}>
                            超柔軟シフト！あなたのライフスタイルに合わせて働けます
                        </h2>
                        <p>
                            週1日からOK！午前中だけ、午後だけでもOK！お子様の送り迎えの間だけ働きたい主婦(夫)の方、学校の授業の合間に働きたい学生の方、副業をお探しの方など、どんな働き方でも大歓迎です。
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
                                        <td>・軽貨物配送補助<br />・ポスティング<br />・事務作業補助<br />※勤務内容は相談可能</td>
                                    </tr>
                                    <tr>
                                        <th>勤務地</th>
                                        <td>神戸市北区およびその周辺エリア</td>
                                    </tr>
                                    <tr>
                                        <th>勤務時間</th>
                                        <td><strong>超柔軟シフト！</strong><br />・週1日～OK<br />・1日2時間～OK<br />・午前のみOK（9:00～12:00）<br />・午後のみOK（13:00～17:00）<br />・フルタイムもOK</td>
                                    </tr>
                                    <tr>
                                        <th>給与</th>
                                        <td>時給 1,000円～1,300円<br />※業務内容・経験による<br />※交通費別途支給</td>
                                    </tr>
                                    <tr>
                                        <th>応募資格</th>
                                        <td>・18歳以上（高校生不可）<br />・学歴不問<br />・未経験者大歓迎<br />・主婦(夫)、学生、フリーター、シニア歓迎</td>
                                    </tr>
                                    <tr>
                                        <th>待遇・福利厚生</th>
                                        <td>・交通費支給<br />・制服貸与<br />・シフト完全自由<br />・扶養内勤務OK</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Appeal Points */}
                    <div className={styles.featuresSection}>
                        <h3 className={styles.sectionTitle}>こんな方に最適！</h3>
                        <div className={styles.reasonsGrid}>
                            <div className={styles.reasonCard}>
                                <h4>主婦(夫)の方</h4>
                                <p>お子様の送り迎えの間だけ、家事の合間だけでもOK！扶養内勤務も可能です。</p>
                            </div>
                            <div className={styles.reasonCard}>
                                <h4>学生の方</h4>
                                <p>授業の合間、テスト期間は休んでOK！柔軟にシフト調整できます。</p>
                            </div>
                            <div className={styles.reasonCard}>
                                <h4>副業希望の方</h4>
                                <p>本業が終わった後、休日だけの勤務もOK！自分のペースで働けます。</p>
                            </div>
                            <div className={styles.reasonCard}>
                                <h4>シニアの方</h4>
                                <p>無理のない時間帯で、体力に合わせた業務内容を選べます。</p>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className={styles.featuresSection}>
                        <h3 className={styles.sectionTitle}>選ばれる理由</h3>
                        <ul className={styles.featureList}>
                            <li>週1日・1日2時間からOK！とにかく柔軟です</li>
                            <li>シフトは完全自由！急な予定変更にも対応</li>
                            <li>未経験者も安心の丁寧な研修あり</li>
                            <li>扶養内勤務も相談可能</li>
                            <li>様々な年齢層のスタッフが活躍中</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WeeklyFlexiblePage
