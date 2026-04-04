import { useState } from "react";
import { Copy, Check, ChevronDown, Quote } from "lucide-react";
import { Repertoire, categoryLabels } from "@/data/enemData";
import { cn } from "@/lib/utils";

interface RepertoireTableProps {
  repertoires: Repertoire[];
}

export function RepertoireTable({ repertoires }: RepertoireTableProps) {
  return (
    <div className="divide-y divide-border/20">
      {repertoires.map((rep, i) => (
        <RepertoireRow key={i} repertoire={rep} />
      ))}
    </div>
  );
}

function RepertoireRow({ repertoire }: { repertoire: Repertoire }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const cat = categoryLabels[repertoire.category];

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(repertoire.paragraphModel);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full text-left px-5 py-3.5 flex items-center gap-4 transition-colors",
          "hover:bg-primary/[0.03] active:scale-[0.998]",
          isOpen && "bg-primary/[0.03]"
        )}
      >
        <span className="text-lg leading-none shrink-0">{cat.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] font-mono font-semibold text-primary/60 uppercase tracking-wider">
              {cat.label}
            </span>
          </div>
          <p className="font-semibold text-[13px] text-foreground truncate">
            {repertoire.title}
          </p>
        </div>
        <span className="text-[12px] text-muted-foreground hidden sm:block max-w-[200px] truncate">
          {repertoire.description}
        </span>
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 text-muted-foreground/60 shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="px-5 pb-4 animate-fade-in space-y-3">
          {/* Info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pl-9">
            <div className="p-3 rounded-lg bg-secondary/60 border border-border/30">
              <p className="text-[10px] font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                Ideia Central
              </p>
              <p className="text-[13px] text-foreground/80 leading-relaxed">
                {repertoire.description}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-primary/[0.04] border border-primary/10">
              <p className="text-[10px] font-mono font-semibold text-primary/70 uppercase tracking-wider mb-1">
                Como Usar
              </p>
              <p className="text-[13px] text-foreground/80 leading-relaxed">
                {repertoire.howToUse}
              </p>
            </div>
          </div>

          {/* Paragraph model */}
          <div className="relative p-4 rounded-xl bg-secondary/40 border border-border/30 ml-9">
            <div className="flex items-center gap-2 mb-2">
              <Quote className="w-3.5 h-3.5 text-primary/40" />
              <span className="text-[10px] font-mono font-semibold text-primary/50 uppercase tracking-wider">
                Modelo de Parágrafo
              </span>
            </div>
            <p className="text-[13px] leading-[1.85] text-foreground/80 pr-10">
              {repertoire.paragraphModel}
            </p>
            <button
              onClick={handleCopy}
              className={cn(
                "absolute top-3 right-3 p-2 rounded-lg transition-all duration-200",
                copied
                  ? "bg-accent/10 text-accent"
                  : "hover:bg-secondary text-muted-foreground hover:text-foreground"
              )}
              title="Copiar parágrafo"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
