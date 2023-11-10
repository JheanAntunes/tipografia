import { cn } from '@/lib/utils'

function ContainerContent({
    children,
    className,
}: React.ComponentProps<'div'>) {
    return (
        <div className={cn('grid grid-cols-[1fr_4px_1fr]', className)}>
            {children}
        </div>
    )
}

export default ContainerContent
