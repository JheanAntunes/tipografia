import AnimateY from '@/components/framer/animateY'
import { TypographyH2, TypographyP } from '@/components/tipografia/tipografia'
import QualFonte from '../QualFonte'

function Section_Font_Letras() {
    return (
        <section className="layoutResponsivo mt-5 overflow-hidden">
            <AnimateY className="flex flex-col gap-5 border-b-4 border-solid border-b-slate-950 pb-5 text-center">
                <QualFonte className="font-merriweatherSerif">
                    Familia Merriweather Sans & serif
                </QualFonte>
                <TypographyH2 className="font-merriweatherSerif">
                    Qual a diferença entre letras e fontes
                </TypographyH2>
                <TypographyP className="font-merriweatherSans mx-auto max-w-3xl">
                    o tipo de letra é uma coleção de caracteres tipográficos
                    criados com o mesmo desenho, formato ou atributo, como
                    Arial, Helvetica e Times New Roman. Já o tipo de fonte é um
                    subconjunto do anterior e define a sua aparência, como
                    formatação negrito, tamanho,estilo.
                </TypographyP>
            </AnimateY>
        </section>
    )
}

export default Section_Font_Letras
