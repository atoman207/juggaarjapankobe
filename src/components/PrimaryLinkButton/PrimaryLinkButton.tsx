import { Link } from 'react-router-dom'
import styles from './PrimaryLinkButton.module.css'

interface PrimaryLinkButtonProps {
  to: string
  children: React.ReactNode
}

/**
 * Reusable primary CTA button matching the first page (Home) link button style.
 * Use for section CTAs (e.g. サービスへ, 会社概要へ, 採用情報へ).
 */
export function PrimaryLinkButton({ to, children }: PrimaryLinkButtonProps): React.ReactElement {
  return (
    <Link to={to} className={styles.button}>
      {children}
    </Link>
  )
}
