import { useState, useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'
import styles from '@/assets/css/Hero.module.css'

const ROTATE_INTERVAL_MS = 5000

interface HeroProps {
  images: string[]
  intervalMs?: number
  overlayTitle?: string
  overlaySubtitle?: string
}

export function Hero({
  images,
  intervalMs = ROTATE_INTERVAL_MS,
  overlayTitle,
  overlaySubtitle,
}: HeroProps): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length === 0) return
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [images.length, intervalMs])

  if (images.length === 0) return <Box as="section" className={styles.hero} aria-hidden />

  return (
    <Box
      as="section"
      className={styles.hero}
      aria-label="メインビジュアル"
    >
      <Box className={styles.slides}>
        {images.map((src, index) => (
          <Box
            key={src}
            className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}
            backgroundImage={`url(${src})`}
            aria-hidden={index !== activeIndex}
          />
        ))}
      </Box>
      {(overlayTitle != null || overlaySubtitle != null) && (
        <Box className={styles.overlay}>
          {overlayTitle != null && (
            <Text
              as="p"
              className={styles.overlayTitle}
              m={0}
              mb={2}
              paddingLeft="6rem"
              color="white"
              fontSize="2.25rem"
              fontWeight={700}
              lineHeight={1.35}
              textAlign="left"
            >
              {overlayTitle}
            </Text>
          )}
          {overlaySubtitle != null && (
            <Text
              as="p"
              className={styles.overlaySubtitle}
              m={0}           
              fontSize="1.3rem"
              fontWeight={400}
              color="white"
              lineHeight={1.5}
              textAlign="left"
              paddingLeft="6rem"
            >
              {overlaySubtitle}
            </Text>
          )}
        </Box>
      )}
    </Box>
  )
}
