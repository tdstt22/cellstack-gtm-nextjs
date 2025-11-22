'use client'

import { Database, MessageSquare, Share2 } from 'lucide-react'
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
                        How it <span className="text-primary">works</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Get started with Cellstack in <span className="text-primary font-medium">three simple steps</span>
                    </p>
                </div>

                <div className="grid gap-12 md:gap-16 lg:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative bg-card border border-border/30 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-6 relative">
                                    <div className="h-16 w-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <step.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                                        {step.number}
                                    </div>
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5">
                                    <div className="w-1/2 h-full bg-border/50" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
