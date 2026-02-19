import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Logra"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Logra
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted">
          <Link
            href="/support"
            className="transition-colors hover:text-copper"
          >
            Soporte
          </Link>
          <Link
            href="/privacy"
            className="transition-colors hover:text-copper"
          >
            Privacidad
          </Link>
        </nav>
      </div>
    </header>
  );
}
