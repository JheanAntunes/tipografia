import {
    TypographyH1,
    TypographyList,
    TypographyP,
    TypographySmall,
} from '@/components/tipografia/tipografia'
import Link from 'next/link'

function Footer() {
    return (
        <footer className="layoutResponsivo mb-16 flex flex-col gap-5">
            <TypographyH1 className="font-robotoSerif text-4xl @5xl:text-5xl">
                trechos retirado do{' '}
                <Link
                    href="https://neilpatel.com/br/blog/tipografia/"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="text-blue-500 underline"
                >
                    blog
                </Link>
            </TypographyH1>
            <TypographyP className="font-robotoSans">
                Recomendo que continuem a leitura pelo blog porque tem mais
                conteúdo.
            </TypographyP>
            <div className="gap-2">
                <TypographySmall className="max-w-3xl font-robotoSans">
                    Uma pequena lista que o blog apresenta que não coloquei no
                    site.
                </TypographySmall>
                <TypographyList className="font-robotoSans">
                    <li>Como funcionam as medidas tipográficas?</li>
                    <li>Como Escolher a Fonte Correta Para o Meu Site?</li>
                    <li>Trabalhe Bem o Tamanho da Fonte</li>
                    <li>A Opção de Combinar Fontes Pode Ser Interessante</li>
                </TypographyList>
            </div>
        </footer>
    )
}

export default Footer
