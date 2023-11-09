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

export function TypographyH2({
    className,
    children,
    ...props
}: React.ComponentProps<'h2'>) {
    return (
        <h2 className={cn('font-medium text-slate-950', className)} {...props}>
            {children}
        </h2>
    )
}

export function TypographyP({
    className,
    children,
    ...props
}: React.ComponentProps<'p'>) {
    return (
        <p className={cn('font-openSans text-slate-800', className)} {...props}>
            {children}
        </p>
    )
}
