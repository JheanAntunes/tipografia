import { cn } from '@/lib/utils'

function NavSeparador({ className, ...props }: React.ComponentProps<'div'>) {
    return <div className={cn('w-[1px] bg-slate-950', className)} {...props} />
}

export default NavSeparador
