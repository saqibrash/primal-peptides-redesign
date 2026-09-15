import { createFileRoute } from "@tanstack/react-router";
import { Building2, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Primal Peptides UK" }, { name: "description", content: "Contact Primal Peptides UK about products or an existing order." },
    { property: "og:title", content: "Contact Primal Peptides UK" }, { property: "og:description", content: "Get in touch with the Primal Peptides UK team." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ContactPage,
});

function ContactPage() { return <>
  <section className="page-intro"><div className="container-wide"><span className="eyebrow">Contact</span><h1>How can we help?</h1><p>Send a concise enquiry and our team will respond.</p></div></section>
  <section className="section-block"><div className="container-wide contact-grid">
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}><div className="field-row"><label>First name<input required /></label><label>Last name<input required /></label></div><label>Email address<input type="email" required /></label><label>Order number <span>(optional)</span><input /></label><label>Your enquiry<textarea rows={5} required /></label><Button variant="premium" size="lg" type="submit">Send enquiry</Button></form>
    <aside className="business-details"><h2>Business information</h2><div><Building2 /><span><strong>Primal Peptides Ltd</strong><small>Company no. 17154837</small></span></div><div><Mail /><span><strong>Email enquiries</strong><small>Use the contact form for order and product questions.</small></span></div><div><MapPin /><span><strong>Registered in the UK</strong><small>24 Wessex Drive, Wigan, WN3 4JJ</small></span></div><p className="business-notice">For research purposes only. Not for human consumption.</p></aside>
  </div></section>
  </>; }