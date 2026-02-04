import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHero } from '@/components/PageHero'
import styles from './FaqPage.module.css'

// Import images
import heroImg from '@/assets/image/hero_faq.jpg'

// FAQ data matching reference site
const FAQ_ITEMS = [
  {
    category: '配送について',
    questions: [
      {
        q: '配送エリアはどこまで対応していますか？',
        a: '神戸市を中心に、兵庫県全域をカバーしております。神戸市北区、三田市、須磨区、垂水区、灘区、東灘区、西区、中央区、長田区の他、明石市、西宮市、宝塚市、伊丹市、川西市など幅広いエリアに対応しております。詳細はお問い合わせください。',
      },
      {
        q: '当日配送は可能ですか？',
        a: 'はい、当日配送も可能です。お急ぎの場合は、お電話にてご相談ください。状況によっては対応できない場合もございますが、可能な限りフレキシブルに対応いたします。',
      },
      {
        q: '大きな荷物も配送してもらえますか？',
        a: '軽貨物車両で運べるサイズ・重量のものであれば対応可能です。具体的なサイズや重量については、お問い合わせの際にお伝えください。',
      },
      {
        q: '配送料金はどのように決まりますか？',
        a: '配送料金は、距離・荷物のサイズ・時間帯などにより異なります。まずはお気軽にお見積りをご依頼ください。チャーター便の料金表もご用意しております。',
      },
    ],
  },
  {
    category: 'ポスティングについて',
    questions: [
      {
        q: 'ポスティングの対応エリアはどこですか？',
        a: '神戸市垂水区、須磨区、北区、灘区、東灘区をはじめ、兵庫県内の多くのエリアに対応しております。エリアを熟知したスタッフが確実に配布いたします。',
      },
      {
        q: 'チラシは何枚から依頼できますか？',
        a: '最小ロットなど特に制限はございません。小ロットから大ロットまで、お客様のご予算やニーズに合わせて柔軟に対応いたします。',
      },
      {
        q: '配布報告はもらえますか？',
        a: 'はい、配布完了後に報告書をお送りしております。配布エリアや枚数など、詳細をご確認いただけます。',
      },
    ],
  },
  {
    category: '求人について',
    questions: [
      {
        q: '未経験でも応募できますか？',
        a: 'はい、未経験者も大歓迎です。現在活躍しているスタッフの中にも、入社時は未経験だった方が多数いらっしゃいます。先輩スタッフによる丁寧な研修制度がございますので、安心してご応募ください。',
      },
      {
        q: '車両を持っていないのですが、応募できますか？',
        a: 'はい、車両レンタル制度がございますので、車両をお持ちでない方もお気軽にご応募いただけます。特別な審査も不要です。',
      },
      {
        q: '副業として働くことはできますか？',
        a: 'はい、副業としてお仕事を始めたい方も歓迎しております。シフト制を導入しておりますので、週1日から、午前のみ・午後のみなど、柔軟な働き方が可能です。',
      },
      {
        q: '正社員登用はありますか？',
        a: 'はい、正社員登用制度がございます。業務委託からスタートし、実績を積んでいただいた後、正社員への登用も可能です。',
      },
      {
        q: '報酬体系を教えてください',
        a: 'ドライバーは日当保証制度があり、安定した収入を得られます。また、3ヶ月ごとにボーナスも支給しております。詳細はお問い合わせください。',
      },
    ],
  },
  {
    category: '会社について',
    questions: [
      {
        q: '営業時間を教えてください',
        a: '営業時間は10:00〜19:00、定休日は日曜日です。お電話でのお問い合わせは、078-987-0902 または 080-7518-7910 までお願いいたします。',
      },
      {
        q: '会社の所在地はどこですか？',
        a: '〒651-1421 兵庫県神戸市北区有野中町2-12-13 にございます。神戸電鉄三田線 五社駅が最寄り駅です。',
      },
    ],
  },
]

export function FaqPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className={styles.page}>
      <PageHero
        title="よくある質問"
        titleEn="FAQ"
        backgroundImage={heroImg}
        breadcrumbs={[{ label: 'よくある質問' }]}
      />

      {/* Main Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <span className={styles.sectionLabel}>FAQ</span>
          <h2 className={styles.sectionTitle}>
            お客様からよくいただくご質問をまとめました
          </h2>
          <p className={styles.introText}>
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      {FAQ_ITEMS.map((category, categoryIndex) => (
        <section key={categoryIndex} className={styles.faqSection}>
          <div className={styles.container}>
            <h3 className={styles.categoryHeading}>{category.category}</h3>
            <div className={styles.faqList}>
              {category.questions.map((item, itemIndex) => {
                const itemId = `${categoryIndex}-${itemIndex}`
                const isOpen = openItems.has(itemId)
                return (
                  <div
                    key={itemIndex}
                    className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                  >
                    <button
                      className={styles.faqQuestion}
                      onClick={() => toggleItem(itemId)}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.faqIcon}>Q</span>
                      <span className={styles.faqText}>{item.q}</span>
                      <span className={styles.faqArrow}>{isOpen ? '−' : '＋'}</span>
                    </button>
                    <div className={styles.faqAnswer}>
                      <span className={styles.faqIcon}>A</span>
                      <p>{item.a}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Contact CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h3>上記以外のご質問はお気軽にお問い合わせください</h3>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className={styles.ctaButton}>
              お問い合わせはこちら
            </Link>
            <a href="tel:0789870902" className={styles.ctaButtonPhone}>
              <span>📞</span>
              078-987-0902
            </a>
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
            <Link to="/service" className={styles.relatedPostCard}>
              <h4>サービス・料金表</h4>
              <p>配送サービス、ポスティング、BPO事業など、各種サービスの詳細をご覧ください。</p>
            </Link>
            <Link to="/recruit" className={styles.relatedPostCard}>
              <h4>採用情報</h4>
              <p>ドライバー、ポスティングスタッフなど、新しい仲間を募集しております。</p>
            </Link>
            <Link to="/company" className={styles.relatedPostCard}>
              <h4>会社概要</h4>
              <p>株式会社Juggaar Japanの会社情報をご紹介しております。</p>
            </Link>
            <Link to="/contact" className={styles.relatedPostCard}>
              <h4>お問い合わせ</h4>
              <p>サービスに関するご質問やお見積りのご依頼はこちらから。</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FaqPage
