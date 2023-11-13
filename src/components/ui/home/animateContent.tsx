import WrapperAnimation from '@/components/framer/wrapperAnimation'
import { MenuProps } from '@/components/layout/header/nav/menuMobile/MenuConteudo'
import { cn } from '@/lib/utils'

function AnimateContent({
    direction = 'left',
    children,
    className,
    id,
}: MenuProps) {
    return (
        <>
            <WrapperAnimation
                id={id}
                variant="none"
                direction={direction}
                className={cn(
                    'border-b-4 border-solid border-b-slate-950 pb-5 dark:border-b-slate-50',
                    direction === 'left' ? '@5xl:pr-4' : '@5xl:pl-4',
                    className
                )}
            >
                {children}
            </WrapperAnimation>
        </>
    )
}

export default AnimateContent
