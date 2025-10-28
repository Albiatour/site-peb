"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

// TODO: remplacer par les numéros réels
const PHONE_TEL = "tel:+32XXXXXXXX";
const WHATSAPP_URL =
  "https://wa.me/32XXXXXXXXX?text=Bonjour%20je%20souhaite%20un%20certificat%20PEB";

export default function HeaderMobile() {
  const [open, setOpen] = useState(false);
  const [pathname, setPathname] = useState<string>("/");
  const pushedRef = useRef(false);

  const burgerBtnRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
      const onPop = () => setPathname(window.location.pathname);
      window.addEventListener("popstate", onPop);
      return () => window.removeEventListener("popstate", onPop);
    }
  }, []);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const openDrawer = () => {
    if (open) return;
    setOpen(true);
    // Ajoute une entrée d'historique pour que "retour" ferme le menu
    if (!pushedRef.current) {
      window.history.pushState({ drawer: true }, "", "#menu");
      pushedRef.current = true;
    }
    // Focus premier lien pour accessibilité
    setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 0);
  };

  const closeDrawer = (fromHistory = false) => {
    if (!open) return;
    setOpen(false);
    // Rendre le focus au bouton
    setTimeout(() => burgerBtnRef.current?.focus(), 0);

    // Si on ferme manuellement, purge l'entrée "#menu" proprement
    if (!fromHistory && window.location.hash === "#menu") {
      // Cela déclenchera popstate
      window.history.back();
    }
  };

  useEffect(() => {
    const onPopState = () => {
      // Si l'utilisateur appuie sur "retour" alors que le drawer est ouvert → ferme
      if (open) {
        pushedRef.current = false;
        setOpen(false);
        // Rendre le focus au bouton
        setTimeout(() => burgerBtnRef.current?.focus(), 0);
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [open]);

  useEffect(() => {
    // Empêche le scroll du body quand le drawer est ouvert
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  return (
    <>
      {/* Barre supérieure fixe (mobile uniquement) */}
      <div className="md:hidden fixed top-0 inset-x-0 z-40 bg-white" data-variant="mobile">
        <div className="h-14 px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="Accueil">
            <div className="h-7 w-7 rounded-full bg-emerald-100 flex items-center justify-center">
              <span className="text-emerald-700 text-sm font-bold">P</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-slate-900">PEB Wallonie</span>
              <span className="text-[11px] text-slate-500">Certificats PEB en Wallonie</span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={PHONE_TEL}
              aria-label="Appeler"
              className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-slate-50 focus:outline-none focus-visible:outline-none text-emerald-800 hover:text-emerald-900 active:text-emerald-900"
            >
              <PhoneIcon />
            </a>
            <button
              ref={burgerBtnRef}
              onClick={openDrawer}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-slate-50 focus:outline-none focus-visible:outline-none text-emerald-800 hover:text-emerald-900 active:text-emerald-900"
            >
              <BurgerIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <button
          aria-label="Fermer le menu"
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => closeDrawer(false)}
        />
      )}

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed top-0 right-0 h-dvh w-[88vw] max-w-sm z-50 md:hidden bg-white shadow-xl
        rounded-l-3xl pt-4 pb-6 flex flex-col translate-x-full transition-transform duration-300 ${open ? "!translate-x-0" : ""}`}
      >
        {/* Header du drawer */}
        <div className="px-5 pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-700 text-sm font-bold">P</span>
              </div>
              <div className="leading-tight">
                <div className="text-base font-semibold text-slate-900">PEB Wallonie</div>
                <div className="text-xs text-slate-500">Certificats PEB en Wallonie</div>
              </div>
            </div>
            <button
              onClick={() => closeDrawer(false)}
              aria-label="Fermer"
              className="h-10 w-10 rounded-full border flex items-center justify-center hover:bg-slate-50 focus:outline-none focus-visible:outline-none"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Liens */}
        <nav className="px-5 mt-2">
          <ul className="divide-y">
            {NAV_ITEMS.map((item, idx) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  ref={idx === 0 ? firstLinkRef : undefined}
                  onClick={() => closeDrawer(false)}
                  className={[
                    "block w-full py-3 text-lg text-slate-800",
                    // Pas de carré : pas de ring/outline; focus visible = underline légère
                    "focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:bg-slate-50 focus-visible:underline underline-offset-4",
                    isActive(item.href) ? "text-emerald-800 font-semibold" : "border-b last:border-0",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className="mt-auto px-5 pt-3 border-t">
          <a
            href={WHATSAPP_URL}
            onClick={() => closeDrawer(false)}
            className="block w-full h-12 rounded-full font-semibold flex items-center justify-center shadow-lg bg-emerald-600 text-white"
          >
            WhatsApp
          </a>
          <a
            href={PHONE_TEL}
            onClick={() => closeDrawer(false)}
            className="mt-3 block w-full h-12 rounded-full font-semibold flex items-center justify-center border"
          >
            Appeler
          </a>
        </div>
      </aside>

      {/* Réserve la hauteur du header pour éviter les décalages */}
      <div className="md:hidden h-14" />
    </>
  );
}

/* ---------------- Icons (SVG inline, simples) ---------------- */

function BurgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="fill-none stroke-current">
      <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" className="fill-none stroke-current">
      <path d="M6 6l12 12M18 6l-12 12" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="fill-none stroke-current">
      <path
        d="M22 16.92v2a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.1 5.18 2 2 0 0 1 4.11 3h2a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L7.1 10.9a16 16 0 0 0 6 6l1.44-1.18a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
