import { useState } from "react";
import { ThematicAxisCard } from "@/components/ThematicAxisCard";
import { IntroSection } from "@/components/IntroSection";
import { Essays } from "@/pages/Essays";
import { MyEssays } from "@/pages/MyEssays";
import { thematicAxes, categoryLabels, RepertoireCategory } from "@/data/enemData";
import {
  Search, Heart, BookCheck, GraduationCap,
  Sparkles, Trophy, ArrowRight, Zap,
  BookOpen, LayoutGrid, FileText, PenLine, Star, Home, Sun, Moon, Eye
} from "lucide-react";

type Tab = "inicio" | "intro" | "repertorios" | "favoritos" | "redacoes" | "minhasredacoes";

const categorias = Object.entries(categoryLabels).map(([key, val]) => ({
  key: key as RepertoireCategory,
  ...val,
}));

const navItems = [
  { id: "inicio", label: "Início", icon: Home, desc: "Página inicial", emoji: "🏠", heroTitle: "Bem-vindo ao Nexus ENEM", heroSubtitle: "Tudo que você precisa para dominar a redação em um só lugar.", heroBadge: "Plataforma Completa", heroGlow: "rgba(99,102,241,0.15)", heroBorder: "rgba(99,102,241,0.25)" },
  { id: "intro", label: "Como Fazer", icon: BookOpen, desc: "Guia de redação", emoji: "📖", heroTitle: "Aprenda a escrever como um campeão", heroSubtitle: "Domine as 5 competências e construa uma redação nota 1000.", heroBadge: "Guia Completo", heroGlow: "rgba(56,189,248,0.12)", heroBorder: "rgba(56,189,248,0.25)" },
  { id: "repertorios", label: "Repertórios", icon: LayoutGrid, desc: "Banco de dados", emoji: "🧠", heroTitle: "Seu arsenal de argumentos", heroSubtitle: "Citações, filósofos e dados prontos para usar na prova.", heroBadge: "Banco de Repertórios", heroGlow: "rgba(167,139,250,0.12)", heroBorder: "rgba(167,139,250,0.25)" },
  { id: "redacoes", label: "Redações Nota 1000", icon: FileText, desc: "Exemplos reais", emoji: "🏆", heroTitle: "Veja como a perfeição é escrita", heroSubtitle: "Redações reais com nota máxima para você analisar e aprender.", heroBadge: "Exemplos Reais", heroGlow: "rgba(251,191,36,0.10)", heroBorder: "rgba(251,191,36,0.25)" },
  { id: "minhasredacoes", label: "Minhas Redações", icon: PenLine, desc: "Simulado ENEM", emoji: "✍️", heroTitle: "Chegou a sua hora de praticar", heroSubtitle: "Escreva, receba correção e evolua competência por competência.", heroBadge: "Simulado", heroGlow: "rgba(52,211,153,0.10)", heroBorder: "rgba(52,211,153,0.25)" },
  { id: "favoritos", label: "Favoritos", icon: Heart, desc: "Repertórios salvos", emoji: "❤️", heroTitle: "Seus repertórios preferidos", heroSubtitle: "Tudo que você salvou para revisar antes da prova.", heroBadge: "Salvos", heroGlow: "rgba(251,113,133,0.10)", heroBorder: "rgba(251,113,133,0.25)" },
];

