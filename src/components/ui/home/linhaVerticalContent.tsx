import { cn } from '@/lib/utils'

function LinhaVerticalContent({ className }: React.ComponentProps<'div'>) {
    return <div className={cn('hidden bg-slate-950 @5xl:block', className)} />
}

export default LinhaVerticalContent
