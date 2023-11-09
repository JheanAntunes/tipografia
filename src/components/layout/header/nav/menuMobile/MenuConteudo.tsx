'use client'
import {
    animateSection,
    menuVariants,
} from '@/components/framer/framerVariants'
import { cn } from '@/lib/utils'
import { VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import React, { forwardRef } from 'react'

export interface MenuProps
    extends React.ComponentProps<'div'>,
        VariantProps<typeof menuVariants> {
    direction?: 'left' | 'right'
}

// eslint-disable-next-line react/display-name
const MenuConteudoRef = forwardRef<HTMLDivElement, MenuProps>(
    (
        { variant, className, children, style, onClick, direction = 'left' },
        ref
    ) => {
        return (
            <motion.div
                variants={animateSection(direction)}
                initial="closed"
                animate="open"
                exit="closed"
                className={cn(menuVariants({ variant, className }))}
                onClick={onClick}
                ref={ref}
                style={style}
            >
                {children}
            </motion.div>
        )
    }
)

export default MenuConteudoRef
