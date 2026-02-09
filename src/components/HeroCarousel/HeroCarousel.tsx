import React, { useState, useEffect, useCallback } from 'react'
import styles from './HeroCarousel.module.css'

interface HeroCarouselProps {
  images: string[]
  intervalMs?: number
  title?: string
  subtitle?: string
  scrollTarget?: string
}

export function HeroCarousel({
  images,
  intervalMs = 5000,
  title,
  subtitle,
  scrollTarget = '#main',
}: HeroCarouselProps): React.ReactElement {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Auto-advance slides
  useEffect(() => {
    if (images.length <= 1) return

    const timer = setInterval(goToNext, intervalMs)
    return () => clearInterval(timer)
  }, [images.length, intervalMs, goToNext])

  return (
    <section className={styles.hero} data-hero>
      {/* Slides */}
      <div className={styles.slidesContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden={index !== currentIndex}
          />
        ))}
      </div>

      {/* Overlay: 0.7 background opacity (same when scrolling down or up) */}
      <div className={styles.heroOverlay} aria-hidden />

      {/* Overlay Content */}
      <div className={styles.overlay}>
        <div className={styles.overlayContent}>
          {title && <h1 className={styles.overlayTitle}>{title}</h1>}
          {subtitle && <p className={styles.overlaySubtitle}>{subtitle}</p>}
        </div>
      </div>

      {/* Hero bottom: down arrow (scroll to next section) + image indicator (3 lines) */}
      <div className={styles.heroBottom}>
        <a
          href={scrollTarget}
          className={styles.scrollDown}
          aria-label="次のセクションへ"
          onClick={(e) => {
            const el = document.querySelector(scrollTarget)
            if (el) {
              e.preventDefault()
              el.scrollIntoView({ behavior: 'smooth' })
            }
          }}
        >
          <ChevronDownIcon />
        </a>
        {images.length > 1 && (
          <div className={styles.lineIndicator} role="tablist" aria-label="表示中のスライド">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-label={`スライド ${index + 1}`}
                aria-selected={index === currentIndex}
                className={`${styles.line} ${index === currentIndex ? styles.lineActive : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            className={`${styles.navButton} ${styles.navPrev}`}
            onClick={goToPrev}
            aria-label="前のスライド"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            className={`${styles.navButton} ${styles.navNext}`}
            onClick={goToNext}
            aria-label="次のスライド"
          >
            <ChevronIcon direction="right" />
          </button>
        </>
      )}
    </section>
  )
}

// Chevron Icon Component (left/right)
function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

// Chevron Down Icon for scroll-to-next-section
function ChevronDownIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default HeroCarousel
