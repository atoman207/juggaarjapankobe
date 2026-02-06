import { Link } from 'react-router-dom'
import { PageHero } from '@/components/PageHero'
import styles from './RecruitmentPage.module.css'

// Import images - using correct images from reference site
import heroImg from '@/assets/image/hero_recruit_ref.jpg'
import recruitPosterImg from '@/assets/image/recruit_poster.jpg'
import recruitVanImg from '@/assets/image/recruit_van.jpg'

// Job categories
const JOB_CATEGORIES = [
  { title: '営業 セールススタッフ', path: '/recruit/sales' },
  { title: '継続確認 セールススタッフ', path: '/recruit/sales-support' },
  { title: 'ポスティングスタッフ【兵庫県全域】', path: '/recruit/posting-all' },
  { title: 'ポスティングスタッフ【神戸市須磨区】', path: '/recruit/posting-suma' },
  { title: 'ポスティングスタッフ【神戸市北区】', path: '/recruit/posting-kita' },
  { title: 'ポスティングスタッフ【神戸市垂水区】', path: '/recruit/posting-tarumi' },
  { title: '3ヶ月ごとにボーナスが!? 神戸市北区 軽貨物 ドライバー', path: '/recruit/driver' },
  { title: '週１のみでも！午前中のみでも！午後のみでも！ok！', path: '/recruit/part-time' },
]

