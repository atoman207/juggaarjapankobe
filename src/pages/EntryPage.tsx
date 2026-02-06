import React, { useState } from 'react'
import { Breadcrumb } from '../components/Breadcrumb'
import styles from './EntryPage.module.css'

interface FormData {
  name: string
  contact: string
  email: string
  subject: string
  gender: string
  postalCode: string
  address: string
  birthdate: string
  ageCategory: string
  storeRelation: string
  resume: File | null
  careerHistory: File | null
  message: string
}

export function EntryPage(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    contact: '',
    email: '',
    subject: '',
    gender: '',
    postalCode: '',
    address: '',
    birthdate: '',
    ageCategory: '',
    storeRelation: '',
    resume: null,
    careerHistory: null,
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: 'resume' | 'careerHistory') => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({
      ...prev,
      [fieldName]: file,
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
      <Breadcrumb 
        items={[
          { label: '神戸市の配送・株式会社Juggaar Japan', path: '/' },
          { label: 'エントリー' }
        ]}
      />

      <div className={styles.pageHeader}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>エントリーフォーム</h1>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>ENTRY</h2>
            <p className={styles.sectionSubtitle}>エントリーフォーム</p>
          </div>

          <div className={styles.infoBox}>
            <p className={styles.infoTitle}>&lt;個人情報のご利用目的&gt;</p>
            <ul className={styles.infoList}>
              <li>お客様よりお預かりした個人情報は、媒体で告知した以外の人材派遣、紹介目的では使用しません。</li>
              <li>キャリアに応じて面接のご案内がございます。まずはエントリーしてください。中途エントリーも大歓迎です。その場合もドライバー採用まで検討しております。</li>
            </ul>
          </div>

          <div className={styles.formWrapper}>
            <p className={styles.formIntro}>
              働きやすずを数値化サービスで、媒体で告知させていただきありがという弊社です。<br />
              求人応募をご希望の方は、以下のフォームに入力してお問い合わせください。
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
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact" className={styles.label}>
                  ご連絡先 <span className={styles.required}>必須</span>
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className={styles.input}
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
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>
                  件名 <span className={styles.required}>必須</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  性別 <span className={styles.required}>必須</span>
                </label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value="男性"
                      checked={formData.gender === '男性'}
                      onChange={handleChange}
                      required
                      className={styles.radio}
                    />
                    男性
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="gender"
                      value="女性"
                      checked={formData.gender === '女性'}
                      onChange={handleChange}
                      required
                      className={styles.radio}
                    />
                    女性
                  </label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="postalCode" className={styles.label}>
                  郵便番号
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="address" className={styles.label}>
                  住所
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="住所 郵便番号の右側の欄をダブルクリックして下さい。"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="postalCodeNote" className={styles.label}>
                  郵便番号
                </label>
                <input
                  type="text"
                  id="postalCodeNote"
                  name="postalCodeNote"
                  className={styles.input}
                  placeholder="住所は郵便番号の右側日に自動で入力されます。"
                  disabled
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="birthdate" className={styles.label}>
                  生年月日
                </label>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="ageCategory" className={styles.label}>
                  年齢区分
                </label>
                <select
                  id="ageCategory"
                  name="ageCategory"
                  value={formData.ageCategory}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">選択してください</option>
                  <option value="18-25">18-25歳</option>
                  <option value="26-35">26-35歳</option>
                  <option value="36-45">36-45歳</option>
                  <option value="46-55">46-55歳</option>
                  <option value="56+">56歳以上</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>
                  希望勤務地の続柄
                </label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="storeRelation"
                      value="有"
                      checked={formData.storeRelation === '有'}
                      onChange={handleChange}
                      className={styles.radio}
                    />
                    有
                  </label>
                  <label className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="storeRelation"
                      value="無"
                      checked={formData.storeRelation === '無'}
                      onChange={handleChange}
                      className={styles.radio}
                    />
                    無
                  </label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="resume" className={styles.label}>
                  履歴書添付
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={(e) => handleFileChange(e, 'resume')}
                  className={styles.fileInput}
                  accept=".pdf,.doc,.docx"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="careerHistory" className={styles.label}>
                  職務経歴書添付
                </label>
                <input
                  type="file"
                  id="careerHistory"
                  name="careerHistory"
                  onChange={(e) => handleFileChange(e, 'careerHistory')}
                  className={styles.fileInput}
                  accept=".pdf,.doc,.docx"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  ご連絡先 <span className={styles.required}>必須</span>
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

              <div className={styles.formActions}>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={submitting}
                >
                  {submitting ? '送信中...' : '入力内容を確認する'}
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
