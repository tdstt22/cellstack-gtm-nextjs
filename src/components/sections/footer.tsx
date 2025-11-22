import Link from 'next/link'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-border/50 bg-muted/30">
            <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                            <div className="text-primary-foreground font-bold text-lg">C</div>
                        </div>
                        <span className="text-xl font-semibold tracking-tight">Cellstack</span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
                        <Link
                            href="mailto:contact@cellstack.com"
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
