'use client'

import { motion } from 'framer-motion'

const features = [
    {
        title: 'No Complex SQL Queries Required',
        description: 'Ask questions in plain English and receive accurate answers instantly. Cellstack understands your database structure and business context, eliminating the need for technical query writing.',
    },
    {
        title: 'Instant Insights',
        description: 'Cut down turnaround time from 3–5 days to just seconds. Get the data-driven insights you need, when you need them.',
    },
    {
        title: 'Secured Data Access',
        description: 'Your data remains fully protected with enterprise-grade security, encryption, and access controls to ensure confidentiality and compliance.',
    },
    {
        title: 'Real-Time Sync',
        description: 'Stay up to date with live data synchronization. Any updates in your source systems are instantly reflected, ensuring decisions are always based on the latest information.',
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
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
            duration: 0.6,
        },
    },
}

export function FeaturesSection() {
    return (
        <section id="features" className="py-24 md:py-32">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
                        Built for <span className="text-primary">modern teams</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Cellstack combines <span className="text-primary font-medium">powerful capabilities</span> with an intuitive interface to transform how your team works with data
                    </p>
                </div>

                {/* Connected Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto bg-card border-2 border-border rounded-2xl overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-10">
                        {/* Row 1: 70/30 split */}
                        <FeatureCell feature={features[0]} className="md:col-span-7 border-b md:border-r" />
                        <FeatureCell feature={features[1]} className="md:col-span-3 border-b" />

                        {/* Row 2: 30/70 split */}
                        <FeatureCell feature={features[2]} className="md:col-span-3 md:border-r" />
                        <FeatureCell feature={features[3]} className="md:col-span-7" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function FeatureCell({ feature, className }: { feature: typeof features[0], className?: string }) {
    return (
        <div className={`group relative p-8 md:p-10 transition-all duration-300 hover:bg-primary/5 ${className}`}>
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight">
                {feature.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {feature.description}
            </p>
        </div>
    )
}
