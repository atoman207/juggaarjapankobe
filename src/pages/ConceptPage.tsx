import { Link } from 'react-router-dom'
import { PageHero } from '@/components/PageHero'
import styles from './ConceptPage.module.css'

// Import images - using correct images from reference site
import heroImg from '@/assets/image/concept_hero_ref.jpg'
import conceptSection1Img from '@/assets/image/concept_section1.jpg'
import conceptSection2Img from '@/assets/image/concept_section2.jpg'
import conceptSection3Img from '@/assets/image/concept_section3.jpg'
import conceptSection4Img from '@/assets/image/concept_section4.jpg'

export function ConceptPage() {
  return (
    <div className={styles.page}>
      <PageHero
        title="コンセプト"
        titleEn="CONCEPT"
        backgroundImage={heroImg}
        breadcrumbs={[{ label: 'コンセプト' }]}
      />

      {/* Main Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>CONCEPT</span>
          <h2 className={styles.sectionTitle}>
            創業以来培ってきた信念からのスタイルを大切にします
          </h2>
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={styles.featureRow}>
            <div className={styles.featureImage}>
              <img src={conceptSection1Img} alt="創業以来培ってきたノウハウ" />
            </div>
            <div className={styles.featureText}>
              <h3>創業以来培ってきた様々なノウハウをスタッフに伝えております</h3>
              <p>
                拠点を置く神戸市で、長きに亘って配送・配布サービスに従事する中で培ってきたノウハウがあります。培ってきたノウハウはスタッフにしっかりと伝え、今後もクオリティーの高いサービスを継続できるように尽力しております。
              </p>
              <p>
                また、これまで培ってきたノウハウを大切にすると同時に、時代の変化やお客様のニーズの変化も踏まえて、よりフレキシブルなサービスをご提案できるよう、スタッフ一同が尽力してまいります。
              </p>
              <p>
                何か運びたい軽貨物・配りたいチラシがありましたら、難しくニッチなご要望にも可能な限り対応いたします。
              </p>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <Link to="/service" className={styles.serviceButton}>サービスへ</Link>
          </div>
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={`${styles.featureRow} ${styles.featureRowReverse}`}>
            <div className={styles.featureImage}>
              <img src={conceptSection2Img} alt="地域密着型の配送サービス" />
            </div>
            <div className={styles.featureText}>
              <h3>地域密着型の配送サービスを行い拠点を置く神戸市で好評です</h3>
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
            </div>
          </div>
          <div className={styles.buttonRow}>
            <Link to="/service" className={styles.serviceButton}>サービスへ</Link>
          </div>
        </div>
      </section>

      {/* Feature Section 3 */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={styles.featureRow}>
            <div className={styles.featureImage}>
              <img src={conceptSection3Img} alt="お客様のご期待にお応え" />
            </div>
            <div className={styles.featureText}>
              <h3>拠点の神戸市でお客様のご期待にお応えする配送サービスを展開</h3>
              <p>
                お住まいの神戸市で、安心して軽貨物の集荷や配送を任せられるプロフェッショナルをお捜しでしたら、どのようなご要望でもまずは一度お問い合わせください。難しくニッチなご要望にも、可能な限りフレキシブルにお答えできるよう、尽力いたします。
              </p>
              <p>
                初めてお問い合わせの方にも安心してサービスをご利用いただけるように、接客にも配慮いたします。
              </p>
              <p>
                地域に根差したサービスをご提案しているからこそ、フットワークの軽さを発揮できるという意味でも、お客様から厚い信頼をいただいております。
              </p>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <Link to="/company" className={styles.serviceButton}>会社概要へ</Link>
          </div>
        </div>
      </section>

      {/* Feature Section 4 - Recruitment */}
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={`${styles.featureRow} ${styles.featureRowReverse}`}>
            <div className={styles.featureImage}>
              <img src={conceptSection4Img} alt="配送ドライバー募集" />
            </div>
            <div className={styles.featureText}>
              <h3>地元神戸市で配送ドライバーとして働きたい方を募集しております</h3>
              <p>
                地域に根差した軽貨物輸送、ポスティングのプロとして、厚い信頼をいただいております。今後もクオリティーの高いサービスを継続するために、スタッフが自覚を持って日々の仕事に励むと同時に、新しいスタッフの求人も積極的に行っております。
              </p>
              <p>
                ドライバーの求人に際して、応募をご検討中の方々には、専門的な知識や経験の有無を必須としておりません。現在、地域に根差した軽貨物輸送のプロフェッショナルとして活躍しているスタッフの中にも、入社時は未経験の状態からスタートした方が多数に上ります。
              </p>
              <p>
                一人ひとりが自分のペースで無理なく、お仕事の現場で求められるノウハウを身に付けられる環境が整っております。
              </p>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <Link to="/recruit" className={styles.serviceButton}>採用情報へ</Link>
          </div>
        </div>
      </section>

      {/* Same Category Section */}
      <section className={styles.categorySection}>
        <div className={styles.container}>
          <h3 className={styles.categoryTitle}>
            <span className={styles.categoryLabel}>SAME CATEGORY</span>
            同じカテゴリーのページ
          </h3>
          <div className={styles.categoryGrid}>
            <Link to="/reputation" className={styles.categoryCard}>
              <span>神戸市の配送･株式会社Juggaar Japanの口コミ情報</span>
            </Link>
            <Link to="/reviews" className={styles.categoryCard}>
              <span>神戸市の配送･株式会社Juggaar Japanの評判</span>
            </Link>
            <Link to="/testimonials" className={styles.categoryCard}>
              <span>神戸市の配送･株式会社Juggaar Japanのお客様の声</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className={styles.relatedPostsSection}>
        <div className={styles.container}>
          <h3 className={styles.categoryTitle}>
            <span className={styles.categoryLabel}>RELATED POSTS</span>
            関連ページ
          </h3>
          <div className={styles.relatedPostsGrid}>
            <Link to="/company" className={styles.relatedPostCard}>
              <h4>会社概要</h4>
              <p>株式会社Juggaar Japanについてご紹介。</p>
            </Link>
            <Link to="/recruit" className={styles.relatedPostCard}>
              <h4>採用情報</h4>
              <p>新しいスタッフを募集しております。</p>
            </Link>
            <Link to="/recruit/driver" className={styles.relatedPostCard}>
              <h4>3ヶ月ごとにボーナスが!? 神戸市北区 軽貨物 ドライバー</h4>
              <p>ドライバー募集の詳細情報。</p>
            </Link>
            <Link to="/service" className={styles.relatedPostCard}>
              <h4>サービス・料金表</h4>
              <p>各種サービスの詳細と料金表。</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Tags Section */}
      <section className={styles.tagsSection}>
        <div className={styles.container}>
          <h3 className={styles.categoryTitle}>
            <span className={styles.categoryLabel}>RELATED TAGS</span>
            関連タグ
          </h3>
          <div className={styles.tagsList}>
            <span className={styles.tag}>神戸市 軽貨物</span>
            <span className={styles.tag}>神戸市北区 配送</span>
            <span className={styles.tag}>三田市 配送</span>
            <span className={styles.tag}>ポスティング 神戸市</span>
            <span className={styles.tag}>軽貨物 求人</span>
            <span className={styles.tag}>宅配ドライバー</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConceptPage
