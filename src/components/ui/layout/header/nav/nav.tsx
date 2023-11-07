import MenuMobile from './menuMobile/MenuMobile'
import NavLinks from './menuMobile/NavLinks'
import NavSeparador from './navSeparador'
function Nav() {
    return (
        <nav>
            <NavLinks className="hidden @4xl:flex @4xl:gap-5">
                <NavSeparador />
            </NavLinks>
            <MenuMobile>
                {' '}
                <NavLinks className="flex flex-col gap-5">
                    <NavSeparador className="w-full h-[1px]" />
                </NavLinks>
            </MenuMobile>
        </nav>
    )
}

export default Nav
