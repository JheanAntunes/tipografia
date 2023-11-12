import { TypographyH3, TypographyP } from '@/components/tipografia/tipografia'
import AnimateContent from '../../animateContent'
import ContainerParagrafos from './containerParagrafos'

function Sub_Section_Hierarquinha() {
    return (
        <AnimateContent
            id="#hierarquinha"
            className="hierarquinha mt-5"
            direction="right"
        >
            <section
                className="flex flex-col gap-5 @5xl:gap-2 @7xl:gap-5"
                id="#hierarquinha"
            >
                <TypographyH3 className="font-ibmSerif @5xl:text-3xl">
                    Hierarquia: Guiando os Olhos do Usuário
                </TypographyH3>
                <ContainerParagrafos className="gap-5 @5xl:gap-2">
                    <TypographyP className="font-robotoSans">
                        Na hora de fazer o seu layout, é preciso considerar a
                        hierarquia das informações, de acordo com a sua intenção
                    </TypographyP>
                    <TypographyP className="font-robotoSans">
                        É um objetivo semelhante ao do call-to-action, que tanto
                        você lê no meu blog. Você precisa considerar que partes
                        do texto são mais importantes, que você espera que chame
                        mais atenção do leitor.
                    </TypographyP>
                    <TypographyP className="font-robotoSans">
                        Assim, você pode trabalhar com algumas características
                        que vão diferenciar essas partes do restante, chamando o
                        olhar do leitor para elas.
                    </TypographyP>
                    <TypographyP className="font-robotoSans">
                        Pode ser o caso de um título, um depoimento ou citação
                        no meio do texto, ou um box de informações.
                    </TypographyP>
                    <TypographyP className="font-robotoSans">
                        Dependendo dos elementos e formas trabalhadas, você
                        conseguirá criar uma hierarquia que vai direcionar a
                        leitura do usuário, de forma que ele siga exatamente a
                        ordem que você deseja.
                    </TypographyP>
                </ContainerParagrafos>
            </section>
        </AnimateContent>
    )
}

export default Sub_Section_Hierarquinha
