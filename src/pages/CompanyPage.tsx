import { Link } from 'react-router-dom'
import { PageHero } from '@/components/PageHero'
import styles from './CompanyPage.module.css'

// Import images - using correct images from reference site
import heroImg from '@/assets/image/hero_company_ref.jpg'
import companyBuildingImg from '@/assets/image/company.jpg'

export function CompanyPage() {
  return (
    <div className={styles.page}>
      <PageHero
        title="会社概要"
        backgroundImage={heroImg}
        breadcrumbs={[
          { label: '神戸市の配送は株式会社Juggaar Japan', path: '/' },
          { label: '会社概要' },
        ]}
      />

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={styles.container}>
          <span className="englishSectionLabel">CORPORATE PHILOSOPHY</span>
          <h2 className={styles.sectionTitle}>
            人々の幸福と生活の向上に関われる<br />信頼される企業でありたい
          </h2>
          <div className={styles.philosophyContent}>
            <p>
              人の幸せに貢献できる、身近な存在でありたい。<br />
              信頼されるパートナーとして成長し続けたい。<br />
              常に向上心を持ち、自分自身を磨き続けたい。
            </p>
          </div>
        </div>
      </section>

      {/* Juggaar Meaning Section */}
      <section className={styles.meaningSection}>
        <div className={styles.container}>
          <div className={styles.meaningRow}>
            <div className={styles.meaningImage}>
              <img src={companyBuildingImg} alt="株式会社Juggaar Japan 社屋" />
            </div>
            <div className={styles.meaningText}>
              <h3>「ジュガール」とは？</h3>
              <p>
                「ジュガール」はヒンディー語で「創意工夫」や「知恵を働かせて問題を解決する」という意味を持ちます。困難な状況でも諦めず、創造的な解決策を見つけ出す精神を大切にしています。
              </p>
              <p>
                私たちは、この「ジュガール精神」をもって、お客様のニーズに柔軟にお応えし、地域の物流を支えてまいります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <h3 className={styles.infoTitle}>会社概要</h3>
          <table className={styles.infoTable}>
            <tbody>
              <tr>
                <th>会社名</th>
                <td>株式会社Juggaar Japan（ジュガールジャパン）</td>
              </tr>
              <tr>
                <th>所在地</th>
                <td>
                  〒651-1312<br />
                  兵庫県神戸市北区有野町有野798-4
                </td>
              </tr>
              <tr>
                <th>代表者</th>
                <td>代表取締役 加納 侑青（かのう ゆうせい）</td>
              </tr>
              <tr>
                <th>設立</th>
                <td>令和元年11月7日（2019年）</td>
              </tr>
              <tr>
                <th>資本金</th>
                <td>117万円</td>
              </tr>
              <tr>
                <th>電話番号</th>
                <td>
                  <a href="tel:0789870902">078-987-0902</a>
                </td>
              </tr>
              <tr>
                <th>営業時間</th>
                <td>10:00～19:00（定休日：日曜・祝日）</td>
              </tr>
              <tr>
                <th>事業内容</th>
                <td>
                  <ul>
                    <li>貨物軽自動車運送事業</li>
                    <li>BPO事業（事業開発・営業支援）</li>
                    <li>賃貸、看板、駐車場の経営及び管理</li>
                    <li>ドローン空撮</li>
                    <li>グラフィックデザイン・WEBデザイン制作事業</li>
                    <li>イベントサポート</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <h3 className={styles.mapTitle}>アクセス</h3>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.9!2d135.18!3d34.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5YWl5YWl!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="会社所在地"
            />
          </div>
          <div className={styles.accessInfo}>
            <p><strong>所在地：</strong>〒651-1312 兵庫県神戸市北区有野町有野798-4</p>
            <p><strong>アクセス：</strong>阪神高速7号北神戸線より車で約5分</p>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className={styles.relatedPostsSection}>
        <div className={styles.container}>
          <h3 className={styles.categoryTitle}>
            <span className="englishSectionLabel">RELATED POSTS</span>
            <span className="sectionTitleJapanese">関連ページ</span>
          </h3>
          <div className={styles.relatedPostsGrid}>
            <Link to="/concept" className={styles.relatedPostCard}>
              <h4>コンセプト</h4>
              <p>拠点を置く神戸市で培ってきたノウハウをご紹介。</p>
            </Link>
            <Link to="/service" className={styles.relatedPostCard}>
              <h4>サービス・料金表</h4>
              <p>各種サービスの詳細と料金表をご確認いただけます。</p>
            </Link>
            <Link to="/recruit" className={styles.relatedPostCard}>
              <h4>採用情報</h4>
              <p>新しいスタッフを募集しております。</p>
            </Link>
            <Link to="/staff" className={styles.relatedPostCard}>
              <h4>スタッフ</h4>
              <p>当社で活躍するスタッフをご紹介。</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CompanyPage
