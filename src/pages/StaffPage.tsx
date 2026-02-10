import { PageHero } from '@/components/PageHero'
import { RelatedPostsAndTags } from '@/components/RelatedPostsAndTags'
import styles from './StaffPage.module.css'
import staffData from '@/data/staffData.json'

import heroImg from '@/assets/image/hero_staff_ref.jpg'

const staffIntro = staffData.intro

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

      {/* Main Intro Section - matches online page */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <span className="englishSectionLabel">{staffIntro.titleEn}</span>
          <h2 className={`${styles.sectionTitle} pageSubtitleJapanese`}>
            {staffIntro.titleJa}
          </h2>
          <p className={styles.introText}>{staffIntro.subtitle}</p>
          <div className="sectionTitleUnderline" aria-hidden="true" />
          <div className={styles.introParagraphs}>
            <p className={styles.introBodyText}>
              お客様のご期待にお答えできるようなクオリティーの高い配送・配布サービスは、スタッフ一人ひとりの尽力の元で成り立っております。
              拠点を置く神戸市に根差し、今後もクオリティーの高いサービスを継続できるように、スタッフ一人ひとりがプロフェッショナルとしての自覚を持ち、日々、様々な角度から努力を重ねております。
              <br />
              物流のプロフェッショナルとして、ポスティングのプロフェッショナルとして具体的にどのようなサービスを展開しているのか、初めてお問い合わせの方にも分かりやすいよう、新たな耳寄り情報を随時、更新しております。
            </p>
          </div>
        </div>
      </section>
      {/* Bottom intro text (from online page) */}
      <section className={styles.moreStaffSection}>
        <div className={styles.container}>
          <div className={styles.bottomIntro}>
            <p>
              経験と実績が豊富な物流のプロフェッショナルが集結し、拠点を置く地域の活性化に微力ながら貢献できるよう、日々の努力を重ねております。
            </p>
            <p>
              安全にも十分に配慮した、クオリティーの高い軽貨物輸送のサービスに関して、物を運ぶことに関してだけでなく、｢丁寧な接客対応についても好感が持てる｣というようなご納得のお言葉を多数いただいております。
            </p>
            <p>
              お客様にご納得いただけるクオリティーの高いサービスを支えているのは、スタッフ一人ひとりの尽力です。創業以来長きに亘って培ってきたノウハウをスタッフに伝え、今後もクオリティーの高いサービスを継続できるように尽力いたします。
            </p>
            <p>
              このようなことを依頼しても大丈夫だろうかと不安になるような事柄でも、安心してお問い合わせください。専門性の高いご依頼だけでなく、些細なご要望も真摯な姿勢でお伺いしております。
            </p>
          </div>
          <h3 className={styles.moreStaffTitle}>その他のスタッフ</h3>
          <p className={styles.moreStaffText}>
            株式会社Juggaar Japanでは、様々なバックグラウンドを持つスタッフが活躍しています。未経験から始めて成長したベテランドライバーや、地域密着で活躍するポスティングスタッフなど、一人ひとりが「誠実さ」をモットーにお客様に笑顔をお届けしています。
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

      <RelatedPostsAndTags />
    </div>
  )
}

export default StaffPage
