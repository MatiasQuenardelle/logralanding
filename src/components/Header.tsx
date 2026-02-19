import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Logra
        </Link>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <Link href="/support" className="hover:text-gray-900 transition-colors">
            Support
          </Link>
          <Link href="/privacy" className="hover:text-gray-900 transition-colors">
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}
