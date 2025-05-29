"use client"

import { useState } from "react"

interface ReliableImageProps {
  src: string
  alt: string
  className?: string
  fallbackSrc?: string
}

export function ReliableImage({
  src,
  alt,
  className = "",
  fallbackSrc = "/bustling-university-campus.png",
}: ReliableImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setImgSrc(fallbackSrc)
      setHasError(true)
    }
  }

  return (
    <img
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      className={className}
      onError={handleError}
      // style={{ minHeight: "200px", objectFit: "cover" }}
    />
  )
}

// Keep the default export for backward compatibility
export default ReliableImage
