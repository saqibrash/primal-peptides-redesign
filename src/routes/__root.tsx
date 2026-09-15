import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { BrandMark } from "@/components/primal/brand-mark";
import { ResearchNotice } from "@/components/primal/research-notice";
import { Button } from "@/components/ui/button";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Primal Peptides UK" },
      { name: "description", content: "Research compounds from Primal Peptides UK. For research purposes only. Not for human consumption." },
      { name: "author", content: "Primal Peptides UK" },
      { property: "og:title", content: "Primal Peptides UK" },
      { property: "og:description", content: "Research compounds for laboratory research only." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="site-shell">
        <div className="research-strip"><ResearchNotice compact inverse /></div>
        <header className="site-header">
          <div className="container-wide header-inner">
            <Link to="/" aria-label="Primal Peptides UK home"><BrandMark /></Link>
            <nav className="desktop-nav" aria-label="Main navigation">
              <Link to="/shop" activeProps={{ className: "nav-active" }}>Shop</Link>
              <Link to="/research-information" activeProps={{ className: "nav-active" }}>Research information</Link>
              <Link to="/contact" activeProps={{ className: "nav-active" }}>Contact</Link>
            </nav>
            <div className="header-actions">
              <Link to="/checkout" aria-label="View cart" className="cart-link"><ShoppingBag /><span>Cart</span><b>1</b></Link>
              <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
            </div>
          </div>
          {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
            <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
            <Link to="/research-information" onClick={() => setMenuOpen(false)}>Research information</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>}
        </header>
        <main><Outlet /></main>
        <footer className="site-footer">
          <div className="container-wide footer-grid">
            <div><BrandMark /><p>Quality assured research compounds, presented with clarity and care.</p></div>
            <div><strong>Explore</strong><Link to="/shop">Shop</Link><Link to="/research-information">Research information</Link><Link to="/contact">Contact</Link></div>
            <div><strong>Important</strong><p>For research purposes only.</p><p>Not for human consumption.</p><p>Customers must be aged 18 or over.</p></div>
          </div>
          <div className="container-wide footer-bottom"><span>© 2026 Primal Peptides Ltd</span><span>Company no. 17154837</span></div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
