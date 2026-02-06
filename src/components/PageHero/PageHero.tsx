import { Link } from 'react-router-dom'
import styles from './PageHero.module.css'

interface PageHeroProps {
  title: string
  titleEn?: string
  backgroundImage: string
  breadcrumbs?: { label: string; path?: string }[]
}

export function PageHero({ title, titleEn, backgroundImage, breadcrumbs }: PageHeroProps) {
  return (
    <section 
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        {titleEn && <span className={styles.titleEn}>{titleEn}</span>}
        <h1 className={styles.title}>{title}</h1>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className={styles.breadcrumbs}>
            <Link to="/">ホーム</Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                <span className={styles.separator}>›</span>
                {crumb.path ? (
                  <Link to={crumb.path}>{crumb.label}</Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  )
}

export default PageHero
