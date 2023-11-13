'use client'
import { MotionStyle, motion } from 'framer-motion'

export default function Progress({ style }: { style: MotionStyle }) {
    return (
        <>
            <motion.div
                className="fixed inset-x-0 top-0 h-3 origin-[0%] bg-slate-950 dark:bg-slate-50"
                style={style}
            />
        </>
    )
}
