'use client'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'
import { variantY } from './framerVariants'
function AnimateY({ className, children }: React.ComponentProps<'div'>) {
    return (
        <motion.div
            variants={variantY}
            initial="animateInitialY"
            whileInView="animateY"
            className={cn('', className)}
        >
            {children}
        </motion.div>
    )
}

export default AnimateY
