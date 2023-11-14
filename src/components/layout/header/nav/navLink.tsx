'use client'
import { cn } from '@/lib/utils'
import { moveLeitorSection } from '@/utils/moveleitorSection'
import Link from 'next/link'
import React from 'react'

function NavLink({ className, children, href }: React.ComponentProps<'a'>) {
    return (
        <Link
            href={href!}
            className={cn(
                'block font-cinzel text-xl uppercase text-slate-950 transition-colors dark:text-slate-50 @5xl:inline-block @5xl:hover:underline',
                className
            )}
            onClick={() => {
                moveLeitorSection(href!)
            }}
            scroll={false}
        >
            {children}
        </Link>
    )
}

export default NavLink
