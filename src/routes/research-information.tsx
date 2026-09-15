import { createFileRoute, Link } from "@tanstack/react-router";
import { FlaskConical, ShieldAlert, UserRoundCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/research-information")({
  head: () => ({ meta: [
    { title: "Research Information | Primal Peptides UK" },
    { name: "description", content: "Important research-use information for Primal Peptides UK compounds." },
    { property: "og:title", content: "Research Information | Primal Peptides UK" },
    { property: "og:description", content: "Read important research-only and age restriction information." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ResearchPage,
});

function ResearchPage() { return <>
  <section className="page-intro"><div className="container-wide"><span className="eyebrow">Important information</span><h1>Responsible research starts with clarity.</h1><p>Please review the intended use and restrictions before ordering.</p></div></section>
  <section className="section-block"><div className="container-narrow editorial-copy">
    <div className="editorial-item"><FlaskConical /><div><h2>For research purposes only</h2><p>All compounds shown on this website are supplied solely for controlled laboratory research. They are not consumer products, medicines or supplements.</p></div></div>
    <div className="editorial-item"><ShieldAlert /><div><h2>Not for human consumption</h2><p>Products must not be consumed, administered or used in clinical, diagnostic or therapeutic settings. No dosage or treatment guidance is provided.</p></div></div>
    <div className="editorial-item"><UserRoundCheck /><div><h2>Age restricted purchasing</h2><p>Customers must confirm that they are aged 18 or over before proceeding to checkout. The confirmation is shown as a clear step in the purchase journey.</p></div></div>
    <div className="editorial-cta"><h2>Ready to browse?</h2><p>Each product page repeats the essential research-use information.</p><Button asChild variant="premium" size="lg"><Link to="/shop">View research range</Link></Button></div>
  </div></section>
  </>; }