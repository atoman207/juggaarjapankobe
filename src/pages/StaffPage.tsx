import { Link } from 'react-router-dom'
import { PageHero } from '@/components/PageHero'
import styles from './StaffPage.module.css'

// Import images - using correct images from reference site
import heroImg from '@/assets/image/hero_staff_ref.jpg'
import staff01Img from '@/assets/image/staff01.jpg'
import staff02Img from '@/assets/image/staff02.jpg'

export function StaffPage() {
  return (
    <div className={styles.page}>
      <PageHero
        title="スタッフ"
        backgroundImage={heroImg}
        breadcrumbs={[
          { label: '神戸市の配送は株式会社Juggaar Japan', path: '/' },
          { label: 'スタッフ' },
        ]}
      />

      {/* Main Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>STAFF</span>
          <h2 className={styles.sectionTitle}>
            笑顔をお届け
          </h2>
          <p className={styles.introText}>
            サービスの詳細やスタッフの声などを随時更新しております
          </p>
        </div>
      </section>

      {/* Staff Member 1 - CEO */}
      <section className={styles.staffMemberSection}>
        <div className={styles.container}>
          <div className={styles.staffMemberCard}>
            <div className={styles.staffMemberImage}>
              <img src={staff01Img} alt="kano yusei - 代表取締役" />
            </div>
            <div className={styles.staffMemberInfo}>
              <div className={styles.staffMemberHeader}>
                <span className={styles.staffRole}>代表取締役</span>
                <h3 className={styles.staffName}>kano yusei</h3>
                <p className={styles.staffNameJa}>加納 侑青</p>
              </div>
              <div className={styles.staffDetails}>
                <div className={styles.staffDetailItem}>
                  <h4>好きな言葉</h4>
                  <p>「知覚動考」Think-Action<br />
                  Don't think, feel!!<br />
                  思考は現実化する。</p>
                </div>
                <div className={styles.staffDetailItem}>
                  <h4>幸せな瞬間</h4>
                  <p>仕事を終え玄関に3人の娘たちの靴が並んでいるのを見た瞬間</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Member 2 - Designer */}
      <section className={styles.staffMemberSection}>
        <div className={styles.container}>
          <div className={`${styles.staffMemberCard} ${styles.staffMemberCardReverse}`}>
            <div className={styles.staffMemberImage}>
              <img src={staff02Img} alt="kajiyama - デザイナー" />
            </div>
            <div className={styles.staffMemberInfo}>
              <div className={styles.staffMemberHeader}>
                <span className={styles.staffRole}>デザイナー</span>
                <h3 className={styles.staffName}>kajiyama</h3>
                <p className={styles.staffNameJa}>30代女性スタッフ</p>
              </div>
              <div className={styles.staffDetails}>
                <div className={styles.staffDetailItem}>
                  <h4>経験年数</h4>
                  <p>15年</p>
                </div>
                <div className={styles.staffDetailItem}>
                  <h4>得意分野</h4>
                  <p>紙媒体デザイン・SNSデザイン<br />
                  ドラム演奏</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Staff Section */}
      <section className={styles.moreStaffSection}>
        <div className={styles.container}>
          <h3 className={styles.moreStaffTitle}>その他のスタッフ</h3>
          <p className={styles.moreStaffText}>
            株式会社Juggaar Japanでは、様々なバックグラウンドを持つスタッフが活躍しています。
            未経験から始めて成長したベテランドライバーや、地域密着で活躍するポスティングスタッフなど、
            一人ひとりが「誠実さ」をモットーにお客様に笑顔をお届けしています。
          </p>
          <div className={styles.staffAreas}>
            <div className={styles.staffAreaCard}>
              <h4>神戸市北区エリア</h4>
              <p>ドライバー・ポスティングスタッフ多数在籍</p>
            </div>
            <div className={styles.staffAreaCard}>
              <h4>三田市エリア</h4>
              <p>地域密着型スタッフが活躍中</p>
            </div>
            <div className={styles.staffAreaCard}>
              <h4>神戸市垂水区・須磨区エリア</h4>
              <p>経験豊富なスタッフがサポート</p>
            </div>
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
              <p>拠点を置く神戸市で培ってきた配送サービスのノウハウをご紹介。</p>
            </Link>
            <Link to="/recruit" className={styles.relatedPostCard}>
              <h4>採用情報</h4>
              <p>新しいスタッフを募集しております。未経験者も歓迎です。</p>
            </Link>
            <Link to="/company" className={styles.relatedPostCard}>
              <h4>会社概要</h4>
              <p>株式会社Juggaar Japanについてご紹介。</p>
            </Link>
            <Link to="/blog" className={styles.relatedPostCard}>
              <h4>ブログ</h4>
              <p>最新情報やお役立ち情報を発信しております。</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StaffPage
