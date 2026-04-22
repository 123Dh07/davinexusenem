import { useState } from "react";
import {
  BookOpen, Target, Lightbulb, PenTool, CheckCircle2,
  ChevronDown, ArrowRight, Sparkles, Shield, Brain,
  Link2, Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IntroSectionProps {
  onGoToRepertorios: () => void;
}

const steps = [
  {
    icon: Target, title: "Entenda a proposta",
    description: "Leia o tema com atenção, identifique o recorte temático e o problema a ser discutido.",
    example: {
      label: "Exemplo prático",
      content: 'Tema: "Os desafios para o enfrentamento da invisibilidade do trabalho de cuidado no Brasil"\n\nPalavras-chave: desafios, invisibilidade, trabalho de cuidado, Brasil.\n\nRecorte: não é sobre qualquer trabalho — é sobre o trabalho doméstico e de cuidado não reconhecido.\n\nProblema: por que esse trabalho é invisível e quais as consequências?',
    },
  },
  {
    icon: Lightbulb, title: "Planeje sua tese",
    description: "Defina seu posicionamento e escolha 2 argumentos fortes que aparecerão na introdução.",
    example: {
      label: "Exemplo de tese",
      content: 'Tese: "A invisibilidade do trabalho de cuidado no Brasil resulta da herança patriarcal e da negligência estatal, perpetuando desigualdades de gênero."\n\nArgumento 1: Cultura machista que desvaloriza o trabalho doméstico.\nArgumento 2: Ausência de políticas públicas de amparo.',
    },
  },
  {
    icon: BookOpen, title: "Use repertórios socioculturais",
    description: "Cite filósofos, leis, dados, filmes ou obras literárias para fundamentar seus argumentos.",
    example: {
      label: "Exemplos de repertório",
      content: '• Simone de Beauvoir — "Não se nasce mulher, torna-se mulher" → papéis de gênero impostos.\n• Constituição Federal, Art. 5° — igualdade entre homens e mulheres.\n• IBGE — mulheres dedicam 21h semanais a afazeres domésticos vs 11h dos homens.',
    },
  },
  {
    icon: PenTool, title: "Desenvolva com coerência",
    description: "Cada parágrafo = 1 argumento + 1 repertório + análise. Use conectivos entre as ideias.",
    example: {
      label: "Conectivos essenciais",
      content: "Adição: Além disso, outrossim, ademais\nOposição: Entretanto, contudo, todavia\nCausa: Isso ocorre porque, uma vez que\nConsequência: Dessa forma, por conseguinte\nConclusão: Portanto, diante do exposto, em suma",
    },
  },
  {
    icon: CheckCircle2, title: "Conclua com proposta de intervenção",
    description: "Apresente agente, ação, meio, finalidade e detalhamento — a competência que mais pontua.",
    example: {
      label: "Exemplo completo",
      content: "Agente: O Ministério da Mulher\nAção: criar programas de valorização do trabalho de cuidado\nMeio: campanhas educativas e incentivos fiscais\nFinalidade: reduzir a desigualdade de gênero\nDetalhamento: campanhas veiculadas em redes sociais e escolas públicas",
    },
  },
];

const competencias = [
  {
    num: "C1", icon: PenTool, label: "Domínio da escrita formal da língua portuguesa", points: 200,
    color: "from-blue-500/20 to-blue-600/5", borderColor: "border-blue-500/20", iconColor: "text-blue-400",
    details: "Avalia gramática, ortografia, acentuação e pontuação. Demonstre domínio da norma culta.",
    dominar: [
      { tipo: "fazer", texto: "Use linguagem formal: \"ademais\", \"outrossim\", \"não obstante\"" },
      { tipo: "fazer", texto: "Varie o vocabulário — substitua repetições por sinônimos" },
      { tipo: "fazer", texto: "Prefira voz impessoal: \"observa-se\", \"percebe-se\"" },
      { tipo: "fazer", texto: "Revise crase, regência verbal e concordância" },
      { tipo: "evitar", texto: "Gírias e coloquialismos: \"tipo\", \"a gente\", \"né\"" },
      { tipo: "evitar", texto: "Primeira pessoa: \"eu acho\", \"na minha opinião\"" },
    ],
  },
  {
    num: "C2", icon: Target, label: "Compreensão da proposta e aplicação de conceitos", points: 200,
    color: "from-emerald-500/20 to-emerald-600/5", borderColor: "border-emerald-500/20", iconColor: "text-emerald-400",
    details: "Verifica se você entendeu o tema e manteve o tipo textual dissertativo-argumentativo.",
    dominar: [
      { tipo: "fazer", texto: "Leia o tema 3 vezes e sublinhe palavras-chave" },
      { tipo: "fazer", texto: "Pergunte: \"Qual é o problema? Quem é afetado?\"" },
      { tipo: "fazer", texto: "Use textos motivadores como ponto de partida, nunca copie" },
      { tipo: "fazer", texto: "Mantenha o foco no recorte temático em todos os parágrafos" },
      { tipo: "evitar", texto: "Tangenciar — escrever sobre algo parecido mas não exato" },
      { tipo: "evitar", texto: "Fugir do tema — zera a redação inteira" },
    ],
  },
  {
    num: "C3", icon: Brain, label: "Seleção, organização e interpretação de informações", points: 200,
    color: "from-violet-500/20 to-violet-600/5", borderColor: "border-violet-500/20", iconColor: "text-violet-400",
    details: "Avalia a qualidade dos argumentos e o uso de repertórios socioculturais produtivos.",
    dominar: [
      { tipo: "fazer", texto: "Cada parágrafo: tópico frasal + repertório + análise" },
      { tipo: "fazer", texto: "Use repertório legitimado: filósofo, lei, dado, obra literária" },
      { tipo: "fazer", texto: "Conecte o repertório ao tema — não \"jogue\" a citação" },
      { tipo: "fazer", texto: "Analise criticamente: explique por que o repertório comprova seu ponto" },
      { tipo: "evitar", texto: "Repertório solto sem análise = nota baixa" },
      { tipo: "evitar", texto: "Senso comum sem embasamento não pontua" },
    ],
  },
  {
    num: "C4", icon: Link2, label: "Mecanismos linguísticos de construção da argumentação", points: 200,
    color: "from-amber-500/20 to-amber-600/5", borderColor: "border-amber-500/20", iconColor: "text-amber-400",
    details: "Verifica o uso de conectivos e a coesão entre parágrafos, frases e ideias.",
    dominar: [
      { tipo: "fazer", texto: "Use conectivos no início de cada parágrafo" },
      { tipo: "fazer", texto: "Varie: \"Além disso\", \"Nesse sentido\", \"Sob essa ótica\"" },
      { tipo: "fazer", texto: "Retome ideias: \"Conforme mencionado\", \"Diante disso\"" },
      { tipo: "fazer", texto: "Use pronomes e sinônimos para evitar repetição" },
      { tipo: "evitar", texto: "Parágrafos soltos sem ligação = nota 80-120" },
      { tipo: "evitar", texto: "Repetir o mesmo conectivo várias vezes" },
    ],
  },
  {
    num: "C5", icon: Award, label: "Proposta de intervenção para o problema abordado", points: 200,
    color: "from-rose-500/20 to-rose-600/5", borderColor: "border-rose-500/20", iconColor: "text-rose-400",
    details: "Deve conter 5 elementos: agente, ação, meio, finalidade e detalhamento. A mais decisiva.",
    dominar: [
      { tipo: "fazer", texto: "Agente: quem vai agir (Governo, MEC, mídia, sociedade)" },
      { tipo: "fazer", texto: "Ação: o que será feito (criar, implementar, fiscalizar)" },
      { tipo: "fazer", texto: "Meio: como será feito (por meio de, através de)" },
      { tipo: "fazer", texto: "Finalidade: para quê (a fim de, com o objetivo de)" },
      { tipo: "fazer", texto: "Detalhamento: aprofunde qualquer um dos 4 elementos acima" },
      { tipo: "evitar", texto: "Proposta genérica sem agente ou meio definido" },
    ],
  },
];

const estrutura = [
  { part: "Introdução", linhas: "7 linhas", desc: "Contextualização + Tese + Encaminhamento argumentativo", cor: "#6366f1" },
  { part: "Desenvolvimento 1", linhas: "9 linhas", desc: "Tópico frasal + Repertório + Análise argumentativa", cor: "#8b5cf6" },
  { part: "Desenvolvimento 2", linhas: "9 linhas", desc: "Tópico frasal + Repertório + Análise argumentativa", cor: "#a78bfa" },
  { part: "Conclusão", linhas: "7 linhas", desc: "Retomada da tese + Proposta de intervenção completa (5 elementos)", cor: "#34d399" },
];

export function IntroSection({ onGoToRepertorios }: IntroSectionProps) {
  const [openComp, setOpenComp] = useState<number | null>(null);
  const [openStep, setOpenStep] = useState<number | null>(null);

  return (
    <div className="space-y-16">

      {/* ── HERO VISUAL ── */}
      <div style={{
        borderRadius: 20, overflow: "hidden",
        background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.08) 50%, rgba(16,185,129,0.06) 100%)",
        border: "1px solid rgba(99,102,241,0.2)",
        padding: "40px 40px",
        position: "relative",
      }}>
        {/* Glow de fundo */}
        <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -20, left: -20, width: 150, height: 150, background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20 }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 16px", borderRadius: 999, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)" }}>
            <Sparkles style={{ width: 13, height: 13, color: "#818cf8" }} />
            <span style={{ fontSize: 11, fontFamily: "monospace", color: "#818cf8", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>Guia Completo</span>
          </div>

          {/* Título */}
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "white", letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0 }}>
            Como tirar{" "}
            <span style={{ background: "linear-gradient(135deg, #818cf8, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              nota 1000
            </span>{" "}
            na redação
          </h2>

          {/* Subtítulo */}
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, maxWidth: 520, margin: 0 }}>
            Domine as 5 competências do ENEM e aprenda a construir uma redação nota máxima com exemplos práticos e passo a passo completo.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
            {[
              { emoji: "🎯", label: "5 Competências", sub: "200 pts cada" },
              { emoji: "📝", label: "Passo a passo", sub: "5 etapas" },
              { emoji: "🏆", label: "Nota máxima", sub: "1000 pontos" },
            ].map(s => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 12, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span style={{ fontSize: 20 }}>{s.emoji}</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "white", margin: 0, lineHeight: 1.2 }}>{s.label}</p>
                  <p style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", margin: 0, fontFamily: "monospace" }}>{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competências */}
      <section className="opacity-0 animate-fade-in" style={{ animationDelay: "150ms" }}>
        <div className="text-center mb-8">
          <h3 className="text-xs font-mono font-semibold text-primary/60 uppercase tracking-widest mb-2">As 5 Competências do ENEM</h3>
          <p className="text-sm text-muted-foreground">Total: 1000 pontos · 200 por competência</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
          {competencias.map((c, i) => {
            const Icon = c.icon;
            const isOpen = openComp === i;
            return (
              <div key={i} className={cn("rounded-2xl border overflow-hidden transition-all duration-300", isOpen ? `bg-gradient-to-br ${c.color} ${c.borderColor}` : "bg-card border-border/40 hover:border-border/70")}>
                <button onClick={() => setOpenComp(isOpen ? null : i)} className="w-full flex items-center gap-4 p-5 text-left active:scale-[0.995] transition-transform">
                  <div className={cn("w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors", isOpen ? "bg-background/20" : "bg-secondary/80")}>
                    <Icon className={cn("w-5 h-5", c.iconColor)} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={cn("text-[11px] font-mono font-bold", c.iconColor)}>{c.num}</span>
                    </div>
                    <p className="font-semibold text-[14px] text-foreground tracking-tight leading-snug">{c.label}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[12px] font-mono text-muted-foreground font-semibold bg-secondary/60 px-2.5 py-1 rounded-md">{c.points} pts</span>
                    <ChevronDown className={cn("w-4 h-4 text-muted-foreground/50 transition-transform duration-300", isOpen && "rotate-180")} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pl-20 animate-fade-in space-y-4">
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{c.details}</p>
                    <div className="space-y-3">
                      <p className="text-[11px] font-mono font-bold text-foreground/60 uppercase tracking-widest flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5" />Como dominar
                      </p>
                      <div className="grid gap-2">
                        {c.dominar.map((item, j) => (
                          <div key={j} className={cn("flex items-start gap-2.5 text-[13px] leading-relaxed rounded-lg px-3 py-2.5", item.tipo === "fazer" ? "bg-emerald-500/8 border border-emerald-500/15 text-emerald-300/90" : "bg-red-500/8 border border-red-500/15 text-red-300/90")}>
                            <span className="shrink-0 mt-0.5 text-[12px]">{item.tipo === "fazer" ? "✅" : "❌"}</span>
                            <span>{item.texto}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Passo a passo */}
      <section className="opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <div className="text-center mb-8">
          <h3 className="text-xs font-mono font-semibold text-primary/60 uppercase tracking-widest mb-2">Passo a Passo</h3>
          <p className="text-sm text-muted-foreground">Do tema à proposta de intervenção</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
          {steps.map((step, i) => {
            const StepIcon = step.icon;
            const isOpen = openStep === i;
            return (
              <div key={i} className={cn("rounded-2xl overflow-hidden transition-all duration-300 bg-card border", isOpen ? "border-primary/25" : "border-border/40 hover:border-border/70")}>
                <button onClick={() => setOpenStep(isOpen ? null : i)} className="w-full flex items-start gap-4 p-5 text-left active:scale-[0.995] transition-transform">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <StepIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono font-bold text-primary/50">{String(i + 1).padStart(2, "0")}</span>
                      <h4 className="font-bold text-[15px] text-foreground tracking-tight">{step.title}</h4>
                    </div>
                    <p className="text-[13px] text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                  <ChevronDown className={cn("w-4 h-4 text-muted-foreground/50 shrink-0 mt-3 transition-transform duration-300", isOpen && "rotate-180")} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pl-20 animate-fade-in">
                    <div className="rounded-xl bg-primary/5 border border-primary/10 p-4">
                      <p className="text-[11px] font-mono font-semibold text-primary/60 uppercase tracking-wider mb-2.5">{step.example.label}</p>
                      <p className="text-[13px] text-muted-foreground leading-relaxed whitespace-pre-line">{step.example.content}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Estrutura */}
      <section className="opacity-0 animate-fade-in" style={{ animationDelay: "450ms" }}>
        <div className="text-center mb-8">
          <h3 className="text-xs font-mono font-semibold text-primary/60 uppercase tracking-widest mb-2">Estrutura da Redação</h3>
          <p className="text-sm text-muted-foreground">4 parágrafos, cada um com função definida</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-2">
          {estrutura.map((block, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 16px", borderRadius: 14, background: "rgba(255,255,255,0.03)", borderLeft: `4px solid ${block.cor}`, border: `1px solid ${block.cor}20`, borderLeftWidth: 4, borderLeftColor: block.cor }}>
              <div style={{ minWidth: 140 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "white", margin: "0 0 2px 0" }}>{block.part}</p>
                <p style={{ fontSize: 10, color: block.cor, fontFamily: "monospace", fontWeight: 700, margin: 0 }}>{block.linhas}</p>
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.5 }}>{block.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
        <div className="max-w-2xl mx-auto text-center space-y-5 py-10">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-lg font-bold text-foreground tracking-tight">Pronto para praticar?</h3>
          <p className="text-muted-foreground text-[14px] max-w-sm mx-auto">
            Explore repertórios prontos, exemplos de parágrafos e modelos de redação organizados por tema.
          </p>
          <button
            onClick={onGoToRepertorios}
            className={cn("inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl", "bg-primary text-primary-foreground font-semibold text-[14px]", "hover:brightness-110 active:scale-[0.97] transition-all duration-200", "shadow-[0_0_40px_-10px_hsl(217_91%_60%_/_0.35)]")}
          >
            Ver repertórios e exemplos
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}