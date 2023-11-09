import { TypographyH2, TypographyP } from '@/components/tipografia/tipografia'
import ImgLetrasImprensa from '@/imgs/img-letras-Impressa-ferro.jpg'
import Image from 'next/image'
import QualFonte from '../QualFonte'

function Section_O_Que_Tipografia() {
    return (
        <section className="layoutResponsivo flex flex-col gap-5 @3xl:grid @3xl:grid-cols-2">
            <div className="relative h-80 overflow-hidden rounded-md @3xl:h-auto">
                <Image
                    src={ImgLetrasImprensa}
                    alt="Imagem no tempo que pessoas imprimia as palavras com letras no molde de ferro."
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    priority
                    className="object-cover"
                />
            </div>
            <div className="order-first flex flex-col gap-5 @3xl:-order-none">
                <QualFonte className="font-robotoSerif">
                    Familia Roboto
                </QualFonte>
                <TypographyH2 className="font-robotoSerif text-2xl @lg:text-5xl @2xl:text-4xl">
                    O que é Tipografia ?
                </TypographyH2>
                <TypographyP className="font-robotoSans border-l-2 border-l-slate-600 pl-1 text-sm text-slate-600 @2xl:text-base">
                    Tipografia é, na verdade, a impressão dos tipos, sendo que
                    tipo é a fonte, ou a letra.
                </TypographyP>
                <TypographyP className="font-robotoSans text-lg @3xl:text-xl">
                    Antigamente, os tipógrafos usavam as letras em moldes de
                    ferro, por exemplo, para imprimir as palavras. Com o
                    processo, era natural que o papel acabasse com uma textura,
                    algo como um relevo baixo, em função da batida da impressão.
                </TypographyP>
            </div>
        </section>
    )
}

export default Section_O_Que_Tipografia
