import React, { useState } from 'react'
import styles from './EntryPage.module.css'

interface FormData {
  name: string
  furigana: string
  phone: string
  email: string
  age: string
  position: string
  message: string
  privacy: boolean
}

const POSITIONS = [
  '宅配ドライバー',
  'ポスティングスタッフ',
  'チャーター便ドライバー',
  '営業スタッフ',
  'その他',
]

export function EntryPage(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    furigana: '',
    phone: '',
    email: '',
    age: '',
    position: '',
    message: '',
    privacy: false,
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.page}>
        <div className={styles.pageHeader}>
          <div className={styles.container}>
            <h1 className={styles.pageTitle}>エントリーフォーム</h1>
          </div>
        </div>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✓</div>
              <h2 className={styles.successTitle}>エントリー完了</h2>
              <p className={styles.successText}>
                ご応募いただきありがとうございます。<br />
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
      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>エントリーフォーム</h1>
          <p className={styles.pageSubtitle}>ENTRY</p>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <p className={styles.formIntro}>
              株式会社Juggaar Japanへのご応募ありがとうございます。<br />
              以下のフォームに必要事項をご記入の上、送信してください。
            </p>

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
                <label htmlFor="furigana" className={styles.label}>
                  フリガナ <span className={styles.required}>必須</span>
                </label>
                <input
                  type="text"
                  id="furigana"
                  name="furigana"
                  value={formData.furigana}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="ヤマダ タロウ"
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
                <label htmlFor="age" className={styles.label}>
                  年齢 <span className={styles.required}>必須</span>
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="30"
                  min="18"
                  max="99"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="position" className={styles.label}>
                  希望職種 <span className={styles.required}>必須</span>
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className={styles.select}
                >
                  <option value="">選択してください</option>
                  {POSITIONS.map(pos => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  自己PR・備考
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={6}
                  placeholder="自己PRや質問などがあればご記入ください"
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
                  {submitting ? '送信中...' : 'エントリーする'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EntryPage
