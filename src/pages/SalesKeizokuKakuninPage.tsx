import styles from './CharterPricePage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function SalesKeizokuKakuninPage(): React.ReactElement {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>継続確認　セールススタッフ</h1>
                        <p className={styles.pageSubtitle}>RENEWAL SALES</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.introBlock}>
                        <h2 className={styles.mainHeading}>
                            継続確認セールススタッフ募集
                        </h2>
                        <p>
                            既存のお客様への継続確認・フォロー営業を担当していただくスタッフを募集しております。新規開拓ではなく、既存顧客との関係性を深める営業です。
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
                                        <td>正社員・契約社員・アルバイト</td>
                                    </tr>
                                    <tr>
                                        <th>仕事内容</th>
                                        <td>・既存顧客への継続確認<br />・サービス利用状況のヒアリング<br />・追加サービスのご提案<br />・顧客満足度の向上</td>
                                    </tr>
                                    <tr>
                                        <th>勤務地</th>
                                        <td>神戸市北区（本社）<br />※テレワーク相談可</td>
                                    </tr>
                                    <tr>
                                        <th>勤務時間</th>
                                        <td>9:00～18:00（実働8時間）<br />※パートタイムも相談可</td>
                                    </tr>
                                    <tr>
                                        <th>給与</th>
                                        <td>【正社員】月給 200,000円～300,000円<br />【パート】時給 1,100円～1,500円<br />※経験・能力による</td>
                                    </tr>
                                    <tr>
                                        <th>応募資格</th>
                                        <td>・基本的なPC操作ができる方<br />・電話対応が得意な方<br />・未経験者歓迎</td>
                                    </tr>
                                    <tr>
                                        <th>休日</th>
                                        <td>日曜日、祝日<br />※週休2日制</td>
                                    </tr>
                                    <tr>
                                        <th>待遇・福利厚生</th>
                                        <td>・社会保険完備（正社員）<br />・交通費支給<br />・テレワーク可（条件あり）<br />・研修制度あり</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Appeal Points */}
                    <div className={styles.featuresSection}>
                        <h3 className={styles.sectionTitle}>こんな方におすすめ！</h3>
                        <ul className={styles.featureList}>
                            <li>新規開拓ではなく、既存顧客との関係構築が好きな方</li>
                            <li>丁寧なコミュニケーションが得意な方</li>
                            <li>お客様の声を聞くのが好きな方</li>
                            <li>柔軟な働き方をしたい方（テレワーク相談可）</li>
                            <li>営業未経験でもチャレンジしたい方</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SalesKeizokuKakuninPage
