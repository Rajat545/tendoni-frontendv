import type { Metadata } from 'next'
import { Oswald, Merriweather, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const merriweather = Merriweather({
  weight :["300", "400", "700", "900"], 
  subsets: ['latin'] ,
  variable: '--font-merriweather',
});

export const poppins = Poppins({
  weight :["100","200","300","400","500","600","700", "800","900"],  
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const oswald = Oswald({
  weight :["300", "400", "600", "700"], 
  subsets: ['latin'] ,
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: 'Tendoni Group',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${merriweather.variable} ${oswald.variable} min-h-screen scroll-smooth overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
