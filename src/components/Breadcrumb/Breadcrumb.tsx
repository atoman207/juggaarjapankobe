import React from 'react'
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
            <span className={styles.crumb}>{item.label}</span>
          </React.Fragment>
        ))}
      </div>
    </nav>
  )
}

export default Breadcrumb
