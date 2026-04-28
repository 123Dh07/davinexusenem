import { useState, useEffect, useRef } from "react";
import { PenLine, Trash2, ChevronDown, ChevronUp, Star, X, Trophy, TrendingUp, AlertCircle, Save, ClipboardCheck, Sparkles, Loader2, Bot, Highlighter, Lightbulb, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// INSTRUÇÕES: cole sua chave do Gemini entre as aspas abaixo
// Acesse https://aistudio.google.com/apikey para criar uma chave gratuita
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY ?? "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";
const PROMPT_SISTEMA = `Você é corretor do ENEM. Responda SOMENTE com JSON válido, sem texto antes ou depois.

NOTAS: apenas 0, 40, 80, 120, 160 ou 200. notaTotal = soma exata das 5 notas.

━━━ ÂNCORAS DE CALIBRAÇÃO — compare a redação com estes exemplos ━━━

REDAÇÃO 600pts — perfil típico de nota baixa:
• CF citada sem artigo específico (ex: "A CF estabelece que educação é direito de todos")
• Sem repertório sociocultural real (filósofo, dado com número, obra)
• Argumentação descritiva: descreve o problema mas não analisa causa-consequência
• Sem conclusão parcial nos parágrafos de desenvolvimento
• Proposta com "é necessário", "deve-se", "a sociedade deve" = agente implícito
→ C1:120 C2:80 C3:80 C4:160 C5:80 = 520

REDAÇÃO 680pts — perfil mediano:
• CF citada sem artigo OU autor sem obra específica (ex: "Paulo Freire defende que...")
• Argumentação presente mas superficial, sem dados concretos
• Parágrafos sem conclusão parcial clara
• 1 proposta com agente válido (MEC, governo federal) mas meio genérico
• 1 proposta com agente implícito
→ C1:160 C2:120 C3:120 C4:160 C5:120 = 680

REDAÇÃO 840pts — perfil bom:
• Autor + conceito + aplicação ao tema (mesmo sem obra específica)
• OU dado concreto com fonte (INEP, IBGE + número)
• Argumentação com causa-consequência e alguma conclusão parcial
• 2 propostas com agente explícito (MEC, governo federal por meio de...)
• Meio e finalidade presentes
→ C1:160 C2:160 C3:160 C4:160 C5:160 = 800

REDAÇÃO 920pts — perfil forte:
• Autor + OBRA ESPECÍFICA + conceito + aplicação precisa
• OU dado com número exato e fonte concreto
• Parágrafos com conceituação + repertório + conclusão parcial clara
• 2 propostas completas: agente explícito + ação + meio + finalidade + detalhamento
→ C1:200 C2:180 C3:180 C4:200 C5:160 = 920

━━━ REGRAS POR COMPETÊNCIA ━━━

C1: 200=impecável | 160=1-2 erros leves | 120=erros frequentes | 80=graves
NUNCA marque: "nesse contexto", "torna-se", voz passiva sintética, conectivos formais

C2: avalie a INTRODUÇÃO
200 = repertório válido (autor+obra+conceito+aplicação OU dado com número+fonte) + tese + 2 antecipações
160 = repertório fraco (autor+conceito SEM obra) + tese + 2 antecipações
120 = CF sem artigo específico OU falta 1 elemento estrutural
80  = sem repertório OU falta 2+ elementos

C3: avalie os PARÁGRAFOS DE DESENVOLVIMENTO
200 = conceituação + repertório/dado + conclusão parcial em ambos
160 = estrutura presente, pequena falha na conclusão parcial
120 = sem conclusão parcial OU sem repertório em algum parágrafo
80  = descritivo e superficial, sem análise

C4: 200=conectivos variados | 160=boa coesão | 120=repetitivo | 80=truncado
Penalize APENAS conectivo repetido 3+ vezes

C5: avalie a CONCLUSÃO
200 = 2 propostas: agente explícito + ação + meio + finalidade + detalhamento
160 = 2 propostas com agente explícito + ação + finalidade (meio genérico)
120 = 1 proposta completa + 1 incompleta OU agente genérico em 1
80  = "deve-se", "é necessário", "a sociedade deve" = agente implícito → máximo 80

━━━ TRECHOS ━━━
Gere SEMPRE 3 a 5 trechos com problemas ou pontos a melhorar.
Trechos de C2: marque quando CF for citada sem artigo OU autor sem obra OU ausência de repertório
Trechos de C3: marque quando parágrafo for apenas descritivo sem conclusão parcial
Trechos de C5: marque quando agente for implícito ou proposta for genérica
- original: copie EXATAMENTE do texto (máx 7 palavras)
- problema: explique de forma didática o que falta ou está errado
- sugestao: mostre como reescrever melhor
- palavraSubstituta: "errado → correto" se houver palavra específica, senão ""
- opcoesPalavras: 3 alternativas, senão []

FORMATO JSON:
{"competencia1":{"nota":0,"comentario":"","formalidade":"","sugestaoMelhoria":"","trechos":[{"original":"","problema":"","sugestao":"","palavraSubstituta":"","opcoesPalavras":[]}]},"competencia2":{"nota":0,"comentarioGeral":"","comentarioIntroducao":"","sugestaoMelhoria":"","trechos":[{"original":"","problema":"","sugestao":"","palavraSubstituta":"","opcoesPalavras":[]}]},"competencia3":{"nota":0,"comentarioGeral":"","comentarioDesenvolvimento":"","sugestaoMelhoria":"","trechos":[{"original":"","problema":"","sugestao":"","palavraSubstituta":"","opcoesPalavras":[]}]},"competencia4":{"nota":0,"comentario":"","sugestaoMelhoria":"","trechos":[]},"competencia5":{"nota":0,"comentario":"","sugestaoMelhoria":"","trechos":[{"original":"","problema":"","sugestao":"","palavraSubstituta":"","opcoesPalavras":[]}]},"notaTotal":0,"comentarioGeral":"","geradoPorIA":false}`;

const PROMPT_CORRECAO = "";

const COMP_COLORS = {
  competencia1: { bg: "rgba(59,130,246,0.25)", border: "rgba(59,130,246,0.6)", text: "#93c5fd", label: "C1", name: "Norma culta" },
  competencia2: { bg: "rgba(34,197,94,0.2)", border: "rgba(34,197,94,0.6)", text: "#86efac", label: "C2", name: "Tema" },
  competencia3: { bg: "rgba(251,191,36,0.2)", border: "rgba(251,191,36,0.6)", text: "#fde68a", label: "C3", name: "Argumentação" },
  competencia4: { bg: "rgba(239,68,68,0.2)", border: "rgba(239,68,68,0.6)", text: "#fca5a5", label: "C4", name: "Coesão" },
  competencia5: { bg: "rgba(167,139,250,0.25)", border: "rgba(167,139,250,0.6)", text: "#c4b5fd", label: "C5", name: "Proposta" },
};

interface TrechoCorrecao {
  original: string;
  problema: string;
  sugestao: string;
  palavraSubstituta?: string;
  opcoesPalavras?: string[];
}

interface Correcao {
  competencia1: { nota: number; comentario: string; formalidade?: string; sugestaoMelhoria?: string; trechos?: TrechoCorrecao[] };
  competencia2: { nota: number; comentario: string; comentarioIntroducao?: string; sugestaoMelhoria?: string; trechos?: TrechoCorrecao[] };
  competencia3: { nota: number; comentario: string; comentarioDesenvolvimento?: string; sugestaoMelhoria?: string; trechos?: TrechoCorrecao[] };
  competencia4: { nota: number; comentario: string; sugestaoMelhoria?: string; trechos?: TrechoCorrecao[] };
  competencia5: { nota: number; comentario: string; sugestaoMelhoria?: string; trechos?: TrechoCorrecao[] };
  notaTotal: number;
  comentarioGeral: string;
  geradoPorIA?: boolean;
  corrigidoPor?: "professor" | "ia";
}

interface RedacaoSalva {
  id: string; tema: string; nome: string; serie: string; escola: string;
  texto: string; data: string; correcao?: Correcao;
}

const TEMAS_SUGERIDOS = [
  "A desigualdade no acesso à educação no Brasil",
  "A crise de saúde mental entre os jovens brasileiros",
  "O desmatamento da Amazônia e seus impactos",
  "O impacto das fake news na democracia brasileira",
  "O racismo estrutural e seus impactos na sociedade brasileira",
  "A concentração de renda e a desigualdade social no Brasil",
  "A violência contra a mulher no Brasil",
  "A precarização do trabalho no Brasil contemporâneo",
];

const competencias = [
  { key: "competencia1", label: "C1", desc: "Norma culta da língua portuguesa" },
  { key: "competencia2", label: "C2", desc: "Compreensão e aplicação do tema" },
  { key: "competencia3", label: "C3", desc: "Seleção e organização de argumentos" },
  { key: "competencia4", label: "C4", desc: "Coesão e coerência" },
  { key: "competencia5", label: "C5", desc: "Proposta de intervenção" },
];

const notasValidas = [0, 40, 80, 120, 160, 200];

// ── POPUP DE TRECHO ──────────────────────────────────────────────
interface PopupTrecho {
  trecho: TrechoCorrecao;
  compKey: string;
  x: number;
  y: number;
}

function TrechoPopup({ popup, onClose }: { popup: PopupTrecho; onClose: () => void }) {
  const cor = COMP_COLORS[popup.compKey as keyof typeof COMP_COLORS];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="w-full mt-3 rounded-xl border overflow-hidden animate-fade-in"
      style={{ background: "hsl(var(--card))", borderColor: cor.border }}
    >
      <div className="px-3 py-2 flex items-center gap-2" style={{ background: cor.bg }}>
        <span className="text-[10px] font-mono font-bold uppercase" style={{ color: cor.text }}>{cor.label} – {cor.name}</span>
        <button onClick={onClose} className="ml-auto text-muted-foreground hover:text-foreground"><X className="w-3 h-3" /></button>
      </div>
      <div className="p-3 space-y-2.5">
        <div>
          <p className="text-[9px] font-mono uppercase text-muted-foreground mb-1">Trecho com erro</p>
          <p className="text-[12px] font-mono px-2 py-1.5 rounded line-through opacity-70 break-words" style={{ background: cor.bg, color: cor.text }}>"{popup.trecho.original}"</p>
        </div>
        <div>
          <p className="text-[9px] font-mono uppercase text-muted-foreground mb-1">⚠️ Problema identificado</p>
          <p className="text-[12px] text-foreground/80 leading-relaxed">{popup.trecho.problema}</p>
        </div>
        {popup.trecho.palavraSubstituta && (
          <div>
            <p className="text-[9px] font-mono uppercase text-muted-foreground mb-1">🔄 Troca sugerida</p>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg" style={{ background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.3)" }}>
              <p className="text-[13px] font-mono font-bold text-yellow-400 break-words">{popup.trecho.palavraSubstituta}</p>
            </div>
          </div>
        )}
        {popup.trecho.opcoesPalavras && popup.trecho.opcoesPalavras.filter(Boolean).length > 0 && (
          <div>
            <p className="text-[9px] font-mono uppercase text-muted-foreground mb-1.5">💡 Outras opções</p>
            <div className="flex flex-wrap gap-1.5">
              {popup.trecho.opcoesPalavras.filter(Boolean).map((palavra, i) => (
                <span key={i} className="text-[11px] font-mono px-2 py-1 rounded-lg font-semibold" style={{ background: cor.bg, color: cor.text, border: `1px solid ${cor.border}` }}>
                  {palavra}
                </span>
              ))}
            </div>
          </div>
        )}
        <div>
          <p className="text-[9px] font-mono uppercase text-muted-foreground mb-1">✨ Como reescrever</p>
          <p className="text-[12px] text-foreground leading-relaxed font-medium px-2 py-1.5 rounded-lg bg-secondary/60 break-words">{popup.trecho.sugestao}</p>
        </div>
      </div>
    </div>
  );
}

