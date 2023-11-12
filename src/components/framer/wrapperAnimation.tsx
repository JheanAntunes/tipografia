'use client'
import { cn } from '@/lib/utils'
import { VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
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
    const framerVariants = animateX(direction)
    return (
        <motion.div
            className={cn(menuVariants({ variant, className }))}
            variants={framerVariants}
            initial="closed"
            whileInView="open"
        >
            {children}
        </motion.div>
    )
}

export default WrapperAnimation
