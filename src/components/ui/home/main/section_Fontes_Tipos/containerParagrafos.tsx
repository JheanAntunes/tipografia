import { cn } from '@/lib/utils'
import React from 'react'

function ContainerParagrafos({
    children,
    className,
}: React.ComponentProps<'div'>) {
    return (
        <div className={cn('flex flex-col gap-4', className)}>{children}</div>
    )
}

export default ContainerParagrafos
