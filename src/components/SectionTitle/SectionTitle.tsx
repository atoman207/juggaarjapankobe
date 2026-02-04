import type { ReactNode } from 'react'
import styles from '@/assets/css/SectionTitle.module.css'

interface SectionTitleProps {
  children: ReactNode
  /** Use "light" for white text and underline on dark/image backgrounds */
  variant?: 'default' | 'light'
}

/**
 * Reusable section heading: center-aligned, stylish font,
 * underline (100% width, hover → 30% centered). Text color matches underline (default: sky blue; light: white).
 */
export function SectionTitle({ children, variant = 'default' }: SectionTitleProps): JSX.Element {
  const titleClass = variant === 'light' ? `${styles.title} ${styles.titleLight}` : styles.title
  const underlineClass = variant === 'light' ? `${styles.underline} ${styles.underlineLight}` : styles.underline
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <h2 className={titleClass}>{children}</h2>
        <span className={underlineClass} aria-hidden />
      </div>
    </div>
  )
}
