import React, { useState } from 'react'
import styles from './FaqPage.module.css'

interface FaqItem {
  question: string
  answer: string
  category: 'customer' | 'applicant'
}

const FAQ_DATA: FaqItem[] = [
  // Customer FAQs
  {
    category: 'customer',
    question: '配送エリアはどこまでですか？',
    answer: '神戸市を中心に、兵庫県全域への配送に対応しております。大阪府や京都府への配送もご相談ください。',
  },
  {
    category: 'customer',
    question: '急ぎの配送は可能ですか？',
    answer: 'はい、スポット便やチャーター便で即日配送に対応しております。お急ぎの場合はお電話にてご相談ください。',
  },
  {
    category: 'customer',
    question: '見積もりは無料ですか？',
    answer: 'はい、お見積りは無料です。お気軽にお問い合わせください。',
  },
  {
    category: 'customer',
    question: 'ポスティングの配布報告はありますか？',
    answer: 'はい、配布完了後に配布報告書をお送りいたします。GPS記録による配布エリアの確認も可能です。',
  },
  // Applicant FAQs
  {
    category: 'applicant',
    question: '給料日・報酬日はいつですか？',
    answer: '月末〆翌月25日ご入金（正社員）、翌々月5日（業務委託）となります。',
  },
  {
    category: 'applicant',
    question: 'マイカー・バイク通勤は可能ですか？',
    answer: 'はい、駐車場完備しておりますのでマイカー・バイク通勤可能です。',
  },
  {
    category: 'applicant',
    question: '未経験ですが大丈夫ですか？',
    answer: 'はい、新人研修を行っておりますので未経験の方でも安心してお仕事を始めていただけます。',
  },
  {
    category: 'applicant',
    question: '雇用形態は選べますか？',
    answer: 'はい、正社員・アルバイト・個人事業主からお選びいただけます。',
  },
  {
    category: 'applicant',
    question: '週1日からでも働けますか？',
    answer: 'はい、週1日からでもお仕事いただけます。ご自身のスケジュールに合わせて働けます。',
  },
]

export function FaqPage(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<'customer' | 'applicant'>('customer')

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredFaqs = FAQ_DATA.filter(faq => faq.category === activeCategory)

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>よくある質問</h1>
          <p className={styles.pageSubtitle}>FAQ</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          {/* Category Tabs */}
          <div className={styles.tabs}>
            <button
              type="button"
              className={`${styles.tab} ${activeCategory === 'customer' ? styles.active : ''}`}
              onClick={() => setActiveCategory('customer')}
            >
              お客様向け
            </button>
            <button
              type="button"
              className={`${styles.tab} ${activeCategory === 'applicant' ? styles.active : ''}`}
              onClick={() => setActiveCategory('applicant')}
            >
              応募者向け
            </button>
          </div>

          {/* FAQ List */}
          <div className={styles.faqList}>
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
              >
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className={styles.faqIcon}>Q</span>
                  <span className={styles.faqText}>{faq.question}</span>
                  <span className={styles.faqArrow}>{openIndex === index ? '−' : '+'}</span>
                </button>
                <div className={styles.faqAnswer}>
                  <span className={styles.faqIcon}>A</span>
                  <p className={styles.faqAnswerText}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FaqPage
