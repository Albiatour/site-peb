"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderMobile() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const panelRef = React.useRef<HTMLDivElement | null>(null);
  const firstLinkRef = React.useRef<HTMLAnchorElement | null>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (open) {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setOpen(false);
          triggerRef.current?.focus();
        }
      };
      document.addEventListener("keydown", onKey);
      // focus first link for simple focus trap start
      setTimeout(() => firstLinkRef.current?.focus(), 0);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [open]);

  const NAV_ITEMS = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  const whatsappUrl = "https://wa.me/32XXXXXXXXX?text=Bonjour%20je%20souhaite%20un%20certificat%20PEB"; // TODO: remplacer par numéro réel
  const telHref = "tel:+32XXXXXXXX"; // TODO: remplacer par numéro réel

  return (
    <>
      {/* spacer to avoid layout shift */}
      <div className="md:hidden h-14" aria-hidden />

      {/* Top bar */}
      <header
        className={
          "md:hidden fixed top-0 inset-x-0 z-40 h-14 bg-white/95 backdrop-blur " +
          (scrolled ? "shadow-sm" : "")
        }
      >
        <div className="h-full px-4 flex items-center justify-between">
          <Link href="/" className="text-base font-semibold text-green-900">
            PEB Wallonie
          </Link>
          <div className="flex items-center gap-2">
            <a
              href={telHref}
              aria-label="Appeler"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-green-700 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30"
            >
              {/* phone icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.19a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <button
              ref={triggerRef}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-800 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30"
            >
              {/* burger */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Drawer */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div
            ref={panelRef}
            className="absolute right-0 top-0 h-full w-[88vw] max-w-sm bg-white rounded-l-3xl p-6 flex flex-col justify-between translate-x-0 transition-transform duration-300"
          >
            <div>
              {/* Brand */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-green-100 text-green-800 flex items-center justify-center font-bold">P</div>
                <div>
                  <div className="text-base font-semibold text-slate-900">PEB Wallonie</div>
                  <div className="text-xs text-slate-500">Certificats PEB en Wallonie</div>
                </div>
              </div>
              {/* Links */}
              <nav className="divide-y divide-slate-200 border-t border-b border-slate-200">
                {NAV_ITEMS.map((item, idx) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      ref={idx === 0 ? firstLinkRef : undefined}
                      href={item.href}
                      className={
                        "block w-full py-3 text-lg border-b last:border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30 hover:bg-slate-50 " +
                        (active ? "text-emerald-700 font-semibold" : "text-slate-800")
                      }
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Actions rapides */}
            <div className="pt-2 mt-2 border-t space-y-3">
              <a
                href={whatsappUrl}
                className="inline-flex w-full h-12 items-center justify-center rounded-full bg-green-600 text-white font-semibold shadow-sm hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30"
                onClick={() => setOpen(false)}
              >
                WhatsApp
              </a>
              <a
                href={telHref}
                className="inline-flex w-full h-12 items-center justify-center rounded-full border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30"
                onClick={() => setOpen(false)}
              >
                Appeler
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Sticky CTA bottom */}
      <div className="md:hidden fixed bottom-4 inset-x-4 z-40">
        <a
          href={whatsappUrl}
          className="block h-12 rounded-full bg-green-600 text-white text-center leading-[3rem] font-semibold shadow-xl hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600/30"
        >
          Demander mon certificat PEB
        </a>
      </div>
    </>
  );
}
