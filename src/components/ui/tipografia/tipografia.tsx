import { cn } from '@/lib/utils'

export function TypographyH1({
    className,
    children,
    ...props
}: React.ComponentProps<'h1'>) {
    return (
        <h1
            className={cn('scroll-m-20 font-medium text-slate-950', className)}
            {...props}
        >
            {children}
        </h1>
    )
}

export function TypographyP({
    className,
    children,
    ...props
}: React.ComponentProps<'p'>) {
    return (
        <p className={cn('font-openSans text-slate-950', className)} {...props}>
            {children}
        </p>
    )
}
