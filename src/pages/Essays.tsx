import { useState, useRef } from "react";
import { essays } from "@/data/essaysData";
import { categoryLabels } from "@/data/enemData";
import { ChevronDown, Star, BookOpen, FileText, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Essays() {
  const [view, setView] = useState<"intro" | "redacao">("intro");
  const [selectedEssay, setSelectedEssay] = useState(essays[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [repDestacado, setRepDestacado] = useState<string | null>(null);
  const redacaoRef = useRef<HTMLDivElement>(null);

  const handleClickRep = (title: string) => {
    if (repDestacado === title) {
      setRepDestacado(null);
      return;
    }
    setRepDestacado(title);
    setTimeout(() => {
      redacaoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const renderTextWithHighlights = (text: string, repertoires: { title: string }[], destacado: string | null) => {
    const parts: JSX.Element[] = [];
    let remaining = text;
    let keyIndex = 0;

    while (remaining.length > 0) {
      let earliestMatch: { index: number; title: string } | null = null;

      repertoires.forEach(rep => {
        const idx = remaining.toLowerCase().indexOf(rep.title.toLowerCase());
        if (idx !== -1 && (earliestMatch === null || idx < earliestMatch.index)) {
          earliestMatch = { index: idx, title: rep.title };
        }
      });

      if (!earliestMatch) {
        parts.push(<span key={keyIndex++}>{remaining}</span>);
        break;
      }

      if (earliestMatch.index > 0) {
        parts.push(<span key={keyIndex++}>{remaining.slice(0, earliestMatch.index)}</span>);
      }

      const isDestacado = destacado === earliestMatch.title;

      parts.push(
        <mark
          key={keyIndex++}
          className={cn(
            "rounded px-0.5 not-italic transition-all duration-300",
            isDestacado
              ? "bg-yellow-400/40 text-yellow-300 ring-2 ring-yellow-400/50"
              : "bg-primary/20 text-primary"
          )}
        >
          {remaining.slice(earliestMatch.index, earliestMatch.index + earliestMatch.title.length)}
        </mark>
      );

      remaining = remaining.slice(earliestMatch.index + earliestMatch.title.length);
    }

    return parts;
  };

  return (
    <div className="space-y-8">

      {/* Introdução */}
      {view === "intro" && (
        <div className="space-y-8 opacity-0 animate-fade-in">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight" style={{ lineHeight: "1.1" }}>
              Redações <span className="text-gradient">Nota 1000</span>
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              A redação do ENEM vale <strong className="text-foreground">1000 pontos</strong> — é a maior oportunidade de se destacar entre milhões de candidatos. Uma redação nota 1000 exige domínio da estrutura dissertativo-argumentativa, uso de repertórios socioculturais e uma proposta de intervenção detalhada e viável.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { emoji: "📝", title: "Estrutura", desc: "Introdução + 2 desenvolvimentos + Conclusão com proposta de intervenção" },
              { emoji: "🧠", title: "Repertórios", desc: "Use filósofos, leis, dados e fatos históricos para embasar seus argumentos" },
              { emoji: "⭐", title: "Nota 1000", desc: "Domine as 5 competências avaliadas pelo ENEM para alcançar a nota máxima" },
            ].map((card) => (
              <div key={card.title} className="p-5 rounded-2xl bg-card border border-border/60">
                <span className="text-2xl mb-3 block">{card.emoji}</span>
                <h3 className="font-bold text-foreground text-[14px] mb-1">{card.title}</h3>
                <p className="text-[12px] text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setView("redacao")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-[14px] transition-all hover:opacity-90"
            >
              <FileText className="w-4 h-4" />
              Ver Redações Nota 1000
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Redações */}
      {view === "redacao" && (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setView("intro"); setRepDestacado(null); }}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
            <h2 className="text-xl font-bold text-foreground">Redações Nota 1000</h2>
          </div>

          {/* Seletor de tema */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-secondary/80 border border-border/40 text-left transition-colors hover:border-primary/30"
              >
                <div>
                  <p className="text-[11px] font-mono text-muted-foreground mb-0.5">Tema selecionado</p>
                  <p className="text-[14px] font-semibold text-foreground">{selectedEssay.theme}</p>
                </div>
                <ChevronDown className={cn("w-4 h-4 text-muted-foreground transition-transform", isDropdownOpen && "rotate-180")} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border/60 rounded-xl overflow-hidden shadow-xl z-10 max-h-64 overflow-y-auto">
                  {essays.map((essay) => (
                    <button
                      key={essay.id}
                      onClick={() => { setSelectedEssay(essay); setIsDropdownOpen(false); setRepDestacado(null); }}
                      className={cn(
                        "w-full text-left px-4 py-3 text-[13px] transition-colors hover:bg-secondary/60",
                        selectedEssay.id === essay.id && "bg-primary/10 text-primary"
                      )}
                    >
                      {essay.theme}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Header */}
            <div className="p-5 rounded-2xl bg-card border border-border/60">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                  <span className="text-[12px] font-mono font-semibold text-yellow-400">Nota {selectedEssay.score}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                  <BookOpen className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[12px] font-mono font-semibold text-primary">{selectedEssay.repertoiresUsed.length} repertórios</span>
                </div>
              </div>
              <h3 className="text-[18px] font-bold text-foreground">{selectedEssay.theme}</h3>
              <p className="text-[12px] text-muted-foreground mt-2">
                Clique em um repertório abaixo para destacá-lo no texto ⬇️
              </p>

              {/* Repertórios clicáveis */}
              <div className="flex flex-wrap gap-2 mt-3">
                {selectedEssay.repertoiresUsed.map((rep, i) => {
                  const cat = categoryLabels[rep.category as keyof typeof categoryLabels];
                  const ativo = repDestacado === rep.title;
                  return (
                    <button
                      key={i}
                      onClick={() => handleClickRep(rep.title)}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] transition-all duration-200 border",
                        ativo
                          ? "bg-yellow-400/20 border-yellow-400/40 text-yellow-300"
                          : "bg-card border-border/40 text-foreground/80 hover:border-primary/30 hover:text-primary"
                      )}
                    >
                      <span>{cat?.emoji}</span>
                      <span className="font-medium">{rep.title}</span>
                      {ativo && <span className="text-yellow-400">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Texto da redação */}
            <div ref={redacaoRef} className="space-y-4">
              {[
                { label: "Introdução", text: selectedEssay.introduction },
                { label: "1º Parágrafo de Desenvolvimento", text: selectedEssay.development1 },
                { label: "2º Parágrafo de Desenvolvimento", text: selectedEssay.development2 },
                { label: "Conclusão", text: selectedEssay.conclusion },
              ].map((section) => (
                <div key={section.label} className="p-5 rounded-xl bg-card border border-border/40">
                  <p className="text-[10px] font-mono font-semibold text-primary/60 uppercase tracking-wider mb-3">
                    {section.label}
                  </p>
                  <p className="text-[14px] leading-[1.9] text-foreground/85">
                    {renderTextWithHighlights(section.text, selectedEssay.repertoiresUsed, repDestacado)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}