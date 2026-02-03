import { Link as RouterLink } from 'react-router-dom'
import styles from './BlogPage.module.css'

const BLOG_POSTS = [
  {
    id: 1,
    date: '2025/01/28',
    title: '神戸電鉄 五社駅から徒歩1分！新しいスタイルのテレマーケティングスペース',
    excerpt: '新たにテレマーケティングスペースをオープンしました。快適な環境でお仕事いただけます。',
  },
  {
    id: 2,
    date: '2025/01/27',
    title: '新たに話題のキッチンカースペースをご用意しました！',
    excerpt: 'キッチンカー事業者様向けの出店スペースをご用意いたしました。',
  },
  {
    id: 3,
    date: '2025/01/27',
    title: '軽貨物の仕事をお探しの方に朗報です！',
    excerpt: '新規ドライバーを募集中！未経験者歓迎、研修制度も充実しています。',
  },
  {
    id: 4,
    date: '2025/01/24',
    title: '新しいスタートを切る絶好のチャンスです！',
    excerpt: '2025年、新しいキャリアをスタートしませんか？当社でお待ちしております。',
  },
  {
    id: 5,
    date: '2025/01/20',
    title: 'ポスティングスタッフ大募集中！',
    excerpt: '神戸市内でのポスティングスタッフを募集しています。週1日からOK！',
  },
  {
    id: 6,
    date: '2025/01/15',
    title: '年始のご挨拶',
    excerpt: '新年あけましておめでとうございます。本年もよろしくお願いいたします。',
  },
]

export function BlogPage(): React.ReactElement {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>ブログ</h1>
          <p className={styles.pageSubtitle}>BLOG</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.blogGrid}>
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className={styles.blogCard}>
                <div className={styles.blogDate}>{post.date}</div>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <span className={styles.blogLink}>続きを読む →</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
