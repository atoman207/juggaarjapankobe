import styles from './ReviewsPage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function VoicePage(): React.ReactElement {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>お客様の声</h1>
                        <p className={styles.pageSubtitle}>CUSTOMER VOICE</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.introBlock}>
                        <h2 className={styles.mainHeading}>
                            高いプロ意識を持つ軽貨物ドライバーが神戸市エリアを中心に配送業務を承ります
                        </h2>
                        <p className={styles.leadText}>
                            神戸市の配送･株式会社Juggaar Japanのお客様の声
                        </p>
                        <p>
                            高いプロ意識を持つ軽貨物ドライバーが、神戸市エリアを中心に配送業務を承ります。お客様からお預かりした大切なお荷物を、責任を持って目的地までお届けいたします。スタッフ一人ひとりが、自分に任された仕事に誠実に取り組み、お客様のお声を真摯に反映したサービスを目指しております。
                        </p>
                    </div>
                </div>
            </section>

            <div className={styles.divider}></div>

            {/* Customer Testimonial 1 */}
            <section className={styles.imageTextSection}>
                <div className={styles.container}>
                    <div className={styles.imageTextBlock}>
                        <div className={styles.imageCol}>
                            <img src={serviceImg} alt="お客様第一のサービスで地域に貢献" />
                        </div>
                        <div className={styles.textCol}>
                            <h3 className={styles.blockTitle}>
                                お客様第一のサービスで地域に貢献
                            </h3>
                            <p>
                                神戸市で軽貨物配送サービスを提供する企業として、お客様第一のサービスを心掛けております。お客様からのご要望に丁寧にお応えし、満足していただけるよう努力を重ねております。地域に根差したサービスで、多くのお客様から高い評価をいただいております。
                            </p>
                            <p>
                                配送のプロフェッショナルとして、安全・確実・迅速な配送を実現するために、日々の研修やスキルアップに力を入れております。お客様の大切なお荷物を、心を込めてお届けいたします。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Testimonial 2 */}
            <section className={styles.imageTextSection}>
                <div className={styles.container}>
                    <div className={styles.imageTextBlock}>
                        <div className={styles.imageCol}>
                            <img src={serviceImg} alt="丁寧な対応が好評です" />
                        </div>
                        <div className={styles.textCol}>
                            <h3 className={styles.blockTitle}>
                                丁寧な対応が好評です
                            </h3>
                            <p>
                                お客様からは「ドライバーの対応が丁寧で好感が持てた」「配送時間を守ってくれて助かった」「荷物の扱いが丁寧で安心できた」など、多数の嬉しいお声をいただいております。
                            </p>
                            <p>
                                これからも、お客様の期待に応えられるよう、サービスの質の向上に努めてまいります。神戸市周辺での配送サービスをお探しの際は、ぜひ当社にお任せください。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Testimonial 3 */}
            <section className={styles.imageTextSection}>
                <div className={styles.container}>
                    <div className={styles.imageTextBlock}>
                        <div className={styles.imageCol}>
                            <img src={serviceImg} alt="地域密着のサービスを提供" />
                        </div>
                        <div className={styles.textCol}>
                            <h3 className={styles.blockTitle}>
                                地域密着のサービスを提供
                            </h3>
                            <p>
                                神戸市を中心とした兵庫県内で、地域密着型の配送サービスを展開しております。地域の特性を熟知したドライバーが、効率的かつ確実に配送を行います。
                            </p>
                            <p>
                                お客様との信頼関係を大切にし、長期的なパートナーシップを築けるよう、誠実なサービス提供を心掛けております。配送に関するご相談やご要望がございましたら、お気軽にお問い合わせください。
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default VoicePage
