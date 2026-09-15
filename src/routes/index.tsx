import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, FlaskConical, Microscope, PackageCheck, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/primal-lab-hero.jpg";
import { Button } from "@/components/ui/button";
import { ProductVisual } from "@/components/primal/product-visual";
import { ResearchNotice } from "@/components/primal/research-notice";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Research Peptides UK | Primal Peptides" },
    { name: "description", content: "Explore Primal Peptides UK's research compounds. For research purposes only and not for human consumption." },
    { property: "og:title", content: "Primal Peptides UK | Research Compounds" },
    { property: "og:description", content: "A clear, professional range of research compounds for laboratory research only." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  const featured = products.slice(0, 4);
  return (
    <>
      <section className="hero-section">
        <img src={heroImage} alt="Research vials and laboratory glassware in a controlled laboratory setting" width={1600} height={1050} />
        <div className="hero-shade" />
        <div className="container-wide hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Quality assured peptides</span>
            <h1>Precision for purposeful research.</h1>
            <p>A considered collection of research compounds, supplied with clear product information and a research-first approach.</p>
            <div className="hero-actions"><Button asChild variant="premium" size="lg"><Link to="/shop">Explore the range <ArrowRight /></Link></Button><Button asChild variant="outline" size="lg"><Link to="/research-information">Research information</Link></Button></div>
            <ResearchNotice inverse />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container-wide">
          <div className="section-heading"><div><span className="eyebrow eyebrow-dark">Selected compounds</span><h2>Featured research range</h2></div><Link to="/shop" className="text-link">View all products <ArrowRight /></Link></div>
          <div className="product-grid">{featured.map((product) => <article className="product-card" key={product.slug}><Link to="/product/$slug" params={{ slug: product.slug }}><ProductVisual name={product.name} tone={product.tone} /><div className="product-card-copy"><span>{product.category}</span><h3>{product.name}</h3><div><strong>From {product.price}</strong><ArrowRight /></div></div></Link></article>)}</div>
        </div>
      </section>

      <section className="research-band">
        <div className="container-wide research-layout">
          <div><span className="eyebrow">Research standards</span><h2>Clarity at every stage.</h2><p>Product pages are structured around concise compound details, clear research-use notices and straightforward ordering.</p><Button asChild variant="light" size="lg"><Link to="/research-information">Read research information</Link></Button></div>
          <div className="principle-list">
            <div><Microscope /><span><strong>Laboratory research</strong><small>Products are positioned solely for controlled research settings.</small></span></div>
            <div><PackageCheck /><span><strong>Clear product presentation</strong><small>Simple naming, format selection and order information.</small></span></div>
            <div><ShieldCheck /><span><strong>Responsible access</strong><small>Age confirmation is required before checkout.</small></span></div>
          </div>
        </div>
      </section>

      <section className="section-block info-section">
        <div className="container-narrow">
          <FlaskConical className="section-icon" />
          <span className="eyebrow eyebrow-dark">Before you order</span><h2>Research use only. No exceptions.</h2>
          <p>Primal Peptides UK products are not medicines, supplements or consumer products. They are not intended to diagnose, treat, cure or prevent any condition.</p>
          <div className="notice-points"><span><Check /> For research purposes only</span><span><Check /> Not for human consumption</span><span><Check /> Available to customers aged 18+</span></div>
        </div>
      </section>

      <section className="contact-band"><div className="container-wide contact-band-inner"><div><span className="eyebrow">Need assistance?</span><h2>Speak with our team.</h2><p>Questions about an order or the research range? Get in touch.</p></div><Button asChild variant="light" size="lg"><Link to="/contact">Contact Primal Peptides</Link></Button></div></section>
    </>
  );
}
