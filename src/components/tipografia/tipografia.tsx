import { cn } from '@/lib/utils'

export function TypographyH1({
    className,
    children,
    ...props
}: React.ComponentProps<'h1'>) {
    return (
        <h1
            className={cn(
                'scroll-m-20 font-medium text-slate-950 dark:text-slate-50',
                className
            )}
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
                'text-2xl font-medium text-slate-950 dark:text-slate-100 @lg:text-4xl @2xl:text-5xl',
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
                'text-xl font-medium text-slate-950 dark:text-slate-200 @lg:text-3xl @2xl:text-4xl',
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
                'max-w-3xl font-openSans text-lg text-slate-800 dark:text-slate-300 @3xl:text-xl',
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}

export function TypographyList({
    children,
    className,
}: React.ComponentProps<'ul'>) {
    return (
        <ul
            className={cn(
                'my-5 ml-5 list-disc dark:text-slate-100 [&>li]:mt-2',
                className
            )}
        >
            {children}
        </ul>
    )
}

export function TypographySmall({
    children,
    className,
}: React.ComponentProps<'span'>) {
    return (
        <small
            className={cn(
                'text-sm font-medium leading-none dark:text-slate-400',
                className
            )}
        >
            {children}
        </small>
    )
}
