import { useState } from "react";
import { ChevronDown, Copy, Check, Quote } from "lucide-react";
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
      "rounded-xl bg-card border border-border/40 overflow-hidden transition-all duration-300",
      "hover:border-primary/25"
    )}>
      {/* Top row: category badge + title */}
      <div className="p-4 pb-3">
        <div className="flex items-start gap-3">
          <span className="text-2xl leading-none mt-0.5">{cat.emoji}</span>
          <div className="flex-1 min-w-0">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-primary mb-1">
              {cat.label}
            </span>
            <h4 className="font-display font-bold text-foreground text-[15px] leading-snug">
              {repertoire.title}
            </h4>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {repertoire.description}
            </p>
          </div>
        </div>
      </div>

      {/* Como usar */}
      <div className="mx-4 mb-3 px-3 py-2.5 rounded-lg bg-accent/5 border border-accent/10">
        <p className="text-[10px] font-mono font-bold text-accent uppercase tracking-[0.15em] mb-0.5">
          Como usar
        </p>
        <p className="text-[13px] text-muted-foreground leading-relaxed">
          {repertoire.howToUse}
        </p>
      </div>

      {/* Ver parágrafo toggle */}
      <div className="px-4 pb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          <ChevronDown
            className={cn(
              "w-3.5 h-3.5 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
          Ver modelo de parágrafo
        </button>

        {isOpen && (
          <div className="mt-3 animate-fade-in">
            <div className="relative p-4 rounded-xl bg-primary/[0.04] border border-primary/15">
              <Quote className="w-4 h-4 text-primary/30 mb-2" />
              <p className="text-[13px] leading-[1.8] text-foreground/85 pr-10">
                {repertoire.paragraphModel}
              </p>
              <button
                onClick={handleCopy}
                className={cn(
                  "absolute top-3 right-3 p-2 rounded-lg transition-all",
                  copied ? "bg-accent/10" : "hover:bg-primary/10"
                )}
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
