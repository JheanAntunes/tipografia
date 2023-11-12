import {
    cinzel,
    ibm_Plex_Sans,
    ibm_Plex_Serif,
    merriweatherSans,
    merriweatherSerif,
    notoSans,
    notoSerfi,
    openSans,
    robotoSans,
    robotoSerif,
} from '@/components/fonts/fonts'
import Footer from '@/components/layout/footer/footer'
import Header from '@/components/layout/header/header'
import '@/styles/globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Tipografia',
    description: 'Um site baseado em um blog para praticar.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="pt-br"
            className={`${cinzel.variable} ${openSans.variable} ${notoSerfi.variable} ${notoSans.variable} ${robotoSans.variable} ${robotoSerif.variable} ${ibm_Plex_Sans.variable} ${ibm_Plex_Serif.variable} ${merriweatherSerif.variable} ${merriweatherSans.variable}`}
        >
            <body className="font-openSans antialiased">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
