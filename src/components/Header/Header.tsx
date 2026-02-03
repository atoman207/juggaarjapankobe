import React, { useState, useCallback, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import logoImage from '@/assets/image/logo_header.png'
import styles from './Header.module.css'

// Navigation items
const NAV_ITEMS = [
  { path: '/', label: 'ホーム' },
  { path: '/concept', label: 'コンセプト' },
  { path: '/service', label: 'サービス' },
  { path: '/recruit', label: '採用情報' },
  { path: '/staff', label: 'スタッフ' },
  { path: '/faq', label: 'よくある質問' },
  { path: '/company', label: '会社概要' },
  { path: '/blog', label: 'ブログ' },
]

// Phone numbers
const PHONE_MAIN = '078-987-0902'
const PHONE_MOBILE = '080-7518-7910'
const BUSINESS_HOURS = '10:00〜19:00（日曜定休）'

export function Header(): React.ReactElement {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [closeMenu])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={styles.header}>
      {/* Top Bar with Phone Numbers */}
      <div className={styles.headerTop}>
        <div className={styles.headerTopInner}>
          <div className={styles.phoneNumbers}>
            <div className={styles.phoneItem}>
              <PhoneIcon className={styles.phoneIcon} />
              <a href={`tel:${PHONE_MAIN.replace(/-/g, '')}`} className={styles.phoneLink}>
                {PHONE_MAIN}
              </a>
            </div>
            <div className={styles.phoneItem}>
              <PhoneIcon className={styles.phoneIcon} />
              <a href={`tel:${PHONE_MOBILE.replace(/-/g, '')}`} className={styles.phoneLink}>
                {PHONE_MOBILE}
              </a>
            </div>
          </div>
          <span className={styles.businessHours}>{BUSINESS_HOURS}</span>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.headerMain}>
        <div className={styles.headerMainInner}>
          {/* Logo */}
          <div className={styles.logo}>
            <RouterLink to="/" className={styles.logoLink} aria-label="ホーム">
              <img src={logoImage} alt="Juggaar Japan" className={styles.logoImage} />
            </RouterLink>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.path} className={styles.navItem}>
                  <RouterLink to={item.path} className={styles.navLink}>
                    {item.label}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Buttons */}
          <div className={styles.headerButtons}>
            <RouterLink to="/contact" className={`${styles.headerBtn} ${styles.headerBtnPrimary}`}>
              お問い合わせ
            </RouterLink>
            <RouterLink to="/entry" className={`${styles.headerBtn} ${styles.headerBtnOutline}`}>
              エントリー
            </RouterLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`${styles.mobileMenuBtn} ${menuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.open : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <nav className={`${styles.mobileDrawer} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.mobileDrawerHeader}>
          <img src={logoImage} alt="Juggaar Japan" className={styles.logoImage} style={{ height: 36 }} />
          <button
            type="button"
            className={styles.mobileCloseBtn}
            onClick={closeMenu}
            aria-label="メニューを閉じる"
          >
            ×
          </button>
        </div>

        <ul className={styles.mobileNavList}>
          {NAV_ITEMS.map((item) => (
            <li key={item.path} className={styles.mobileNavItem}>
              <RouterLink to={item.path} className={styles.mobileNavLink} onClick={closeMenu}>
                {item.label}
              </RouterLink>
            </li>
          ))}
        </ul>

        <div className={styles.mobileButtons}>
          <RouterLink
            to="/contact"
            className={`${styles.mobileBtn} ${styles.mobileBtnPrimary}`}
            onClick={closeMenu}
          >
            お問い合わせ
          </RouterLink>
          <RouterLink
            to="/entry"
            className={`${styles.mobileBtn} ${styles.mobileBtnOutline}`}
            onClick={closeMenu}
          >
            エントリー
          </RouterLink>
        </div>

        <div className={styles.mobilePhones}>
          <div className={styles.mobilePhoneItem}>
            <PhoneIcon className={styles.phoneIcon} />
            <a href={`tel:${PHONE_MAIN.replace(/-/g, '')}`} className={styles.mobilePhoneLink}>
              {PHONE_MAIN}
            </a>
          </div>
          <div className={styles.mobilePhoneItem}>
            <PhoneIcon className={styles.phoneIcon} />
            <a href={`tel:${PHONE_MOBILE.replace(/-/g, '')}`} className={styles.mobilePhoneLink}>
              {PHONE_MOBILE}
            </a>
          </div>
          <p className={styles.mobileHours}>{BUSINESS_HOURS}</p>
        </div>
      </nav>
    </header>
  )
}

// Simple Phone Icon SVG
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      width="16"
      height="16"
    >
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

export default Header
