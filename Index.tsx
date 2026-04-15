import { useState } from "react";
import { ThematicAxisCard } from "@/components/ThematicAxisCard";
import { IntroSection } from "@/components/IntroSection";
import { Essays } from "@/pages/Essays";
import { thematicAxes, categoryLabels, RepertoireCategory } from "@/data/enemData";
import { BookOpen, LayoutGrid, Search, Heart, BookCheck, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "intro" | "repertorios" | "favoritos" | "redacoes";

const categorias = Object.entries(categoryLabels).map(([key, val]) => ({
  key: key as RepertoireCategory,
  ...val,
}));

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("intro");
  const [busca, setBusca] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState<RepertoireCategory | "todas">("todas");

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
  return (
    <div className="min-h-screen bg-background">
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(217 91% 60%) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/davinexusenem/logo.png"
              alt="Logo Davi e Zeca"
              className="h-10 w-auto object-contain"
            />
            <span className="font-semibold text-foreground tracking-tight text-[15px]">
              Nexus ENEM
            </span>
          </div>

          <div className="flex items-center gap-1 p-1 rounded-lg bg-secondary/80 border border-border/40">
            <button
              onClick={() => setActiveTab("intro")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium transition-all duration-200",
                activeTab === "intro"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Como Fazer</span>
            </button>
            <button
              onClick={() => setActiveTab("repertorios")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium transition-all duration-200",
                activeTab === "repertorios"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Repertórios</span>
            </button>
            <button
              onClick={() => setActiveTab("redacoes")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium transition-all duration-200",
                activeTab === "redacoes"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Redações</span>
            </button>
            <button
              onClick={() => setActiveTab("favoritos")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium transition-all duration-200",
                activeTab === "favoritos"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Heart className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Favoritos</span>
              {favoritos.length > 0 && (
                <span className="bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {favoritos.length}
                </span>
              )}
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <span className="px-2.5 py-1 rounded-md bg-secondary">
                {thematicAxes.length} eixos
              </span>
              <span className="px-2.5 py-1 rounded-md bg-secondary">
                {totalTopics} temas
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-green-500/10 border border-green-500/20">
              <BookCheck className="w-3.5 h-3.5 text-green-400" />
              <span className="text-[12px] font-mono font-semibold text-green-400">
                {progressoGeral}% estudado
              </span>
            </div>
          </div>
        </div>

        {estudados.length > 0 && (
          <div className="w-full h-0.5 bg-secondary">
            <div
              className="h-full bg-green-400 transition-all duration-500"
              style={{ width: `${progressoGeral}%` }}
            />
          </div>
        )}
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 relative">
        {activeTab === "intro" ? (
          <IntroSection onGoToRepertorios={() => setActiveTab("repertorios")} />
        ) : activeTab === "redacoes" ? (
          <Essays />
        ) : (
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-4 opacity-0 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight" style={{ lineHeight: "1.1" }}>
                {activeTab === "favoritos" ? (
                  <>Meus <span className="text-gradient">Favoritos</span></>
                ) : (
                  <>Banco de <span className="text-gradient">Repertórios</span></>
                )}
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                {activeTab === "favoritos"
                  ? `${favoritos.length} repertórios salvos`
                  : `${thematicAxes.length} eixos temáticos · ${totalTopics} temas · ${totalRepertoires} repertórios prontos`
                }
              </p>
            </div>

            {/* Busca e Filtros */}
            <div className="space-y-3 max-w-2xl mx-auto">
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
              <div className="flex flex-wrap gap-2 justify-center">
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

            {/* Cards */}
            {activeTab === "favoritos" ? (
              axesFavoritos.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                  <Heart className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p className="text-[15px]">Nenhum favorito ainda.</p>
                  <p className="text-[13px] mt-1 opacity-70">Clique no ❤️ dentro de um repertório para salvar.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
      </main>

      <footer className="border-t border-border/30 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground/60">Nexus ENEM · 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;