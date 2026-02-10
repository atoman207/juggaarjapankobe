import { Link } from 'react-router-dom'
import styles from './RelatedPostsAndTags.module.css'

import heroCompanyImg from '@/assets/image/hero_company.jpg'
import heroContactImg from '@/assets/image/hero_contact.jpg'
import saleImg from '@/assets/image/sale.jpg'
import mv2Img from '@/assets/image/mv2.jpg'

export function RelatedPostsAndTags() {
  return (
    <section className={styles.relatedPostsSection}>
        <div className={styles.container}>
          <h3 className={styles.categoryTitle}>
            <span className="englishSectionLabel">RELATED POSTS</span>
            <span className="sectionTitleJapanese">関連ページ</span>
          </h3>
          <div className={styles.relatedPostsGrid}>
            <Link to="/company" className={styles.categoryCard}>
              <div className={styles.categoryCardImage}>
                <img src={heroCompanyImg} alt="会社概要" />
              </div>
              <div className={styles.categoryCardText}>
                <span className={styles.categoryCardTitle}>会社概要</span>
                <span className={styles.categoryCardDesc}>地域社会への貢献を目指す神戸市の配送会社として、兵庫県全域を対象とした軽貨物宅配サービスをご案内しています。</span>
              </div>
            </Link>
            <Link to="/recruit" className={styles.categoryCard}>
              <div className={styles.categoryCardImage}>
                <img src={heroContactImg} alt="採用情報" />
              </div>
              <div className={styles.categoryCardText}>
                <span className={styles.categoryCardTitle}>採用情報</span>
                <span className={styles.categoryCardDesc}>まずは副業として、集荷や配送のお仕事を始めてみたいという方も歓迎しております。</span>
              </div>
            </Link>
            <Link to="/recruit/driver" className={styles.categoryCard}>
              <div className={styles.categoryCardImage}>
                <img src={saleImg} alt="神戸市北区 軽貨物 ドライバー" />
              </div>
              <div className={styles.categoryCardText}>
                <span className={styles.categoryCardTitle}>3ヶ月ごとにボーナスが!? 神戸市北区 軽貨物 ドライバー</span>
                <span className={styles.categoryCardDesc}>ドライバー募集の詳細情報。</span>
              </div>
            </Link>
            <Link to="/service" className={styles.categoryCard}>
              <div className={styles.categoryCardImage}>
                <img src={mv2Img} alt="サービス・料金表" />
              </div>
              <div className={styles.categoryCardText}>
                <span className={styles.categoryCardTitle}>サービス・料金表</span>
                <span className={styles.categoryCardDesc}>軽貨物自動車による物流・運送業務を主に神戸市エリアで担う配送会社として、地域の皆様にご利用いただいております。</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
  )
}
