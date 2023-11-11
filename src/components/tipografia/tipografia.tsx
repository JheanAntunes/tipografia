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
        <h2
            className={cn(
                'text-2xl font-medium text-slate-950 @lg:text-4xl @2xl:text-5xl',
                className
            )}
            {...props}
        >
            {children}
        </h2>
    )
}

export function TypographyH3({
    className,
    children,
    ...props
}: React.ComponentProps<'h3'>) {
    return (
        <h3
            className={cn(
                'text-xl font-medium text-slate-950 @lg:text-3xl @2xl:text-4xl',
                className
            )}
            {...props}
        >
            {children}
        </h3>
    )
}

export function TypographyP({
    className,
    children,
    ...props
}: React.ComponentProps<'p'>) {
    return (
        <p
            className={cn(
                'max-w-3xl font-openSans text-lg text-slate-800 @3xl:text-xl',
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}
