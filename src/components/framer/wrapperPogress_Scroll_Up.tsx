'use client'

import Progress from '../ui/home/progress'
import Scroll_Inicio_Page from '../ui/scroll_Inicio_page'
import useLogicWrapperPogress_Scroll_Up from './useLogicWrapperPogress_Scroll_Up'

export default function WrapperProgress_ScrollUp() {
    const { isShowBtnScrollUp, scaleX } = useLogicWrapperPogress_Scroll_Up()

    return (
        <>
            <Progress style={{ scaleX }} />
            {isShowBtnScrollUp && <Scroll_Inicio_Page />}
        </>
    )
}
