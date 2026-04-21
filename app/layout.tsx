import '../styles/globals.css'
import SmoothScroll from '@/Components/SmoothScroll'
import Cursor from '@/Components/Cursor'

export const metadata = {
  title: 'Feivel Qutby',
  description: 'Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Cursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}