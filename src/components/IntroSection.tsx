import { BookOpen, Target, Lightbulb, PenTool, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Target,
    title: "Entenda a proposta",
    description:
      "Leia o tema com atenção, identifique o recorte temático e o problema a ser discutido. Sublinhe palavras-chave.",
  },
  {
    icon: Lightbulb,
    title: "Planeje sua tese",
    description:
      "Defina seu posicionamento e escolha 2 argumentos fortes. Sua tese deve aparecer na introdução de forma clara.",
  },
  {
    icon: BookOpen,
    title: "Use repertórios socioculturais",
    description:
      "Cite filósofos, leis, dados estatísticos, filmes ou obras literárias para fundamentar seus argumentos com autoridade.",
  },
  {
    icon: PenTool,
    title: "Desenvolva com coerência",
    description:
      "Cada parágrafo = 1 argumento + 1 repertório + análise. Use conectivos para guiar o leitor entre as ideias.",
  },
  {
    icon: CheckCircle2,
    title: "Conclua com proposta de intervenção",
    description:
      "Apresente agente, ação, meio, finalidade e detalhamento. Essa é a competência que mais pontua.",
  },
];

const competencias = [
  { num: "I", label: "Domínio da norma culta", points: "200 pts" },
  { num: "II", label: "Compreensão da proposta", points: "200 pts" },
  { num: "III", label: "Argumentação", points: "200 pts" },
  { num: "IV", label: "Coesão textual", points: "200 pts" },
  { num: "V", label: "Proposta de intervenção", points: "200 pts" },
];

export function IntroSection() {
  return (
    <div className="space-y-16">
      {/* Hero intro */}
      <div className="text-center max-w-2xl mx-auto space-y-5 opacity-0 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-[13px] text-primary font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Guia Completo
        </div>
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight"
          style={{ lineHeight: "1.1" }}
        >
          Como tirar{" "}
          <span className="text-gradient">nota 1000</span>{" "}
          na redação
        </h2>
        <p className="text-[15px] text-muted-foreground leading-relaxed max-w-lg mx-auto">
          Domine as 5 competências avaliadas pelo ENEM e aprenda o passo a passo
          para construir uma redação nota máxima.
        </p>
      </div>

      {/* Competências grid */}
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: "150ms" }}>
        <h3 className="text-xs font-mono font-semibold text-primary/60 uppercase tracking-widest text-center mb-6">
          As 5 Competências do ENEM
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {competencias.map((c, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col items-center gap-2 p-4 rounded-xl",
                "bg-card border border-border/50",
                "hover:border-primary/30 transition-all duration-300"
              )}
            >
              <span className="text-2xl font-extrabold text-primary/80 font-mono">
                {c.num}
              </span>
              <p className="text-[12px] text-center text-foreground/80 font-medium leading-tight">
                {c.label}
              </p>
              <span className="text-[10px] font-mono text-accent font-semibold">
                {c.points}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <h3 className="text-xs font-mono font-semibold text-primary/60 uppercase tracking-widest text-center mb-6">
          Passo a Passo
        </h3>
        <div className="space-y-3 max-w-2xl mx-auto">
          {steps.map((step, i) => {
            const StepIcon = step.icon;
            return (
              <div
                key={i}
                className={cn(
                  "flex items-start gap-4 p-5 rounded-xl",
                  "bg-card border border-border/50",
                  "hover:border-primary/25 transition-all duration-300"
                )}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <StepIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold text-primary/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="font-bold text-[15px] text-foreground tracking-tight">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Structure model */}
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: "450ms" }}>
        <h3 className="text-xs font-mono font-semibold text-primary/60 uppercase tracking-widest text-center mb-6">
          Estrutura da Redação
        </h3>
        <div className="max-w-2xl mx-auto space-y-2">
          {[
            {
              part: "Introdução",
              lines: "Contextualização + Tese + Encaminhamento",
              color: "bg-primary/10 border-primary/20",
            },
            {
              part: "Desenvolvimento 1",
              lines: "Tópico frasal + Repertório + Análise argumentativa",
              color: "bg-accent/10 border-accent/20",
            },
            {
              part: "Desenvolvimento 2",
              lines: "Tópico frasal + Repertório + Análise argumentativa",
              color: "bg-accent/10 border-accent/20",
            },
            {
              part: "Conclusão",
              lines: "Retomada da tese + Proposta de intervenção completa",
              color: "bg-primary/10 border-primary/20",
            },
          ].map((block, i) => (
            <div
              key={i}
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl border",
                block.color
              )}
            >
              <span className="font-bold text-[14px] text-foreground w-40 shrink-0">
                {block.part}
              </span>
              <span className="text-[13px] text-muted-foreground">
                {block.lines}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
