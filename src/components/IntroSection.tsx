import { useState } from "react";
import {
  BookOpen, Target, Lightbulb, PenTool, CheckCircle2,
  ChevronDown, ArrowRight, Sparkles, Shield, Brain,
  Link2, Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface IntroSectionProps {
  onGoToRepertorios: () => void;
  darkMode?: boolean;
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
    accentColor: "#3b82f6",
    details: "Avalia gramática, ortografia, acentuação e pontuação. Demonstre domínio da norma culta.",
    dominar: [
      { tipo: "fazer", texto: 'Use linguagem formal: "ademais", "outrossim", "não obstante"' },
      { tipo: "fazer", texto: "Varie o vocabulário — substitua repetições por sinônimos" },
      { tipo: "fazer", texto: 'Prefira voz impessoal: "observa-se", "percebe-se"' },
      { tipo: "fazer", texto: "Revise crase, regência verbal e concordância" },
      { tipo: "evitar", texto: 'Gírias e coloquialismos: "tipo", "a gente", "né"' },
      { tipo: "evitar", texto: 'Primeira pessoa: "eu acho", "na minha opinião"' },
    ],
  },
  {
    num: "C2", icon: Target, label: "Compreensão da proposta e aplicação de conceitos", points: 200,
    color: "from-emerald-500/20 to-emerald-600/5", borderColor: "border-emerald-500/20", iconColor: "text-emerald-400",
    accentColor: "#10b981",
    details: "Verifica se você entendeu o tema e manteve o tipo textual dissertativo-argumentativo.",
    dominar: [
      { tipo: "fazer", texto: "Leia o tema 3 vezes e sublinhe palavras-chave" },
      { tipo: "fazer", texto: 'Pergunte: "Qual é o problema? Quem é afetado?"' },
      { tipo: "fazer", texto: "Use textos motivadores como ponto de partida, nunca copie" },
      { tipo: "fazer", texto: "Mantenha o foco no recorte temático em todos os parágrafos" },
      { tipo: "evitar", texto: "Tangenciar — escrever sobre algo parecido mas não exato" },
      { tipo: "evitar", texto: "Fugir do tema — zera a redação inteira" },
    ],
  },
  {
    num: "C3", icon: Brain, label: "Seleção, organização e interpretação de informações", points: 200,
    color: "from-violet-500/20 to-violet-600/5", borderColor: "border-violet-500/20", iconColor: "text-violet-400",
    accentColor: "#8b5cf6",
    details: "Avalia a qualidade dos argumentos e o uso de repertórios socioculturais produtivos.",
    dominar: [
      { tipo: "fazer", texto: "Cada parágrafo: tópico frasal + repertório + análise" },
      { tipo: "fazer", texto: "Use repertório legitimado: filósofo, lei, dado, obra literária" },
      { tipo: "fazer", texto: 'Conecte o repertório ao tema — não "jogue" a citação' },
      { tipo: "fazer", texto: "Analise criticamente: explique por que o repertório comprova seu ponto" },
      { tipo: "evitar", texto: "Repertório solto sem análise = nota baixa" },
      { tipo: "evitar", texto: "Senso comum sem embasamento não pontua" },
    ],
  },
  {
    num: "C4", icon: Link2, label: "Mecanismos linguísticos de construção da argumentação", points: 200,
    color: "from-amber-500/20 to-amber-600/5", borderColor: "border-amber-500/20", iconColor: "text-amber-400",
    accentColor: "#f59e0b",
    details: "Verifica o uso de conectivos e a coesão entre parágrafos, frases e ideias.",
    dominar: [
      { tipo: "fazer", texto: "Use conectivos no início de cada parágrafo" },
      { tipo: "fazer", texto: 'Varie: "Além disso", "Nesse sentido", "Sob essa ótica"' },
      { tipo: "fazer", texto: 'Retome ideias: "Conforme mencionado", "Diante disso"' },
      { tipo: "fazer", texto: "Use pronomes e sinônimos para evitar repetição" },
      { tipo: "evitar", texto: "Parágrafos soltos sem ligação = nota 80-120" },
      { tipo: "evitar", texto: "Repetir o mesmo conectivo várias vezes" },
    ],
  },
  {
    num: "C5", icon: Award, label: "Proposta de intervenção para o problema abordado", points: 200,
    color: "from-rose-500/20 to-rose-600/5", borderColor: "border-rose-500/20", iconColor: "text-rose-400",
    accentColor: "#f43f5e",
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

export function IntroSection({ onGoToRepertorios, darkMode = true }: IntroSectionProps) {
  const [openComp, setOpenComp] = useState<number | null>(null);
  const [openStep, setOpenStep] = useState<number | null>(null);

  // Cores dinâmicas — sincronizadas com o Index.tsx
  const T = {
    text:      darkMode ? "#f0f2ff"               : "#0f172a",
    textSub:   darkMode ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.55)",
    textMuted: darkMode ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.35)",
    surface:   darkMode ? "rgba(255,255,255,0.03)" : "#ffffff",
    surfaceAlt:darkMode ? "rgba(255,255,255,0.05)" : "#f8f8ff",
    border:    darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.09)",
    input:     darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
    heroText:  darkMode ? "white"                  : "#0f172a",
    heroSub:   darkMode ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.5)",
    cardBg:    darkMode ? "rgba(255,255,255,0.03)" : "#ffffff",
    cardBorder:darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.09)",
    itemFazer: darkMode
      ? { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)", text: "rgba(110,231,183,0.9)" }
      : { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.25)", text: "#065f46" },
    itemEvitar: darkMode
      ? { bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.2)", text: "rgba(252,165,165,0.9)" }
      : { bg: "rgba(239,68,68,0.07)", border: "rgba(239,68,68,0.2)", text: "#7f1d1d" },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>

      {/* ── HERO ── */}
      <div style={{
        borderRadius: 20, overflow: "hidden",
        background: darkMode
          ? "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.08) 50%, rgba(16,185,129,0.06) 100%)"
          : "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.05) 50%, rgba(16,185,129,0.04) 100%)",
        border: "1px solid rgba(99,102,241,0.2)",
        padding: "40px",
        position: "relative",
      }}>
        <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -20, left: -20, width: 150, height: 150, background: "radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 16px", borderRadius: 999, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)" }}>
            <Sparkles style={{ width: 13, height: 13, color: "#818cf8" }} />
            <span style={{ fontSize: 11, fontFamily: "monospace", color: "#818cf8", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>Guia Completo</span>
          </div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: T.heroText, letterSpacing: "-0.03em", lineHeight: 1.1, margin: 0 }}>
            Como tirar{" "}
            <span style={{ background: "linear-gradient(135deg, #818cf8, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              nota 1000
            </span>{" "}
            na redação
          </h2>
          <p style={{ fontSize: 15, color: T.heroSub, lineHeight: 1.7, maxWidth: 520, margin: 0 }}>
            Domine as 5 competências do ENEM e aprenda a construir uma redação nota máxima com exemplos práticos e passo a passo completo.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
            {[
              { emoji: "🎯", label: "5 Competências", sub: "200 pts cada" },
              { emoji: "📝", label: "Passo a passo", sub: "5 etapas" },
              { emoji: "🏆", label: "Nota máxima", sub: "1000 pontos" },
            ].map(s => (
              <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 12, background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", border: `1px solid ${T.border}` }}>
                <span style={{ fontSize: 20 }}>{s.emoji}</span>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 700, color: T.heroText, margin: 0, lineHeight: 1.2 }}>{s.label}</p>
                  <p style={{ fontSize: 10, color: T.textMuted, margin: 0, fontFamily: "monospace" }}>{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5 COMPETÊNCIAS ── */}
      <section>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <p style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 6 }}>As 5 Competências do ENEM</p>
          <p style={{ fontSize: 13, color: T.textSub, margin: 0 }}>Total: 1000 pontos · 200 por competência</p>
        </div>
        <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
          {competencias.map((c, i) => {
            const Icon = c.icon;
            const isOpen = openComp === i;
            return (
              <div key={i} style={{
                borderRadius: 16, overflow: "hidden",
                background: isOpen ? `${c.accentColor}12` : T.cardBg,
                border: `1px solid ${isOpen ? c.accentColor + "35" : T.cardBorder}`,
                transition: "all 0.25s",
              }}>
                <button
                  onClick={() => setOpenComp(isOpen ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: 14, padding: "16px 20px", textAlign: "left", cursor: "pointer", background: "none", border: "none" }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: isOpen ? `${c.accentColor}20` : darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)" }}>
                    <Icon style={{ width: 20, height: 20, color: c.accentColor }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 700, color: c.accentColor, margin: "0 0 2px 0" }}>{c.num}</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: T.text, margin: 0, lineHeight: 1.3 }}>{c.label}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                    <span style={{ fontSize: 11, fontFamily: "monospace", fontWeight: 700, color: T.textSub, background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)", padding: "4px 10px", borderRadius: 8 }}>{c.points} pts</span>
                    <ChevronDown style={{ width: 16, height: 16, color: T.textMuted, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }} />
                  </div>
                </button>
                {isOpen && (
                  <div style={{ padding: "0 20px 20px 76px" }}>
                    <p style={{ fontSize: 13, color: T.textSub, lineHeight: 1.65, marginBottom: 14 }}>{c.details}</p>
                    <p style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 700, color: T.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
                      <Shield style={{ width: 13, height: 13 }} />Como dominar
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {c.dominar.map((item, j) => {
                        const s = item.tipo === "fazer" ? T.itemFazer : T.itemEvitar;
                        return (
                          <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, lineHeight: 1.55, borderRadius: 10, padding: "10px 14px", background: s.bg, border: `1px solid ${s.border}`, color: s.text }}>
                            <span style={{ flexShrink: 0, fontSize: 12 }}>{item.tipo === "fazer" ? "✅" : "❌"}</span>
                            <span>{item.texto}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PASSO A PASSO ── */}
      <section>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <p style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 6 }}>Passo a Passo</p>
          <p style={{ fontSize: 13, color: T.textSub, margin: 0 }}>Do tema à proposta de intervenção</p>
        </div>
        <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 10 }}>
          {steps.map((step, i) => {
            const StepIcon = step.icon;
            const isOpen = openStep === i;
            return (
              <div key={i} style={{ borderRadius: 16, overflow: "hidden", background: T.cardBg, border: `1px solid ${isOpen ? "rgba(99,102,241,0.3)" : T.cardBorder}`, transition: "all 0.25s" }}>
                <button
                  onClick={() => setOpenStep(isOpen ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 20px", textAlign: "left", cursor: "pointer", background: "none", border: "none" }}
                >
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(99,102,241,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <StepIcon style={{ width: 20, height: 20, color: "#6366f1" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 700, color: "rgba(99,102,241,0.6)" }}>{String(i + 1).padStart(2, "0")}</span>
                      <p style={{ fontSize: 15, fontWeight: 700, color: T.text, margin: 0 }}>{step.title}</p>
                    </div>
                    <p style={{ fontSize: 13, color: T.textSub, lineHeight: 1.6, margin: 0 }}>{step.description}</p>
                  </div>
                  <ChevronDown style={{ width: 16, height: 16, color: T.textMuted, flexShrink: 0, marginTop: 12, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }} />
                </button>
                {isOpen && (
                  <div style={{ padding: "0 20px 20px 76px" }}>
                    <div style={{ borderRadius: 12, background: darkMode ? "rgba(99,102,241,0.07)" : "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.15)", padding: 16 }}>
                      <p style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 700, color: "rgba(99,102,241,0.6)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{step.example.label}</p>
                      <p style={{ fontSize: 13, color: T.textSub, lineHeight: 1.65, whiteSpace: "pre-line", margin: 0 }}>{step.example.content}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── ESTRUTURA ── */}
      <section>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <p style={{ fontSize: 10, fontFamily: "monospace", fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 6 }}>Estrutura da Redação</p>
          <p style={{ fontSize: 13, color: T.textSub, margin: 0 }}>4 parágrafos, cada um com função definida</p>
        </div>
        <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 8 }}>
          {estrutura.map((block, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 18px", borderRadius: 14, background: T.cardBg, borderLeft: `4px solid ${block.cor}`, border: `1px solid ${block.cor}25`, borderLeftWidth: 4, borderLeftColor: block.cor }}>
              <div style={{ minWidth: 150, flexShrink: 0 }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: T.text, margin: "0 0 2px 0" }}>{block.part}</p>
                <p style={{ fontSize: 10, color: block.cor, fontFamily: "monospace", fontWeight: 700, margin: 0 }}>{block.linhas}</p>
              </div>
              <p style={{ fontSize: 13, color: T.textSub, margin: 0, lineHeight: 1.5 }}>{block.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center", padding: "40px 0" }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(99,102,241,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
            <BookOpen style={{ width: 28, height: 28, color: "#6366f1" }} />
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: T.text, marginBottom: 10 }}>Pronto para praticar?</h3>
          <p style={{ fontSize: 14, color: T.textSub, maxWidth: 360, margin: "0 auto 24px", lineHeight: 1.6 }}>
            Explore repertórios prontos, exemplos de parágrafos e modelos de redação organizados por tema.
          </p>
          <button
            onClick={onGoToRepertorios}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 28px", borderRadius: 14, background: "#6366f1", color: "white", fontWeight: 600, fontSize: 14, cursor: "pointer", border: "none", boxShadow: "0 0 40px -10px rgba(99,102,241,0.5)", transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Ver repertórios e exemplos
            <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
        </div>
      </section>

    </div>
  );
}