'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { GridPattern } from '@/components/ui/grid-pattern'
import { cn } from '@/lib/utils'

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

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <GridPattern
                            width={40}
                            height={40}
                            x={-1}
                            y={-1}
                            squares={[
                                [4, 4],
                                [5, 1],
                                [8, 2],
                                [6, 6],
                                [10, 10],
                                [12, 8],
                                [15, 14],
                                [3, 9],
                                [7, 15],
                            ]}
                            className={cn(
                                "absolute inset-0 h-full w-full -z-10",
                                "fill-primary/5 stroke-primary/10",
                                "[mask-image:radial-gradient(350px_circle_at_50%_30%,white,transparent)]"
                            )}
                        />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <h1 className="mt-8 max-w-5xl mx-auto text-balance text-5xl font-semibold md:text-6xl lg:mt-16 xl:text-7xl tracking-tight">
                                        Instant <span className="text-primary">insights</span> for any <span className="text-primary">GTM query</span>
                                    </h1>
                                    <p className="mx-auto mt-8 max-w-3xl text-balance text-lg text-muted-foreground leading-relaxed">
                                        Cellstack connects to your existing tool stack and delivers <span className="text-primary font-medium">real time insights</span> – no SQL, no waiting, just answers.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-primary/10 rounded-[14px] border border-primary/20 p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-6 text-base h-12">
                                            <Link href="/get-started">
                                                <span className="text-nowrap">Get Started</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative mt-16 mb-16 overflow-hidden px-2 sm:mt-20 md:mt-24 md:mb-24">
                                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 to-primary/10 p-4 shadow-xl shadow-primary/5 ring-1 ring-border/50">
                                    <div className="relative w-full rounded-xl overflow-hidden">
                                        <Image
                                            src="/dashboard-mock.png"
                                            alt="Cellstack Dashboard - AI-native BI platform interface"
                                            width={1920}
                                            height={1080}
                                            className="w-full h-auto"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Solution', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Explore', href: '#use-cases' },
    { name: 'Join Us', href: '#pilot' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/80 max-w-4xl rounded-2xl border border-border/50 backdrop-blur-xl lg:px-5 shadow-sm')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <CellstackLogo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-foreground block duration-150 font-medium">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-primary/10 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-foreground block duration-150 font-medium">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                    <Link href="/get-started">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const CellstackLogo = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex items-center', className)}>
            <Image
                src="/cellstack-logo-transparent.svg"
                alt="Cellstack"
                width={150}
                height={32}
                className="h-10 w-auto"
            />
        </div>
    )
}
