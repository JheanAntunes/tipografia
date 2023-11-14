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
import WrapperProgress_ScrollUp from '@/components/framer/wrapperPogress_Scroll_Up'
import Footer from '@/components/layout/footer/footer'
import Header from '@/components/layout/header/header'
import { ThemeProvider } from '@/components/ui/theme-provider'
import '@/styles/globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Tipografia',
    description: 'Site sobre tipografia para praticar',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang="pt-br"
            className={`${cinzel.variable} ${openSans.variable} ${notoSerfi.variable} ${notoSans.variable} ${robotoSans.variable} ${robotoSerif.variable} ${ibm_Plex_Sans.variable} ${ibm_Plex_Serif.variable} ${merriweatherSerif.variable} ${merriweatherSans.variable} 
            !scroll-smooth`}
            suppressHydrationWarning
        >
            <body className="font-openSans antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <WrapperProgress_ScrollUp />
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    )
}
