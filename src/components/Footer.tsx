import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Logra. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm text-muted">
            <Link
              href="/privacy"
              className="transition-colors hover:text-copper"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-copper"
            >
              Términos de Servicio
            </Link>
            <Link
              href="/support"
              className="transition-colors hover:text-copper"
            >
              Soporte
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
