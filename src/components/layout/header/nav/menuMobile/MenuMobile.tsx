'use client'
import { Button } from '@/components/ui/button'
import useToggle from '@/hooks/useToggle'
import { AnimatePresence } from 'framer-motion'
import NavSeparador from '../navSeparador'
import MenuConteudo, { MenuProps } from './MenuConteudo'
import MenuFundo from './menuFundo'

function MenuMobile({ children, variant, className, direction }: MenuProps) {
    const { toggle, setToggle } = useToggle()

    const handleClickToCloseMenu = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (e.currentTarget === e.target) {
            setToggle(false)
        }
    }

    const handleClickMenuContentLink = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (e.currentTarget !== e.target) {
            setToggle(false)
        }
    }

    return (
        <>
            <Button
                className="bg-transparent font-cinzel text-xl uppercase text-slate-950 hover:bg-transparent @4xl:hidden"
                onClick={() => {
                    setToggle(!toggle)
                }}
                aria-label={toggle ? 'Fechar menu' : 'Abrir Menu'}
                aria-expanded={toggle}
            >
                {toggle ? 'FECHAR' : 'MENU'}
            </Button>
            <AnimatePresence>
                {toggle && (
                    <MenuFundo onClick={handleClickToCloseMenu}>
                        <MenuConteudo
                            variant={variant}
                            className={className}
                            onClick={handleClickMenuContentLink}
                            direction={direction}
                        >
                            <Button
                                className="bg-transparent font-cinzel text-xl uppercase text-slate-950 hover:bg-transparent @4xl:hidden"
                                onClick={() => {
                                    setToggle(false)
                                }}
                                aria-expanded={true}
                                aria-label="Fechar o menu"
                            >
                                Fechar
                            </Button>
                            <NavSeparador className="h-[1px] w-full" />
                            {children}
                        </MenuConteudo>
                    </MenuFundo>
                )}
            </AnimatePresence>
        </>
    )
}

export default MenuMobile
