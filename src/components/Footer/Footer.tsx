import { useState, useEffect, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import logoImage from '@/assets/image/logo_header.png'
import styles from './Footer.module.css'

// Phone numbers
const PHONE_MAIN = '078-987-0902'
const PHONE_MOBILE = '080-7518-7910'

// Footer navigation links (flat list matching reference)
const FOOTER_LINKS = [
  { label: 'ホーム', path: '/' },
  { label: 'コンセプト', path: '/concept' },
  { label: '神戸市の配送・株式会社Juggaar Japanの口コミ情報', path: '/reviews' },
  { label: '神戸市の配送・株式会社Juggaar Japanのお客様の声', path: '/testimonials' },
  { label: '神戸市の配送・株式会社Juggaar Japanの評判', path: '/reputation' },
  { label: 'サービス・料金表', path: '/service' },
  { label: 'チャーター便（軽貨物貸切便）料金表', path: '/service/charter' },
  { label: 'ポスティング サービス内容', path: '/service/posting' },
  { label: 'ポスティング 料金表', path: '/service/posting-price' },
  { label: '貸し看板 料金表', path: '/service/signboard' },
  { label: '採用情報', path: '/recruit' },
  { label: '3ヶ月ごとにボーナスが!? 神戸市北区 軽貨物 ドライバー', path: '/recruit/driver' },
  { label: '週１のみでも！午前中のみでも！午後のみでも！ok！', path: '/recruit/part-time' },
  { label: 'ポスティングスタッフ【兵庫県全域】', path: '/recruit/posting-all' },
  { label: 'ポスティングスタッフ【神戸市北区】', path: '/recruit/posting-kita' },
  { label: 'ポスティングスタッフ【神戸市須磨区】', path: '/recruit/posting-suma' },
  { label: 'ポスティングスタッフ【神戸市垂水区】', path: '/recruit/posting-tarumi' },
  { label: '営業 セールススタッフ', path: '/recruit/sales' },
  { label: '継続確認 セールススタッフ', path: '/recruit/sales-support' },
  { label: 'スタッフ', path: '/staff' },
  { label: 'よくある質問', path: '/faq' },
  { label: '会社概要', path: '/company' },
  { label: '株式会社ジュガール ジャパン', path: '/company' },
  { label: 'ブログ', path: '/blog' },
  { label: 'コラム', path: '/column' },
  { label: 'メディア', path: '/media' },
  { label: 'お問い合わせ', path: '/contact' },
  { label: 'エントリー', path: '/entry' },
  { label: 'プライバシーポリシー', path: '/privacy' },
  { label: 'サイトマップ', path: '/sitemap' },
]

// Social links - each goes to its respective brand page
const SOCIAL_LINKS = [
  { name: 'Facebook', url: 'http://www.facebook.com/juggaarjapan', icon: 'facebook' },
  { name: 'X (Twitter)', url: 'https://twitter.com/juggaarjapan', icon: 'twitter' },
  { name: 'LINE', url: 'https://lin.ee/4K8fXOCc8', icon: 'line' },
  { name: 'Instagram', url: 'https://www.instagram.com/juggaarjapan', icon: 'instagram' },
]

function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function CtaBarContent(): JSX.Element {
  return (
    <div className={styles.footerCtaInner}>
      <div className={styles.footerCtaLeft}>
        <a href={`tel:${PHONE_MAIN.replace(/-/g, '')}`} className={styles.footerCtaPhoneLink}>
          <PhoneIcon />
          {PHONE_MAIN}
        </a>
        <span className={styles.footerCtaHours}>
          [営業時間] 10:00 ~ 19:00 / [定休日] 日曜日
        </span>
      </div>
      <div className={styles.footerCtaRight}>
        <RouterLink to="/contact" className={styles.footerCtaBtn}>
          お問い合わせはこちら
        </RouterLink>
        <RouterLink to="/" className={styles.footerCtaBtn}>
          オフィシャルサイトへ
        </RouterLink>
        <button
          type="button"
          className={styles.footerCtaScrollTop}
          onClick={scrollToTop}
          aria-label="ページトップへ"
        >
          <ScrollTopIcon />
        </button>
      </div>
    </div>
  )
}

export function Footer(): JSX.Element {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [footerInView, setFooterInView] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(false)
  const footerRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const checkScroll = (): void => {
      const scrollY = window.scrollY
      setIsScrollingUp(scrollY < lastScrollY.current)
      lastScrollY.current = scrollY

      const hero = document.querySelector('[data-hero]')
      if (hero) {
        const rect = hero.getBoundingClientRect()
        setShowScrollTop(rect.bottom <= 0)
      } else {
        setShowScrollTop(typeof window !== 'undefined' && scrollY > window.innerHeight)
      }
      const footer = footerRef.current
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        setFooterInView(footerRect.top < window.innerHeight)
      }
    }
    checkScroll()
    window.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      window.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  return (
    <>
      {/* Fixed CTA Bar at bottom - only when footer is not visible (scrolled down but not at footer yet) */}
      {showScrollTop && !footerInView && (
        <>
          <div className={styles.footerCtaFixed}>
            <div className={`${styles.footerCta} ${isScrollingUp ? styles.footerCtaScrollUp : ''}`}>
              <CtaBarContent />
            </div>
          </div>
          <div className={styles.footerCtaSpacer} aria-hidden="true" />
        </>
      )}

      {/* Main Footer - CTA bar at top (proper position), then nav/logo/social, then copyright strip at very bottom */}
      <footer className={styles.footer} ref={footerRef}>
        {/* CTA bar at very top of footer - visible when footer is in view */}
        {showScrollTop && (
          <div className={`${styles.footerCta} ${isScrollingUp ? styles.footerCtaScrollUp : ''}`}>
            <CtaBarContent />
          </div>
        )}

        <div className={styles.footerInner}>
          {/* Footer Navigation - Flat List */}
          <nav className={styles.footerNav} aria-label="フッターメニュー">
            <ul className={styles.footerNavList}>
              {FOOTER_LINKS.map((link, index) => (
                <li key={index}>
                  <RouterLink to={link.path} className={styles.footerNavLink}>
                    {link.label}
                  </RouterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Bottom - Logo and Social (match image: logo + row of dark-circle social icons) */}
          <div className={styles.footerBottom}>
            <RouterLink to="/juggaarjapan" className={styles.footerLogo}>
              <img src={logoImage} alt="Juggaar Japan" className={styles.footerLogoImage} />
            </RouterLink>
            <div className={styles.footerSocial}>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                >
                  <SocialIcon name={social.icon} className={styles.socialIcon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright strip at very bottom - sky blue background, white text */}
        <div className={styles.footerCopyrightBar}>
          <p className={styles.footerCopyrightBarText}>
            © {new Date().getFullYear()} 神戸市の配送は株式会社Juggaar Japan ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </>
  )
}

// Phone Icon (dark gray in light CTA bar)
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

// Scroll to top arrow
function ScrollTopIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28" aria-hidden>
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" />
    </svg>
  )
}

// Social Icons - stylish, commonly used brand glyphs
function SocialIcon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, JSX.Element> = {
    facebook: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.236 2.686.236v2.953h-1.513c-1.491 0-1.956.93-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z" />
      </svg>
    ),
    twitter: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    line: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314z" />
      </svg>
    ),
    instagram: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  }

  return icons[name] || null
}

export default Footer
