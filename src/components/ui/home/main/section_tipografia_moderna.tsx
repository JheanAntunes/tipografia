import { TypographyH2, TypographyP } from '@/components/tipografia/tipografia'
import QualFonte from '../QualFonte'
import AnimateContent from '../animateContent'
import ContainerContent from '../containerContent'
import LinhaVerticalContent from '../linhaVerticalContent'
import ContainerParagrafos from './section_Fontes_Tipos/containerParagrafos'

function SectionTipografiaModerna() {
    return (
        <section id="#moderna" className="layoutResponsivo overflow-hidden">
            <ContainerContent className="grid-cols-1 @4xl:grid-cols-2 @5xl:grid-cols-[1fr_4px_1fr]">
                <AnimateContent
                    direction="left"
                    className="mt-5 flex flex-col gap-5 border-none pb-0 @4xl:border-b-4 @4xl:border-solid @4xl:border-b-slate-950 @4xl:pb-5 @4xl:pr-5"
                >
                    <QualFonte className="font-ibmSerif">
                        Fonte IBM Sans & IBM Serif
                    </QualFonte>
                    <ContainerParagrafos>
                        <TypographyH2 className="font-ibmSerif">
                            Qual a Importância da{' '}
                            <span className="@4xl:hidden">
                                Tipografia Moderna?
                            </span>
                        </TypographyH2>
                        <TypographyP className="font-ibmSerif">
                            A indústria tipográfica é, literalmente, o início do
                            design gráfico e da comunicação imprensa, como um
                            todo. Por isso, conhecer e respeitar a história é
                            muito importante para manter viva a alma gráfica.
                        </TypographyP>
                        <TypographyP className="font-ibmSerif">
                            Entender o passado é uma importante etapa para que
                            fazer o presente. Conhecer a história pode auxiliar
                            muito na construção de uma visão crítica {'–'} e ela
                            é essencial para quem trabalha com design gráfico.
                        </TypographyP>
                        <TypographyP className="font-ibmSerif">
                            Não compreender o sistema tipográfico acaba sendo
                            uma limitação à criatividade do designer.
                        </TypographyP>
                        <TypographyP className="font-ibmSerif">
                            Com as novas tecnologias digitais, ficou ainda muito
                            mais fácil para que o profissional crie sua própria
                            tipografia e desenvolva seu alfabeto, criando
                            layouts e marcas únicas, completamente alinhadas ao
                            interesse e posicionamento da empresa.
                        </TypographyP>
                    </ContainerParagrafos>
                </AnimateContent>
                <LinhaVerticalContent />
                <AnimateContent
                    direction="right"
                    className="@4xl:mt-[3rem] @4xl:flex @4xl:flex-col @4xl:gap-5 @4xl:pl-5"
                >
                    <TypographyH2 className="hidden @4xl:block @4xl:font-ibmSerif">
                        Tipografia Moderna?
                    </TypographyH2>
                    <ContainerParagrafos>
                        <TypographyP className="mt-1 font-ibmSans @4xl:mt-0">
                            Além disso, é possível alinhar processos de
                            impressão atuais com o processo tipográfico, para
                            baixas tiragens e buscando uma apresentação única,
                            rica como uma gravura.
                        </TypographyP>
                        <TypographyP className="mt-1 font-ibmSans @4xl:mt-0">
                            Com o resgate do passado, um certo saudosismo, cada
                            vez mais forte nas novas gerações, será cada vez
                            mais comum retomarmos processos, conceitos, ideias e
                            valores de métodos já ultrapassados.
                        </TypographyP>
                        <TypographyP className="mt-1 font-ibmSans @4xl:mt-0">
                            Não à toa, existem diversos layouts, marcas e mesmo
                            design de ambientes lançando mão de uma identidade
                            mais retrô, vintage, que estão na moda hoje em dia.
                        </TypographyP>
                    </ContainerParagrafos>
                </AnimateContent>
            </ContainerContent>
        </section>
    )
}

export default SectionTipografiaModerna
