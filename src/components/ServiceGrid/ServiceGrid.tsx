import { Link as RouterLink } from 'react-router-dom'
import styles from './ServiceGrid.module.css'

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  path: string
}

interface ServiceGridProps {
  services: ServiceItem[]
  title?: string
  subtitle?: string
}

// Default services matching reference site
const DEFAULT_SERVICES: ServiceItem[] = [
  {
    id: 'cargo',
    title: '貨物軽自動車運送事業',
    description: '神戸市を中心に、迅速で丁寧な軽貨物配送サービスを提供しております。',
    icon: <TruckIcon />,
    path: '/service',
  },
  {
    id: 'charter',
    title: 'チャーター便',
    description: 'お客様のご要望に合わせた専用車両での配送サービスです。',
    icon: <BoxIcon />,
    path: '/service/charter',
  },
  {
    id: 'spot',
    title: 'スポット便',
    description: '緊急配送や当日配送に対応したスポット便サービスです。',
    icon: <ClockIcon />,
    path: '/service/spot',
  },
  {
    id: 'posting',
    title: 'ポスティング事業',
    description: '地域密着型の誠実なポスティングサービスを提供しております。',
    icon: <MailIcon />,
    path: '/service/posting',
  },
]

export function ServiceGrid({
  services = DEFAULT_SERVICES,
  title = 'SERVICE',
  subtitle = '信頼できる集荷と配送のプロとして神戸市で高評価を獲得',
}: ServiceGridProps): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <RouterLink
              key={service.id}
              to={service.path}
              className={styles.card}
            >
              <div className={styles.cardIcon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <span className={styles.cardArrow}>
                <ArrowIcon />
              </span>
            </RouterLink>
          ))}
        </div>
      </div>
    </section>
  )
}

// Icons
function TruckIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 3h15v13H1V3z" />
      <path d="M16 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  )
}

function BoxIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export default ServiceGrid
