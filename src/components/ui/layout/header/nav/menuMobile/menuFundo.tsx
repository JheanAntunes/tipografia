import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

function MenuFundo({ children, className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            className={cn('absolute inset-0 bg-background/80 block', className)}
            {...props}
        >
            {children}
        </div>
    )
}

export default MenuFundo
