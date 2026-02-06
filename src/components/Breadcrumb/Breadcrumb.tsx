import React from 'react'
import { Link } from 'react-router'
import styles from './Breadcrumb.module.css'

interface BreadcrumbItem {
  label: string
  path?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps): React.ReactElement {
  return (
    <nav className={styles.breadcrumb}>
      <div className={styles.container}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span className={styles.separator}>&gt;</span>}
            {item.path ? (
              <Link to={item.path} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.current}>{item.label}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  )
}

export default Breadcrumb
