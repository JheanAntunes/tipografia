import { cn } from '@/lib/utils'

function LinhaVerticalContent({ className }: React.ComponentProps<'div'>) {
    return (
        <div
            className={cn(
                'hidden bg-slate-950 dark:bg-slate-50 @5xl:block',
                className
            )}
        />
    )
}

export default LinhaVerticalContent
