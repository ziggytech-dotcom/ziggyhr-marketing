import Image from 'next/image'

export function ZiggyHRLogo({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/press-assets/ziggyhr-wordmark-dark.png"
      alt="ZiggyHR"
      width={140}
      height={40}
      className={className}
      style={{ objectFit: 'contain' }}
      priority
    />
  )
}
