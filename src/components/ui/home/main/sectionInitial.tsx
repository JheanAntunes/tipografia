import { TypographyH1, TypographyP } from '../../tipografia/tipografia'
import QualFonte from '../QualFonte'

function SectionInitial() {
    return (
        <section className="layoutResponsivo flex flex-col items-center justify-center gap-5">
            <div className="inline-block">
                <QualFonte className="justify-self-start font-notoSerif">
                    Familia noto sans & serif
                </QualFonte>
                <TypographyH1 className="border-r-solid w-full animate-typewriter-typing overflow-hidden whitespace-nowrap border-r-4 border-r-slate-950 font-notoSerif text-5xl leading-normal transition-colors @sm:text-6xl @sm:leading-normal @xl:text-8xl @xl:leading-normal @3xl:border-r-8 @3xl:text-9xl @3xl:leading-relaxed">
                    Typography
                </TypographyH1>
            </div>
            <TypographyP className="text-center font-notoSans font-normal">
                <span className="font-notoSans text-lg font-medium uppercase">
                    Você presta maior atenção
                </span>
                <br />
                <span className="text-sm">na primeira parte do texto</span>
                <br />
                <span className="text-sm">do que nesta, né ?</span>
            </TypographyP>
        </section>
    )
}

export default SectionInitial
