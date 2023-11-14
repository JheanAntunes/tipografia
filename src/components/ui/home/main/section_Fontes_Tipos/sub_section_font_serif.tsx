import { TypographyH3, TypographyP } from '@/components/tipografia/tipografia'
import ImgSerif from '@/imgs/img-font-serif.png'
import Image from 'next/image'
import AnimateContent from '../../animateContent'
import ContainerParagrafos from './containerParagrafos'
function Sub_Section_Font_Serif() {
    return (
        <AnimateContent className="fontSerif mt-5" direction="right">
            <section className="flex flex-col gap-5">
                <TypographyH3 className="font-ibmSerif">Serif</TypographyH3>
                <TypographyP className="font-robotoSans">
                    A fonte serifada é aquela que tem pequenos traços e
                    prolongamentos nas extremidades da fonte.
                </TypographyP>
                <div className="relative h-28 overflow-hidden">
                    <Image
                        src={ImgSerif}
                        alt="Imagem de exemplo para tipo de fonte serifada"
                        fill
                        className="object-contain"
                    />
                </div>
                <ContainerParagrafos className="@5xl:gap-3 @7xl:gap-5">
                    <TypographyP className="font-robotoSans">
                        As fontes serifadas são muito utilizadas para longos
                        textos, como jornais e revistas. Isso porque ela é mais
                        confortável aos olhos para leituras demoradas.
                    </TypographyP>
                    <TypographyP>
                        Existe mais de um tipo de serifa, que são classificadas
                        em 4 grupos: estilo antigo, serifa de transição, moderno
                        e laje.
                    </TypographyP>
                    <TypographyP>
                        As fontes serifadas e as sem serifas são os dois
                        principais tipos de classificação tipográfica.
                    </TypographyP>
                </ContainerParagrafos>
            </section>
        </AnimateContent>
    )
}

export default Sub_Section_Font_Serif
