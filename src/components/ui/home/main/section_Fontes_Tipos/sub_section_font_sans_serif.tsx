import { TypographyH3, TypographyP } from '@/components/tipografia/tipografia'
import ImgSans from '@/imgs/img-sans-serif.png'
import Image from 'next/image'
import AnimateContent from '../../animateContent'
import ContainerParagrafos from './containerParagrafos'

function Sub_Section_Font_Sans_Serif() {
    return (
        <AnimateContent className="FontSans mt-5" direction="left">
            <section className="flex flex-col gap-5">
                <TypographyH3 className="font-robotoSerif">
                    Sans Serif
                </TypographyH3>
                <ContainerParagrafos className="@5xl:gap-0 @7xl:gap-5">
                    <TypographyP className="font-robotoSans">
                        Bem, acredito que agora ficou fácil, né?A fonte sem
                        serifa é aquela retinha, que não tem os prolongamentos
                        característicos da fonte serifada.
                    </TypographyP>
                    <div className="relative h-24 overflow-hidden">
                        <Image
                            src={ImgSans}
                            alt="imagem de exemplo de uma fonte sem-serifa"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <TypographyP className="font-robotoSans">
                        Uma fonte sem serifa é usada para textos curtos.
                    </TypographyP>
                    <TypographyP className="font-robotoSans">
                        Apesar disso, a ABNT não se opõe ao uso da fonte Arial
                        para trabalhos acadêmicos, apesar de ser mais comum o
                        uso da Times New Roman, pelo conforto de leitura já
                        mencionado.
                    </TypographyP>
                    <TypographyP className="font-robotoSans">
                        O que trabalhos acadêmicos têm a ver com design
                        gráfico?Talvez pouco, mas achei um bom exemplo para
                        dizer que você não precisa se apegar a regras: uma
                        combinação inteligente de tipografia pode enriquecer e
                        muito o seu material.
                    </TypographyP>
                </ContainerParagrafos>
            </section>
        </AnimateContent>
    )
}

export default Sub_Section_Font_Sans_Serif
