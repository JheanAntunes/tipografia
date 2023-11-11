import { TypographyH2, TypographyP } from '@/components/tipografia/tipografia'
import AnimateContent from '../../animateContent'
import ContainerParagrafos from './containerParagrafos'

function Sub_Section_Tipos_Fontes() {
    return (
        <AnimateContent className="Tipos mt-5" direction="left">
            <section className="flex flex-col gap-5 @5xl:gap-5">
                <TypographyH2 className="font-ibmSerif @5xl:text-3xl">
                    Tipos de fontes comuns
                </TypographyH2>
                <ContainerParagrafos className="5xl:gap-5">
                    <TypographyP className="font-robotoSans">
                        Na tipografia, as fontes se dividem entre algumas
                        classificações, conforme sua forma.
                    </TypographyP>
                    <TypographyP className="font-robotoSans">
                        Vou apresentar as 4 principais, mas não significa que
                        não existam outras formas de classificação do tipo, como
                        slab-serif, monospaced, gaélico, não-ocidental e muitos
                        outros.
                    </TypographyP>
                </ContainerParagrafos>
            </section>
        </AnimateContent>
    )
}

export default Sub_Section_Tipos_Fontes
