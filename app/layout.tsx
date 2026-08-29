import '../styles/globals.css'
// import SmoothScroll from '@/Components/SmoothScroll'
// import Cursor from '@/Components/Cursor'

export const metadata = {
  title: 'Feivel Qutby',
  description: 'Portfolio',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Cursor /> */}
        {children}
      </body>
    </html>
  )
}