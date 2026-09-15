import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, LockKeyhole, ShieldAlert } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [
    { title: "Checkout | Primal Peptides UK" }, { name: "description", content: "Age-restricted checkout concept for Primal Peptides UK." },
    { property: "og:title", content: "Checkout | Primal Peptides UK" }, { property: "og:description", content: "Secure checkout concept with 18+ confirmation." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: CheckoutPage,
});

function CheckoutPage() {
  const [confirmed, setConfirmed] = useState(false);
  const [open, setOpen] = useState(true);
  return <>
    <Dialog open={open} onOpenChange={setOpen}><DialogContent className="age-dialog" onEscapeKeyDown={(event) => event.preventDefault()} onPointerDownOutside={(event) => event.preventDefault()}>
      <div className="age-icon"><span>18+</span></div><DialogHeader><DialogTitle>Age confirmation required</DialogTitle><DialogDescription>You must be aged 18 or over to proceed. Products are for research purposes only and are not for human consumption.</DialogDescription></DialogHeader>
      <label className="age-check"><input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} /><span><Check /></span><b>I confirm that I am 18 or over</b></label>
      <Button variant="premium" size="lg" disabled={!confirmed} onClick={() => setOpen(false)}>Confirm and continue</Button><Link to="/shop" className="dialog-exit">Return to shop</Link>
    </DialogContent></Dialog>
    <section className="page-intro checkout-intro"><div className="container-wide"><span className="eyebrow">Checkout</span><h1>Complete your research order</h1><p><LockKeyhole /> Secure checkout concept</p></div></section>
    <section className="section-block"><div className="container-wide checkout-grid"><div className="checkout-form"><h2>Contact details</h2><label>Email address<input type="email" /></label><h2>Delivery information</h2><div className="field-row"><label>First name<input /></label><label>Last name<input /></label></div><label>Address<input /></label><div className="field-row"><label>Town or city<input /></label><label>Postcode<input /></label></div><div className="checkout-warning"><ShieldAlert /><span><strong>Research purchase declaration</strong><small>By continuing, you confirm this order is solely for research and not for human consumption.</small></span></div><Button variant="premium" size="lg">Continue to payment</Button></div>
      <aside className="order-summary"><h2>Order summary</h2><div className="summary-product"><span>BPC-157</span><strong>£27.99</strong></div><div><span>Delivery</span><span>Calculated next</span></div><div className="summary-total"><strong>Total</strong><strong>£27.99</strong></div><small>Prototype checkout — no payment will be taken.</small></aside></div></section>
  </>;
}