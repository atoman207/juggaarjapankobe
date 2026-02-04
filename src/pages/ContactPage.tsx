import { useState } from 'react'
import { PageHero } from '@/components/PageHero'
import styles from './ContactPage.module.css'

// Import images
import heroImg from '@/assets/image/hero_contact.jpg'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
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
        titleEn="CONTACT"
        backgroundImage={heroImg}
        breadcrumbs={[{ label: 'お問い合わせ' }]}
      />

      {/* Contact Info Section */}
      <section className={styles.infoSection}>
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📞</span>
              <h3>お電話でのお問い合わせ</h3>
              <a href="tel:0789870902" className={styles.phoneNumber}>078-987-0902</a>
              <p className={styles.infoNote}>営業時間 10:00～19:00（日曜定休）</p>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>💬</span>
              <h3>LINEでのお問い合わせ</h3>
              <p className={styles.infoText}>公式LINEからもお気軽にどうぞ</p>
              <a href="#" className={styles.lineButton}>友だち追加</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <h2 className={styles.formTitle}>メールでのお問い合わせ</h2>
          
          {isSubmitted ? (
            <div className={styles.successMessage}>
              <span className={styles.successIcon}>✓</span>
              <h3>お問い合わせありがとうございます</h3>
              <p>内容を確認の上、担当者よりご連絡いたします。</p>
            </div>
          ) : (
            <>
              <div className={styles.privacyBox}>
                <h4>個人情報の取り扱いについて</h4>
                <div className={styles.privacyContent}>
                  <p>
                    お客様からお預かりした個人情報は、お問い合わせへの対応および確認のためのご連絡に利用いたします。お客様の同意なく、第三者に開示・提供することはありません。
                  </p>
                  <p>
                    個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。<br />
                    株式会社Juggaar Japan<br />
                    TEL：078-987-0902
                  </p>
                </div>
              </div>
              
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    お名前 <span className={styles.required}>必須</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="山田 太郎"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    メールアドレス <span className={styles.required}>必須</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    placeholder="example@email.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="090-1234-5678"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>
                    お問い合わせ種別
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="">選択してください</option>
                    <option value="service">サービスについて</option>
                    <option value="estimate">お見積りのご依頼</option>
                    <option value="recruit">採用について</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    お問い合わせ内容 <span className={styles.required}>必須</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                    rows={6}
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleChange}
                      required
                    />
                    <span>個人情報の取り扱いに同意する</span>
                  </label>
                </div>

                <button type="submit" className={styles.submitButton}>
                  送信する
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default ContactPage