// ── TEXTO GRIFADO COM PAINEL INLINE ──────────────────────────────
function TextoGrifado({ texto, correcao, compAtiva }: { texto: string; correcao: Correcao; compAtiva: string | null }) {
  const [popupAtivo, setPopupAtivo] = useState<PopupTrecho | null>(null);

  const marcacoes: { trecho: TrechoCorrecao; compKey: string }[] = [];
  const compKeys = compAtiva ? [compAtiva] : Object.keys(COMP_COLORS);
  compKeys.forEach(compKey => {
    const comp = (correcao as any)[compKey];
    if (comp?.trechos) {
      comp.trechos.forEach((t: TrechoCorrecao | string) => {
        const tObj: TrechoCorrecao = typeof t === "string"
          ? { original: t, problema: "Problema identificado neste trecho.", sugestao: "Revise este trecho.", palavraSubstituta: "", opcoesPalavras: [] }
          : t;
        if (tObj.original && tObj.original.trim().length > 2) {
          marcacoes.push({ trecho: tObj, compKey });
        }
      });
    }
  });

  if (marcacoes.length === 0) {
    return <p className="text-[13px] leading-[1.9] text-foreground/80 whitespace-pre-wrap">{texto}</p>;
  }

  const partes: React.ReactNode[] = [];
  let restante = texto;
  let keyIdx = 0;

  while (restante.length > 0) {
    let primeiraMarcacao: { index: number; trecho: TrechoCorrecao; compKey: string } | null = null;
    for (const m of marcacoes) {
      const idx = restante.toLowerCase().indexOf(m.trecho.original.toLowerCase());
      if (idx !== -1 && (primeiraMarcacao === null || idx < primeiraMarcacao.index)) {
        primeiraMarcacao = { index: idx, trecho: m.trecho, compKey: m.compKey };
      }
    }
    if (!primeiraMarcacao) { partes.push(<span key={keyIdx++}>{restante}</span>); break; }
    if (primeiraMarcacao.index > 0) partes.push(<span key={keyIdx++}>{restante.slice(0, primeiraMarcacao.index)}</span>);
    const cor = COMP_COLORS[primeiraMarcacao.compKey as keyof typeof COMP_COLORS];
    const trecho = primeiraMarcacao.trecho;
    const compKey = primeiraMarcacao.compKey;
    const id = `${compKey}-${keyIdx}`;
    const ativo = popupAtivo?.trecho.original === trecho.original && popupAtivo?.compKey === compKey;
    partes.push(
      <mark
        key={keyIdx++}
        title={`${cor.label} – clique para ver sugestão`}
        onClick={(e) => {
          e.stopPropagation();
          setPopupAtivo(ativo ? null : { trecho, compKey, x: 0, y: 0 });
        }}
        style={{
          background: ativo ? cor.border : cor.bg,
          borderBottom: `2px solid ${cor.border}`,
          borderRadius: "3px",
          padding: "1px 2px",
          color: ativo ? "white" : cor.text,
          cursor: "pointer",
        }}
      >
        {restante.slice(primeiraMarcacao.index, primeiraMarcacao.index + primeiraMarcacao.trecho.original.length)}
      </mark>
    );
    restante = restante.slice(primeiraMarcacao.index + primeiraMarcacao.trecho.original.length);
  }

  return (
    <div>
      <p className="text-[13px] leading-[1.9] text-foreground/80 whitespace-pre-wrap">{partes}</p>
      {popupAtivo && (
        <TrechoPopup popup={popupAtivo} onClose={() => setPopupAtivo(null)} />
      )}
    </div>
  );
}

