'use client'
import { cn } from '@/lib/utils'
import { VariantProps } from 'class-variance-authority'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { animateX, menuVariants } from './framerVariants'

type WrapperAnimationSectionProps = React.ComponentProps<'div'> &
    VariantProps<typeof menuVariants> & {
        direction?: 'right' | 'left'
    }

function WrapperAnimation({
    children,
    className,
    variant,
    direction = 'left',
}: WrapperAnimationSectionProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 1])
    const framerVariants = animateX(direction)
    return (
        <motion.div
            style={{ opacity }}
            className={cn(menuVariants({ variant, className }))}
            ref={ref}
            variants={framerVariants}
            initial="closed"
            whileInView="open"
        >
            {children}
        </motion.div>
    )
}

export default WrapperAnimation
