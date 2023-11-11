import { TypographyH2, TypographyP } from '@/components/tipografia/tipografia'
import ImgInvencao from '@/imgs/Invencao-gutenberg.jpg'
import Image from 'next/image'
import QualFonte from '../QualFonte'
import AnimateContent from '../animateContent'
import ContainerContent from '../containerContent'
import LinhaVerticalContent from '../linhaVerticalContent'
import ContainerParagrafos from './section_Fontes_Tipos/containerParagrafos'

function Section_History() {
    return (
        <section className="layoutResponsivo flex flex-col gap-5 overflow-hidden">
            <div className="flex flex-col items-center gap-5">
                <QualFonte className="block text-center">
                    Fonte Poppins & Opens Sans
                </QualFonte>
                <TypographyH2 className="text-center">Historia</TypographyH2>
            </div>
            <ContainerContent>
                <AnimateContent
                    direction="left"
                    className="col-span-full @5xl:col-span-1"
                >
                    <ContainerParagrafos>
                        <TypographyP className="max-w-4xl font-openSans leading-normal text-slate-900">
                            O processo de impressão tipográfico tem sua origem
                            com a criação dos tipos móveis, realizada pelo
                            alemão Gutenberg, no início do século XV.
                        </TypographyP>
                        <TypographyP>
                            Com a invenção, a imprensa foi rapidamente difundida
                            na Europa, e chegou na América Latina pelo México,
                            em 1539
                        </TypographyP>
                        <TypographyP>
                            .No Brasil, entretanto, essa indústria chegou tarde.
                            Isso porque a corte portuguesa não permitia a
                            entrada de tipografias. por aqui.
                        </TypographyP>
                        <TypographyP>
                            Somente em 1808 que o país começou a contar com esse
                            tipo de impressão. Até então, eram utilizadas
                            prensas, em que utilizava-se uma matriz e, com ela,
                            imprimia-se cada folha individualmente. capazes de
                            alcançar.
                        </TypographyP>
                        <TypographyP>
                            Até 1822, a Imprensa Régia, com suas prensas de
                            mesa, detinham o monopólio de impressões
                            brasileiras. Com a independência do Brasil,
                            iniciou-se o processo de evolução das prensas e
                            métodos de impressão, com diversos novos modelos.
                        </TypographyP>
                        <TypographyP>
                            Até 1970, em que o sistema offset roubou a cena por
                            ser mais adequado às grandes tiragens da indústria
                            gráficas.
                        </TypographyP>
                        <TypographyP>
                            Até Com isso, método de impressão tipográfico perdeu
                            espaço, mas não foi extinto. Isso porque ele tem
                            características peculiares, com resultados que
                            outros processos não são
                        </TypographyP>
                    </ContainerParagrafos>
                </AnimateContent>
                <LinhaVerticalContent />
                <AnimateContent
                    direction="right"
                    className="hidden @5xl:flex @5xl:flex-col @5xl:justify-center"
                >
                    <Image
                        src={ImgInvencao}
                        alt="Imagem da maquina de imprensa de gutenberg"
                        height={340}
                        width={610}
                    />
                </AnimateContent>
            </ContainerContent>
        </section>
    )
}

export default Section_History
