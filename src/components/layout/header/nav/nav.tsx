import MenuMobile from './menuMobile/MenuMobile'
import NavLinks from './menuMobile/NavLinks'
import NavSeparador from './navSeparador'
function Nav() {
    return (
        <nav>
            <NavLinks className="hidden @4xl:flex @4xl:gap-5">
                <NavSeparador />
            </NavLinks>
            <MenuMobile className="absolute inset-y-0 left-0 flex w-80 flex-col gap-5 bg-slate-100 p-5">
                {' '}
                <NavLinks className="flex flex-col gap-5">
                    <NavSeparador className="h-[1px] w-full" />
                </NavLinks>
            </MenuMobile>
        </nav>
    )
}

export default Nav
