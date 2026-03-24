import { ThematicAxisCard } from "@/components/ThematicAxisCard";
import { thematicAxes } from "@/data/enemData";
import { BookOpen, Sparkles } from "lucide-react";

const Index = () => {
  const totalTopics = thematicAxes.reduce((acc, a) => acc + a.topics.length, 0);
  const totalRepertoires = thematicAxes.reduce(
    (acc, a) => acc + a.topics.reduce((t, topic) => t + topic.repertoires.length, 0),
    0
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/30 bg-background/90 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-display text-lg font-bold text-foreground tracking-tight">
                Nexus ENEM
              </h1>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
                Repertórios & Argumentação
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
              {thematicAxes.length} eixos
            </span>
            <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium">
              {totalTopics} temas
            </span>
            <span className="px-3 py-1.5 rounded-full bg-secondary text-muted-foreground font-medium">
              {totalRepertoires} repertórios
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="space-y-5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            Banco de Repertórios Socioculturais
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] text-balance">
            Seu arsenal para a{" "}
            <span className="text-gradient">nota 1000</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
            Escolha um eixo, explore os temas, descubra repertórios e copie
            parágrafos prontos para usar na sua redação.
          </p>
        </div>
      </section>

      {/* Axes Grid */}
      <main className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {thematicAxes.map((axis, i) => (
            <ThematicAxisCard key={axis.id} axis={axis} index={i} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/20 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            Nexus ENEM · 2026
          </p>
          <p className="text-xs text-muted-foreground">
            Prepare-se com excelência ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
