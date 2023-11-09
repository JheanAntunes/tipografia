import { cva } from 'class-variance-authority'

export const menuVariants = cva('', {
    variants: {
        variant: {
            right: 'border-l border-solid border-slate-950 h-full',
            left: 'border-r border-solid border-slate-950 h-full',
        },
    },
    defaultVariants: {
        variant: 'left',
    },
})

export const animateSection = (direction: 'right' | 'left') => {
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
