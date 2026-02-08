import styles from './ReviewsPage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function ReviewsPage(): React.ReactElement {
    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>口コミ情報</h1>
                        <p className={styles.pageSubtitle}>REVIEWS</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.introBlock}>
                        <h2 className={styles.mainHeading}>
                            安心・丁寧な軽貨物配送を神戸市周辺で行っております
                        </h2>
                        <p className={styles.leadText}>
                            神戸市の配送･株式会社Juggaar Japanの口コミ情報
                        </p>
                        <p>
                            ｢安心・丁寧な宅配サービス｣や｢明るい接客｣が高い評価を得ている神戸市の配送会社として、地域のお客様に貢献できるような｢誠実な仕事｣を心掛けております。発荷主様からお預かりしたお荷物を安全・スピーディーに着荷主様にお届けすることはもちろんですが、接客面においてもお客様にご満足いただけるよう社員へのマナー教育を徹底しております。兵庫県内の物流に関するお困りごとがございましたら、軽貨物宅配のプロにお任せください。正社員ドライバーの募集も随時行っております。
                        </p>
                    </div>
                </div>
            </section>

            <div className={styles.divider}></div>

            {/* Service Quality Section */}
            <section className={styles.imageTextSection}>
                <div className={styles.container}>
                    <div className={styles.imageTextBlock}>
                        <div className={styles.imageCol}>
                            <img src={serviceImg} alt="神戸市周辺のお客様から好評を得ている誠実な配送サービス" />
                        </div>
                        <div className={styles.textCol}>
                            <h3 className={styles.blockTitle}>
                                神戸市周辺のお客様から好評を得ている誠実な配送サービス
                            </h3>
                            <p>
                                地元・兵庫県のお客様の利益創出に貢献することを目指す企業として、マーケティング調査や物販企画、ドローン空撮、写真撮影、WEBデザイン・グラフィックデザイン制作など幅広い事業を手掛けておりますが、その中核をなすのが軽貨物自動車運送事業です。機動性に富んだ軽貨物自動車を駆使し、法人・個人のお客様からお預かりした品物をスピーディーかつ丁寧に着荷主様の元へお届けいたします。
                            </p>
                            <p>
                                兵庫県内のお客様が厚い信頼をお寄せくださる、｢丁寧・迅速・接客良し｣と三拍子揃った宅配サービスにより、大手企業をはじめとした多くのお客様から継続的に宅配のご依頼を頂戴することができております。現在、正社員の軽貨物ドライバーとして宅配のお仕事を担ってくださる方を募集しております。経験者の方だけでなく、未経験者の方も対象とした求人です。配達の質にこだわる運送会社で、プロの宅配ドライバーを目指してみませんか。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Service Section */}
            <section className={styles.imageTextSection}>
                <div className={styles.container}>
                    <div className={styles.imageTextBlock}>
                        <div className={styles.imageCol}>
                            <img src={serviceImg} alt="神戸市の配送会社として丁寧で明るい接客を大切にしています" />
                        </div>
                        <div className={styles.textCol}>
                            <h3 className={styles.blockTitle}>
                                神戸市の配送会社として丁寧で明るい接客を大切にしています
                            </h3>
                            <p>
                                兵庫県内で多くの宅配実績を積み重ねている運送会社として、常にお客様に対して｢誠実であること｣を目指したサービスの提供を心掛けております。安全かつスピーディーに品物・お荷物をお届けすることはもちろんですが、宅配のプロとして、お客様に失礼がないよう接客マナーの教育にも力を入れております。宅配サービスをお探しの際には、ドライバーの接客レベルにもぜひご注目いただきたいと思っております。
                            </p>
                            <p>
                                宅配ドライバーが｢感じの悪い接客｣をしてしまっては、発荷主様のイメージをも悪くしてしまう恐れがございますので、地域のお客様への貢献を志す運送会社としてドライバーの一人ひとりに｢明るく丁寧な接客｣を徹底させております。技術とマナーを併せ持つ軽貨物ドライバーによる宅配サービスは、ご利用いただいた多くのお客様からお褒めの言葉を頂戴しており、会社が安定成長を続けることができている理由の一つであると考えております。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recruitment Section */}
            <section className={styles.imageTextSection}>
                <div className={styles.container}>
                    <div className={styles.imageTextBlock}>
                        <div className={styles.imageCol}>
                            <img src={serviceImg} alt="正社員として神戸市周辺の軽貨物配送を担ってみませんか" />
                        </div>
                        <div className={styles.textCol}>
                            <h3 className={styles.blockTitle}>
                                正社員として神戸市周辺の軽貨物配送を担ってみませんか
                            </h3>
                            <p>
                                正社員として宅配ドライバーのお仕事を始めてみませんか。大手企業をはじめとした様々なお客様からお預かりするお荷物・商品を兵庫県内の個人宅や企業にお届けするお仕事です。神戸市に拠点を構える配送会社として、兵庫県内の広いエリアで宅配業務を担ってくださる正社員ドライバーを募集しております。普通自動車免許をお持ちの方であれば、どなたでもご応募いただけます。
                            </p>
                            <p>
                                IT機器の導入により効率化が進む昨今の宅配サービスですが、スマートフォンやタブレット端末の操作に不自由のない方であれば問題なく業務をこなしていただけます。日々の業務を通じて宅配ドライバーとしてのノウハウを蓄積していくことで、効率良く仕事をこなせる｢プロ｣へと成長していただけます。先輩スタッフが皆様の成長を後押ししてまいりますので、未経験者の方も臆することなくご応募ください。もちろん、女性のご応募も大歓迎いたします。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Review Section */}
            <section className={styles.reviewCallout}>
                <div className={styles.container}>
                    <div className={styles.reviewBlock}>
                        <h3 className={styles.reviewTitle}>
                            皆様からの口コミも是非、お待ちしております
                        </h3>
                        <p className={styles.reviewText}>
                            Googleより　<strong>ジュガールジャパン</strong>　で検索していただき評価ください！！
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReviewsPage
