import styles from './LineBanner.module.css'

interface LineBannerProps {
  lineUrl?: string
}

const DEFAULT_LINE_URL = 'https://lin.ee/4K8fXOCc8'

export function LineBanner({ lineUrl = DEFAULT_LINE_URL }: LineBannerProps): JSX.Element {
  return (
    <section className={styles.section}>
      {/* Cyan Header Bar */}
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>公式LINEご登録のお願い</h2>
      </div>

      {/* Step-by-step Instructions */}
      <div className={styles.body}>
        <div className={styles.steps}>
          <p className={styles.stepText}>下記URLクリック</p>
          <span className={styles.arrow}>⇩</span>

          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkPreview}
          >
            <span className={styles.linkUrl}>{lineUrl}</span>
            <span className={styles.linkDesc}>
              株式会社 Juggaar Japan's LINE official account profile page. Add them as a friend for the latest news.
            </span>
          </a>

          <span className={styles.arrow}>⇩</span>
          <p className={styles.stepText}>追加後、アナタのフルネームを送信</p>
          <span className={styles.arrow}>⇩</span>
          <p className={styles.stepText}>直接、当社Staffとやり取りStart！！</p>
        </div>
      </div>
    </section>
  )
}

export default LineBanner
