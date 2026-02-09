import { Link } from 'react-router-dom'
import styles from './PageHero.module.css'

interface PageHeroProps {
  title: string
  titleEn?: string
  backgroundImage?: string
  breadcrumbs?: { label: string; path?: string }[]
  /** When true, use white background and place breadcrumbs in a bar below the hero */
  whiteBackground?: boolean
}

export function PageHero({ title, titleEn, backgroundImage, breadcrumbs, whiteBackground }: PageHeroProps) {
  const isWhite = whiteBackground ?? !backgroundImage

  return (
    <>
      <section
        className={`${styles.hero} ${isWhite ? styles.heroWhite : ''}`}
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      >
        {!isWhite && <div className={styles.overlay} />}
        <div className={styles.content}>
          {titleEn && <span className={styles.titleEn}>{titleEn}</span>}
          <h1 className={styles.title}>{title}</h1>
        </div>
      </section>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className={styles.breadcrumbsBar}>
          <div className={styles.breadcrumbsBarInner}>
            <nav className={styles.breadcrumbs} aria-label="パンくず">
              {breadcrumbs.map((crumb, index) => (
                <span key={index}>
                  {index > 0 && <span className={styles.separator}> &gt; </span>}
                  {crumb.path ? (
                    <Link to={crumb.path}>{crumb.label}</Link>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default PageHero