// ── CAPA MELHORADA ─────────────────────────────────────────────────────────────
const CoverPage = ({ onEnter }: { onEnter: () => void }) => (
  <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #05050d 0%, #0a0a1a 50%, #07070f 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "24px" }}>

    {/* Gradientes de fundo */}
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.25) 0%, transparent 65%)", pointerEvents: "none" }} />
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 10% 80%, rgba(139,92,246,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 40% 40% at 90% 80%, rgba(16,185,129,0.08) 0%, transparent 60%)", pointerEvents: "none" }} />
    <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

    {/* Linhas decorativas */}
    <div style={{ position: "absolute", top: "15%", left: "5%", width: 200, height: 1, background: "linear-gradient(to right, transparent, rgba(99,102,241,0.3), transparent)", transform: "rotate(-15deg)" }} />
    <div style={{ position: "absolute", top: "25%", right: "5%", width: 150, height: 1, background: "linear-gradient(to right, transparent, rgba(52,211,153,0.2), transparent)", transform: "rotate(15deg)" }} />
    <div style={{ position: "absolute", bottom: "20%", left: "8%", width: 120, height: 1, background: "linear-gradient(to right, transparent, rgba(167,139,250,0.2), transparent)", transform: "rotate(10deg)" }} />

    {/* Badge topo */}
    <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 8, padding: "8px 20px", borderRadius: 999, border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.08)", marginBottom: 40, backdropFilter: "blur(10px)" }}>
      <Sparkles style={{ width: 14, height: 14, color: "#a78bfa" }} />
      <span style={{ fontSize: 11, fontFamily: "monospace", color: "rgba(255,255,255,0.5)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Nexus ENEM · 2026</span>
      <div style={{ width: 6, height: 6, borderRadius: 999, background: "#34d399", marginLeft: 4, boxShadow: "0 0 8px #34d399" }} />
    </div>

    {/* Ícone central com anéis */}
    <div style={{ position: "relative", marginBottom: 40 }}>
      {/* Anéis animados */}
      <div style={{ position: "absolute", inset: -30, borderRadius: 999, border: "1px solid rgba(99,102,241,0.15)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: -50, borderRadius: 999, border: "1px solid rgba(99,102,241,0.08)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: -24, background: "radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)", filter: "blur(20px)" }} />
      <div style={{ position: "relative", width: 110, height: 110, borderRadius: 32, background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 30px 80px rgba(99,102,241,0.6), inset 0 1px 0 rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.15)" }}>
        <GraduationCap style={{ width: 56, height: 56, color: "white" }} />
      </div>
    </div>

    {/* Título */}
    <h1 style={{ position: "relative", textAlign: "center", fontSize: "clamp(42px, 9vw, 72px)", fontWeight: 900, color: "white", letterSpacing: "-0.04em", marginBottom: 20, lineHeight: 1.0 }}>
      Nexus{" "}
      <span style={{ background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 40%, #34d399 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>ENEM</span>
    </h1>

    {/* Subtítulo */}
    <p style={{ position: "relative", textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: "clamp(14px, 2vw, 18px)", maxWidth: 480, lineHeight: 1.75, marginBottom: 8 }}>
      A plataforma completa para dominar a redação do ENEM e conquistar a nota{" "}
      <span style={{ color: "#fbbf24", fontWeight: 800, background: "rgba(251,191,36,0.1)", padding: "1px 6px", borderRadius: 6 }}>1000</span>.
    </p>
    <p style={{ position: "relative", textAlign: "center", color: "rgba(255,255,255,0.15)", fontSize: 12, fontFamily: "monospace", marginBottom: 52, letterSpacing: "0.08em" }}>
      Repertórios · Redações Nota 1000 · Simulados · Correções
    </p>

    {/* Botão principal */}
    <div style={{ position: "relative", marginBottom: 16 }}>
      <div style={{ position: "absolute", inset: -8, background: "rgba(99,102,241,0.3)", borderRadius: 28, filter: "blur(16px)" }} />
      <button onClick={onEnter}
        style={{ position: "relative", display: "flex", alignItems: "center", gap: 12, padding: "18px 44px", borderRadius: 20, fontWeight: 800, color: "white", fontSize: 17, cursor: "pointer", border: "1px solid rgba(255,255,255,0.15)", background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 0 60px rgba(99,102,241,0.5)", transition: "transform 0.2s, box-shadow 0.2s" }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 0 80px rgba(99,102,241,0.7)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 0 60px rgba(99,102,241,0.5)"; }}
      >
        <Zap style={{ width: 20, height: 20 }} />
        Começar agora
        <ArrowRight style={{ width: 18, height: 18 }} />
      </button>
    </div>

    <p style={{ position: "relative", fontSize: 11, color: "rgba(255,255,255,0.2)", marginBottom: 56, fontFamily: "monospace" }}>
      ✓ Gratuito &nbsp;·&nbsp; ✓ Sem cadastro &nbsp;·&nbsp; ✓ Acesso imediato
    </p>

    {/* Stats */}
    <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, maxWidth: 360, width: "100%" }}>
      {[
        { icon: "🧠", value: "100+", label: "Repertórios", sub: "organizados" },
        { icon: "📝", value: "1000", label: "Nota máxima", sub: "pontos ENEM" },
        { icon: "🎯", value: "5", label: "Competências", sub: "dominadas" },
      ].map(s => (
        <div key={s.label} style={{ textAlign: "center", padding: "20px 8px", borderRadius: 20, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", backdropFilter: "blur(10px)" }}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
          <p style={{ fontSize: 24, fontWeight: 900, color: "white", margin: 0, lineHeight: 1 }}>{s.value}</p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 600, margin: "4px 0 2px" }}>{s.label}</p>
          <p style={{ fontSize: 9, color: "rgba(255,255,255,0.2)", fontFamily: "monospace", margin: 0 }}>{s.sub}</p>
        </div>
      ))}
    </div>

    {/* Rodapé */}
    <div style={{ position: "relative", marginTop: 56, textAlign: "center" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 3, marginBottom: 8 }}>
        {[...Array(5)].map((_, i) => <Star key={i} style={{ width: 12, height: 12, color: "#fbbf24", fill: "#fbbf24" }} />)}
      </div>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", fontFamily: "monospace", letterSpacing: "0.12em", textTransform: "uppercase" }}>
        Desenvolvido por Davi H & Professor Zeca
      </p>
    </div>
  </div>
);

// ── HERO BANNER ───────────────────────────────────────────────────────────────
const TabHero = ({ item, darkMode }: { item: typeof navItems[0]; darkMode: boolean }) => (
  <div style={{ position: "relative", borderRadius: 20, padding: "26px 30px", marginBottom: 28, background: darkMode ? `radial-gradient(ellipse at top left, ${item.heroGlow} 0%, transparent 70%)` : `radial-gradient(ellipse at top left, ${item.heroGlow} 0%, rgba(240,240,255,0.5) 100%)`, border: `1px solid ${item.heroBorder}`, overflow: "hidden" }}>
    <div style={{ position: "absolute", top: -8, right: 12, fontSize: 100, opacity: 0.07, pointerEvents: "none", userSelect: "none", lineHeight: 1 }}>{item.emoji}</div>
    <div style={{ position: "relative" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, fontFamily: "monospace", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", padding: "4px 12px", borderRadius: 999, marginBottom: 14, border: `1px solid ${item.heroBorder}`, color: darkMode ? "rgba(255,255,255,0.45)" : "rgba(0,0,0,0.4)", background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)" }}>
        <Trophy style={{ width: 11, height: 11 }} />{item.heroBadge}
      </div>
      <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 900, color: darkMode ? "white" : "#0f172a", letterSpacing: "-0.02em", marginBottom: 8, lineHeight: 1.2 }}>{item.heroTitle}</h2>
      <p style={{ fontSize: 14, color: darkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.5)", lineHeight: 1.7, maxWidth: 580, margin: 0 }}>{item.heroSubtitle}</p>
    </div>
  </div>
);

// ── PÁGINA INÍCIO ─────────────────────────────────────────────────────────────
const InicioPage = ({ darkMode }: { darkMode: boolean }) => {
  const bg = darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)";
  const border = darkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)";
  const textPrimary = darkMode ? "white" : "#0f172a";
  const textSecondary = darkMode ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.5)";
  const textMuted = darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.3)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {/* Introdução */}
      <div style={{ padding: "28px 32px", borderRadius: 20, background: darkMode ? "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.06))" : "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.04))", border: "1px solid rgba(99,102,241,0.2)" }}>
        <p style={{ fontSize: 11, fontFamily: "monospace", color: "#818cf8", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 10, fontWeight: 700 }}>🎓 Nexus ENEM</p>
        <h3 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900, color: textPrimary, margin: "0 0 12px 0", lineHeight: 1.2 }}>Sua plataforma completa para a redação do ENEM</h3>
        <p style={{ fontSize: 14, color: textSecondary, lineHeight: 1.8, margin: 0, maxWidth: 640 }}>
          O Nexus ENEM reúne tudo que você precisa para se preparar: um banco completo de repertórios organizados por tema, redações nota 1000 para você analisar, simulados com correção por competência e um guia detalhado de como escrever. Aqui, você aprende, pratica e evolui de forma estruturada — do zero à nota máxima.
        </p>
      </div>

      {/* Cards */}
      <div>
        <p style={{ fontSize: 10, fontFamily: "monospace", color: textMuted, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12 }}>O que você encontra aqui</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
          {[
            { emoji: "📖", titulo: "Como Fazer", desc: "Guia completo das 5 competências com exemplos práticos e passo a passo.", cor: "#38bdf8" },
            { emoji: "🧠", titulo: "Repertórios", desc: "Banco com citações, dados e filósofos organizados por tema e categoria.", cor: "#a78bfa" },
            { emoji: "🏆", titulo: "Redações Nota 1000", desc: "Exemplos reais de redações com nota máxima para você analisar.", cor: "#fbbf24" },
            { emoji: "✍️", titulo: "Minhas Redações", desc: "Escreva e receba correção do professor com análise por competência.", cor: "#34d399" },
          ].map(card => (
            <div key={card.titulo} style={{ padding: "18px", borderRadius: 16, background: bg, border: `1px solid ${border}`, display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontSize: 28 }}>{card.emoji}</span>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: textPrimary, margin: "0 0 5px 0" }}>{card.titulo}</p>
                <p style={{ fontSize: 12, color: textSecondary, margin: 0, lineHeight: 1.6 }}>{card.desc}</p>
              </div>
              <div style={{ width: "100%", height: 2, borderRadius: 999, background: `${card.cor}30`, marginTop: "auto" }}>
                <div style={{ width: "60%", height: "100%", borderRadius: 999, background: card.cor }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dicas */}
      <div>
        <p style={{ fontSize: 10, fontFamily: "monospace", color: textMuted, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12 }}>Dicas para os estudos</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
          {[
            { emoji: "📅", titulo: "Crie um cronograma", desc: "Estude pelo menos 3 repertórios por dia e escreva uma redação por semana.", cor: "#6366f1" },
            { emoji: "🍎", titulo: "Descanse e se alimente", desc: "Mente descansada absorve mais. Evite estudar exausto na véspera da prova.", cor: "#f43f5e" },
            { emoji: "🔁", titulo: "Revise regularmente", desc: "Releia seus favoritos semanalmente para fixar os repertórios na memória.", cor: "#38bdf8" },
            { emoji: "📋", titulo: "Prepare suas bases", desc: "Monte sua lista pessoal de repertórios favoritos antes da prova.", cor: "#34d399" },
          ].map(d => (
            <div key={d.titulo} style={{ padding: "16px", borderRadius: 14, background: bg, border: `1px solid ${d.cor}20`, borderLeft: `3px solid ${d.cor}` }}>
              <span style={{ fontSize: 24, display: "block", marginBottom: 8 }}>{d.emoji}</span>
              <p style={{ fontSize: 13, fontWeight: 700, color: textPrimary, margin: "0 0 5px 0" }}>{d.titulo}</p>
              <p style={{ fontSize: 12, color: textSecondary, margin: 0, lineHeight: 1.6 }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div>
        <p style={{ fontSize: 10, fontFamily: "monospace", color: textMuted, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12 }}>Perguntas frequentes</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { p: "Como adiciono repertórios aos favoritos?", r: "Clique no ícone de coração ❤️ dentro de qualquer repertório na aba Repertórios." },
            { p: "Posso enviar minha redação pelo site?", r: "Sim! Na aba Minhas Redações você escreve e o professor corrige por competência." },
            { p: "Quantos repertórios tem o banco?", r: "O banco conta com mais de 100 repertórios organizados em 9 eixos temáticos." },
            { p: "Como funciona a correção?", r: "O professor avalia nota por nota nas 5 competências com comentários individuais." },
          ].map((faq, i) => (
            <div key={i} style={{ padding: "14px 18px", borderRadius: 13, background: bg, border: `1px solid ${border}` }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: textPrimary, margin: "0 0 5px 0" }}>❓ {faq.p}</p>
              <p style={{ fontSize: 12, color: textSecondary, margin: 0, lineHeight: 1.6 }}>{faq.r}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Frase */}
      <div style={{ padding: "20px 28px", borderRadius: 16, background: darkMode ? "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.07))" : "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.04))", border: "1px solid rgba(99,102,241,0.2)", textAlign: "center" }}>
        <p style={{ fontSize: 16, fontWeight: 700, color: textPrimary, lineHeight: 1.6, margin: "0 0 8px 0" }}>
          "Nota 1000 não é sorte — é treino, repertório e técnica aplicados com consistência."
        </p>
        <p style={{ fontSize: 12, color: textMuted, margin: 0 }}>— Prof. Zeca · Nexus ENEM</p>
      </div>
    </div>
  );
};

// ── COMPONENTE PRINCIPAL ──────────────────────────────────────────────────────
const Index = () => {
  const [showCover, setShowCover] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("inicio");
  const [busca, setBusca] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState<RepertoireCategory | "todas">("todas");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [verEstudados, setVerEstudados] = useState(false);

  const [favoritos, setFavoritos] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem("nexus_favoritos") || "[]"); } catch { return []; }
  });
  const [estudados, setEstudados] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem("nexus_estudados") || "[]"); } catch { return []; }
  });

  const toggleFavorito = (id: string) => {
    setFavoritos(prev => {
      const novos = prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id];
      localStorage.setItem("nexus_favoritos", JSON.stringify(novos));
      return novos;
    });
  };

  const toggleEstudado = (id: string) => {
    setEstudados(prev => {
      const novos = prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id];
      localStorage.setItem("nexus_estudados", JSON.stringify(novos));
      return novos;
    });
  };

