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

  const cat = categoryLabels[repertoire.category];

  return (
    <div className={cn(
      "rounded-xl border border-border/50 bg-card/80 overflow-hidden transition-all duration-300",
      "hover:border-primary/30"
    )}>
      {/* Header */}
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-lg leading-none">{cat.emoji}</span>
          <span className="font-display text-xs font-bold uppercase tracking-wider text-primary">
            {cat.label}
          </span>
        </div>
        <h4 className="font-display font-bold text-foreground text-base">
          {repertoire.title}
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {repertoire.description}
        </p>
      </div>

      {/* Como usar */}
      <div className="mx-4 mb-3 p-3 rounded-lg bg-surface-alt/60 border border-border/30">
        <p className="text-[11px] font-mono font-medium text-accent uppercase tracking-wider mb-1">
          ➡️ Como usar
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {repertoire.howToUse}
        </p>
      </div>

      {/* Toggle parágrafo */}
      <div className="px-4 pb-4">
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
          <div className="mt-3 animate-fade-in">
            <div className="relative p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm leading-relaxed text-foreground/90 pr-10 italic">
                "{repertoire.paragraphModel}"
              </p>
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-lg hover:bg-primary/10 transition-all"
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
    </div>
  );
}
