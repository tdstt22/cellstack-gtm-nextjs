'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Map, Users, Handshake, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

const useCases = [
    {
        shortTitle: 'Pipeline',
        title: 'Pipeline & conversion analyses',
        description: 'Understand how deals progress, where they stall and what drives conversion',
        example: 'Where are deals getting stuck in the mid funnel and why?',
        icon: TrendingUp,
    },
    {
        shortTitle: 'Territory',
        title: 'Territory & coverage planning',
        description: 'Ensure balanced coverage. Optimize quota distribution and identify whitespace.',
        example: 'Where do we have coverage gaps by region or segment?',
        icon: Map,
    },
    {
        shortTitle: 'Customer Data',
        title: 'Customer data analyses',
        description: 'Understand acquisition, activation and retention patterns to improve life cycle health',
        example: 'Which customer segments show the highest renewal rate? What products were sold to them previously to build customer stickiness?',
        icon: Users,
    },
    {
        shortTitle: 'Partners',
        title: 'Channel and partner insights',
        description: 'Track performance, measure ROI and maximize partner-led revenue',
        example: 'Which partners drive highest sourced revenue? What is unique about these partners?',
        icon: Handshake,
    },
    {
        shortTitle: 'Team Efficiency',
        title: 'Productivity and team efficiency',
        description: 'Identify what drives rep performance and optimize resource allocation',
        example: 'What is unique in the way our top sales reps are selling and how can we replicate that for the rest of the team?',
        icon: Award,
    },
]

export function UseCases() {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeCase = useCases[activeIndex]

    return (
        <section id="use-cases" className="py-24 md:py-32 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
                        Explore your <span className="text-primary">GTM use cases</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        From pipeline analysis to team productivity, get <span className="text-primary font-medium">instant answers</span> to your most critical business questions
                    </p>
                </div>

                {/* Tab Menu */}
                <div className="mb-12 flex justify-center">
                    <div className="relative bg-muted border border-border rounded-2xl p-1.5 inline-flex">
                        {/* Sliding blue indicator */}
                        <motion.div
                            className="absolute bg-primary rounded-xl"
                            initial={false}
                            animate={{
                                x: activeIndex * 140, // 140px = button width (128px) + gap (12px)
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                            style={{
                                width: '128px',
                                height: 'calc(100% - 12px)',
                                top: '6px',
                                left: '6px',
                            }}
                        />

                        {/* Tab buttons */}
                        <div className="relative flex gap-3">
                            {useCases.map((useCase, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={cn(
                                        "w-32 py-2.5 text-sm font-medium transition-colors duration-200 relative z-10",
                                        "whitespace-nowrap rounded-xl flex items-center justify-center",
                                        activeIndex === index
                                            ? "text-primary-foreground"
                                            : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {useCase.shortTitle}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3D Card Display */}
                <div className="relative max-w-4xl mx-auto" style={{ perspective: '1500px' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, rotateY: -15, scale: 0.95 }}
                            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                            exit={{ opacity: 0, rotateY: 15, scale: 0.95 }}
                            transition={{
                                duration: 0.5,
                                type: "spring",
                                stiffness: 200,
                                damping: 25
                            }}
                            className="relative"
                        >
                            <UseCaseCard useCase={activeCase} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {useCases.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                activeIndex === index
                                    ? "w-8 bg-primary"
                                    : "w-2 bg-border hover:bg-primary/50"
                            )}
                            aria-label={`Go to ${useCases[index].shortTitle}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function UseCaseCard({ useCase }: { useCase: typeof useCases[0] }) {
    const [tilt, setTilt] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) / 25
        const y = (e.clientY - rect.top - rect.height / 2) / 25
        setTilt({ x, y })
    }

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 })
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateY: tilt.x,
                rotateX: -tilt.y,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative"
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Glow effect on hover */}
            <div className="absolute -inset-1 bg-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

            {/* Main Card */}
            <div className="relative bg-card border-2 border-border rounded-2xl p-8 md:p-12 shadow-2xl shadow-primary/10 transition-all duration-300 group-hover:shadow-primary/20 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

                {/* Title */}
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight"
                >
                    {useCase.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8"
                >
                    {useCase.description}
                </motion.p>

                {/* Example Query Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-primary/5 border border-primary/20 rounded-xl p-6 backdrop-blur-sm"
                >
                    <p className="text-xs md:text-sm font-semibold text-primary mb-2 tracking-wide uppercase">
                        Example Query
                    </p>
                    <p className="text-foreground font-medium italic text-sm md:text-base leading-relaxed">
                        &quot;{useCase.example}&quot;
                    </p>
                </motion.div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-full -z-10" />
            </div>
        </motion.div>
    )
}
