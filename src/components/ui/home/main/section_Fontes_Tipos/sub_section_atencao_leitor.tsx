import { TypographyH3, TypographyP } from '@/components/tipografia/tipografia'
import AnimateContent from '../../animateContent'
import ContainerParagrafos from './containerParagrafos'

function Sub_Section_Atencao_Leitor() {
    return (
        <AnimateContent className="FontMaior mt-5 @7xl:mt-0" direction="left">
            <section className="flex flex-col gap-5 @7xl:relative @7xl:-top-20">
                <TypographyH3 className="max-w-3xl font-ibmSerif">
                    Como Usar Fontes Maiores e{' '}
                    <br className="hidden @5xl:block" /> Negrito Para Chamar a{' '}
                    <br className="hidden @5xl:block" />
                    Atenção do Leitor
                </TypographyH3>
                <ContainerParagrafos className="gap-5">
                    <TypographyP className="font-robotoSans">
                        Uma forma de conduzir a leitura do usuário é utilizando
                        contrastes de fonte. E quando falo em contraste, aqui,
                        não me refiro somente ao contraste de cores, como cor do
                        texto e cor do fundo.
                    </TypographyP>
                    <TypographyP className="font-robotoSans">
                        Me refiro a outras formas de contraste, como tamanhos,
                        tipos de fonte e versões da fonte, como negrito e
                        itálico.
                    </TypographyP>
                </ContainerParagrafos>
            </section>
        </AnimateContent>
    )
}

export default Sub_Section_Atencao_Leitor
