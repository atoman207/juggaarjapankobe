import React, { useState } from 'react'
import styles from './ContactPage.module.css'

interface FormData {
  name: string
  phone: string
  email: string
  message: string
  privacy: boolean
}

export function ContactPage(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    privacy: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.pageHeader}>
          <div className={styles.container}>
            <h1 className={styles.pageTitle}>お問い合わせ</h1>
          </div>
        </div>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>
              <h2 className={styles.successTitle}>送信完了</h2>
              <p className={styles.successText}>
                お問い合わせいただきありがとうございます。<br />
                担当者より折り返しご連絡させていただきます。
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>お問い合わせ</h1>
          <p className={styles.pageSubtitle}>CONTACT</p>
        </div>
      </div>

      {/* Contact Info */}
      <section className={styles.contactInfo}>
        <div className={styles.container}>
          <div className={styles.contactCards}>
            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon}>
                <PhoneIcon />
              </div>
              <h3 className={styles.contactCardTitle}>電話でのお問い合わせ</h3>
              <a href="tel:0789870902" className={styles.contactCardPhone}>078-987-0902</a>
              <p className={styles.contactCardHours}>営業時間: 10:00〜19:00（日曜定休）</p>
            </div>
            <div className={styles.contactCard}>
              <div className={styles.contactCardIcon}>
                <LineIcon />
              </div>
              <h3 className={styles.contactCardTitle}>LINEでのお問い合わせ</h3>
              <a
                href="https://lin.ee/4K8fXOCc8"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.lineButton}
              >
                LINEで友だち追加
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>メールでのお問い合わせ</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
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
                <label htmlFor="phone" className={styles.label}>
                  電話番号 <span className={styles.required}>必須</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="090-1234-5678"
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

              <div className={styles.formGroupCheckbox}>
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleChange}
                  required
                  className={styles.checkbox}
                />
                <label htmlFor="privacy" className={styles.checkboxLabel}>
                  <a href="/privacy" target="_blank" rel="noopener noreferrer">
                    プライバシーポリシー
                  </a>
                  に同意する
                </label>
              </div>

              <div className={styles.formActions}>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={submitting}
                >
                  {submitting ? '送信中...' : '送信する'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

// Icons
function PhoneIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

function LineIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  )
}

export default ContactPage
