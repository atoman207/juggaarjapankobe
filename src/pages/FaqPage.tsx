import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '@/components/PageHero'
import styles from './FaqPage.module.css'

// Import images - using correct images from reference site
import heroImg from '@/assets/image/hero_faq_ref.jpg'

// FAQ data matching original site exactly
const FAQ_ITEMS = [
  {
    q: '給料日・報酬日はいつですか？',
    a: '月末〆翌月25日ご入金\n⇒正社員\n\n月末〆翌々月5日ご入金\n⇒業務委託',
  },
  {
    q: 'マイカー・バイク通勤は可能ですか？',
    a: 'はい、マイカー・バイクでの通勤も可能です。\n駐車場完備。',
  },
  {
    q: '未経験ですが大丈夫ですか？',
    a: 'はい、大丈夫です。\nベテラン社員より\n新人研修を行っておりますのでご安心ください！',
  },
  {
    q: '雇用形態は選べますか？',
    a: 'はい。\n正社員・アルバイト・個人事業主から\nご自身のワークスタイルに合った形態をお選びください。\n※正社員は枠数に限りあり',
  },
  {
    q: '残業はありますか？',
    a: '日により、現場により残業は異なります。',
  },
  {
    q: '有給はありますか？',
    a: '法定通り、入社してから半年経過後に10日間の有給がつきます。',
  },
  {
    q: '何か資格は必要ですか？',
    a: 'ドライバーを希望の方は運転免許が必須となります。\n営業職・ポスティングは運転免許は必須ではありません。',
  },
  {
    q: '女性での応募は可能ですか？',
    a: 'はい、特に求人で男女の区別はしていません。\nやる気と体力があれば女性の応募もお待ちしています。',
  },
  {
    q: '配送ドライバーの事業用車両は自身で準備しないといけませんか？',
    a: '事業用車両を当社が準備させて頂きます。\n業務委託希望のドライバー様はリースも可能です。\n勿論、ご自身での車両持ち込みも可能です。',
  },
  {
    q: 'チラシは会社まで取りに行かなければなりませんか？',
    a: '当社Staffがご自宅までお届けさせて頂いております。',
  },
]

export function FaqPage() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className={styles.page}>
      <PageHero
        title="よくある質問"
        backgroundImage={heroImg}
        breadcrumbs={[
          { label: '神戸市の配送は株式会社Juggaar Japan', path: '/' },
          { label: 'よくある質問' },
        ]}
      />

      {/* Q&A Intro Section */}
      <section className={styles.qaSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>Q&A</span>
          <h2 className={styles.sectionTitle}>
            仕事に関する疑問・質問になんでもお答えしています
          </h2>
          <h3 className={styles.qaSubtitle}>
            働きやすい職場で休みもしっかりあります
          </h3>
          <div className={styles.qaDescription}>
            <p>
              地域密着型の配送サービスで、拠点を置く神戸市にお住まいの方から、高い評価をいただいております。軽貨物輸送のプロフェッショナルとして、一緒に働く仲間を募集しております。
            </p>
            <p>
              採用について何か疑問やご不明点がございましたら、まずはこちらをご覧いただき、少しでも不安を解消できればと考えています。その他にもドライバーに対する働き方や職場環境、プロドライバーとしての運転マナーや運転技術等、興味がございましたらお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>FAQ</span>
          <h2 className={styles.faqSectionTitle}>よくある質問</h2>
          
          <div className={styles.faqList}>
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openItems.has(index)
              return (
                <div
                  key={index}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqIconQ}>Q</span>
                    <span className={styles.faqText}>{item.q}</span>
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      <span className={styles.faqIconA}>A</span>
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <p className={styles.ctaText}>
            お客様に笑顔をお届けするべく、拠点を置く地域に根差した軽貨物輸送のサービスを展開しており、株式会社Juggaar Japanでは一緒に働く仲間を募集しております。単に物を運ぶのではなく、お客様からお預かりした大切なお荷物と一緒に、送り主の気持ちまで一緒に目的地まで運ぶのだという意識を持ち、物流のプロフェッショナルとして地域社会の発展にわずかでも貢献することを目指しております。スタッフ一人ひとりの熱意がお客様にも届き、｢何か運んで欲しい軽貨物がある場合には、ぜひお願いしたい｣というようなご納得のお言葉を多数いただいております。
          </p>
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
            <Link to="/reviews" className={styles.relatedPostCard}>
              <h4>神戸市の配送･株式会社Juggaar Japanの評判</h4>
              <p>兵庫県神戸市に拠点を置く配送会社として、県内全域を対象とした軽貨物宅配サービス…</p>
            </Link>
            <Link to="/voice" className={styles.relatedPostCard}>
              <h4>神戸市の配送･株式会社Juggaar Japanのお客様の声</h4>
              <p>高いプロ意識を持つ軽貨物ドライバーが、神戸市エリアを中心に配送業務を承ります。…</p>
            </Link>
            <Link to="/recruit" className={styles.relatedPostCard}>
              <h4>採用情報</h4>
              <p>まずは副業として、集荷や配送のお仕事を始めてみたいという方も歓迎しております。…</p>
            </Link>
            <Link to="/reputation" className={styles.relatedPostCard}>
              <h4>神戸市の配送･株式会社Juggaar Japanの口コミ情報</h4>
              <p>｢安心・丁寧な宅配サービス｣や｢明るい接客｣が高い評価を得ている神戸市の配送会社と…</p>
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
            <span className={styles.tag}>よくある質問</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FaqPage
