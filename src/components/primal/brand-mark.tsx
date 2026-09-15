import { Dna } from "lucide-react";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-3" aria-label="Primal Peptides UK">
      <span className="brand-emblem" aria-hidden="true">
        <span className="brand-elephant">P</span>
        <Dna />
      </span>
      {!compact && (
        <span className="min-w-0 leading-none">
          <span className="block truncate font-display text-[0.95rem] font-bold uppercase text-foreground">Primal Peptides</span>
          <span className="mt-1 block text-[0.63rem] font-semibold uppercase text-primary">United Kingdom</span>
        </span>
      )}
    </span>
  );
}
