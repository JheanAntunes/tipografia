import WrapperAnimationSection from '@/components/framer/wrapperAnimationSection'
import { MenuProps } from '@/components/layout/header/nav/menuMobile/MenuConteudo'
import { cn } from '@/lib/utils'

function AnimateContent({
    direction = 'left',
    children,
    className,
}: MenuProps) {
    return (
        <>
            <WrapperAnimationSection
                variant="none"
                direction={direction}
                className={cn(
                    'border-b-4 border-solid border-b-slate-950 pb-5',
                    direction === 'left' ? '@5xl:pr-4' : '@5xl:pl-4',
                    className
                )}
            >
                {children}
            </WrapperAnimationSection>
        </>
    )
}

export default AnimateContent
