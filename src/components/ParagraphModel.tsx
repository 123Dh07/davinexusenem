import { useState } from "react";
import { ChevronDown, Copy, Check } from "lucide-react";
import { Repertoire, categoryLabels } from "@/data/enemData";
import { cn } from "@/lib/utils";

interface ParagraphModelProps {
  repertoire: Repertoire;
}

export function ParagraphModel({ repertoire }: ParagraphModelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(repertoire.paragraphModel);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card p-4 space-y-3">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm">{categoryLabels[repertoire.category].emoji}</span>
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
              {categoryLabels[repertoire.category].label}
            </span>
          </div>
          <h4 className="font-display font-semibold text-foreground">{repertoire.title}</h4>
          <p className="text-sm text-muted-foreground">{repertoire.description}</p>
        </div>
      </div>

      <div className="glass-card p-3 bg-surface-alt/50">
        <p className="text-xs font-mono text-accent uppercase tracking-wider mb-1">Como usar</p>
        <p className="text-sm text-muted-foreground">{repertoire.howToUse}</p>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
      >
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
        Ver modelo de parágrafo
      </button>

      {isOpen && (
        <div className="animate-fade-in space-y-3">
          <div className="relative glass-card p-4 border-primary/20 bg-primary/5">
            <p className="text-sm leading-relaxed text-foreground/90 pr-8 italic">
              "{repertoire.paragraphModel}"
            </p>
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 p-2 rounded-lg hover:bg-muted/50 transition-all"
              title="Copiar parágrafo"
            >
              {copied ? (
                <Check className="w-4 h-4 text-accent" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
