import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

function NavLink({
    className,
    children,
    href = '#',
}: React.ComponentProps<'a'>) {
    return (
        <Link
            href={href}
            className={cn(
                'text-xl uppercase font-cinzel text-slate-950 transition-colors block @5xl:inline-block @5xl:hover:underline',
                className
            )}
        >
            {children}
        </Link>
    )
}

export default NavLink
