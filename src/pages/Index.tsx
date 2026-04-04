import { ThematicAxisCard } from "@/components/ThematicAxisCard";
import { thematicAxes } from "@/data/enemData";
import { Zap } from "lucide-react";

const Index = () => {
  const totalTopics = thematicAxes.reduce((acc, a) => acc + a.topics.length, 0);
  const totalRepertoires = thematicAxes.reduce(
    (acc, a) => acc + a.topics.reduce((t, topic) => t + topic.repertoires.length, 0),
    0
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Subtle grid background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(217 91% 60%) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center">
              <Zap className="w-[18px] h-[18px] text-primary" />
            </div>
            <span className="font-semibold text-foreground tracking-tight text-[15px]">
              Nexus ENEM
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <span className="px-2.5 py-1 rounded-md bg-secondary">
              {thematicAxes.length} eixos
            </span>
            <span className="px-2.5 py-1 rounded-md bg-secondary">
              {totalTopics} temas
            </span>
            <span className="px-2.5 py-1 rounded-md bg-secondary">
              {totalRepertoires} rep.
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 relative">
        <div className="space-y-6 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-[13px] text-primary font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Banco de Repertórios
          </div>
          <h2 className="text-5xl sm:text-6xl font-extrabold text-foreground tracking-tight leading-[1.05]" style={{ lineHeight: '1.05' }}>
            Seu arsenal
            <br />
            para a <span className="text-gradient">nota 1000</span>
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md">
            Explore eixos temáticos, descubra repertórios socioculturais
            e copie parágrafos prontos para sua redação.
          </p>
        </div>
      </section>

      {/* Axes Grid */}
      <main className="max-w-5xl mx-auto px-6 pb-32 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {thematicAxes.map((axis, i) => (
            <ThematicAxisCard key={axis.id} axis={axis} index={i} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground/60">
            Nexus ENEM · 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
