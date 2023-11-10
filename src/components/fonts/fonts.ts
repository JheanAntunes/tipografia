import {
    Cinzel,
    IBM_Plex_Sans,
    IBM_Plex_Serif,
    Noto_Sans,
    Noto_Serif,
    Open_Sans,
    Roboto,
    Roboto_Serif,
} from 'next/font/google'

export const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-cinzel',
})

export const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-openSans',
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
export const robotoSans = Roboto({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-robotoSans',
})
export const robotoSerif = Roboto_Serif({
    subsets: ['latin'],
    weight: ['500'],
    variable: '--font-robotoSerif',
})

export const ibm_Plex_Sans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-ibmPlexSans',
})

export const ibm_Plex_Serif = IBM_Plex_Serif({
    subsets: ['latin'],
    weight: ['500'],
    variable: '--font-ibmPlexSerif',
})
