'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ZoomableImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function ZoomableImage({
  src,
  alt,
  width,
  height,
  className,
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Lock body scroll while zoomed in
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`cursor-zoom-in transition-transform duration-200 hover:scale-[1.02] ${className ?? ''}`}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl leading-none cursor-pointer"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
          >
            &times;
          </button>

          <div
            className="relative flex items-center justify-center animate-zoomIn"
            style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              unoptimized
              className="rounded-lg cursor-zoom-out"
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  )
}