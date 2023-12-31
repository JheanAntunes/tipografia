import NavLinks from './NavLinks'
import MenuMobile from './menuMobile/MenuMobile'
import NavSeparador from './navSeparador'

export default function Nav() {
    return (
        <>
            <nav>
                <NavLinks className="hidden @4xl:flex @4xl:gap-5">
                    <NavSeparador />
                </NavLinks>
                <MenuMobile className="absolute inset-y-0 left-0 flex w-80 flex-col gap-5 bg-slate-100 p-5 dark:bg-slate-900">
                    <NavLinks className="flex flex-col gap-5">
                        <NavSeparador className="h-[1px] w-full" />
                    </NavLinks>
                </MenuMobile>
            </nav>
        </>
    )
}
