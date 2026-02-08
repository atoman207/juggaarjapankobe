import styles from './ColumnPage.module.css'
import serviceImg from '@/assets/image/service.jpg'

export function ColumnPage(): React.ReactElement {
    const articles = [
        {
            id: 1,
            title: '広告の種類について',
            date: '2024/05/02',
            image: serviceImg,
            excerpt: '広告には大きく分けると3つの種類があります。1つ目はマス広告、2つ目はSP広告、3つ目はインターネット広告です...'
        },
        {
            id: 2,
            title: 'ポスティングの効果的な活用方法',
            date: '2024/04/15',
            image: serviceImg,
            excerpt: 'ポスティングは地域密着型の広告手法として、多くの企業に活用されています。効果を最大化するためのポイントをご紹介します...'
        },
        {
            id: 3,
            title: '軽貨物配送業界のトレンド',
            date: '2024/03/28',
            image: serviceImg,
            excerpt: '近年、EC市場の拡大に伴い、軽貨物配送の需要が急増しています。業界の最新動向について解説します...'
        }
    ]

    return (
        <div className={styles.page}>
            {/* Page Header */}
            <div className={styles.pageHeader} style={{ backgroundImage: `url(${serviceImg})` }}>
                <div className={styles.pageHeaderOverlay}>
                    <div className={styles.container}>
                        <h1 className={styles.pageTitle}>コラム</h1>
                        <p className={styles.pageSubtitle}>COLUMN</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.articlesGrid}>
                        {articles.map((article) => (
                            <article key={article.id} className={styles.articleCard}>
                                <div className={styles.articleImage}>
                                    <img src={article.image} alt={article.title} />
                                </div>
                                <div className={styles.articleContent}>
                                    <time className={styles.articleDate}>{article.date}</time>
                                    <h2 className={styles.articleTitle}>{article.title}</h2>
                                    <p className={styles.articleExcerpt}>{article.excerpt}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ColumnPage
