import logoImage from "@/assets/primal-peptides-logo.png";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand-mark brand-mark-compact" : "brand-mark"} aria-label="Primal Peptides UK">
      <img src={logoImage} alt="Primal Peptides UK" width={724} height={792} />
    </span>
  );
}
