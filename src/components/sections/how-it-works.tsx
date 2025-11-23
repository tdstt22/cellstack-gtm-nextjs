'use client'

import { Database, MessageSquare, Share2, Mail, Send } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
    {
        number: '01',
        title: 'Connect your data',
        description: 'Integrate your CRM, marketing, and finance systems in minutes. Cellstack keeps data automatically in sync so your insights are always up to date.',
        icon: Database,
    },
    {
        number: '02',
        title: 'Ask anything',
        description: 'Open Cellstack web app and simply type your query. Our tool understands your GTM data structure and returns accurate answers and visualizations.',
        icon: MessageSquare,
    },
    {
        number: '03',
        title: 'Share effortlessly',
        description: 'Turn insights into action with one click sharing to Slack, email or WhatsApp message so your team stays aligned in real time.',
        icon: Share2,
    },
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
                        Analysis made <span className="text-primary">simple</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get started with <span className="text-primary font-medium">three simple steps</span>
                    </p>
                </div>

                <div className="space-y-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="border-2 border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 bg-card"
                        >
                            <div className="grid md:grid-cols-2 gap-0">
                                {index % 2 === 0 ? (
                                    <>
                                        <TextContent step={step} />
                                        <AnimationContent index={index} />
                                    </>
                                ) : (
                                    <>
                                        <AnimationContent index={index} />
                                        <TextContent step={step} />
                                    </>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function TextContent({ step }: { step: typeof steps[0] }) {
    return (
        <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-primary font-bold text-sm tracking-wide">STEP {step.number}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight">
                {step.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed text-base">
                {step.description}
            </p>
        </div>
    )
}

function AnimationContent({ index }: { index: number }) {
    return (
        <div className="bg-muted/20 p-8 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
            {index === 0 && <ConnectDataAnimation />}
            {index === 1 && <AskAnythingAnimation />}
            {index === 2 && <ShareAnimation />}
        </div>
    )
}

function ConnectDataAnimation() {
    return (
        <div className="relative w-full max-w-sm aspect-square">
            {/* Central Cellstack hub */}
            <motion.div
                className="absolute inset-0 m-auto w-20 h-20 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Database className="text-white h-10 w-10" />
            </motion.div>

            {/* Orbiting data sources */}
            {[
                { angle: 0, delay: 0, label: 'CRM' },
                { angle: 90, delay: 0.5, label: 'Marketing' },
                { angle: 180, delay: 1, label: 'Finance' },
                { angle: 270, delay: 1.5, label: 'Analytics' },
            ].map((source, i) => {
                const radius = 110
                const x = radius * Math.cos((source.angle * Math.PI) / 180)
                const y = radius * Math.sin((source.angle * Math.PI) / 180)

                return (
                    <motion.div
                        key={i}
                        className="absolute inset-0 m-auto w-16 h-16"
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{
                            x,
                            y,
                            opacity: 1
                        }}
                        transition={{
                            duration: 1.5,
                            delay: source.delay,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 2,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-full h-full bg-primary/10 border-2 border-primary/30 rounded-lg flex items-center justify-center">
                            <span className="text-xs font-medium text-primary">{source.label}</span>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}

function AskAnythingAnimation() {
    const query = "Where are deals stuck in mid-funnel?"

    return (
        <div className="w-full max-w-md space-y-4">
            {/* Search bar with typing animation */}
            <motion.div
                className="bg-card border-2 border-border rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <motion.span
                        className="text-foreground font-medium"
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                    >
                        {query}
                    </motion.span>
                </div>
            </motion.div>

            {/* Processing indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-2 px-4"
            >
                <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-primary rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                        />
                    ))}
                </div>
                <span className="text-sm text-muted-foreground">Analyzing data...</span>
            </motion.div>

            {/* Results appearing */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="bg-primary/5 border border-primary/20 p-6 rounded-lg"
            >
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Demo Stage</span>
                        <span className="text-sm text-primary font-semibold">42% stalled</span>
                    </div>
                    <div className="h-2 bg-border rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: "42%" }}
                            transition={{ delay: 2, duration: 1 }}
                        />
                    </div>
                    <p className="text-xs text-muted-foreground">Average wait time: 12 days</p>
                </div>
            </motion.div>
        </div>
    )
}

function ShareAnimation() {
    const platforms = [
        { icon: Send, label: 'Slack', angle: -45, color: 'text-purple-500' },
        { icon: Mail, label: 'Email', angle: 0, color: 'text-blue-500' },
        { icon: Share2, label: 'WhatsApp', angle: 45, color: 'text-green-500' },
    ]

    return (
        <div className="relative w-full max-w-sm h-64 flex items-center justify-center">
            {/* Central content card */}
            <motion.div
                className="bg-card border-2 border-border rounded-lg p-6 w-48 relative z-10 shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="space-y-2">
                    <div className="h-3 bg-primary/20 rounded" />
                    <div className="h-3 bg-primary/10 rounded w-3/4" />
                    <div className="h-16 bg-primary/5 rounded mt-3" />
                </div>
            </motion.div>

            {/* Share icons radiating out */}
            {platforms.map((platform, i) => {
                const distance = 120
                const x = distance * Math.cos((platform.angle * Math.PI) / 180)
                const y = distance * Math.sin((platform.angle * Math.PI) / 180)

                return (
                    <motion.div
                        key={i}
                        className="absolute inset-0 m-auto w-14 h-14"
                        initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
                        animate={{
                            scale: 1,
                            x,
                            y,
                            opacity: 1
                        }}
                        transition={{
                            delay: 1 + (i * 0.2),
                            duration: 0.5,
                            type: "spring",
                            stiffness: 200
                        }}
                    >
                        <div className="w-full h-full bg-card border-2 border-primary/30 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                            <platform.icon className={`h-6 w-6 ${platform.color}`} />
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}
