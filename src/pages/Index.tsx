import { ThematicAxisCard } from "@/components/ThematicAxisCard";
import { thematicAxes } from "@/data/enemData";
import { BookOpen } from "lucide-react";

const Index = () => {
  const totalTopics = thematicAxes.reduce((acc, a) => acc + a.topics.length, 0);
  const totalRepertoires = thematicAxes.reduce(
    (acc, a) => acc + a.topics.reduce((t, topic) => t + topic.repertoires.length, 0),
    0
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-xl bg-background/80 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-display text-lg font-bold text-foreground tracking-tight">
                Nexus ENEM
              </h1>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                Banco de Repertórios
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 font-mono text-xs text-muted-foreground">
            <span>{thematicAxes.length} eixos</span>
            <span className="w-px h-3 bg-border" />
            <span>{totalTopics} temas</span>
            <span className="w-px h-3 bg-border" />
            <span>{totalRepertoires} repertórios</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="space-y-4 max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Seu arsenal para a{" "}
            <span className="text-gradient">nota 1000</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Repertórios socioculturais organizados por eixo temático, com modelos
            de parágrafos prontos para usar na sua redação.
          </p>
        </div>
      </section>

      {/* Axes Grid */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid gap-4">
          {thematicAxes.map((axis, i) => (
            <ThematicAxisCard key={axis.id} axis={axis} index={i} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            Nexus ENEM · Banco de Repertórios
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Prepare-se com excelência
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
