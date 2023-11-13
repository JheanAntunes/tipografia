import { useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
function useLogicWrapperPogress_Scroll_Up() {
    const [isShowBtnScrollUp, setIsShowBtnScrollUp] = useState(false)
    const { scrollY, scrollYProgress } = useScroll()

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    //debounced
    const debounced = useDebouncedCallback((latest: number) => {
        if (latest < 900 && isShowBtnScrollUp) setIsShowBtnScrollUp(false)
        if (latest > 900 && !isShowBtnScrollUp) setIsShowBtnScrollUp(true)
    }, 400)

    //event do framer
    useMotionValueEvent(scrollY, 'change', debounced)

    return {
        isShowBtnScrollUp,
        scaleX,
    }
}

export default useLogicWrapperPogress_Scroll_Up
