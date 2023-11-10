import { cva } from 'class-variance-authority'

export const variantY = {
    animateInitialY: {
        opacity: 0,
        y: '100%',
        transition: { duration: 1 },
    },
    animateY: {
        opacity: 1,
        y: '0',
        transition: { duration: 1, delay: 0.3 },
    },
}

export const menuVariants = cva('', {
    variants: {
        variant: {
            right: 'border-l border-solid border-slate-950 h-full',
            left: 'border-r border-solid border-slate-950 h-full',
            none: '',
        },
    },
    defaultVariants: {
        variant: 'left',
    },
})

export const animateX = (direction: 'right' | 'left') => {
    return {
        closed: {
            opacity: 0,
            x: direction === 'right' ? '100%' : '-100%',
            transition: { duration: 1 },
        },
        open: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.3 },
        },
    }
}
