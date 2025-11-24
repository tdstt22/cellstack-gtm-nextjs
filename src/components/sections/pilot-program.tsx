'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'

const benefits = [
    {
        title: 'Personalized onboarding',
        description: "We'll connect your CRM, marketing, and ops systems so Cellstack can start pulling real-time insights from your actual data.",
    },
    {
        title: 'Data alignment & cleanup',
        description: 'Our team works with your data owners to validate and streamline your sources, ensuring your insights are accurate and consistent.',
    },
    {
        title: 'Live hands-on trial',
        description: "Start using Cellstack's chat interface to ask business questions and see instant answers.",
    },
]

export function PilotProgram() {
    return (
        <section id="pilot" className="py-24 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                        Join the <span className="text-primary">Pilot Program</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Be among the first to experience how Cellstack transforms <span className="text-primary font-medium">GTM decision-making</span> from manual workflows and data chaos to <span className="text-primary font-medium">instant clarity</span>.
                    </p>
                </motion.div>

                <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5">
                    <div className="mb-10">
                        <h3 className="text-2xl font-semibold mb-8 text-center">
                            What&apos;s included in the pilot
                        </h3>
                        <div className="space-y-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-4">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <div className="h-6 w-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                                            <Check className="h-4 w-4 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex justify-center">
                        <div className="bg-primary/10 rounded-[16px] border border-primary/20 p-0.5">
                            <Button
                                asChild
                                size="lg"
                                className="rounded-[14px] px-8 h-12 text-base">
                                <Link href="/get-started">
                                    Join Now
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
