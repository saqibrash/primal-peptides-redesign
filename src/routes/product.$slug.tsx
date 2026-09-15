import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductVisual } from "@/components/primal/product-visual";
import { ResearchNotice } from "@/components/primal/research-notice";
import { products } from "@/data/products";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({ meta: [
    { title: loaderData ? `${loaderData.name} | Primal Peptides UK` : "Product unavailable | Primal Peptides UK" },
    { name: "description", content: loaderData ? `${loaderData.name} for laboratory research only. Not for human consumption.` : "Product unavailable." },
    { property: "og:title", content: loaderData ? `${loaderData.name} | Primal Peptides UK` : "Product unavailable" },
    { property: "og:description", content: "For research purposes only. Not for human consumption." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData();
  const [quantity, setQuantity] = useState(1);
  return <section className="section-block product-page"><div className="container-wide">
    <Link to="/shop" className="back-link"><ArrowLeft /> Back to all products</Link>
    <div className="product-detail-grid"><ProductVisual name={product.name} tone={product.tone} large />
      <div className="product-detail-copy"><span className="eyebrow eyebrow-dark">{product.category}</span><h1>{product.name}</h1><p className="product-price">From {product.price}</p><ResearchNotice />
        <p className="product-summary">Presented for controlled laboratory research with clear identification and straightforward format selection.</p>
        <div className="format-picker"><strong>Select format</strong><div><button className="selected" type="button">5 mg</button><button type="button">10 mg</button></div></div>
        <div className="purchase-row"><div className="quantity"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Reduce quantity"><Minus /></button><span>{quantity}</span><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus /></button></div><Button asChild variant="premium" size="lg"><Link to="/checkout"><ShoppingBag /> Add to cart</Link></Button></div>
        <ul className="product-facts"><li><Check /> For research purposes only</li><li><Check /> Not for human consumption</li><li><Check /> Purchase restricted to customers aged 18+</li></ul>
      </div>
    </div>
  </div></section>;
}