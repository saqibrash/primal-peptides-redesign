import logoAsset from "@/assets/primal-peptides-logo.png.asset.json";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand-mark brand-mark-compact" : "brand-mark"} aria-label="Primal Peptides UK">
      <img src={logoAsset.url} alt="Primal Peptides UK" />
    </span>
  );
}