const totalTopics = thematicAxes.reduce((acc, a) => acc + a.topics.length, 0);
const totalRepertoires = thematicAxes.reduce((acc, a) => acc + a.topics.reduce((t, topic) => t + topic.repertoires.length, 0), 0);

// Filtra apenas IDs que realmente existem nos dados (evita contagem errada ao desmarcar)
const estudadosValidos = estudados.filter(id => {
  const parts = id.split("-");
  if (parts.length < 3) return false;
  const idxStr = parts[parts.length - 1];
  const topicName = parts.slice(1, parts.length - 1).join("-");
  const axisId = parts[0];
  const axis = thematicAxes.find(a => a.id === axisId);
  if (!axis) return false;
  const topic = axis.topics.find(t => t.name === topicName);
  if (!topic) return false;
  return parseInt(idxStr) < topic.repertoires.length;
});
const progressoGeral = totalRepertoires > 0 ? Math.round((estudadosValidos.length / totalRepertoires) * 100) : 0;

  // Cores dinâmicas
  const bg = darkMode ? "#09090f" : "#f4f4f8";
  const sidebarBg = darkMode ? "#0a0a12" : "#ffffff";
  const sidebarBorder = darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)";
  const headerBg = darkMode ? "rgba(9,9,15,0.95)" : "rgba(244,244,248,0.95)";
  const textPrimary = darkMode ? "white" : "#0f172a";
  const textMuted = darkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)";
  const textFaint = darkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.2)";
  const itemBg = darkMode ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const itemBgHover = darkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.06)";
  const activeBg = darkMode ? "rgba(255,255,255,0.08)" : "rgba(99,102,241,0.1)";
  const activeBorder = darkMode ? "rgba(255,255,255,0.12)" : "rgba(99,102,241,0.3)";
  const inputBg = darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
  const inputBorder = darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

  const aplicarFiltros = (axes: typeof thematicAxes) =>
    axes.map(axis => ({
      ...axis,
      topics: axis.topics.map(topic => ({
        ...topic,
        repertoires: topic.repertoires.filter(rep => {
          const matchBusca = busca.trim() === "" ||
            [rep.title, rep.description, rep.paragraphModel, topic.name, axis.name]
              .some(s => s.toLowerCase().includes(busca.toLowerCase()));
          return matchBusca && (categoriaFiltro === "todas" || rep.category === categoriaFiltro);
        })
      })).filter(t => t.repertoires.length > 0)
    })).filter(a => a.topics.length > 0);

  // Filtro de estudados
  const axesEstudados = aplicarFiltros(
    thematicAxes.map(axis => ({
      ...axis,
      topics: axis.topics.map(topic => ({
        ...topic,
        repertoires: topic.repertoires.filter((_, i) => estudados.includes(`${axis.id}-${topic.name}-${i}`))
      })).filter(t => t.repertoires.length > 0)
    })).filter(a => a.topics.length > 0)
  );

  const axesFiltrados = verEstudados ? axesEstudados : aplicarFiltros(thematicAxes);
  const axesFavoritos = aplicarFiltros(
    thematicAxes.map(axis => ({
      ...axis,
      topics: axis.topics.map(topic => ({
        ...topic,
        repertoires: topic.repertoires.filter((_, i) => favoritos.includes(`${axis.id}-${topic.name}-${i}`))
      })).filter(t => t.repertoires.length > 0)
    })).filter(a => a.topics.length > 0)
  );

  const handleNav = (id: Tab) => { setActiveTab(id); setSidebarOpen(false); setVerEstudados(false); };
  const activeNavItem = navItems.find(n => n.id === activeTab)!;

  if (showCover) return <CoverPage onEnter={() => setShowCover(false)} />;

  return (
    <div style={{ height: "100vh", background: bg, display: "flex", overflow: "hidden", transition: "background 0.3s" }}>

      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, background: darkMode ? "radial-gradient(ellipse 80% 40% at 20% 0%, rgba(99,102,241,0.07) 0%, transparent 60%)" : "none" }} />

      {sidebarOpen && <div onClick={() => setSidebarOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 40 }} />}

      {/* ── SIDEBAR ── */}
      <aside style={{ width: 240, minWidth: 240, height: "100vh", display: "flex", flexDirection: "column", background: sidebarBg, borderRight: `1px solid ${sidebarBorder}`, position: "relative", zIndex: 10, flexShrink: 0, transition: "background 0.3s" }}>

        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 140, background: darkMode ? "linear-gradient(to bottom, rgba(99,102,241,0.13), transparent)" : "linear-gradient(to bottom, rgba(99,102,241,0.05), transparent)", pointerEvents: "none" }} />

        {/* Logo */}
        <div style={{ position: "relative", padding: "22px 20px 16px", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -6, background: "rgba(99,102,241,0.45)", borderRadius: 14, filter: "blur(12px)" }} />
              <div style={{ position: "relative", width: 40, height: 40, borderRadius: 13, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 28px rgba(99,102,241,0.45)" }}>
                <GraduationCap style={{ width: 22, height: 22, color: "white" }} />
              </div>
            </div>
            <div>
              <p style={{ fontWeight: 900, color: textPrimary, fontSize: 15, lineHeight: 1.2, margin: 0 }}>Nexus ENEM</p>
              <p style={{ fontSize: 10, color: textMuted, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>Redação · 2026</p>
            </div>
          </div>
        </div>

        <div style={{ margin: "0 16px 14px", height: 1, background: darkMode ? "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)" : "linear-gradient(to right, transparent, rgba(0,0,0,0.08), transparent)", flexShrink: 0 }} />

        {/* Progresso — clicável */}
        <div style={{ padding: "0 14px 14px", flexShrink: 0 }}>
          <button
            onClick={() => { if (activeTab === "repertorios") setVerEstudados(v => !v); else { handleNav("repertorios"); setVerEstudados(true); } }}
            style={{ width: "100%", borderRadius: 14, background: verEstudados ? "rgba(52,211,153,0.1)" : itemBg, border: verEstudados ? "1px solid rgba(52,211,153,0.3)" : `1px solid ${darkMode ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`, padding: 12, cursor: "pointer", textAlign: "left", transition: "all 0.2s" }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, alignItems: "center" }}>
              <span style={{ fontSize: 10, fontFamily: "monospace", color: textMuted, textTransform: "uppercase", letterSpacing: "0.1em" }}>Progresso</span>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                {verEstudados && <Eye style={{ width: 10, height: 10, color: "#34d399" }} />}
                <span style={{ fontSize: 13, fontWeight: 900, color: "#34d399" }}>{progressoGeral}%</span>
              </div>
            </div>
            <div style={{ height: 5, borderRadius: 999, background: darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)", overflow: "hidden" }}>
              <div style={{ height: "100%", borderRadius: 999, width: `${progressoGeral}%`, background: "linear-gradient(90deg, #34d399, #10b981)", transition: "width 0.7s ease" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
              <span style={{ fontSize: 10, color: textMuted }}>{estudados.length} estudados</span>
              <span style={{ fontSize: 10, color: verEstudados ? "#34d399" : textMuted }}>
                {verEstudados ? "👁 ver estudados" : `${totalRepertoires} total`}
              </span>
            </div>
          </button>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "0 10px", display: "flex", flexDirection: "column", gap: 2, overflowY: "auto" }}>
          <p style={{ fontSize: 9, fontFamily: "monospace", color: textFaint, textTransform: "uppercase", letterSpacing: "0.15em", padding: "0 8px", marginBottom: 6, flexShrink: 0 }}>Navegação</p>
          {navItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id as Tab)}
                style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "11px 12px", borderRadius: 13, cursor: "pointer", textAlign: "left", position: "relative", background: isActive ? activeBg : "transparent", border: isActive ? `1px solid ${activeBorder}` : "1px solid transparent", transition: "all 0.15s", color: isActive ? textPrimary : textMuted, boxSizing: "border-box", flexShrink: 0 }}
                onMouseEnter={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.background = itemBgHover; (e.currentTarget as HTMLElement).style.color = textPrimary; } }}
                onMouseLeave={e => { if (!isActive) { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = textMuted; } }}
              >
                {isActive && <div style={{ position: "absolute", left: 0, top: "18%", bottom: "18%", width: 3, borderRadius: 999, background: "linear-gradient(to bottom, #6366f1, #8b5cf6)" }} />}
                <span style={{ fontSize: 19, flexShrink: 0 }}>{item.emoji}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 13, fontWeight: isActive ? 700 : 500, margin: 0, lineHeight: 1.3, color: "inherit" }}>{item.label}</p>
                  <p style={{ fontSize: 10, opacity: 0.45, margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: "inherit" }}>{item.desc}</p>
                </div>
                {item.id === "favoritos" && favoritos.length > 0 && (
                  <span style={{ background: "#f43f5e", color: "white", fontSize: 9, fontWeight: 900, borderRadius: 999, width: 17, height: 17, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {favoritos.length}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Stats + rodapé */}
        <div style={{ padding: "14px 12px 22px", flexShrink: 0 }}>
          <div style={{ margin: "0 4px 14px", height: 1, background: darkMode ? "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)" : "linear-gradient(to right, transparent, rgba(0,0,0,0.08), transparent)" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6 }}>
            {[{ label: "Eixos", value: thematicAxes.length }, { label: "Temas", value: totalTopics }, { label: "Reps.", value: totalRepertoires }].map(s => (
              <div key={s.label} style={{ textAlign: "center", padding: "10px 4px", borderRadius: 11, background: itemBg, border: `1px solid ${darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}` }}>
                <p style={{ fontSize: 16, fontWeight: 900, color: textPrimary, margin: 0 }}>{s.value}</p>
                <p style={{ fontSize: 8, fontFamily: "monospace", color: textMuted, textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 9, color: textFaint, textAlign: "center", marginTop: 14, fontFamily: "monospace", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Davi H & Prof. Zeca · 2026
          </p>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, height: "100vh", overflow: "hidden" }}>

        {/* Header */}
        <header style={{ height: 56, display: "flex", alignItems: "center", padding: "0 28px", gap: 16, background: headerBg, backdropFilter: "blur(20px)", borderBottom: `1px solid ${darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.07)"}`, flexShrink: 0, zIndex: 20, transition: "background 0.3s" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 22 }}>{activeNavItem.emoji}</span>
            <div>
              <p style={{ fontSize: 14, fontWeight: 700, color: textPrimary, margin: 0, lineHeight: 1.2 }}>{activeNavItem.label}</p>
              <p style={{ fontSize: 11, color: textMuted, margin: 0 }}>{activeNavItem.desc}</p>
            </div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
            {/* Botão estudados */}
            {activeTab === "repertorios" && (
              <button
                onClick={() => setVerEstudados(v => !v)}
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 9, background: verEstudados ? "rgba(52,211,153,0.15)" : itemBg, border: verEstudados ? "1px solid rgba(52,211,153,0.3)" : `1px solid ${inputBorder}`, cursor: "pointer", transition: "all 0.2s" }}
              >
                <Eye style={{ width: 14, height: 14, color: verEstudados ? "#34d399" : textMuted }} />
                <span style={{ fontSize: 12, fontFamily: "monospace", fontWeight: 700, color: verEstudados ? "#34d399" : textMuted }}>
                  {verEstudados ? "Estudados" : "Ver estudados"}
                </span>
              </button>
            )}
            {progressoGeral > 0 && (
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", borderRadius: 9, background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.2)" }}>
                <BookCheck style={{ width: 14, height: 14, color: "#34d399" }} />
                <span style={{ fontSize: 12, fontFamily: "monospace", fontWeight: 700, color: "#34d399" }}>{progressoGeral}% estudado</span>
              </div>
            )}
            {/* Botão modo claro/escuro */}
            <button
              onClick={() => setDarkMode(d => !d)}
              style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", background: itemBg, border: `1px solid ${inputBorder}`, cursor: "pointer", transition: "all 0.2s" }}
              title={darkMode ? "Modo claro" : "Modo escuro"}
            >
              {darkMode ? <Sun style={{ width: 16, height: 16, color: "#fbbf24" }} /> : <Moon style={{ width: 16, height: 16, color: "#6366f1" }} />}
            </button>
          </div>
        </header>

        {/* Content */}
        <main style={{ flex: 1, padding: "30px 32px", overflowY: "auto" }}>
          <div style={{ maxWidth: 880, margin: "0 auto" }}>
            {activeTab === "inicio" ? (
              <>
                <TabHero item={activeNavItem} darkMode={darkMode} />
                <InicioPage darkMode={darkMode} />
              </>
            ) : activeTab === "intro" ? (
              <>
                <TabHero item={activeNavItem} darkMode={darkMode} />
                <IntroSection onGoToRepertorios={() => handleNav("repertorios")} />
              </>
            ) : activeTab === "redacoes" ? (
              <>
                <TabHero item={activeNavItem} darkMode={darkMode} />
                <Essays />
              </>
            ) : activeTab === "minhasredacoes" ? (
              <>
                <TabHero item={activeNavItem} darkMode={darkMode} />
                <MyEssays />
              </>
            ) : (
              <div>
                <TabHero item={activeNavItem} darkMode={darkMode} />

                {activeTab === "repertorios" && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                    {verEstudados && (
                      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 10, background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.2)" }}>
                        <Eye style={{ width: 14, height: 14, color: "#34d399" }} />
                        <span style={{ fontSize: 12, color: "#34d399", fontWeight: 600 }}>Mostrando {estudados.length} repertórios estudados</span>
                        <button onClick={() => setVerEstudados(false)} style={{ marginLeft: "auto", fontSize: 11, color: "#34d399", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}>ver todos</button>
                      </div>
                    )}
                    <div style={{ position: "relative" }}>
                      <Search style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", width: 16, height: 16, color: textMuted }} />
                      <input
                        type="text"
                        placeholder="Buscar repertório, tema ou filósofo..."
                        value={busca}
                        onChange={e => setBusca(e.target.value)}
                        style={{ width: "100%", paddingLeft: 42, paddingRight: 16, paddingTop: 11, paddingBottom: 11, borderRadius: 13, background: inputBg, border: `1px solid ${inputBorder}`, color: textPrimary, fontSize: 13, outline: "none", boxSizing: "border-box" }}
                      />
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      <button onClick={() => setCategoriaFiltro("todas")} style={{ padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "1px solid", background: categoriaFiltro === "todas" ? "#6366f1" : inputBg, borderColor: categoriaFiltro === "todas" ? "#6366f1" : inputBorder, color: categoriaFiltro === "todas" ? "white" : textMuted }}>Todas</button>
                      {categorias.map(cat => (
                        <button key={cat.key} onClick={() => setCategoriaFiltro(cat.key)} style={{ padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "1px solid", background: categoriaFiltro === cat.key ? "#6366f1" : inputBg, borderColor: categoriaFiltro === cat.key ? "#6366f1" : inputBorder, color: categoriaFiltro === cat.key ? "white" : textMuted }}>
                          {"emoji" in cat ? cat.emoji : ""} {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "favoritos" ? (
                  axesFavoritos.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "64px 0", color: textMuted }}>
                      <div style={{ fontSize: 52, marginBottom: 16 }}>❤️</div>
                      <p style={{ fontSize: 15 }}>Nenhum favorito ainda.</p>
                      <p style={{ fontSize: 13, opacity: 0.6 }}>Clique no ❤️ dentro de um repertório para salvar.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {axesFavoritos.map((axis, i) => (
                        <ThematicAxisCard key={axis.id} axis={axis} index={i} favoritos={favoritos} onToggleFavorito={toggleFavorito} estudados={estudados} onToggleEstudado={toggleEstudado} axisId={axis.id} />
                      ))}
                    </div>
                  )
                ) : axesFiltrados.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "64px 0", color: textMuted }}>
                    <div style={{ fontSize: 52, marginBottom: 16 }}>🔍</div>
                    <p style={{ fontSize: 15 }}>{verEstudados ? "Nenhum repertório estudado ainda." : "Nenhum resultado encontrado."}</p>
                    <p style={{ fontSize: 13, opacity: 0.6 }}>{verEstudados ? "Marque repertórios como estudados para vê-los aqui." : "Tente outro termo ou categoria."}</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {axesFiltrados.map((axis, i) => (
                      <ThematicAxisCard key={axis.id} axis={axis} index={i} favoritos={favoritos} onToggleFavorito={toggleFavorito} estudados={estudados} onToggleEstudado={toggleEstudado} axisId={axis.id} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;