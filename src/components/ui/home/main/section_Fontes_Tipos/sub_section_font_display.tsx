import { TypographyH3, TypographyP } from '@/components/tipografia/tipografia'
import AnimateContent from '../../animateContent'

function Sub_Section_Font_Display() {
    return (
        <AnimateContent
            className="fontDisplay mt-5 @7xl:relative @7xl:-top-3 @7xl:h-fit"
            direction="left"
        >
            <section className="flex flex-col gap-5">
                <TypographyH3 className="font-ibmSerif">Display</TypographyH3>
                <TypographyP className="font-robotoSans">
                    As fontes display são aquelas mais “artísticas”, que não se
                    enquadram nas classificações anteriores.
                </TypographyP>

                <TypographyP className="font-robotoSans">
                    São fontes comemorativas, mais enfeitadas, que podem trazer
                    no alfabeto símbolos e figuras, como animais e objetos, ou
                    remetem à ideia de festa, quadrinhos, tecnologia, etc
                </TypographyP>
                <TypographyP className="font-robotoSans">
                    .Nem preciso dizer que é preciso cuidado na hora de utilizar
                    uma fonte display, não é?
                </TypographyP>
                <TypographyP className="font-robotoSans">
                    Nem pense em escrever um artigo com esta fonte, pois a
                    leitura será, sem dúvida, prejudicada.
                </TypographyP>
                <TypographyP className="font-robotoSans">
                    No entanto, ela pode complementar ou destacar seu material,
                    se bem utilizada (e bem escolhida!).
                </TypographyP>
            </section>
        </AnimateContent>
    )
}

export default Sub_Section_Font_Display
