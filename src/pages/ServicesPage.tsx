import { Link } from 'react-router-dom'
import { PageHero } from '@/components/PageHero'
import styles from './ServicesPage.module.css'

// Import images
import heroImg from '@/assets/image/hero_service.jpg'
import serviceStaffImg from '@/assets/image/service_staff.jpg'

export function ServicesPage() {
  return (
    <div className={styles.page}>
      <PageHero
        title="サービス・料金表"
        titleEn="SERVICE"
        backgroundImage={heroImg}
        breadcrumbs={[{ label: 'サービス' }]}
      />

      {/* Service Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>SERVICE</span>
          <h2 className={styles.sectionTitle}>
            誠実な心構えでお仕事に臨むスタッフの<br />心意気をサービスに反映
          </h2>
          <div className={styles.introText}>
            <p>
              地域社会に貢献し、お客様に笑顔をお届けすることを目指す企業として、地域密着型の配送サービスにも力を入れております。
            </p>
            <p>
              お客様からお預かりしたお荷物を単に目的地まで運ぶのではなく、輸送中の安全管理にもしっかり配慮し、拠点を置く神戸市にお住まいの方から、「何か運びたい物がある時にはとりあえず相談してみよう」とお問い合わせいただけるような、クオリティーの高いサービスを目指します。
            </p>
            <p>
              現状に甘んじることなく、お客様のニーズも考慮したクオリティーの高いサービスを目指そうという姿勢が、高く評価されております。
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: 貨物軽自動車運送事業 */}
      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceNumber}>1</span>
            <h3 className={styles.serviceTitle}>貨物軽自動車運送事業</h3>
          </div>
          <p className={styles.serviceSubtitle}>
            拠点を置く各地域で、集荷から輸送まで、様々な軽貨物輸送を柔軟に行っております
          </p>
          <Link to="/service/charter" className={styles.priceLink}>
            チャーター便（軽貨物貸切便）料金表
          </Link>

          <div className={styles.serviceContent}>
            <div className={styles.serviceImage}>
              <img src={serviceStaffImg} alt="集荷と配送" />
            </div>
            <div className={styles.serviceText}>
              <h4>集荷と配送の両面から地元である神戸市の物流を支えております</h4>
              <p>
                軽貨物を運ぶというサービスを通して、少しでも地域社会に貢献したいという熱い思いを胸に抱いたドライバーが、様々な現場で汗を流しております。
              </p>
              <p>
                物流のプロフェッショナルとして豊富な知識と経験を身に付けた上で、転職を希望する方だけでなく、ドライバーとしてのノウハウを持たない状態で、求人にご応募いただく方も目立ちます。
              </p>
              <p>
                新しいスタッフの求人に際しては、専門的なノウハウの有無と同様に、責任感の強さややる気、ドライバーとして着実に成長したいというような向上心の有無を考慮しております。
              </p>
              <p>
                お仕事に必要な車両の手配を含めて、スタートアップの手間が掛からない点についても、皆様から喜ばれております。
              </p>
              <p>
                未経験の状態から、少しずつ様々な知識や経験を身に付け、正社員へとステップアップできるシステムも整えております。
              </p>
            </div>
          </div>

          <div className={styles.serviceContent}>
            <div className={styles.serviceText}>
              <h4>日常生活の品質向上に貢献する配送サービスを神戸市で展開中です</h4>
              <p>
                地域に根差した物流サービスをご提案し、日常生活のクオリティーアップに向けて様々な角度から貢献いたします。
              </p>
              <p>
                お客様から「このようなサービスを探していた」というご納得のお言葉をいただけるように、これまで培ってきたノウハウを大切にしながらも、時代の変化やお客様一人ひとりによって異なるニーズを慎重に考慮し、スタッフ一同が尽力してまいります。
              </p>
              <p>
                ご案内している軽貨物輸送のサービスについて、何かご不明な点がありましたら、些細なことでもお気軽にお問い合わせください。
              </p>
              <p>
                専門的なノウハウを身に付けたスタッフが、難しい事柄についても可能な限り分かりやすくご説明しております。
              </p>
              <p>
                単に軽貨物を運ぶことだけを考えるのではなく、お客様からお預かりした軽貨物と一緒に、送り主のハートまでお届けすることを目指して、尽力いたします。
              </p>
            </div>
            <div className={styles.serviceImage}>
              <img src={serviceStaffImg} alt="配送サービス" />
            </div>
          </div>

          <div className={styles.serviceContent}>
            <div className={styles.serviceImage}>
              <img src={serviceStaffImg} alt="経験豊富なスタッフ" />
            </div>
            <div className={styles.serviceText}>
              <h4>経験豊富なスタッフが地元神戸市で集荷と配送を行っております</h4>
              <p>
                拠点を置く地域で、集荷から輸送まで、様々な軽貨物輸送を行っております。
              </p>
              <p>
                サービスのクオリティーについては、お客様から「サービスそのもののクオリティーに加え、丁寧な接客にも好感が持てる」というようなご納得のお言葉を多数いただいております。
              </p>
              <p>
                創業以来、物流のプロフェッショナルとして培ってきたノウハウをサービスに反映しておりますが、入社時には未経験という方も多数いらっしゃいます。
              </p>
              <p>
                知識や経験がゼロの状態からでも、物流のプロフェッショナルに求められる専門的なノウハウを基礎からしっかりと学んで、成長していきたいとお考えの方を歓迎いたします。
              </p>
              <p>
                細かな所も手を抜かず、お客様一人ひとりのご要望にしっかりお答えできるよう、目立たない所も含めて尽力してきた結果は、報酬にしっかりと結び付きます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: BPO事業 */}
      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceNumber}>2</span>
            <h3 className={styles.serviceTitle}>BPO事業（事業開発・営業支援）</h3>
          </div>
          <p className={styles.serviceSubtitle}>
            コストの削減・経営戦略の実現で業績向上や事業拡大をより高いスピード感で遂行します
          </p>
          <div className={styles.serviceContent}>
            <div className={styles.serviceImage}>
              <img src={serviceStaffImg} alt="BPO事業" />
            </div>
            <div className={styles.serviceText}>
              <h4>ノンコア業務に悩まされている企業様のお力になります</h4>
              <p>もちろんコア業務のご相談も是非、ご要望ください</p>
              <p>
                to C to Bに関わらず、どんな細かな要望でもお聞かせください。
                業務改善・提案・販売促進・経費削減など形にとらわれないご提案をさせていただきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: ポスティング事業 */}
      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceNumber}>3</span>
            <h3 className={styles.serviceTitle}>ポスティング事業</h3>
          </div>
          <p className={styles.serviceSubtitle}>
            同業他社様よりも低価格で県内の各地域に、エリアを熟知した配布スタッフが待機。宣伝を全力でお手伝いします
          </p>
          <Link to="/service/posting" className={styles.priceLink}>
            ポスティングサービス内容
          </Link>
          <div className={styles.serviceContent}>
            <div className={styles.serviceText}>
              <h4>経験豊富でエリアを熟知したスタッフが全力でお客様の広告をお手伝いします！</h4>
              <p>
                ポスティング事業の始まりは神戸市垂水区エリアがメインでした。
              </p>
              <p>
                サービスのクオリティーや「スタッフさんも好感が持てる」というようなご納得のお言葉を多数いただき、神戸市須磨区、北区、灘区、東灘区とエリアを拡大中です。
              </p>
              <p>
                知識や経験がゼロの状態の未経験者さんでも、当社のマニュアルを熟知してもらい、一枚一枚を大切な商品として扱い、誠実にポスティング致します。
              </p>
            </div>
            <div className={styles.serviceImage}>
              <img src={serviceStaffImg} alt="ポスティング" />
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: ドローン空撮事業 */}
      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceNumber}>4</span>
            <h3 className={styles.serviceTitle}>ドローン空撮事業</h3>
          </div>
          <p className={styles.serviceSubtitle}>
            兵庫県内に派遣し空撮（グループ・集合写真の撮影・不動産・建築物の撮影・インフラ点検）を行っております
          </p>
          <div className={styles.serviceContent}>
            <div className={styles.serviceImage}>
              <img src={serviceStaffImg} alt="ドローン空撮" />
            </div>
            <div className={styles.serviceText}>
              <h4>家族写真・友達との集合写真などかけがえのない思い出を<br />ドローンならではの最高の演出で体験ください</h4>
              <p>一般社団法人 ドローン操縦士協会 DPAディーパ所属</p>
              <p>航空法第132条第2号</p>
              <p>航空法第132条の2第3号</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: グラフィックデザイン・WEBデザイン */}
      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceNumber}>5</span>
            <h3 className={styles.serviceTitle}>グラフィックデザイン・WEBデザイン制作事業</h3>
          </div>
          <p className={styles.serviceSubtitle}>
            ホームページの制作からロゴデザイン・パンフレットや名刺・チラシのデザイン・動画作成・編集等、印刷物デザインも承っております
          </p>
          <div className={styles.serviceContent}>
            <div className={styles.serviceText}>
              <h4>時間がかかっても良いモノを作ってほしい！<br />質よりもスピードで量産的に！</h4>
              <p>
                長年培ってきたノウハウや新しい発想でニュージャンルのデザインを形にします。
                具体案が全くないお客様でも、何なりとご相談ください。
              </p>
            </div>
            <div className={styles.serviceImage}>
              <img src={serviceStaffImg} alt="デザイン" />
            </div>
          </div>
        </div>
      </section>

      {/* Service 6: 賃貸、看板、駐車場 */}
      <section className={styles.serviceSection}>
        <div className={styles.container}>
          <div className={styles.serviceHeader}>
            <span className={styles.serviceNumber}>6</span>
            <h3 className={styles.serviceTitle}>賃貸、看板、駐車場の経営及び管理</h3>
          </div>
          <p className={styles.serviceSubtitle}>
            賃貸、看板、駐車場の管理運営を実施しております
          </p>
          <div className={styles.serviceContent}>
            <div className={styles.serviceImage}>
              <img src={serviceStaffImg} alt="賃貸管理" />
            </div>
            <div className={styles.serviceText}>
              <h4>神戸市・三田市をメインでマンションや戸建賃貸、看板、駐車場の紹介をさせていただきます</h4>
              <a href="#" className={styles.ctaButton}>物件情報はコチラ</a>
              <p className={styles.note}>※ご契約の際は審査がございますので予めご了承ください</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links Section */}
      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <div className={styles.relatedLinks}>
            <Link to="/concept" className={styles.relatedLink}>コンセプトへ</Link>
            <Link to="/company" className={styles.relatedLink}>会社概要へ</Link>
            <Link to="/recruit" className={styles.relatedLink}>採用情報へ</Link>
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
            <Link to="/service/posting-price" className={styles.categoryCard}>
              <span>ポスティング 料金表</span>
            </Link>
            <Link to="/service/signboard" className={styles.categoryCard}>
              <span>貸し看板 料金表</span>
            </Link>
            <Link to="/service/posting" className={styles.categoryCard}>
              <span>ポスティング サービス内容</span>
            </Link>
            <Link to="/service/charter" className={styles.categoryCard}>
              <span>チャーター便（軽貨物貸切便）料金表</span>
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
            <Link to="/concept" className={styles.relatedPostCard}>
              <h4>コンセプト</h4>
              <p>拠点を置く神戸市で、長きに亘って配送サービスに従事する中で培ってきたノウハウが…</p>
            </Link>
            <Link to="/staff" className={styles.relatedPostCard}>
              <h4>スタッフ</h4>
              <p>お客様のご期待にお答えできるようなクオリティーの高い配送サービスは、スタッフ一…</p>
            </Link>
            <Link to="/reputation" className={styles.relatedPostCard}>
              <h4>神戸市の配送･株式会社Juggaar Japanの評判</h4>
              <p>兵庫県神戸市に拠点を置く配送会社として、県内全域を対象とした軽貨物宅配サービス…</p>
            </Link>
            <Link to="/company" className={styles.relatedPostCard}>
              <h4>株式会社ジュガール ジャパン</h4>
              <p>軽貨物自動車による物流・運送業務を主に神戸市エリアで担う配送会社として、地域の…</p>
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
            <span className={styles.tag}>神戸市</span>
            <span className={styles.tag}>配送</span>
            <span className={styles.tag}>サービス</span>
            <span className={styles.tag}>三田市 貸し看板</span>
            <span className={styles.tag}>神戸市 貸し看板</span>
            <span className={styles.tag}>加古川市 貸し看板</span>
            <span className={styles.tag}>三木市 貸し看板</span>
            <span className={styles.tag}>西脇市 貸し看板</span>
            <span className={styles.tag}>神戸市 ポスティング</span>
            <span className={styles.tag}>神戸市北区 ポスティング</span>
            <span className={styles.tag}>三田市 ポスティング</span>
            <span className={styles.tag}>神戸市 ドライバー</span>
            <span className={styles.tag}>三田市 ドライバー</span>
            <span className={styles.tag}>神戸市北区 宅配ドライバー</span>
            <span className={styles.tag}>三田市 宅配ドライバー</span>
            <span className={styles.tag}>宅配ドライバー 日当保証</span>
            <span className={styles.tag}>神戸市 宅配ドライバー</span>
            <span className={styles.tag}>神戸市 ポスティングならジュガールジャパン</span>
            <span className={styles.tag}>三田市 求人</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
