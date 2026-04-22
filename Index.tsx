import { useState } from "react";
import { ThematicAxisCard } from "@/components/ThematicAxisCard";
import { IntroSection } from "@/components/IntroSection";
import { Essays } from "@/pages/Essays";
import { MyEssays } from "@/pages/MyEssays";
import { thematicAxes, categoryLabels, RepertoireCategory } from "@/data/enemData";
import { BookOpen, LayoutGrid, Search, Heart, BookCheck, FileText, PenLine, Menu, X, Zap, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "intro" | "repertorios" | "favoritos" | "redacoes" | "minhasredacoes";

const categorias = Object.entries(categoryLabels).map(([key, val]) => ({
  key: key as RepertoireCategory,
  ...val,
}));

const navItems = [
  { id: "intro", label: "Como Fazer", icon: BookOpen, desc: "Guia de redação", color: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/20", active: "bg-sky-400/15 border-sky-400/30 text-sky-300" },
  { id: "repertorios", label: "Repertórios", icon: LayoutGrid, desc: "Banco de dados", color: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/20", active: "bg-violet-400/15 border-violet-400/30 text-violet-300" },
  { id: "redacoes", label: "Redações", icon: FileText, desc: "Nota 1000", color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20", active: "bg-amber-400/15 border-amber-400/30 text-amber-300" },
  { id: "minhasredacoes", label: "Minhas Redações", icon: PenLine, desc: "Simulado ENEM", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", active: "bg-emerald-400/15 border-emerald-400/30 text-emerald-300" },
  { id: "favoritos", label: "Favoritos", icon: Heart, desc: "Repertórios salvos", color: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/20", active: "bg-rose-400/15 border-rose-400/30 text-rose-300" },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("intro");
  const [busca, setBusca] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState<RepertoireCategory | "todas">("todas");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [favoritos, setFavoritos] = useState<string[]>(() => {
    const saved = localStorage.getItem("nexus_favoritos");
    return saved ? JSON.parse(saved) : [];
  });

  const [estudados, setEstudados] = useState<string[]>(() => {
    const saved = localStorage.getItem("nexus_estudados");
    return saved ? JSON.parse(saved) : [];
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
  const totalRepertoires = thematicAxes.reduce(
    (acc, a) => acc + a.topics.reduce((t, topic) => t + topic.repertoires.length, 0), 0
  );

  const progressoGeral = totalRepertoires > 0
    ? Math.round((estudados.length / totalRepertoires) * 100)
    : 0;

  const aplicarFiltros = (axes: typeof thematicAxes) => {
    return axes.map(axis => ({
      ...axis,
      topics: axis.topics.map(topic => ({
        ...topic,
        repertoires: topic.repertoires.filter(rep => {
          const matchBusca = busca.trim() === "" ||
            rep.title.toLowerCase().includes(busca.toLowerCase()) ||
            rep.description.toLowerCase().includes(busca.toLowerCase()) ||
            rep.paragraphModel.toLowerCase().includes(busca.toLowerCase()) ||
            topic.name.toLowerCase().includes(busca.toLowerCase()) ||
            axis.name.toLowerCase().includes(busca.toLowerCase());
          const matchCategoria = categoriaFiltro === "todas" || rep.category === categoriaFiltro;
          return matchBusca && matchCategoria;
        })
      })).filter(topic => topic.repertoires.length > 0)
    })).filter(axis => axis.topics.length > 0);
  };

  const axesFiltrados = aplicarFiltros(thematicAxes);

  const axesFavoritos = aplicarFiltros(
    thematicAxes.map(axis => ({
      ...axis,
      topics: axis.topics.map(topic => ({
        ...topic,
        repertoires: topic.repertoires.filter((_, i) =>
          favoritos.includes(`${axis.id}-${topic.name}-${i}`)
        )
      })).filter(topic => topic.repertoires.length > 0)
    })).filter(axis => axis.topics.length > 0)
  );

  const handleNav = (id: string) => {
    setActiveTab(id as Tab);
    setSidebarOpen(false);
  };

  const activeNavItem = navItems.find(n => n.id === activeTab);

  return (
    <div className="min-h-screen bg-background flex">

      {/* Grid background sutil */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 20% 0%, hsl(217 91% 60% / 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 100%, hsl(270 80% 60% / 0.05) 0%, transparent 60%),
            radial-gradient(circle at 1px 1px, hsl(217 91% 60% / 0.04) 1px, transparent 0)
          `,
          backgroundSize: "100% 100%, 100% 100%, 28px 28px",
        }}
      />

      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── SIDEBAR ── */}
      <aside className={cn(
        "fixed left-0 top-0 h-full w-[240px] z-50 flex flex-col transition-transform duration-300 ease-in-out",
        "lg:translate-x-0 lg:static lg:z-auto",
        sidebarOpen ? "translate-x-0" : "-translate-x-full",
        "border-r border-white/[0.06]",
        "bg-[#0d0d12]"
      )}>

        {/* Glow superior */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/8 to-transparent pointer-events-none rounded-t-none" />

        {/* Logo */}
        <div className="relative px-5 pt-5 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-md rounded-xl" />
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary/80 to-violet-600/80 flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <p className="font-bold text-white text-[14px] leading-tight tracking-wide">Nexus ENEM</p>
                <p className="text-[10px] text-white/30 font-mono tracking-wider uppercase">Redação · 2026</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4 text-white/40" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3" />

        {/* Progresso */}
        <div className="px-4 mb-3">
          <div className="rounded-xl bg-white/[0.04] border border-white/[0.07] p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-white/40 uppercase tracking-wider">Progresso</span>
              <span className="text-[12px] font-bold text-emerald-400">{progressoGeral}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${progressoGeral}%`,
                  background: "linear-gradient(90deg, #34d399, #10b981)"
                }}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-[10px] text-white/25">{estudados.length} estudados</span>
              <span className="text-[10px] text-white/25">{totalRepertoires} total</span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto">
          <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest px-2 mb-2">Menu</p>
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 group relative",
                  isActive
                    ? `${item.active} border`
                    : "text-white/40 hover:text-white/80 hover:bg-white/[0.05] border border-transparent"
                )}
              >
                {/* Glow ativo */}
                {isActive && (
                  <div className={cn("absolute inset-0 rounded-xl opacity-20 blur-sm", item.bg)} />
                )}

                <div className={cn(
                  "relative w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all",
                  isActive ? `${item.bg} ${item.color}` : "bg-white/[0.05] text-white/30 group-hover:bg-white/10 group-hover:text-white/60"
                )}>
                  <Icon className="w-4 h-4" />
                </div>

                <div className="relative flex-1 min-w-0">
                  <p className={cn("text-[13px] font-semibold leading-tight", isActive ? "" : "")}>
                    {item.label}
                  </p>
                  <p className="text-[10px] opacity-50 truncate">{item.desc}</p>
                </div>

                {item.id === "favoritos" && favoritos.length > 0 && (
                  <span className="relative bg-rose-500 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center shrink-0">
                    {favoritos.length}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Stats */}
        <div className="px-3 pb-4 mt-3">
          <div className="mx-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3" />
          <div className="grid grid-cols-3 gap-1.5">
            {[
              { label: "Eixos", value: thematicAxes.length },
              { label: "Temas", value: totalTopics },
              { label: "Reps.", value: totalRepertoires },
            ].map(stat => (
              <div key={stat.label} className="text-center p-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                <p className="text-[15px] font-bold text-white/80">{stat.value}</p>
                <p className="text-[8px] font-mono text-white/25 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-[9px] text-white/15 text-center mt-3 font-mono tracking-widest uppercase">
            Nexus ENEM · 2026
          </p>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top bar */}
        <header className="sticky top-0 z-30 h-14 flex items-center px-4 gap-4"
          style={{
            background: "rgba(9, 9, 15, 0.85)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.05)"
          }}
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <Menu className="w-4 h-4 text-white/50" />
          </button>

          <div className="flex items-center gap-2 lg:hidden">
            <Zap className="w-4 h-4 text-primary" />
            <span className="font-bold text-white text-[14px]">Nexus ENEM</span>
          </div>

          {/* Breadcrumb */}
          <div className="hidden lg:flex items-center gap-2 text-[13px]">
            <span className="text-white/25 font-mono">Nexus ENEM</span>
            <span className="text-white/15">/</span>
            {activeNavItem && (
              <div className="flex items-center gap-1.5">
                <activeNavItem.icon className={cn("w-3.5 h-3.5", activeNavItem.color)} />
                <span className="text-white/70 font-medium">{activeNavItem.label}</span>
              </div>
            )}
          </div>

          <div className="ml-auto flex items-center gap-2">
            {progressoGeral > 0 && (
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <BookCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[12px] font-mono font-semibold text-emerald-400">
                  {progressoGeral}% estudado
                </span>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {activeTab === "intro" ? (
              <IntroSection onGoToRepertorios={() => setActiveTab("repertorios")} />
            ) : activeTab === "redacoes" ? (
              <Essays />
            ) : activeTab === "minhasredacoes" ? (
              <MyEssays />
            ) : (
              <div className="space-y-8">
                <div className="opacity-0 animate-fade-in">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-1">
                    {activeTab === "favoritos" ? (
                      <>Meus <span className="text-gradient">Favoritos</span></>
                    ) : (
                      <>Banco de <span className="text-gradient">Repertórios</span></>
                    )}
                  </h2>
                  <p className="text-[13px] text-muted-foreground">
                    {activeTab === "favoritos"
                      ? `${favoritos.length} repertórios salvos`
                      : `${thematicAxes.length} eixos temáticos · ${totalTopics} temas · ${totalRepertoires} repertórios`
                    }
                  </p>
                </div>

                {/* Busca e Filtros */}
                {activeTab === "repertorios" && (
                  <div className="space-y-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Buscar repertório, tema ou filósofo..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary/80 border border-border/40 text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setCategoriaFiltro("todas")}
                        className={cn(
                          "px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200 border",
                          categoriaFiltro === "todas"
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-secondary/60 text-muted-foreground border-border/40 hover:border-primary/30 hover:text-foreground"
                        )}
                      >
                        Todas
                      </button>
                      {categorias.map(cat => (
                        <button
                          key={cat.key}
                          onClick={() => setCategoriaFiltro(cat.key)}
                          className={cn(
                            "px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200 border",
                            categoriaFiltro === cat.key
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-secondary/60 text-muted-foreground border-border/40 hover:border-primary/30 hover:text-foreground"
                          )}
                        >
                          {cat.emoji} {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cards */}
                {activeTab === "favoritos" ? (
                  axesFavoritos.length === 0 ? (
                    <div className="text-center py-16 text-muted-foreground">
                      <Heart className="w-12 h-12 mx-auto mb-4 opacity-20" />
                      <p className="text-[15px]">Nenhum favorito ainda.</p>
                      <p className="text-[13px] mt-1 opacity-70">Clique no ❤️ dentro de um repertório para salvar.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {axesFavoritos.map((axis, i) => (
                        <ThematicAxisCard
                          key={axis.id}
                          axis={axis}
                          index={i}
                          favoritos={favoritos}
                          onToggleFavorito={toggleFavorito}
                          estudados={estudados}
                          onToggleEstudado={toggleEstudado}
                          axisId={axis.id}
                        />
                      ))}
                    </div>
                  )
                ) : axesFiltrados.length === 0 ? (
                  <div className="text-center py-16 text-muted-foreground">
                    <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p className="text-[15px]">Nenhum resultado encontrado.</p>
                    <p className="text-[13px] mt-1 opacity-70">Tente outro termo ou categoria.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {axesFiltrados.map((axis, i) => (
                      <ThematicAxisCard
                        key={axis.id}
                        axis={axis}
                        index={i}
                        favoritos={favoritos}
                        onToggleFavorito={toggleFavorito}
                        estudados={estudados}
                        onToggleEstudado={toggleEstudado}
                        axisId={axis.id}
                      />
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