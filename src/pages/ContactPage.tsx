import { useState } from 'react'
import { PageHero } from '@/components/PageHero'
import styles from './ContactPage.module.css'

// Import images - using correct hero image from reference site
import heroImg from '@/assets/image/hero_contact_new.jpg'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  return (
    <div className={styles.page}>
      <PageHero
        title="お問い合わせ"
        backgroundImage={heroImg}
        breadcrumbs={[{ label: 'お問い合わせ' }]}
      />

      {/* Contact Section Title */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitleEn}>CONTACT</h2>
            <p className={styles.sectionTitleJa}>お問い合わせ</p>
          </div>

          {isSubmitted ? (
            <div className={styles.successMessage}>
              <span className={styles.successIcon}>✓</span>
              <h3>お問い合わせありがとうございます</h3>
              <p>内容を確認の上、担当者よりご連絡いたします。</p>
            </div>
          ) : (
            <>
              {/* Privacy Policy Box */}
              <div className={styles.privacyBox}>
                <h4>個人情報の取り扱いについて</h4>
                <div className={styles.privacyContent}>
                  <p>
                    お客様よりお預かりした個人情報は、以下の目的に限定し利用させていただきます。
                  </p>
                  <p>・本サービスに関する顧客管理</p>
                  <p>・本サービスの運営上必要な事項のご連絡</p>
                  <p>＜個人情報の提供について＞</p>
                  <p>
                    当社ではお客様の同意を得た場合または法令に定められた場合を除き、
                    取得した個人情報を第三者に提供することはいたしません。
                  </p>
                  <p>＜個人情報の委託について＞</p>
                  <p>
                    当社では、利用目的の達成に必要な範囲において、個人情報を外部に委託する場合があります。
                    これらの委託先に対しては個人情報保護契約等の措置をとり、適切な監督を行います。
                  </p>
                  <p>＜個人情報の安全管理＞</p>
                  <p>
                    当社では、個人情報の漏洩等がなされないよう、適切に安全管理対策を実施します。
                  </p>
                  <p>＜個人情報を与えなかった場合に生じる結果＞</p>
                  <p>
                    必要な情報を頂けない場合は、それに対応した当社のサービスをご提供できない場合がございますので予めご了承ください。
                  </p>
                  <p>＜個人情報の開示･訂正・削除･利用停止の手続について＞</p>
                  <p>
                    当社では、お客様の個人情報の開示･訂正･削除・利用停止の手続を定めさせて頂いております。
                    ご本人である事を確認のうえ、対応させて頂きます。
                    個人情報の開示･訂正･削除・利用停止の具体的手続きにつきましては、お電話でお問合せ下さい。
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    お名前 <span className={styles.required}>※</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    お電話番号 <span className={styles.required}>※</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    メールアドレス <span className={styles.required}>※</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    お問い合わせ内容 <span className={styles.required}>※</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                    rows={6}
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  入力内容を確認する
                  <span className={styles.buttonArrow}>→</span>
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Related Posts Section */}
      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitleEn}>RELATED POSTS</h2>
            <p className={styles.sectionTitleJa}>関連ページ</p>
          </div>
          <div className={styles.relatedGrid}>
            <a href="/concept/reputation" className={styles.relatedCard}>
              <div className={styles.relatedCardImage}>
                <img src="/images/reputation.jpg" alt="評判" />
              </div>
              <div className={styles.relatedCardContent}>
                <h3>神戸市の配送･株式会社Juggaar Japanの評判</h3>
                <p>兵庫県神戸市に拠点を置く配送会社として、県内全域を対象とした軽貨物宅配サービス…</p>
              </div>
            </a>
            <a href="/concept/voice" className={styles.relatedCard}>
              <div className={styles.relatedCardImage}>
                <img src="/images/voice.jpg" alt="お客様の声" />
              </div>
              <div className={styles.relatedCardContent}>
                <h3>神戸市の配送･株式会社Juggaar Japanのお客様の声</h3>
                <p>高いプロ意識を持つ軽貨物ドライバーが、神戸市エリアを中心に配送業務を承ります。…</p>
              </div>
            </a>
            <a href="/concept" className={styles.relatedCard}>
              <div className={styles.relatedCardImage}>
                <img src="/images/concept.jpg" alt="コンセプト" />
              </div>
              <div className={styles.relatedCardContent}>
                <h3>コンセプト</h3>
                <p>拠点を置く神戸市で、長きに亘って配送サービスに従事する中で培ってきたノウハウが…</p>
              </div>
            </a>
            <a href="/concept/reviews" className={styles.relatedCard}>
              <div className={styles.relatedCardImage}>
                <img src="/images/reviews.jpg" alt="口コミ情報" />
              </div>
              <div className={styles.relatedCardContent}>
                <h3>神戸市の配送･株式会社Juggaar Japanの口コミ情報</h3>
                <p>｢安心・丁寧な宅配サービス｣や｢明るい接客｣が高い評価を得ている神戸市の配送会社と…</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Related Tags Section */}
      <section className={styles.tagsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitleEn}>RELATED TAGS</h2>
            <p className={styles.sectionTitleJa}>関連タグ</p>
          </div>
          <div className={styles.tagsList}>
            <a href="/tag/kobe" className={styles.tag}>神戸市</a>
            <a href="/tag/delivery" className={styles.tag}>配送</a>
            <a href="/contact" className={styles.tag}>お問い合わせ</a>
            <a href="/tag/driver" className={styles.tag}>軽貨物ドライバー</a>
            <a href="/tag/kobe-kita-driver" className={styles.tag}>神戸市北区　軽貨物　ドライバー</a>
            <a href="/tag/sanda-job" className={styles.tag}>三田市　求人</a>
            <a href="/tag/fujiwaradai-baito" className={styles.tag}>藤原台　バイト</a>
            <a href="/tag/arinodai-baito" className={styles.tag}>有野台　バイト</a>
            <a href="/tag/kabutodai-baito" className={styles.tag}>唐櫃台　バイト</a>
            <a href="/tag/okaba-baito" className={styles.tag}>岡場　バイト</a>
            <a href="/tag/taoji-baito" className={styles.tag}>田尾寺　バイト</a>
            <a href="/tag/sanda-arubaito" className={styles.tag}>三田市　アルバイト</a>
            <a href="/tag/sanda-baito" className={styles.tag}>三田市　バイト</a>
            <a href="/tag/kobe-baito" className={styles.tag}>神戸市　バイト</a>
            <a href="/tag/environment" className={styles.tag}>＃働きやすい環境</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
