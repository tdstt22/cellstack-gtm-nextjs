'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Map, Users, Handshake, Award, Sparkles } from 'lucide-react'

const useCases = [
    {
        title: 'Pipeline & conversion analyses',
        description: 'Understand how deals progress, where they stall and what drives conversion',
        example: 'Where are deals getting stuck in the mid funnel and why?',
        icon: TrendingUp,
    },
    {
        title: 'Territory & coverage planning',
        description: 'Ensure balanced coverage. Optimize quota distribution and identify whitespace.',
        example: 'Where do we have coverage gaps by region or segment?',
        icon: Map,
    },
    {
        title: 'Customer data analyses',
        description: 'Understand acquisition, activation and retention patterns to improve life cycle health',
        example: 'Which customer segments show the highest renewal rate? What products were sold to them previously to build customer stickiness?',
        icon: Users,
    },
    {
        title: 'Channel and partner insights',
        description: 'Track performance, measure ROI and maximize partner-led revenue',
        example: 'Which partners drive highest sourced revenue? What is unique about these partners?',
        icon: Handshake,
    },
    {
        title: 'Productivity and team efficiency',
        description: 'Identify what drives rep performance and optimize resource allocation',
        example: 'What is unique in the way our top sales reps are selling and how can we replicate that for the rest of the team?',
        icon: Award,
    },
    {
        title: 'And More',
        description: 'Cellstack delivers instant insights across every GTM workflow',
        example: '',
        icon: Sparkles,
    },
]

export function UseCases() {
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

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={useCase.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="group relative bg-card border-l-4 border-l-primary/30 border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:border-l-primary hover:shadow-lg hover:shadow-primary/10">
                            <div className="mb-4">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <useCase.icon className="h-6 w-6 text-primary" />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                {useCase.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {useCase.description}
                            </p>
                            {useCase.example && (
                                <div className="mt-auto pt-4 border-t border-border/50">
                                    <p className="text-sm italic text-muted-foreground/80">
                                        &quot;{useCase.example}&quot;
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
