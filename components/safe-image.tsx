export function SafeImage({
  src,
  alt,
  className = "",
  width,
  height,
}: {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}) {
  // No event handlers, just a simple img element
  return <img src={src || "/placeholder.svg"} alt={alt} className={className} width={width} height={height} />
}
