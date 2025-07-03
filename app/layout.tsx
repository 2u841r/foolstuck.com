import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fool Stuck vs Full Stack',
  description: 'Fool Stuck vs Full Stack'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
