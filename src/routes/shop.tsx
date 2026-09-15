import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { ProductVisual } from "@/components/primal/product-visual";
import { ResearchNotice } from "@/components/primal/research-notice";
import { products } from "@/data/products";

export const Route = createFileRoute("/shop")({
  head: () => ({ meta: [
    { title: "Shop Research Peptides | Primal Peptides UK" },
    { name: "description", content: "Browse Primal Peptides UK's research compounds. For research purposes only. Not for human consumption." },
    { property: "og:title", content: "Research Range | Primal Peptides UK" },
    { property: "og:description", content: "Browse research compounds from Primal Peptides UK." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ShopPage,
});

function ShopPage() {
  return <>
    <section className="page-intro"><div className="container-wide"><span className="eyebrow">Research range</span><h1>Shop all compounds</h1><p>A concise catalogue for controlled laboratory research.</p><ResearchNotice inverse /></div></section>
    <section className="section-block"><div className="container-wide">
      <div className="shop-toolbar"><p><strong>{products.length}</strong> products</p><button type="button" aria-label="Filter products"><SlidersHorizontal /> Filter & sort</button></div>
      <div className="product-grid">{products.map((product) => <article className="product-card" key={product.slug}><Link to="/product/$slug" params={{ slug: product.slug }}><ProductVisual name={product.name} tone={product.tone} /><div className="product-card-copy"><span>{product.category}</span><h2>{product.name}</h2><div><strong>From {product.price}</strong><ArrowRight /></div></div></Link></article>)}</div>
    </div></section>
  </>;
}