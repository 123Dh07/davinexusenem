import { useState } from "react";
import { Copy, Check, ChevronDown, Quote } from "lucide-react";
import { Repertoire, categoryLabels } from "@/data/enemData";
import { cn } from "@/lib/utils";

interface RepertoireTableProps {
  repertoires: Repertoire[];
}

export function RepertoireTable({ repertoires }: RepertoireTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/40">
            <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
              Área
            </th>
            <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
              Repertório
            </th>
            <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-primary hidden sm:table-cell">
              Ideia Central
            </th>
            <th className="text-left px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-primary hidden md:table-cell">
              Como Usar
            </th>
            <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-primary w-10">
            </th>
          </tr>
        </thead>
        <tbody>
          {repertoires.map((rep, i) => (
            <RepertoireRow key={i} repertoire={rep} isLast={i === repertoires.length - 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RepertoireRow({ repertoire, isLast }: { repertoire: Repertoire; isLast: boolean }) {
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
    <>
      <tr
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "cursor-pointer transition-colors hover:bg-primary/[0.04]",
          !isLast && !isOpen && "border-b border-border/20",
          isOpen && "bg-primary/[0.03]"
        )}
      >
        <td className="px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-lg leading-none">{cat.emoji}</span>
            <span className="text-xs font-semibold text-foreground/80 whitespace-nowrap">
              {cat.label}
            </span>
          </div>
        </td>
        <td className="px-4 py-3">
          <span className="font-display font-bold text-foreground text-[13px]">
            {repertoire.title}
          </span>
        </td>
        <td className="px-4 py-3 hidden sm:table-cell">
          <span className="text-[13px] text-muted-foreground leading-relaxed">
            {repertoire.description}
          </span>
        </td>
        <td className="px-4 py-3 hidden md:table-cell">
          <span className="text-[13px] text-muted-foreground leading-relaxed">
            {repertoire.howToUse}
          </span>
        </td>
        <td className="px-4 py-3">
          <ChevronDown
            className={cn(
              "w-4 h-4 text-muted-foreground transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </td>
      </tr>

      {/* Expanded paragraph model */}
      {isOpen && (
        <tr className={cn(!isLast && "border-b border-border/20")}>
          <td colSpan={5} className="px-4 pb-4 pt-1">
            {/* Mobile: show hidden columns */}
            <div className="sm:hidden space-y-2 mb-3">
              <div className="p-2.5 rounded-lg bg-secondary/50">
                <p className="text-[10px] font-mono font-bold text-muted-foreground uppercase mb-0.5">Ideia Central</p>
                <p className="text-[13px] text-foreground/80">{repertoire.description}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-accent/5 border border-accent/10">
                <p className="text-[10px] font-mono font-bold text-accent uppercase mb-0.5">Como Usar</p>
                <p className="text-[13px] text-foreground/80">{repertoire.howToUse}</p>
              </div>
            </div>
            <div className="md:hidden sm:block hidden mb-3">
              <div className="p-2.5 rounded-lg bg-accent/5 border border-accent/10">
                <p className="text-[10px] font-mono font-bold text-accent uppercase mb-0.5">Como Usar</p>
                <p className="text-[13px] text-foreground/80">{repertoire.howToUse}</p>
              </div>
            </div>

            <div className="relative p-4 rounded-xl bg-primary/[0.04] border border-primary/15 animate-fade-in">
              <Quote className="w-4 h-4 text-primary/25 mb-2" />
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
          </td>
        </tr>
      )}
    </>
  );
}