export function RecruitmentPage() {
  return (
    <div className={styles.page}>
      <PageHero
        title="採用情報"
        titleEn="RECRUIT"
        backgroundImage={heroImg}
        breadcrumbs={[{ label: '採用情報' }]}
      />

      {/* Main Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>RECRUIT</span>
          <h2 className={styles.sectionTitle}>
            地元の物流を支えるやりがいのあるお仕事をお任せします
          </h2>
        </div>
      </section>

      {/* Recruitment Description Section */}
      <section className={styles.descriptionSection}>
        <div className={styles.container}>
          <div className={styles.descriptionRow}>
            <div className={styles.descriptionImage}>
              <img src={recruitPosterImg} alt="採用募集ポスター" />
            </div>
            <div className={styles.descriptionText}>
              <h3>プロとしての知識や経験と同様に熱意も尊重してドライバーを求人</h3>
              <p>
                まずは副業として、配送のお仕事を始めてみたいという方も歓迎しております。拠点を置く神戸市に根差したサービスで、大手の企業様からも厚い信頼をいただいております。
              </p>
              <p>
                物流ドライバーとして活躍しているスタッフの中には、入社時には未経験の状態であった方も多数いらっしゃいます。一人ひとりが、先輩スタッフからの丁寧な指導を受けながら、プロフェッショナルとしてたくましく成長しております。
              </p>
              <p>
                シフト制を導入し、ある程度柔軟に働き方を決められる点も求職者様から好評です。
              </p>
              <Link to="/entry" className={styles.entryButton}>エントリーフォームへ</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Position Section */}
      <section className={styles.positionSection}>
        <div className={styles.container}>
          <h3 className={styles.positionTitle}>宅配ドライバー</h3>
          <p className={styles.positionHighlight}>宅配ドライバー経験者・幹部候補の方優遇！！</p>
          
          <div className={styles.positionContent}>
            <div className={styles.positionImage}>
              <img src={recruitVanImg} alt="配送車両" />
            </div>
            <div className={styles.positionText}>
              <p>
                毎日のお仕事に利用する車両をレンタルしておりますので、特別な審査を経ずして、どなた様でもお気軽にお仕事をスタートできる点が好評です。
              </p>
              <p>
                スタッフ一人ひとりが、物流のプロフェッショナルとして、地域社会を支えるお仕事にやりがいを感じ、活き活きと働いております。
              </p>
              <p>
                新たなスタッフの募集に際しては、専門的なノウハウや経験の有無だけでなく、人間性の部分にもしっかりと目を向けて選考いたしますので、未経験者もお気軽にご応募いただけます。
              </p>
              <p>
                シフト制を採用し、スタッフ一人ひとりが、自分のペースでフレキシブルに働ける環境を整えております。
              </p>
              <p>
                お仕事を始めるにあたり、例えばガソリン代などの諸経費が掛からない点も、皆様から好評です。
              </p>
              <p>
                社会の情勢に左右されず、安定して働き続けられる求人をお探しでしたら、どなた様もお気軽に、担当者までお問い合わせください。お仕事の詳細について、分かりやすくご案内いたします。
              </p>
            </div>
          </div>
          
          <div className={styles.entryButtonWrapper}>
            <Link to="/entry" className={styles.entryButton}>エントリーフォームへ</Link>
          </div>
        </div>
      </section>

      {/* Job Details Table */}
      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <h3 className={styles.detailsTitle}>募集要項</h3>
          <table className={styles.detailsTable}>
            <tbody>
              <tr>
                <th>雇用形態</th>
                <td>業務委託（個人事業主）/ 正社員登用あり</td>
              </tr>
              <tr>
                <th>募集職種</th>
                <td>軽貨物ドライバー / ポスティングスタッフ / 営業スタッフ</td>
              </tr>
              <tr>
                <th>勤務地</th>
                <td>神戸市北区、三田市、神戸市須磨区、神戸市垂水区 他</td>
              </tr>
              <tr>
                <th>勤務時間</th>
                <td>シフト制（週1日〜OK、午前のみ・午後のみも可）</td>
              </tr>
              <tr>
                <th>報酬</th>
                <td>
                  ドライバー：日当保証あり（詳細はお問い合わせください）<br />
                  3ヶ月ごとにボーナス支給！
                </td>
              </tr>
              <tr>
                <th>待遇・福利厚生</th>
                <td>
                  <ul>
                    <li>車両レンタル制度あり（審査不要）</li>
                    <li>ガソリン代会社負担</li>
                    <li>未経験者歓迎・研修制度あり</li>
                    <li>正社員登用制度あり</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>応募資格</th>
                <td>
                  普通自動車免許（AT限定可）<br />
                  ※未経験者歓迎！経験者優遇
                </td>
              </tr>
            </tbody>
          </table>
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
            {JOB_CATEGORIES.map((job, index) => (
              <Link key={index} to={job.path} className={styles.categoryCard}>
                <span>{job.title}</span>
              </Link>
            ))}
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
            <Link to="/reputation" className={styles.relatedPostCard}>
              <h4>神戸市の配送･株式会社Juggaar Japanの評判</h4>
              <p>兵庫県神戸市に拠点を置く配送会社としての実績と評判をご紹介。</p>
            </Link>
            <Link to="/testimonials" className={styles.relatedPostCard}>
              <h4>神戸市の配送･株式会社Juggaar Japanのお客様の声</h4>
              <p>お客様からいただいたご感想やご意見をご紹介しております。</p>
            </Link>
            <Link to="/reviews" className={styles.relatedPostCard}>
              <h4>神戸市の配送･株式会社Juggaar Japanの口コミ情報</h4>
              <p>実際にサービスをご利用いただいたお客様からの口コミ情報。</p>
            </Link>
            <Link to="/concept" className={styles.relatedPostCard}>
              <h4>コンセプト</h4>
              <p>拠点を置く神戸市で、長きに亘って配送サービスに従事する中で培ってきたノウハウ。</p>
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
            <span className={styles.tag}>神戸市 ドライバー</span>
            <span className={styles.tag}>三田市 ドライバー</span>
            <span className={styles.tag}>神戸市北区 宅配ドライバー</span>
            <span className={styles.tag}>三田市 宅配ドライバー</span>
            <span className={styles.tag}>宅配ドライバー 日当保証</span>
            <span className={styles.tag}>神戸市 ポスティング</span>
            <span className={styles.tag}>神戸市北区 ポスティング</span>
            <span className={styles.tag}>三田市 ポスティング</span>
            <span className={styles.tag}>軽貨物 求人</span>
            <span className={styles.tag}>三田市 求人</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RecruitmentPage
