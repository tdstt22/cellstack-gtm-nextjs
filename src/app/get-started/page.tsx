'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { GetStartedForm } from '@/components/sections/get-started-form'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Footer } from '@/components/sections/footer'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const cardVariants = {
    item: {
        hidden: {
            opacity: 0,
            y: 30,
            filter: 'blur(8px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                type: 'spring' as const,
                stiffness: 200,
                damping: 25,
                duration: 0.8,
                delay: 0.3,
            },
        },
    },
}

export default function GetStartedPage() {
    return (
        <>
            {/* Header */}
            <header>
                <nav className="fixed z-20 w-full px-2">
                    <div className="mx-auto mt-2 max-w-6xl px-6 py-3 lg:py-4 bg-background/80 rounded-2xl border border-border/50 backdrop-blur-xl shadow-sm">
                        <div className="flex items-center justify-between">
                            <Link href="/" aria-label="Back to home">
                                <Image
                                    src="/cellstack-logo-with-text.svg"
                                    alt="Cellstack"
                                    width={150}
                                    height={32}
                                    className="h-10 w-auto"
                                />
                            </Link>
                            <Button size="sm" asChild>
                                <Link href="/">Back to Home</Link>
                            </Button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Main Content */}
            <main className="overflow-hidden min-h-screen flex flex-col">
                <section className="flex-1">
                    <div className="pt-24 md:pt-36 pb-24 md:pb-32">
                        <div className="mx-auto max-w-3xl px-6">
                            {/* Title Section */}
                            <AnimatedGroup variants={transitionVariants}>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-center mb-6">
                                    Get Started with <span className="text-primary">Cellstack</span>
                                </h1>
                                <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12 leading-relaxed">
                                    Discuss with our team to go over your needs and see how we can transform your GTM decision-making. 
                                    Enter your details and we&apos;ll be in touch within <span className="text-primary font-medium">24 hours</span>.
                                </p>
                            </AnimatedGroup>

                            {/* Form Card */}
                            <AnimatedGroup variants={cardVariants}>
                                <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5">
                                    <GetStartedForm />
                                </div>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </main>
        </>
    )
}
