'use client'
import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import React from 'react'

const menuVariants = cva(
    'flex flex-col gap-5 inset-y-0 w-80 bg-slate-100 p-5 absolute',
    {
        variants: {
            variant: {
                right: 'right-0 border-l border-solid border-slate-950 shadow',
                left: 'left-0 border-r border-solid border-slate-950 shadow',
            },
        },
        defaultVariants: {
            variant: 'left',
        },
    }
)

const motionVariants = (direction: 'right' | 'left' | null | undefined) => {
    return {
        closed: {
            opacity: 0,
            x: direction === 'right' ? '100%' : '-100%',
            transition: { duration: 1 },
        },
        open: {
            x: 0,
            opacity: 1,
            transition: { duration: 1 },
        },
    }
}

export interface MenuProps
    extends React.ComponentProps<'div'>,
        VariantProps<typeof menuVariants> {}

function MenuConteudo({
    variant,
    className,
    children,
    onClick,
    ...props
}: MenuProps) {
    return (
        <motion.div
            variants={motionVariants(variant)}
            initial={'closed'}
            animate={'open'}
            exit={'closed'}
            className={cn(menuVariants({ variant, className }))}
            onClick={onClick}
        >
            {children}
        </motion.div>
    )
}

export default MenuConteudo
