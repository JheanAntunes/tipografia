import { Cinzel, Noto_Sans, Noto_Serif, Open_Sans } from 'next/font/google'

export const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-cinzel',
})

export const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-open-sans',
})

export const notoSerfi = Noto_Serif({
    subsets: ['latin'],
    weight: ['500'],
    variable: '--font-notoSerif',
})
export const notoSans = Noto_Sans({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-notoSans',
})
