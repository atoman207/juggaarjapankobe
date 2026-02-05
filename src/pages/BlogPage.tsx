import { Link } from 'react-router-dom'
import { PageHero } from '@/components/PageHero'
import styles from './BlogPage.module.css'

// Import images
import heroImg from '@/assets/image/hero_blog_ref.jpg'
import serviceImg from '@/assets/image/service.jpg'
import service01Img from '@/assets/image/service01.jpg'

// Blog posts data from original site
const BLOG_POSTS = [
  {
    id: '20250128181724',
    title: '神戸電鉄 五社駅から徒歩1分！新しいスタイルのテレマーケティングスペース',
    excerpt: '神戸電鉄五社駅から徒歩わずか1分の場所に、新しいスタイルのテレマーケティングスペースが誕生しました。まるでカフェのような落ち着いた雰囲気の空間で、自分自身のペース…',
    date: '2025/01/28',
    category: 'ブログ',
    image: serviceImg,
  },
  {
    id: '20250128181229',
    title: '新たに話題のキッチンカースペースをご用意しました！',
    excerpt: '五社駅徒歩1分 新たに話題のキッチンカースペースをご用意しました！五社駅からわずか徒歩1分という好立地で、神戸電鉄を利用する方々には嬉しいスポットになっています。',
    date: '2025/01/27',
    category: 'ブログ',
    image: service01Img,
  },
  {
    id: 'keikamotsu-work',
    title: '軽貨物の仕事をお探しの方に朗報です！',
    excerpt: '神戸市や三田市で軽貨物の仕事をお探しの方に朗報です！株式会社JuggaarJapanでは、軽貨物運送の新たな求人を募集しております。特に、神戸電鉄五社駅から徒歩1分というア…',
    date: '2025/01/27',
    category: 'ブログ',
    image: serviceImg,
  },
  {
    id: 'new-start',
    title: '新しいスタートを切る絶好のチャンスです！',
    excerpt: '新年度から新しいスタートを切る絶好のチャンスです！株式会社Juggaar Japanでは、新しい仲間を募集しております。未経験でも安心してスタートできる環境が整っています。',
    date: '2025/01/20',
    category: 'ブログ',
    image: service01Img,
  },
]

// Column posts
const COLUMN_POSTS = [
  {
    id: '22120804212552',
    title: '広告の種類について',
    excerpt: '広告には大きく分けると3つの種類があります。それぞれ特徴が異なり、どれが効果的であるかは企業が扱う商品や対象となる顧客層によって異なります。',
    date: '2024/05/02',
    category: 'コラム',
    image: serviceImg,
  },
  {
    id: '22120804212551',
    title: 'ウェブサイト作成から公開までに必要なものとは',
    excerpt: '「会社の宣伝のためにウェブサイトを作成しよう」と考えている方もいるのではないでしょうか。しかしウェブサイトを作成し、公開するまでには準備しなければならないものがいくつかあります。',
    date: '2024/04/01',
    category: 'コラム',
    image: service01Img,
  },
]

const ALL_POSTS = [...BLOG_POSTS, ...COLUMN_POSTS]

// Categories sidebar
const CATEGORIES = [
  { name: 'ブログ', count: 20 },
  { name: 'コラム', count: 10 },
]

// Monthly archive - extensive list matching the original site
const MONTHLY_ARCHIVE = [
  { label: '2025年01月', count: 4 },
  { label: '2024年12月', count: 3 },
  { label: '2024年11月', count: 2 },
  { label: '2024年10月', count: 3 },
  { label: '2024年09月', count: 2 },
  { label: '2024年08月', count: 1 },
  { label: '2024年07月', count: 2 },
  { label: '2024年06月', count: 3 },
  { label: '2024年05月', count: 2 },
  { label: '2024年04月', count: 1 },
  { label: '2024年03月', count: 2 },
  { label: '2024年02月', count: 1 },
  { label: '2024年01月', count: 2 },
  { label: '2023年12月', count: 1 },
  { label: '2023年11月', count: 2 },
  { label: '2023年10月', count: 1 },
  { label: '2023年09月', count: 2 },
  { label: '2023年08月', count: 1 },
  { label: '2023年07月', count: 3 },
  { label: '2023年06月', count: 2 },
  { label: '2023年05月', count: 1 },
  { label: '2023年04月', count: 2 },
  { label: '2023年03月', count: 1 },
  { label: '2023年02月', count: 2 },
  { label: '2023年01月', count: 1 },
  { label: '2022年12月', count: 3 },
  { label: '2022年11月', count: 2 },
  { label: '2022年10月', count: 1 },
  { label: '2022年09月', count: 2 },
  { label: '2022年08月', count: 1 },
]

export function BlogPage(): React.ReactElement {
  return (
    <div className={styles.page}>
      <PageHero
        title="ブログ"
        titleEn="BLOG"
        backgroundImage={heroImg}
        breadcrumbs={[{ label: 'ブログ' }]}
      />

      {/* Blog Content - 2 column layout */}
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <div className={styles.blogLayout}>
            {/* Main Content - Left */}
            <div className={styles.blogMain}>
              {ALL_POSTS.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className={styles.blogCard}>
                  <div className={styles.blogCardImage}>
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className={styles.blogCardBody}>
                    <span className={styles.blogDate}>{post.date}</span>
                    <span className={styles.blogCategory}>{post.category}</span>
                    <h3 className={styles.blogTitle}>{post.title}</h3>
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                  </div>
                </Link>
              ))}

              {/* Pagination */}
              <div className={styles.pagination}>
                <span className={styles.paginationCurrent}>1</span>
                <Link to="/blog?page=2" className={styles.paginationLink}>2</Link>
                <Link to="/blog?page=3" className={styles.paginationLink}>3</Link>
                <Link to="/blog?page=2" className={styles.paginationNext}>次へ →</Link>
              </div>
            </div>

            {/* Sidebar - Right */}
            <aside className={styles.sidebar}>
              {/* Categories */}
              <div className={styles.sidebarWidget}>
                <h4 className={styles.widgetTitle}>カテゴリー</h4>
                <ul className={styles.categoryList}>
                  {CATEGORIES.map((cat, index) => (
                    <li key={index}>
                      <Link to={`/blog/category/${cat.name}`}>
                        {cat.name}
                        <span>({cat.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Monthly Archive */}
              <div className={styles.sidebarWidget}>
                <h4 className={styles.widgetTitle}>月別アーカイブ</h4>
                <ul className={styles.archiveList}>
                  {MONTHLY_ARCHIVE.map((month, index) => (
                    <li key={index}>
                      <Link to={`/blog/archive/${month.label}`}>
                        {month.label}
                        <span>({month.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <h3 className={styles.relatedTitle}>
            <span className={styles.relatedLabel}>RELATED POSTS</span>
            関連ページ
          </h3>
          <div className={styles.relatedGrid}>
            <Link to="/service" className={styles.relatedCard}>
              <h4>サービス・料金表</h4>
              <p>各種サービスの詳細と料金表をご確認いただけます。</p>
            </Link>
            <Link to="/recruit" className={styles.relatedCard}>
              <h4>採用情報</h4>
              <p>新しいスタッフを募集しております。</p>
            </Link>
            <Link to="/company" className={styles.relatedCard}>
              <h4>会社概要</h4>
              <p>株式会社Juggaar Japanについてご紹介。</p>
            </Link>
            <Link to="/contact" className={styles.relatedCard}>
              <h4>お問い合わせ</h4>
              <p>ご質問・ご相談はこちらから。</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
