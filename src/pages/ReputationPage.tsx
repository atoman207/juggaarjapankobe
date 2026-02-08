import styles from './ReviewsPage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function ReputationPage(): React.ReactElement {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>評判</h1>
                        <p className={styles.pageSubtitle}>REPUTATION</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.introBlock}>
                        <h2 className={styles.mainHeading}>
                            兵庫県内で信頼される配送サービスを提供しております
                        </h2>
                        <p className={styles.leadText}>
                            神戸市の配送･株式会社Juggaar Japanの評判
                        </p>
                        <p>
                            兵庫県神戸市に拠点を置く配送会社として、県内全域を対象とした軽貨物宅配サービスを提供しております。お客様からの高い評価と信頼をいただき、多くのリピーターのお客様にご利用いただいております。
                        </p>
                    </div>
                </div>
            </section>

            <div className={styles.divider}></div>

            {/* Reputation Section 1 */}
            <section className={styles.imageTextSection}>
                <div className={styles.container}>
                    <div className={styles.imageTextBlock}>
                        <div className={styles.imageCol}>
                            <img src={serviceImg} alt="地域で高く評価される配送サービス" />
                        </div>
                        <div className={styles.textCol}>
                            <h3 className={styles.blockTitle}>
                                地域で高く評価される配送サービス
                            </h3>
                            <p>
                                神戸市を中心に、確実で丁寧な配送サービスを提供することで、地域のお客様から高い評価をいただいております。大手企業様からも信頼をいただき、継続的なお取引をさせていただいております。
                            </p>
                            <p>
                                配送品質の高さ、ドライバーの対応の良さ、時間厳守の姿勢など、様々な面でお客様からお褒めの言葉をいただいております。これからも、お客様の期待を超えるサービスを提供できるよう努力してまいります。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reputation Section 2 */}
            <section className={styles.imageTextSection}>
                <div className={styles.container}>
                    <div className={styles.imageTextBlock}>
                        <div className={styles.imageCol}>
                            <img src={serviceImg} alt="プロフェッショナルなドライバー陣" />
                        </div>
                        <div className={styles.textCol}>
                            <h3 className={styles.blockTitle}>
                                プロフェッショナルなドライバー陣
                            </h3>
                            <p>
                                当社のドライバーは、配送のプロフェッショナルとして、高い技術とマナーを兼ね備えております。定期的な研修や教育を通じて、常にサービスの質の向上に努めております。
                            </p>
                            <p>
                                お客様からは「ドライバーの対応が素晴らしい」「安心して任せられる」といった評価をいただいており、これが当社の強みとなっております。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reputation Section 3 */}
            <section className={styles.imageTextSection}>
                <div className={styles.container}>
                    <div className={styles.imageTextBlock}>
                        <div className={styles.imageCol}>
                            <img src={serviceImg} alt="安心・安全な配送体制" />
                        </div>
                        <div className={styles.textCol}>
                            <h3 className={styles.blockTitle}>
                                安心・安全な配送体制
                            </h3>
                            <p>
                                お客様の大切なお荷物を安全に配送するため、徹底した安全管理体制を構築しております。車両の定期点検、ドライバーの健康管理、配送ルートの最適化など、様々な取り組みを行っております。
                            </p>
                            <p>
                                また、万が一のトラブルにも迅速に対応できるよう、サポート体制を整えております。お客様に安心してご利用いただけるサービスを提供することが、私たちの使命です。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReputationPage
