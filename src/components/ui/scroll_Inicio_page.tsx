'use client'
import { motion } from 'framer-motion'
import { ArrowLeftIcon } from 'lucide-react'
import { Button } from './button'

const Framervariant = {
    animateInitial: {
        opacity: 0,
        y: '100%',
        transition: { duration: 1 },
    },
    animate: {
        opacity: 1,
        y: '-20px',
        x: '-20px',
        transition: { duration: 1, delay: 0.3 },
    },
}

function Scroll_Inicio_Page() {
    return (
        <motion.div
            className="fixed bottom-0 right-0 z-20"
            variants={Framervariant}
            initial="animateInitial"
            animate="animate"
        >
            <Button
                size="icon"
                className="rotate-90 border bg-slate-200 shadow
hover:bg-slate-300"
                onClick={() => {
                    window.scroll({ top: 0, behavior: 'smooth' })
                }}
            >
                <ArrowLeftIcon className="animate-scroll-arrow-up text-slate-950 transition-transform" />
            </Button>
        </motion.div>
    )
}

export default Scroll_Inicio_Page
