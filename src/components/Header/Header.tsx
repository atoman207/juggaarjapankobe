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

// Social links
const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'https://www.facebook.com/juggaarjapan', icon: 'facebook' },
  { name: 'Twitter', url: 'https://twitter.com/juggaarjapan', icon: 'twitter' },
  { name: 'LINE', url: 'https://lin.ee/4K8fXOCc8', icon: 'line' },
  { name: 'Instagram', url: 'https://www.instagram.com/juggaarjapan/', icon: 'instagram' },
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
      {/* Top Bar with Phone Numbers and Social Icons */}
      <div className={styles.headerTop}>
        <div className={styles.headerTopInner}>
          <div className={styles.socialIcons}>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={social.name}
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
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
              お問い合わせはこちら
            </RouterLink>
            <a 
              href="https://juggaarjapan.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.headerBtn} ${styles.headerBtnOutline}`}
            >
              オフィシャルサイトへ
            </a>
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

// Social Icons
function SocialIcon({ name }: { name: string }) {
  const iconSize = 18
  const icons: Record<string, JSX.Element> = {
    facebook: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    twitter: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    line: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
    ),
    instagram: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  }
  return icons[name] || null
}

export default Header
