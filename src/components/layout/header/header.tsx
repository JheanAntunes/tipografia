import ThemaToggle from '@/components/ui/darkMode'
import Nav from './nav/nav'

function Header() {
    return (
        <header className="layoutResponsivo flex h-16 items-center justify-center gap-5">
            <Nav />
            <ThemaToggle />
        </header>
    )
}

export default Header
