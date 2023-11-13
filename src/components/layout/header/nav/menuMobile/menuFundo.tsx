import { cn } from '@/lib/utils'
import { ComponentProps } from 'react'

function MenuFundo({ children, className, ...props }: ComponentProps<'div'>) {
    return (
        <div
            className={cn(
                'fixed inset-0 z-20 block bg-background/80 dark:bg-slate-900/70',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default MenuFundo
