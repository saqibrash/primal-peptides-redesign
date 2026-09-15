import { Dna } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductVisual({ name, tone = "teal", large = false }: { name: string; tone?: "teal" | "blue" | "cyan"; large?: boolean }) {
  return (
    <div className={cn("product-visual", `product-visual-${tone}`, large && "product-visual-large")} aria-label={`${name} product concept image`}>
      <div className="product-orbit" aria-hidden="true" />
      <div className="product-vial">
        <div className="product-cap" />
        <div className="product-label">
          <Dna aria-hidden="true" />
          <strong>{name}</strong>
          <span>Research only</span>
        </div>
      </div>
    </div>
  );
}
