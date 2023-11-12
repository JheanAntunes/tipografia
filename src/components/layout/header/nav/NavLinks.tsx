import { cn } from '@/lib/utils'
import { Fragment } from 'react'
import { dataLink } from './dataLink'
import NavLink from './navLink'
function NavLinks({
    className,
    children,
    ...props
}: React.ComponentProps<'ul'>) {
    return (
        <ul className={cn('', className)} {...props}>
            {dataLink.map(({ href, text }, index) => (
                <Fragment key={text}>
                    <li className="py-2 text-center @4xl:py-0">
                        <NavLink href={href}>{text}</NavLink>
                    </li>
                    {index + 1 < dataLink.length && <>{children}</>}
                </Fragment>
            ))}
        </ul>
    )
}

export default NavLinks
