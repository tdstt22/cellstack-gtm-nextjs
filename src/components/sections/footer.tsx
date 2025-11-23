import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-border/50 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center">
                        <Image
                            src="/cellstack-logo-with-text.svg"
                            alt="Cellstack"
                            width={150}
                            height={32}
                            className="h-10 w-auto"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
                        <Link
                            href="mailto:admin@cellstackai.com"
                            className="hover:text-foreground transition-colors">
                            Contact us
                        </Link>
                        <span className="hidden md:inline">•</span>
                        <p>© {currentYear} Cellstack. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
