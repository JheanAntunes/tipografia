'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
export default function Pogress() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    return (
        <motion.div
            className="fixed inset-x-0 top-0 h-3 origin-[0%] bg-slate-950"
            style={{ scaleX }}
        />
    )
}
