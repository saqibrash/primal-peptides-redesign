import { FlaskConical, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export function ResearchNotice({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  return (
    <div className={cn("research-notice", compact && "research-notice-compact", inverse && "research-notice-inverse")}>
      <FlaskConical aria-hidden="true" />
      <div>
        <strong>For research purposes only</strong>
        <span><ShieldAlert aria-hidden="true" /> Not for human consumption</span>
      </div>
    </div>
  );
}
