import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import logoImage from '@/assets/image/logo_header.png'
import styles from './Header.module.css'

const SCROLL_THRESHOLD = 80

// Navigation items matching live site
const NAV_ITEMS = [
  { path: '/', label: 'トップ' },
  { path: '/concept', label: 'コンセプト' },
  { path: '/service', label: 'サービス' },
  { path: '/recruit', label: '採用情報' },
  { path: '/column', label: 'コラム' },
  { path: '/faq', label: 'よくある質問' },
  { path: '/company', label: '会社概要' },
  { path: '/contact', label: 'アクセス' },
]

// Phone numbers
const PHONE_MAIN = '078-987-0902'
const PHONE_MOBILE = '080-7518-7910'
const BUSINESS_HOURS = '10:00〜19:00（日曜定休）'
const RECRUITMENT_TEXT = '軽貨物配送の求人なら神戸市にある株式会社Juggaar Japan'

export function Header(): React.ReactElement {
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [isCompact, setIsCompact] = useState(false)
  const lastScrollY = useRef(0)

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev)
  }, [])

  // Hide header on scroll down, show on scroll up. When shown after scroll up, compact (logo + nav only).
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      const goingUp = y < lastScrollY.current
      lastScrollY.current = y

      if (y <= SCROLL_THRESHOLD) {
        setHeaderVisible(true)
        setIsCompact(false)
        return
      }
      if (goingUp) {
        setHeaderVisible(true)
        setIsCompact(true)
      } else {
        setHeaderVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
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

  const headerClass = [
    styles.header,
    !headerVisible && styles.headerHidden,
    isCompact && styles.headerCompact,
  ].filter(Boolean).join(' ')

  return (
    <header className={headerClass}>
      {/* Single header bar: logo left, three lines right. Margins 100px, no container. */}
      <div className={styles.headerInner}>
        {/* Left: Logo */}
        <div className={styles.logo}>
          <RouterLink to="/" className={styles.logoLink} aria-label="ホーム">
            <img src={logoImage} alt="Juggaar Japan" className={styles.logoImage} />
          </RouterLink>
        </div>

        {/* Right: Three lines (desktop). Line1 & Line2 hidden in compact mode. */}
        <div className={styles.headerRight}>
          {!isCompact && (
            <div className={styles.headerLine1}>
              {RECRUITMENT_TEXT}
            </div>
          )}
          {!isCompact && (
          <div className={styles.headerLine2}>
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
            <div className={styles.headerButtons}>
              <RouterLink to="/contact" className={`${styles.topBarBtn} ${styles.topBarBtnPrimary}`}>
                お問い合わせはこちら
              </RouterLink>
              <a
                href="https://juggaarjapan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.topBarBtn} ${styles.topBarBtnOutline}`}
              >
                オフィシャルサイトへ
                <ExternalLinkIcon className={styles.topBarBtnIcon} />
              </a>
            </div>
          </div>
          )}
          <nav className={styles.headerLine3} aria-label="メインメニュー">
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
            お問い合わせはこちら
          </RouterLink>
          <a
            href="https://juggaarjapan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.mobileBtn} ${styles.mobileBtnOutline}`}
            onClick={closeMenu}
          >
            オフィシャルサイトへ
            <ExternalLinkIcon className={styles.topBarBtnIcon} />
          </a>
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

// External link icon (overlapping squares)
function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-1 16H5V7h4V5H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2v-8h-2v7H13z" />
    </svg>
  )
}



export default Header
