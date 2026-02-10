import { Link } from 'react-router-dom'
import { PageHero } from '@/components/PageHero'
import { PrimaryLinkButton } from '@/components/PrimaryLinkButton'
import styles from './ConceptPage.module.css'

// Import images - using correct images from reference site
import heroImg from '@/assets/image/concept_hero_ref.jpg'
import conceptSection1Img from '@/assets/image/concept_section1.jpg'
import conceptSection2Img from '@/assets/image/concept_section2.jpg'
import conceptSection3Img from '@/assets/image/concept_section3.jpg'
import conceptSection4Img from '@/assets/image/concept_section4.jpg'
import same1Img from '@/assets/image/same1.jpg'
import same2Img from '@/assets/image/same2.jpg'
import same3Img from '@/assets/image/same3.jpg'
import { RelatedPostsAndTags } from '@/components/RelatedPostsAndTags'

export function ConceptPage() {
  return (
    <div className={styles.page}>
      <PageHero
        title="コンセプト"
        backgroundImage={heroImg}
        breadcrumbs={[
          { label: '神戸市の配送は株式会社Juggaar Japan', path: '/' },
          { label: 'コンセプト' },
        ]}
      />

      {/* Main Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <span className="englishSectionLabel">CONCEPT</span>
          <h2 className={`${styles.sectionTitle} pageSubtitleJapanese`}>
            創業以来培ってきた信念からのスタイルを大切にします
          </h2>
          <div className="sectionTitleUnderline" aria-hidden="true" />
          <div className={styles.introContent}>
            <p>拠点を置く神戸市で、長きに亘って配送・配布サービスに従事する中で培ってきたノウハウがあります。</p>
            <p>培ってきたノウハウはスタッフにしっかりと伝え、今後もクオリティーの高いサービスを継続できるように尽力しております。</p>
            <p>また、これまで培ってきたノウハウを大切にすると同時に、時代の変化やお客様のニーズの変化も踏まえて、よりフレキシブルなサービスをご提案できるよう、スタッフ一同が尽力してまいります。</p>
            <p>何か運びたい軽貨物・配りたいチラシがありましたら、難しくニッチなご要望にも可能な限り対応いたします。</p>
          </div>
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={styles.featureRow}>
            <div className={`${styles.featureImage} ${styles.featureImageFirst}`}>
              <img src={conceptSection1Img} alt="創業以来培ってきたノウハウ" />
            </div>
            <div className={styles.featureText}>
              <h3>地域密着型の配送サービスを行い拠点を置く神戸市で好評です </h3>
              <p>
              地元である神戸市に拠点を置き、創業以来多岐に亘るサービスを展開してまいりました。展開しているサービスの中には、集荷や配送など、軽貨物に関わるサービスが含まれます。
              </p>
              <p>
              地元の地理に精通したドライバーが、お客様からお預かりした様々なお荷物を安全に、なおかつスピーディーに目的地までお届けしております。
              </p>
              <p>
              また、単に軽貨物を運ぶのではなく、大切なお荷物と一緒にお客様からお預かりしたハートを目的地までお届けすることにもこだわっております。
              </p>
              <p>
              拠点を置く地域に根差した、フレキシブルな物流サービスをご提案し、お客様からご納得のお言葉をいただいてまいりました。
              </p>
              <p>
              今後も、様々なサービスを通してお客様に笑顔をお届けできるよう、スタッフ一同が日々の努力を重ねてまいります。スタッフ一人ひとりがプロとしての自覚を持っております。
              </p>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <PrimaryLinkButton to="/service">サービスへ</PrimaryLinkButton>
          </div>
        </div>
      </section>
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={`${styles.featureRow}`}>
            <div className={styles.featureImage}>
              <img
                src={heroImg}
                alt="拠点の神戸市でお客様のご期待にお応えする配送サービスを展開"
              />
            </div>
            <div className={styles.featureText}>
              <h3>拠点の神戸市でお客様のご期待にお応えする配送サービスを展開</h3>
              <p>
              お住まいの神戸市で、安心して軽貨物の集荷や配送を任せられるプロフェッショナルをお捜しでしたら、どのようなご要望でもまずは一度お問い合わせください。

              </p>
              <p>
              難しくニッチなご要望にも、可能な限りフレキシブルにお答えできるよう、尽力いたします。
              </p>
              <p>
                初めてお問い合わせの方にも安心してサービスをご利用いただけるように、接客にも配慮いたします。
              </p>
              <p>
                また、お問い合わせの際に役立つ情報を掲載しておりますので、ご覧ください。
              </p>
              <p>
                地域に根差したサービスで、お客様に笑顔をお届けしております。
              </p>
              <p>
              地域に根差したサービスで、お客様に笑顔をお届けしております。
              地域に根差したサービスをご提案しているからこそ、フットワークの軽さを発揮できるという意味でも、お客様から厚い信頼をいただいております。
              </p>
              <p>
              このようなことを依頼しても大丈夫だろうかと不安になるような事柄でも、真摯にお伺いいたします。
              </p>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <PrimaryLinkButton to="/company">会社概要へ</PrimaryLinkButton>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Text left, image right (swapped) */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={`${styles.featureRow} ${styles.featureRowReverse}`}>
            <div className={styles.featureText}>
              <h3>地元神戸市で配送ドライバーとして働きたい方を募集しております</h3>
              <p>
              地域に根差した軽貨物輸送、ポスティングのプロとして、厚い信頼をいただいております。
              </p>
              <p>
              今後もクオリティーの高いサービスを継続するために、スタッフが自覚を持って日々の仕事に励むと同時に、新しいスタッフの求人も積極的に行っております。
              ドライバーの求人に際して、応募をご検討中の方々には、専門的な知識や経験の有無を必須としておりません。
              </p>
              <p>
              現在、地域に根差した軽貨物輸送のプロフェッショナルとして活躍しているスタッフの中にも、入社時は未経験の状態からスタートした方が多数に上ります。
              </p>
              <p>
              一人ひとりが自分のペースで無理なく、お仕事の現場で求められるノウハウを身に付けられる環境が整っております。
              </p>
              <p>
                すでに物流の現場で培ってきた専門的なノウハウをお持ちの方を歓迎にしますが、同時に、未経験者にとっても活躍しやすい環境を整えております。
              </p>
            </div>
            <div className={styles.featureImage}>
              <img src={conceptSection2Img} alt="拠点の神戸市でお客様のご期待にお応えする配送サービス" />
            </div>
          </div>
          <div className={styles.buttonRow}>
            <PrimaryLinkButton to="/recruit">採用情報へ</PrimaryLinkButton>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Recruitment */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={`${styles.featureRow} ${styles.featureRowReverse}`}>
            <div className={styles.featureImage}>
              <img src={conceptSection3Img} alt="配送ドライバー募集" />
            </div>
            <div className={styles.featureText}>
              <h3>拠点の神戸市で責任を持って配送業務に励むスタッフが集結  </h3>
              <p>
              軽貨物輸送のプロフェッショナルとして、頼もしいスタッフが集結しております。

              </p>
              <p>
              入社時には未経験の状態であった方も多数いらっしゃいますが、それぞれが任された仕事と真摯に向き合い、物流の現場で求められる専門的なノウハウをしっかりと身に付け、日々の業務に活かしております。
              </p>
              <p>
              物流の分野に限らず、お客様からのご要望に応じて、どのようなサービスをご提案すれば笑顔をお届けできるか、生活のクオリティーアップに貢献できるかということを考えております。
              </p>
              <p>
              ニッチで難しいご要望にも、可能な限りフレキシブルにお答えしております。

              </p>
              <p>
              また、サービスの概要を分かりやすくご紹介しているため、初めてお問い合わせの方にとっても安心感があります。
              スタッフの努力が実を結び、現在では大手の企業様からも多数のお仕事をいただいております。
              </p>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <PrimaryLinkButton to="/staff">スタッフへ</PrimaryLinkButton>
          </div>
        </div>
      </section>

      {/* Feature Section 4 - Text left, image right */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={styles.featureRow}>
            <div className={styles.featureText}>
              <h3>拠点を置く神戸市に根差す配送・配布のプロとして様々な情報を発信</h3>
              <p>
                サービスの概要について理解を深めていただけるよう、情報の発信にも力を入れております。
              </p>
              <p>
                新しい情報をただ発信するだけではなく、お客様が必要としている情報を分かりやすく、なおかつスピーディーにお届けするためにはどうすれば良いか、真摯に考えております。
              </p>
              <p>
                時代の変化にも目を向けながら、画一的なご提案をするのではなく、お客様のご要望にマッチするサービスを構築できるよう、代表をはじめスタッフ一同が尽力いたします。
              </p>
              <p>
                物流の分野以外にも様々なスタイルで、お客様に日々の暮らしやすさをご実感いただけるよう、尽力してまいります。
              </p>
              <p>
                サービスについて何かご不明な点がありましたら、些細なことでも、お気軽にお問い合わせください。
              </p>
              <p>
                専門的な事柄についても、可能な限り分かりやすい言葉でお伝えするように配慮しております。
              </p>
            </div>
            <div className={styles.featureImage}>
              <img src={conceptSection4Img} alt="拠点を置く神戸市に根差す配送・配布のプロとして様々な情報を発信" />
            </div>
          </div>
          <div className={styles.buttonRow}>
            <PrimaryLinkButton to="/blog">ブログへ</PrimaryLinkButton>
          </div>
        </div>
      </section>

      {/* Same Category Section - cards with image left, title + description right */}
      <section className={styles.categorySection}>
        <div className={styles.container}>
          <h3 className={styles.categoryTitle}>
            <span className="englishSectionLabel">SAME CATEGORY</span>
            <span className="sectionTitleJapanese">同じカテゴリーのページ</span>
          </h3>
          <div className={styles.categoryGrid}>
            <Link to="/concept/reviews" className={styles.categoryCard}>
              <div className={styles.categoryCardImage}>
                <img src={same1Img} alt="口コミ情報" />
              </div>
              <div className={styles.categoryCardText}>
                <span className={styles.categoryCardTitle}>神戸市の配送・株式会社Juggaar Japanの...</span>
                <span className={styles.categoryCardDesc}>「安心・丁寧な宅配サービス」や「明るい接客」が高い評価を得ている神戸市の配送会社として、お客様の声をご紹介しています。</span>
              </div>
            </Link>
            <Link to="/concept/reputation" className={styles.categoryCard}>
              <div className={styles.categoryCardImage}>
                <img src={same2Img} alt="評判" />
              </div>
              <div className={styles.categoryCardText}>
                <span className={styles.categoryCardTitle}>神戸市の配送・株式会社Juggaar Japanの...</span>
                <span className={styles.categoryCardDesc}>兵庫県神戸市に拠点を置く配送会社として、県内全域を対象とした軽貨物宅配サービスをご案内しています。</span>
              </div>
            </Link>
            <Link to="/concept/voice" className={styles.categoryCard}>
              <div className={styles.categoryCardImage}>
                <img src={same3Img} alt="お客様の声" />
              </div>
              <div className={styles.categoryCardText}>
                <span className={styles.categoryCardTitle}>神戸市の配送・株式会社Juggaar Japanの...</span>
                <span className={styles.categoryCardDesc}>高いプロ意識を持つ軽貨物ドライバーが、神戸市エリアを中心に配送業務を承ります。</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <RelatedPostsAndTags />
    </div>
  )
}

export default ConceptPage