function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {Array.from({ length: 40 }).map((_, i) => (
        <div key={i} className="absolute w-2 h-2 rounded-sm animate-bounce"
          style={{ left: `${Math.random() * 100}%`, top: `-${Math.random() * 20}px`, backgroundColor: ["#3b82f6", "#22c55e", "#f59e0b", "#ec4899", "#8b5cf6"][Math.floor(Math.random() * 5)], animationDelay: `${Math.random() * 2}s`, animationDuration: `${1 + Math.random() * 2}s`, transform: `rotate(${Math.random() * 360}deg)` }} />
      ))}
    </div>
  );
}

// ── CARD DE COMPETÊNCIA COM SUGESTÃO ─────────────────────────────
function TrechoExpandivel({ t, cor }: { t: TrechoCorrecao; cor: typeof COMP_COLORS[keyof typeof COMP_COLORS] }) {
  const [aberto, setAberto] = useState(false);
  const tObj = typeof t === "string" ? { original: t as string, problema: "", sugestao: "", palavraSubstituta: "", opcoesPalavras: [] as string[] } : t;
  return (
    <div className="rounded-lg overflow-hidden border" style={{ borderColor: cor.border }}>
      {/* Cabeçalho clicável */}
      <button
        onClick={() => setAberto(v => !v)}
        className="w-full flex items-center gap-2 px-3 py-2 text-left transition-opacity hover:opacity-80"
        style={{ background: cor.bg }}
      >
        <span className="text-[10px] font-mono font-bold shrink-0" style={{ color: cor.text }}>✗</span>
        <span className="text-[12px] font-mono font-semibold flex-1 break-all" style={{ color: cor.text }}>"{tObj.original}"</span>
        <ChevronRight className={cn("w-3.5 h-3.5 shrink-0 transition-transform", aberto && "rotate-90")} style={{ color: cor.text }} />
      </button>
      {/* Conteúdo expansível */}
      {aberto && (
        <div className="px-3 py-2.5 space-y-2 bg-card animate-fade-in">
          {tObj.problema && (
            <div className="flex items-start gap-2">
              <span className="text-[10px] font-mono text-muted-foreground uppercase shrink-0 mt-0.5">⚠️ Problema:</span>
              <span className="text-[12px] text-foreground/80 leading-relaxed">{tObj.problema}</span>
            </div>
          )}
          {tObj.palavraSubstituta && (
            <div className="flex items-center gap-2 px-2 py-1.5 rounded" style={{ background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.3)" }}>
              <span className="text-[11px]">🔄</span>
              <span className="text-[12px] font-mono font-bold text-yellow-400">{tObj.palavraSubstituta}</span>
            </div>
          )}
          {tObj.opcoesPalavras && tObj.opcoesPalavras.filter(Boolean).length > 0 && (
            <div>
              <p className="text-[9px] font-mono uppercase text-muted-foreground mb-1.5">💡 Outras opções</p>
              <div className="flex flex-wrap gap-1.5">
                {tObj.opcoesPalavras.filter(Boolean).map((palavra, i) => (
                  <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded-lg font-semibold" style={{ background: cor.bg, color: cor.text, border: `1px solid ${cor.border}` }}>
                    {palavra}
                  </span>
                ))}
              </div>
            </div>
          )}
          {tObj.sugestao && (
            <div className="flex items-start gap-2">
              <span className="text-[10px] font-mono text-muted-foreground uppercase shrink-0 mt-0.5">✨ Reescrita:</span>
              <span className="text-[12px] text-foreground font-medium leading-relaxed break-words">{tObj.sugestao}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function CompCard({ comp, correcao, getCorNota, getCorBarra }: {
  comp: { key: string; label: string; desc: string };
  correcao: Correcao;
  getCorNota: (n: number) => string;
  getCorBarra: (n: number) => string;
}) {
  const [aberto, setAberto] = useState(false);
  const c = (correcao as any)[comp.key] as {
    nota: number; comentario: string; formalidade?: string;
    comentarioIntroducao?: string; comentarioDesenvolvimento?: string;
    sugestaoMelhoria?: string; trechos?: TrechoCorrecao[];
  };
  const cor = COMP_COLORS[comp.key as keyof typeof COMP_COLORS];
  if (!c) return null;

  const temDetalhes = !!(c.sugestaoMelhoria || (c.trechos && c.trechos.length > 0) || c.comentarioIntroducao || c.comentarioDesenvolvimento);

  return (
    <div className="rounded-xl bg-card border border-border/40 overflow-hidden">
      {/* Cabeçalho sempre visível */}
      <button
        onClick={() => setAberto(v => !v)}
        className="w-full p-4 text-left transition-colors hover:bg-secondary/20"
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-[11px] font-mono text-primary/60 uppercase">{comp.label}</span>
            <p className="text-[13px] font-semibold text-foreground">{comp.desc}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className={cn("text-[18px] font-black", getCorNota(c.nota))}>{c.nota}</span>
            {temDetalhes && (
              <ChevronRight className={cn("w-4 h-4 text-muted-foreground transition-transform", aberto && "rotate-90")} />
            )}
          </div>
        </div>
        <div className="w-full h-1.5 bg-secondary rounded-full">
          <div className={cn("h-full rounded-full transition-all duration-1000", getCorBarra(c.nota))} style={{ width: `${(c.nota / 200) * 100}%` }} />
        </div>
        {c.formalidade && (
          <p className="text-[11px] font-mono text-muted-foreground mt-2">
            Formalidade: <span className="text-foreground font-semibold">{c.formalidade}</span>
          </p>
        )}
        {c.comentario && <p className="text-[12px] text-muted-foreground leading-relaxed mt-2">{c.comentario}</p>}
      </button>

      {/* Conteúdo expansível */}
      {aberto && (
        <div className="px-4 pb-4 space-y-3 border-t border-border/30 pt-3 animate-fade-in">
          {c.comentarioIntroducao && (
            <div className="p-2 rounded-lg bg-secondary/40 border border-border/30">
              <p className="text-[10px] font-mono text-primary/50 uppercase mb-1">Introdução</p>
              <p className="text-[12px] text-muted-foreground">{c.comentarioIntroducao}</p>
            </div>
          )}
          {c.comentarioDesenvolvimento && (
            <div className="p-2 rounded-lg bg-secondary/40 border border-border/30">
              <p className="text-[10px] font-mono text-primary/50 uppercase mb-1">Desenvolvimento</p>
              <p className="text-[12px] text-muted-foreground">{c.comentarioDesenvolvimento}</p>
            </div>
          )}
          {/* Trechos — cada um expandível individualmente */}
          {c.trechos && c.trechos.length > 0 && (
            <div className="space-y-2">
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Trechos com erro — clique para ver sugestões:</p>
              {c.trechos.map((t, i) => (
                <TrechoExpandivel key={i} t={t} cor={cor} />
              ))}
            </div>
          )}
          {/* Sugestão geral de melhoria */}
          {c.sugestaoMelhoria && (
            <div className="p-3 rounded-xl border" style={{ background: cor.bg, borderColor: cor.border }}>
              <p className="text-[10px] font-mono uppercase mb-1.5 font-bold" style={{ color: cor.text }}>✨ Como melhorar {comp.label}</p>
              <p className="text-[12px] leading-relaxed" style={{ color: cor.text }}>{c.sugestaoMelhoria}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function MyEssays() {
  const [view, setView] = useState<"lista" | "escolherTema" | "escrever" | "ver" | "corrigir">("lista");
  const [redacoes, setRedacoes] = useState<RedacaoSalva[]>(() => {
    const saved = localStorage.getItem("nexus_redacoes");
    return saved ? JSON.parse(saved) : [];
  });
  const [temaSelecionado, setTemaSelecionado] = useState("");
  const [temaPersonalizado, setTemaPersonalizado] = useState("");
  const [nome, setNome] = useState("");
  const [serie, setSerie] = useState("");
  const [escola, setEscola] = useState("");
  const [texto, setTexto] = useState("");
  const [redacaoAtual, setRedacaoAtual] = useState<RedacaoSalva | null>(null);
  const [expandido, setExpandido] = useState<string | null>(null);
  const [mostrarConfetti, setMostrarConfetti] = useState(false);
  const [animacaoEntrada, setAnimacaoEntrada] = useState(false);
  const [correcaoTemp, setCorrecaoTemp] = useState<Partial<Correcao>>({});
  const [corrigindoIA, setCorrigindoIA] = useState<string | null>(null);
  const [erroIA, setErroIA] = useState<string | null>(null);
  const [compAtiva, setCompAtiva] = useState<string | null>(null);

  const temaFinal = temaPersonalizado || temaSelecionado;
  const palavras = texto.trim().split(/\s+/).filter(Boolean).length;

  useEffect(() => {
    if (view === "ver" && redacaoAtual?.correcao) {
      setAnimacaoEntrada(false);
      setTimeout(() => setAnimacaoEntrada(true), 100);
      if (redacaoAtual.correcao.notaTotal >= 800) {
        setMostrarConfetti(true);
        setTimeout(() => setMostrarConfetti(false), 4000);
      }
    }
  }, [view, redacaoAtual]);

  const corrigirComIA = async (redacao: RedacaoSalva) => {
    setCorrigindoIA(redacao.id);
    setErroIA(null);
    try {
      const userPrompt = `Tema: ${redacao.tema}\n\nRedação:\n${redacao.texto}`;
      let rawText = "";
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://nexusenem.com",
          "X-Title": "Nexus ENEM",
        },
        body: JSON.stringify({
          model: "openrouter/auto",
          temperature: 0.1,
          max_tokens: 4000,
          messages: [
            { role: "system", content: PROMPT_SISTEMA },
            { role: "user", content: userPrompt },
          ],
        }),
      });
      if (res.status === 429) throw new Error("Limite atingido. Aguarde alguns segundos.");
      const data = await res.json();
      if (data.error) throw new Error(data.error.message || "Erro na API");
      rawText = data.choices?.[0]?.message?.content || "";
      // Extrai o JSON mesmo se vier com texto ao redor
      const jsonMatch = rawText.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error("JSON não encontrado na resposta");
      const clean = jsonMatch[0];
      const parsed = JSON.parse(clean);

      // Normaliza trechos (aceita string antiga ou objeto novo)
      const normTrechos = (arr: any[]): TrechoCorrecao[] =>
        (arr || [])
          .filter((t: any) => {
            const orig = typeof t === "string" ? t : t?.original;
            return orig && orig.trim().length > 3;
          })
          .map((t: any) => typeof t === "string"
            ? { original: t, problema: "Problema identificado.", sugestao: "Revise este trecho.", palavraSubstituta: "", opcoesPalavras: [] }
            : { palavraSubstituta: "", opcoesPalavras: [], ...t });

      const correcao: Correcao = {
        competencia1: {
          nota: parsed.competencia1.nota || 0,
          comentario: parsed.competencia1.comentario || "",
          formalidade: parsed.competencia1.formalidade || "Formalidade satisfatória",
          sugestaoMelhoria: parsed.competencia1.sugestaoMelhoria || "",
          trechos: normTrechos(parsed.competencia1.trechos),
        },
        competencia2: {
          nota: parsed.competencia2.nota,
          comentario: parsed.competencia2.comentarioGeral,
          comentarioIntroducao: parsed.competencia2.comentarioIntroducao,
          sugestaoMelhoria: parsed.competencia2.sugestaoMelhoria,
          trechos: normTrechos(parsed.competencia2.trechos),
        },
        competencia3: {
          nota: parsed.competencia3.nota,
          comentario: parsed.competencia3.comentarioGeral,
          comentarioDesenvolvimento: parsed.competencia3.comentarioDesenvolvimento,
          sugestaoMelhoria: parsed.competencia3.sugestaoMelhoria,
          trechos: normTrechos(parsed.competencia3.trechos),
        },
        competencia4: {
          nota: parsed.competencia4.nota,
          comentario: parsed.competencia4.comentario,
          sugestaoMelhoria: parsed.competencia4.sugestaoMelhoria,
          trechos: normTrechos(parsed.competencia4.trechos),
        },
        competencia5: {
          nota: parsed.competencia5.nota,
          comentario: parsed.competencia5.comentario,
          sugestaoMelhoria: parsed.competencia5.sugestaoMelhoria,
          trechos: normTrechos(parsed.competencia5.trechos),
        },
        notaTotal: (parsed.competencia1.nota || 0) + (parsed.competencia2.nota || 0) + (parsed.competencia3.nota || 0) + (parsed.competencia4.nota || 0) + (parsed.competencia5.nota || 0),
        comentarioGeral: parsed.comentarioGeral,
        geradoPorIA: parsed.geradoPorIA || false,
        corrigidoPor: "ia",
      };

      const atualizadas = redacoes.map(r => r.id === redacao.id ? { ...r, correcao } : r);
      setRedacoes(atualizadas);
      localStorage.setItem("nexus_redacoes", JSON.stringify(atualizadas));
      setRedacaoAtual({ ...redacao, correcao });
      setCompAtiva(null);
      setView("ver");
    } catch (e) {
      setErroIA("Erro ao corrigir com IA. Verifique sua conexão e tente novamente.");
      console.error(e);
    } finally {
      setCorrigindoIA(null);
    }
  };

  const salvarRedacao = () => {
    if (!temaFinal || !texto || !nome) return;
    const nova: RedacaoSalva = { id: Date.now().toString(), tema: temaFinal, nome, serie, escola, texto, data: new Date().toLocaleDateString("pt-BR") };
    const novas = [nova, ...redacoes];
    setRedacoes(novas); localStorage.setItem("nexus_redacoes", JSON.stringify(novas));
    setView("lista"); setTemaSelecionado(""); setTemaPersonalizado(""); setNome(""); setSerie(""); setEscola(""); setTexto("");
  };

  const iniciarCorrecao = (redacao: RedacaoSalva) => {
    setRedacaoAtual(redacao);
    setCorrecaoTemp(redacao.correcao ? {
      competencia1: redacao.correcao.competencia1,
      competencia2: redacao.correcao.competencia2,
      competencia3: redacao.correcao.competencia3,
      competencia4: redacao.correcao.competencia4,
      competencia5: redacao.correcao.competencia5,
      comentarioGeral: redacao.correcao.comentarioGeral,
    } : {});
    setView("corrigir");
  };

  const salvarCorrecao = () => {
    if (!redacaoAtual) return;
    const c1 = (correcaoTemp.competencia1?.nota || 0);
    const c2 = (correcaoTemp.competencia2?.nota || 0);
    const c3 = (correcaoTemp.competencia3?.nota || 0);
    const c4 = (correcaoTemp.competencia4?.nota || 0);
    const c5 = (correcaoTemp.competencia5?.nota || 0);
    const correcao: Correcao = {
      competencia1: { nota: c1, comentario: correcaoTemp.competencia1?.comentario || "" },
      competencia2: { nota: c2, comentario: correcaoTemp.competencia2?.comentario || "" },
      competencia3: { nota: c3, comentario: correcaoTemp.competencia3?.comentario || "" },
      competencia4: { nota: c4, comentario: correcaoTemp.competencia4?.comentario || "" },
      competencia5: { nota: c5, comentario: correcaoTemp.competencia5?.comentario || "" },
      notaTotal: c1 + c2 + c3 + c4 + c5,
      comentarioGeral: correcaoTemp.comentarioGeral || "",
      corrigidoPor: "professor",
    };
    const atualizadas = redacoes.map(r => r.id === redacaoAtual.id ? { ...r, correcao } : r);
    setRedacoes(atualizadas);
    localStorage.setItem("nexus_redacoes", JSON.stringify(atualizadas));
    setRedacaoAtual({ ...redacaoAtual, correcao });
    setCompAtiva(null);
    setView("ver");
  };

  const deletarRedacao = (id: string) => {
    const novas = redacoes.filter(r => r.id !== id);
    setRedacoes(novas); localStorage.setItem("nexus_redacoes", JSON.stringify(novas));
  };

  const getCorNota = (n: number) => n >= 160 ? "text-green-400" : n >= 120 ? "text-yellow-400" : n >= 80 ? "text-orange-400" : "text-red-400";
  const getCorBarra = (n: number) => n >= 160 ? "bg-green-400" : n >= 120 ? "bg-yellow-400" : n >= 80 ? "bg-orange-400" : "bg-red-400";
  const getMensagem = (nota: number) => {
    if (nota >= 900) return { emoji: "🏆", titulo: "Incrível! Nota quase perfeita!", texto: "Você dominou todas as competências do ENEM!", cor: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" };
    if (nota >= 800) return { emoji: "🎉", titulo: "Parabéns! Excelente redação!", texto: "Pequenos ajustes vão te levar ainda mais alto!", cor: "text-green-400", bg: "bg-green-500/10 border-green-500/20" };
    if (nota >= 650) return { emoji: "👏", titulo: "Muito bem! Redação acima da média!", texto: "Foque nas competências mais fracas!", cor: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" };
    if (nota >= 500) return { emoji: "💪", titulo: "Bom esforço! Você está no caminho certo!", texto: "Com dedicação e prática, você vai melhorar muito!", cor: "text-primary", bg: "bg-primary/10 border-primary/20" };
    if (nota >= 300) return { emoji: "📚", titulo: "Não desanime!", texto: "Leia as redações nota 1000 e pratique!", cor: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" };
    return { emoji: "✏️", titulo: "Continue praticando!", texto: "Use os repertórios do Nexus ENEM e tente de novo!", cor: "text-red-400", bg: "bg-red-500/10 border-red-500/20" };
  };

  const temGrifos = (correcao: Correcao) => Object.keys(COMP_COLORS).some(k => {
    const c = (correcao as any)[k];
    return c?.trechos && c.trechos.length > 0;
  });

  return (
    <div className="space-y-8">
      {mostrarConfetti && <Confetti />}

      {/* ── LISTA ── */}
      {view === "lista" && (
        <div className="space-y-6 opacity-0 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-foreground">Minhas Redações</h2>
              <p className="text-[13px] text-muted-foreground mt-1">{redacoes.length} redação(ões) salva(s)</p>
            </div>
            <button onClick={() => setView("escolherTema")} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-[13px] hover:opacity-90 transition-all">
              <PenLine className="w-4 h-4" />Nova Redação
            </button>
          </div>
          {erroIA && <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[13px]">{erroIA}</div>}
          {redacoes.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <PenLine className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p className="text-[15px]">Nenhuma redação ainda.</p>
              <p className="text-[13px] mt-1 opacity-70">Clique em "Nova Redação" para começar!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {redacoes.map(r => (
                <div key={r.id} className="p-4 rounded-xl bg-card border border-border/60">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-foreground text-[14px] truncate">{r.tema}</p>
                      <p className="text-[11px] font-mono text-muted-foreground mt-0.5">{r.nome} · {r.data}</p>
                      {r.correcao && (
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                          <span className={cn("text-[13px] font-bold", getCorNota(r.correcao.notaTotal))}>{r.correcao.notaTotal} pontos</span>
                          <span className="text-[11px]">{getMensagem(r.correcao.notaTotal).emoji}</span>
                          {r.correcao.corrigidoPor === "ia" && <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono"><Bot className="w-3 h-3" />IA</span>}
                          {r.correcao.corrigidoPor === "professor" && <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono">👨‍🏫 Professor</span>}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                      <button onClick={() => corrigirComIA(r)} disabled={corrigindoIA === r.id} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all border bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-violet-500/30 text-violet-400 hover:from-violet-500/20 hover:to-purple-500/20 disabled:opacity-50">
                        {corrigindoIA === r.id ? <><Loader2 className="w-3.5 h-3.5 animate-spin" />Corrigindo...</> : <><Sparkles className="w-3.5 h-3.5" />Corrigir com IA</>}
                      </button>
                      <div className="flex gap-2">
                        <button onClick={() => iniciarCorrecao(r)} className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 text-[12px] font-medium hover:bg-primary/20 transition-colors">
                          <ClipboardCheck className="w-3.5 h-3.5" />{r.correcao ? "Editar" : "Prof."}
                        </button>
                        {r.correcao && <button onClick={() => { setRedacaoAtual(r); setCompAtiva(null); setView("ver"); }} className="px-3 py-1.5 rounded-lg bg-secondary text-foreground border border-border/40 text-[12px] font-medium hover:border-primary/30 transition-colors">Ver</button>}
                        <button onClick={() => deletarRedacao(r.id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-400 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button onClick={() => setExpandido(expandido === r.id ? null : r.id)} className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground transition-colors">
                      {expandido === r.id ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      {expandido === r.id ? "Ocultar texto" : "Ver texto"}
                    </button>
                    {expandido === r.id && <p className="mt-2 text-[13px] text-foreground/70 leading-relaxed whitespace-pre-wrap border-t border-border/30 pt-3">{r.texto}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── ESCOLHER TEMA ── */}
      {view === "escolherTema" && (
        <div className="space-y-6 opacity-0 animate-fade-in">
          <div className="flex items-center gap-3">
            <button onClick={() => setView("lista")} className="p-2 rounded-lg hover:bg-secondary transition-colors"><X className="w-4 h-4 text-muted-foreground" /></button>
            <h2 className="text-xl font-bold text-foreground">Escolha o Tema</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-3">
            <p className="text-[13px] text-muted-foreground">Clique no tema para abrir a folha de redação</p>
            <div className="grid grid-cols-1 gap-2">
              {TEMAS_SUGERIDOS.map(t => (
                <button key={t} onClick={() => { setTemaSelecionado(t); setTemaPersonalizado(""); setView("escrever"); }} className="px-4 py-3 rounded-xl text-[13px] font-medium text-left transition-all border bg-secondary/60 border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 flex items-center justify-between group">
                  <span>{t}</span>
                  <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-mono">Escrever →</span>
                </button>
              ))}
            </div>
            <div className="pt-2">
              <input type="text" placeholder="Ou digite um tema personalizado e pressione Enter..." value={temaPersonalizado}
                onChange={(e) => setTemaPersonalizado(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && temaPersonalizado.trim()) { setTemaSelecionado(""); setView("escrever"); } }}
                className="w-full px-4 py-3 rounded-xl bg-secondary/80 border border-border/40 text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors" />
            </div>
          </div>
        </div>
      )}

      {/* ── ESCREVER ── */}
      {view === "escrever" && (
        <div className="space-y-6 opacity-0 animate-fade-in">
          <div className="flex items-center gap-3">
            <button onClick={() => setView("escolherTema")} className="p-2 rounded-lg hover:bg-secondary transition-colors"><X className="w-4 h-4 text-muted-foreground" /></button>
            <h2 className="text-xl font-bold text-foreground">Folha de Redação</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-border/20">
              <div className="bg-blue-900 text-white p-4 text-center">
                <p className="text-[11px] font-mono uppercase tracking-widest opacity-80">Exame Nacional do Ensino Médio</p>
                <p className="text-[18px] font-black tracking-tight">REDAÇÃO</p>
              </div>
              <div className="p-5 border-b border-gray-200 bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div><label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Nome completo *</label><input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-800 focus:outline-none focus:border-blue-400 bg-white" /></div>
                  <div><label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Série / Turma</label><input type="text" value={serie} onChange={(e) => setSerie(e.target.value)} placeholder="Ex: 3º Ano A" className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-800 focus:outline-none focus:border-blue-400 bg-white" /></div>
                  <div><label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Escola</label><input type="text" value={escola} onChange={(e) => setEscola(e.target.value)} placeholder="Nome da escola" className="w-full mt-1 px-3 py-2 rounded-lg border border-gray-200 text-[13px] text-gray-800 focus:outline-none focus:border-blue-400 bg-white" /></div>
                </div>
              </div>
              <div className="px-5 py-4 border-b border-gray-200 bg-blue-50">
                <p className="text-[10px] font-mono text-blue-600 uppercase tracking-wider mb-1">Tema da Redação</p>
                <p className="text-[15px] font-bold text-blue-900">{temaFinal}</p>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">Texto dissertativo-argumentativo</p>
                  <span className={cn("text-[11px] font-mono px-2 py-0.5 rounded", palavras < 150 ? "bg-red-100 text-red-600" : palavras > 300 ? "bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600")}>{palavras} palavras</span>
                </div>
                <textarea value={texto} onChange={(e) => setTexto(e.target.value)}
                  placeholder={"Escreva sua redação aqui...\n\nLembre-se da estrutura:\n• Introdução\n• 1º Desenvolvimento\n• 2º Desenvolvimento\n• Conclusão com proposta de intervenção"}
                  style={{
                    width: "100%",
                    height: 420,
                    fontSize: 15,
                    color: "#1e293b",
                    lineHeight: "32px",
                    resize: "none",
                    outline: "none",
                    background: "transparent",
                    backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px)",
                    paddingTop: "4px",
                    fontFamily: "Georgia, serif",
                  }} />
              </div>
              <div className="px-5 pb-5">
                <button onClick={salvarRedacao} disabled={!temaFinal || !texto || !nome || palavras < 50} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-900 text-white font-semibold text-[14px] hover:bg-blue-800 transition-all disabled:opacity-40">
                  <Save className="w-4 h-4" />Salvar Redação
                </button>
                {!nome && <p className="text-[11px] text-red-400 text-center mt-2">* Preencha seu nome para salvar</p>}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CORRIGIR MANUAL ── */}
      {view === "corrigir" && redacaoAtual && (
        <div className="space-y-6 opacity-0 animate-fade-in">
          <div className="flex items-center gap-3">
            <button onClick={() => setView("lista")} className="p-2 rounded-lg hover:bg-secondary transition-colors"><X className="w-4 h-4 text-muted-foreground" /></button>
            <h2 className="text-xl font-bold text-foreground">Correção Manual – Professor</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-4 rounded-xl bg-card border border-border/60">
              <p className="font-semibold text-foreground">{redacaoAtual.nome}</p>
              <p className="text-[12px] text-muted-foreground">{redacaoAtual.serie} · {redacaoAtual.escola} · {redacaoAtual.data}</p>
              <p className="text-[13px] font-medium text-primary mt-1">{redacaoAtual.tema}</p>
            </div>
            <div className="p-5 rounded-xl bg-card border border-border/40">
              <p className="text-[10px] font-mono font-semibold text-primary/60 uppercase tracking-wider mb-3">Redação do aluno</p>
              <p className="text-[13px] leading-[1.9] text-foreground/80 whitespace-pre-wrap">{redacaoAtual.texto}</p>
            </div>
            <div className="space-y-4">
              {competencias.map(comp => (
                <div key={comp.key} className="p-4 rounded-xl bg-card border border-border/40 space-y-3">
                  <div className="flex items-center justify-between">
                    <div><span className="text-[11px] font-mono text-primary/60 uppercase">{comp.label}</span><p className="text-[13px] font-semibold text-foreground">{comp.desc}</p></div>
                    <div className="flex items-center gap-1 flex-wrap justify-end">
                      {notasValidas.map(n => (
                        <button key={n} onClick={() => setCorrecaoTemp(prev => ({ ...prev, [comp.key]: { ...((prev as any)[comp.key] || {}), nota: n } }))}
                          className={cn("w-10 h-8 rounded-lg text-[11px] font-bold transition-all border", (correcaoTemp as any)[comp.key]?.nota === n ? n >= 160 ? "bg-green-400 text-white border-green-400" : n >= 120 ? "bg-yellow-400 text-white border-yellow-400" : n >= 80 ? "bg-orange-400 text-white border-orange-400" : "bg-red-400 text-white border-red-400" : "bg-secondary/60 text-muted-foreground border-border/40 hover:border-primary/30")}>
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                  <textarea value={(correcaoTemp as any)[comp.key]?.comentario || ""} onChange={(e) => setCorrecaoTemp(prev => ({ ...prev, [comp.key]: { ...((prev as any)[comp.key] || {}), comentario: e.target.value } }))} placeholder={`Comentário sobre ${comp.desc.toLowerCase()}...`} className="w-full h-20 px-3 py-2 rounded-lg bg-secondary/60 border border-border/40 text-[12px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 resize-none" />
                </div>
              ))}
              <div className="p-4 rounded-xl bg-card border border-border/40 space-y-2">
                <p className="text-[13px] font-semibold text-foreground">Comentário Geral</p>
                <textarea value={correcaoTemp.comentarioGeral || ""} onChange={(e) => setCorrecaoTemp(prev => ({ ...prev, comentarioGeral: e.target.value }))} placeholder="Comentário geral..." className="w-full h-28 px-3 py-2 rounded-lg bg-secondary/60 border border-border/40 text-[12px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 resize-none" />
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-between">
                <p className="text-[13px] font-semibold text-foreground">Nota Total</p>
                <p className="text-[24px] font-black text-primary">{["competencia1","competencia2","competencia3","competencia4","competencia5"].reduce((acc, key) => acc + ((correcaoTemp as any)[key]?.nota || 0), 0)} / 1000</p>
              </div>
              <button onClick={salvarCorrecao} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-[14px] hover:opacity-90 transition-all">
                <Save className="w-4 h-4" />Salvar Correção
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── VER RESULTADO ── */}
      {view === "ver" && redacaoAtual?.correcao && (
        <div className={cn("space-y-6", animacaoEntrada && "opacity-0 animate-fade-in")}>
          <div className="flex items-center gap-3">
            <button onClick={() => setView("lista")} className="p-2 rounded-lg hover:bg-secondary transition-colors"><X className="w-4 h-4 text-muted-foreground" /></button>
            <h2 className="text-xl font-bold text-foreground">Resultado da Correção</h2>
            {redacaoAtual.correcao.corrigidoPor === "ia" && <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[11px] font-semibold"><Bot className="w-3.5 h-3.5" />IA</span>}
            {redacaoAtual.correcao.corrigidoPor === "professor" && <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-semibold">👨‍🏫 Professor</span>}
          </div>
          <div className="max-w-3xl mx-auto space-y-6">

            {/* Mensagem principal */}
            {(() => { const msg = getMensagem(redacaoAtual.correcao.notaTotal); return (
              <div className={cn("p-6 rounded-2xl border text-center", msg.bg)}>
                <div className="text-5xl mb-3">{msg.emoji}</div>
                <h3 className={cn("text-[20px] font-extrabold mb-2", msg.cor)}>{msg.titulo}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed max-w-lg mx-auto">{msg.texto}</p>
              </div>
            ); })()}

            {/* Alerta IA */}
            {redacaoAtual.correcao.geradoPorIA && (
              <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13px] font-bold text-orange-400">⚠️ Possível uso de IA detectado</p>
                  <p className="text-[12px] text-orange-300/70 mt-1">Redações geradas por IA são anuladas no ENEM.</p>
                </div>
              </div>
            )}

            {/* Nota geral */}
            <div className="p-6 rounded-2xl bg-card border border-border/60 text-center">
              <p className="text-[13px] text-muted-foreground mb-1">Aluno: <strong className="text-foreground">{redacaoAtual.nome}</strong></p>
              <p className="text-[13px] text-muted-foreground mb-3">{redacaoAtual.serie} · {redacaoAtual.escola}</p>
              <p className="text-[13px] text-muted-foreground mb-2">Nota Final ENEM</p>
              <p className={cn("text-6xl font-black mb-1", getCorNota(redacaoAtual.correcao.notaTotal))}>{redacaoAtual.correcao.notaTotal}</p>
              <p className="text-[13px] text-muted-foreground">de 1000 pontos</p>
              <div className="grid grid-cols-5 gap-2 mt-6">
                {competencias.map(comp => {
                  const c = (redacaoAtual.correcao as any)[comp.key] as { nota: number };
                  if (!c) return null;
                  return (
                    <div key={comp.key} className="text-center">
                      <p className="text-[10px] font-mono text-muted-foreground mb-1">{comp.label}</p>
                      <div className="h-16 bg-secondary rounded-lg overflow-hidden flex items-end">
                        <div className={cn("w-full rounded-lg transition-all duration-1000", getCorBarra(c.nota))} style={{ height: `${(c.nota / 200) * 100}%` }} />
                      </div>
                      <p className={cn("text-[11px] font-bold mt-1", getCorNota(c.nota))}>{c.nota}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Análise geral */}
            {redacaoAtual.correcao.comentarioGeral && (
              <div className="p-5 rounded-xl bg-card border border-border/40">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <p className="text-[13px] font-semibold text-foreground">{redacaoAtual.correcao.corrigidoPor === "ia" ? "Análise da IA" : "Análise do Professor"}</p>
                </div>
                <p className="text-[13px] text-foreground/80 leading-relaxed">{redacaoAtual.correcao.comentarioGeral}</p>
              </div>
            )}

            {/* Texto grifado */}
            {temGrifos(redacaoAtual.correcao) && (
              <div className="p-5 rounded-xl bg-card border border-border/40">
                <div className="flex items-center gap-2 mb-2">
                  <Highlighter className="w-4 h-4 text-primary" />
                  <p className="text-[13px] font-semibold text-foreground">Texto com marcações interativas</p>
                </div>
                <p className="text-[11px] text-muted-foreground mb-4 font-mono">👆 Clique em qualquer trecho colorido para ver o erro e a sugestão de melhoria</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <button onClick={() => setCompAtiva(null)} className={cn("px-3 py-1 rounded-lg text-[11px] font-semibold border transition-all", compAtiva === null ? "bg-foreground/10 border-foreground/30 text-foreground" : "bg-transparent border-border/30 text-muted-foreground hover:border-foreground/20")}>Todas</button>
                  {Object.entries(COMP_COLORS).map(([key, cor]) => {
                    const comp = (redacaoAtual.correcao as any)[key];
                    if (!comp?.trechos || comp.trechos.length === 0) return null;
                    return (
                      <button key={key} onClick={() => setCompAtiva(compAtiva === key ? null : key)}
                        className={cn("flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold border transition-all", compAtiva === key ? "opacity-100" : "opacity-60 hover:opacity-80")}
                        style={{ background: compAtiva === key ? cor.bg : "transparent", borderColor: cor.border, color: cor.text }}>
                        <span style={{ width: 8, height: 8, borderRadius: 2, background: cor.border, flexShrink: 0, display: "inline-block" }} />
                        {cor.label} – {cor.name}
                      </button>
                    );
                  })}
                </div>
                <div className="p-4 rounded-lg bg-secondary/40 border border-border/30">
                  <TextoGrifado texto={redacaoAtual.texto} correcao={redacaoAtual.correcao} compAtiva={compAtiva} />
                </div>
              </div>
            )}

            {/* Detalhamento por competência */}
            <div className="space-y-3">
              <p className="text-[13px] font-semibold text-foreground flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-primary" />Detalhamento por Competência
              </p>
              {competencias.map(comp => (
                <CompCard
                  key={comp.key}
                  comp={comp}
                  correcao={redacaoAtual.correcao!}
                  getCorNota={getCorNota}
                  getCorBarra={getCorBarra}
                />
              ))}
            </div>

            {/* Botões de ação */}
            <div className="flex gap-3">
              <button onClick={() => iniciarCorrecao(redacaoAtual)} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-secondary border border-border/40 text-foreground text-[13px] font-medium hover:border-primary/30 transition-colors">
                <ClipboardCheck className="w-4 h-4" />Editar Correção
              </button>
              <button onClick={() => corrigirComIA(redacaoAtual)} disabled={corrigindoIA === redacaoAtual.id} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 text-violet-400 text-[13px] font-semibold hover:from-violet-500/30 disabled:opacity-50 transition-all">
                {corrigindoIA === redacaoAtual.id ? <><Loader2 className="w-4 h-4 animate-spin" />Corrigindo...</> : <><Sparkles className="w-4 h-4" />Corrigir com IA</>}
              </button>
              {redacaoAtual.correcao.notaTotal < 800 && (
                <button onClick={() => { setView("escrever"); setTemaSelecionado(redacaoAtual.tema); setTemaPersonalizado(""); setTexto(""); setNome(redacaoAtual.nome); setSerie(redacaoAtual.serie); setEscola(redacaoAtual.escola); }} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-[13px] font-semibold hover:opacity-90 transition-all">
                  <PenLine className="w-4 h-4" />Tentar Novamente
                </button>
              )}
              {redacaoAtual.correcao.notaTotal >= 800 && (
                <div className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
                  <Trophy className="w-4 h-4 text-yellow-400" /><span className="text-[13px] text-yellow-400 font-semibold">Excelente resultado!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}