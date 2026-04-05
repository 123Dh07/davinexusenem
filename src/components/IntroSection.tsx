import { useState } from "react";
import { BookOpen, Target, Lightbulb, PenTool, CheckCircle2, ChevronDown, ArrowRight, Eye, FileText, Link2, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface IntroSectionProps {
  onGoToRepertorios: () => void;
}

const steps = [
  {
    icon: Target,
    title: "Entenda a proposta",
    description:
      "Leia o tema com atenção, identifique o recorte temático e o problema a ser discutido. Sublinhe palavras-chave.",
    example: {
      label: "Exemplo prático",
      content:
        'Tema: "Os desafios para o enfrentamento da invisibilidade do trabalho de cuidado no Brasil". Palavras-chave: desafios, invisibilidade, trabalho de cuidado, Brasil. Recorte: não é sobre qualquer trabalho — é sobre o trabalho doméstico e de cuidado que não é reconhecido. Problema: por que esse trabalho é invisível e quais as consequências?',
    },
  },
  {
    icon: Lightbulb,
    title: "Planeje sua tese",
    description:
      "Defina seu posicionamento e escolha 2 argumentos fortes. Sua tese deve aparecer na introdução de forma clara.",
    example: {
      label: "Exemplo de tese",
      content:
        'Tese: "A invisibilidade do trabalho de cuidado no Brasil é resultado da herança patriarcal e da negligência estatal, o que perpetua desigualdades de gênero." Argumento 1: Cultura machista que desvaloriza o trabalho doméstico. Argumento 2: Ausência de políticas públicas de amparo.',
    },
  },
  {
    icon: BookOpen,
    title: "Use repertórios socioculturais",
    description:
      "Cite filósofos, leis, dados estatísticos, filmes ou obras literárias para fundamentar seus argumentos com autoridade.",
    example: {
      label: "Exemplos de repertório",
      content:
        '• Filósofo: Simone de Beauvoir — "Não se nasce mulher, torna-se mulher" → relacionar com papéis de gênero impostos. • Lei: Constituição Federal, Art. 5° — igualdade entre homens e mulheres. • Dado: IBGE — mulheres dedicam 21h semanais a afazeres domésticos, homens apenas 11h.',
    },
  },
  {
    icon: PenTool,
    title: "Desenvolva com coerência",
    description:
      "Cada parágrafo = 1 argumento + 1 repertório + análise. Use conectivos para guiar o leitor entre as ideias.",
    example: {
      label: "Conectivos essenciais",
      content:
        "Adição: Além disso, outrossim, ademais. Oposição: Entretanto, contudo, todavia. Causa: Isso ocorre porque, uma vez que. Consequência: Dessa forma, por conseguinte. Conclusão: Portanto, diante do exposto, em suma.",
    },
  },
  {
    icon: CheckCircle2,
    title: "Conclua com proposta de intervenção",
    description:
      "Apresente agente, ação, meio, finalidade e detalhamento. Essa é a competência que mais pontua.",
    example: {
      label: "Exemplo completo",
      content:
        "Agente: O Ministério da Mulher. Ação: deve criar programas de valorização do trabalho de cuidado. Meio: por meio de campanhas educativas e incentivos fiscais. Finalidade: a fim de reduzir a desigualdade de gênero. Detalhamento: essas campanhas devem ser veiculadas em redes sociais e escolas públicas, alcançando jovens desde a formação básica.",
    },
  },
];

const competencias = [
  {
    num: "I",
    label: "Domínio da modalidade escrita formal da língua portuguesa",
    points: "200 pts",
    details:
      "Avalia o uso correto da gramática, ortografia, acentuação e pontuação. Evite gírias, coloquialismos e erros de concordância.",
    tips: [
      "✅ Use linguagem formal: \"Ademais\" em vez de \"Além do mais\"",
      "✅ Cuidado com crase, regência e concordância",
      "✅ Evite repetição de palavras — use sinônimos",
      "❌ Não use gírias: \"tipo\", \"a gente\", \"né\"",
      "❌ Não use 1ª pessoa: prefira \"observa-se\" em vez de \"eu acho\"",
    ],
  },
  {
    num: "II",
    label: "Compreensão da proposta e aplicação de conceitos de várias áreas do conhecimento",
    points: "200 pts",
    details:
      "Verifica se você entendeu o tema proposto e se manteve o texto dissertativo-argumentativo. Não fuja do tema.",
    tips: [
      "✅ Leia o tema 3 vezes e sublinhe palavras-chave",
      "✅ Pergunte: \"Qual é o problema? Quem é afetado?\"",
      "✅ Use os textos motivadores como ponto de partida, nunca copie",
      "❌ Tangenciar = escrever sobre algo parecido mas não exato",
      "❌ Fugir do tema = zera a redação inteira",
    ],
  },
  {
    num: "III",
    label: "Seleção, relação, organização e interpretação de informações e argumentos",
    points: "200 pts",
    details:
      "Avalia a qualidade dos seus argumentos e o uso de repertórios socioculturais produtivos e legitimados.",
    tips: [
      "✅ Cada parágrafo deve ter: tópico frasal + repertório + análise",
      "✅ Repertório legitimado: filósofo, lei, dado oficial, obra literária",
      "✅ Sempre conecte o repertório ao tema (não só \"jogue\" a citação)",
      "❌ Repertório solto sem análise = nota baixa",
      "❌ Senso comum sem embasamento não pontua",
    ],
  },
  {
    num: "IV",
    label: "Conhecimento dos mecanismos linguísticos necessários à construção da argumentação",
    points: "200 pts",
    details:
      "Verifica o uso de conectivos e a coesão entre parágrafos, frases e ideias ao longo do texto.",
    tips: [
      "✅ Use conectivos no início de cada parágrafo",
      "✅ Varie: \"Além disso\", \"Nesse sentido\", \"Sob essa ótica\"",
      "✅ Retome ideias: \"Conforme mencionado\", \"Diante disso\"",
      "❌ Parágrafos soltos sem ligação = nota 80-120",
      "❌ Repetir o mesmo conectivo várias vezes",
    ],
  },
  {
    num: "V",
    label: "Elaboração de proposta de intervenção para o problema abordado",
    points: "200 pts",
    details:
      "Deve conter 5 elementos obrigatórios: agente, ação, meio, finalidade e detalhamento. É a competência mais decisiva.",
    tips: [
      "✅ Agente: quem vai agir (Governo, MEC, mídia, sociedade)",
      "✅ Ação: o que será feito (criar, implementar, fiscalizar)",
      "✅ Meio: como será feito (por meio de, através de)",
      "✅ Finalidade: para quê (a fim de, com o objetivo de)",
      "✅ Detalhamento: aprofunde qualquer um dos 4 elementos acima",
    ],
  },
];

export function IntroSection({ onGoToRepertorios }: IntroSectionProps) {
  const [openComp, setOpenComp] = useState<number | null>(null);
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleComp = (i: number) => setOpenComp(openComp === i ? null : i);
  const toggleStep = (i: number) => setOpenStep(openStep === i ? null : i);

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

      {/* Competências - accordion */}
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: "150ms" }}>
        <h3 className="text-xs font-mono font-semibold text-primary/60 uppercase tracking-widest text-center mb-6">
          As 5 Competências do ENEM
        </h3>
        <div className="max-w-2xl mx-auto space-y-2">
          {competencias.map((c, i) => (
            <div
              key={i}
              className={cn(
                "rounded-xl border overflow-hidden transition-all duration-300",
                openComp === i
                  ? "bg-card border-primary/25"
                  : "bg-card border-border/50 hover:border-border/80"
              )}
            >
              <button
                onClick={() => toggleComp(i)}
                className="w-full flex items-center gap-4 p-4 text-left active:scale-[0.998] transition-colors"
              >
                <span className="text-xl font-extrabold text-primary/70 font-mono w-8 text-center shrink-0">
                  {c.num}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[14px] text-foreground tracking-tight leading-snug">
                    {c.label}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-accent font-semibold shrink-0 mr-2">
                  {c.points}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-muted-foreground/60 shrink-0 transition-transform duration-300",
                    openComp === i && "rotate-180"
                  )}
                />
              </button>
              {openComp === i && (
                <div className="px-4 pb-4 pl-16 animate-fade-in space-y-3">
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {c.details}
                  </p>
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-mono font-semibold text-primary/50 uppercase tracking-wider">
                      Como dominar
                    </p>
                    {c.tips.map((tip, j) => (
                      <p
                        key={j}
                        className={cn(
                          "text-[13px] leading-relaxed pl-2 border-l-2",
                          tip.startsWith("✅")
                            ? "text-emerald-400/90 border-emerald-500/30"
                            : "text-red-400/90 border-red-500/30"
                        )}
                      >
                        {tip}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Steps with examples */}
      <div className="space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
        <h3 className="text-xs font-mono font-semibold text-primary/60 uppercase tracking-widest text-center mb-6">
          Passo a Passo com Exemplos
        </h3>
        <div className="space-y-3 max-w-2xl mx-auto">
          {steps.map((step, i) => {
            const StepIcon = step.icon;
            const isOpen = openStep === i;
            return (
              <div
                key={i}
                className={cn(
                  "rounded-xl overflow-hidden transition-all duration-300",
                  "bg-card border",
                  isOpen ? "border-primary/25" : "border-border/50 hover:border-primary/15"
                )}
              >
                <button
                  onClick={() => toggleStep(i)}
                  className="w-full flex items-start gap-4 p-5 text-left active:scale-[0.998] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <StepIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
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
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-muted-foreground/60 shrink-0 mt-3 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pl-[4.5rem] animate-fade-in">
                    <div className="rounded-lg bg-primary/5 border border-primary/10 p-4">
                      <p className="text-[11px] font-mono font-semibold text-primary/60 uppercase tracking-wider mb-2">
                        {step.example.label}
                      </p>
                      <p className="text-[13px] text-muted-foreground leading-relaxed whitespace-pre-line">
                        {step.example.content}
                      </p>
                    </div>
                  </div>
                )}
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

      {/* CTA to repertórios */}
      <div className="opacity-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
        <div className="max-w-2xl mx-auto text-center space-y-4 py-8">
          <p className="text-muted-foreground text-[14px]">
            Agora que você sabe como funciona, explore repertórios prontos,
            exemplos de parágrafos e modelos de redação.
          </p>
          <button
            onClick={onGoToRepertorios}
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
              "bg-primary text-primary-foreground font-semibold text-[14px]",
              "hover:brightness-110 active:scale-[0.97] transition-all duration-200",
              "shadow-[0_0_30px_-8px_hsl(217_91%_60%_/_0.4)]"
            )}
          >
            Ver repertórios e exemplos
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
