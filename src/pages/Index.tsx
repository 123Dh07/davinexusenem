import { useState } from "react";
import { ThematicAxisCard } from "@/components/ThematicAxisCard";
import { IntroSection } from "@/components/IntroSection";
import { thematicAxes } from "@/data/enemData";
import { Zap, BookOpen, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "intro" | "repertorios";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("intro");

  const totalTopics = thematicAxes.reduce((acc, a) => acc + a.topics.length, 0);
  const totalRepertoires = thematicAxes.reduce(
    (acc, a) => acc + a.topics.reduce((t, topic) => t + topic.repertoires.length, 0),
    0
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Subtle grid background */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(217 91% 60%) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <span className="font-semibold text-foreground tracking-tight text-[15px]">
              Nexus ENEM
            </span>
          </div>

          {/* Tab navigation */}
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
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <span className="px-2.5 py-1 rounded-md bg-secondary">
              {thematicAxes.length} eixos
            </span>
            <span className="px-2.5 py-1 rounded-md bg-secondary">
              {totalTopics} temas
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 relative">
        {activeTab === "intro" ? (
          <IntroSection />
        ) : (
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-4 opacity-0 animate-fade-in">
              <h2
                className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight"
                style={{ lineHeight: "1.1" }}
              >
                Banco de <span className="text-gradient">Repertórios</span>
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                {thematicAxes.length} eixos temáticos · {totalTopics} temas · {totalRepertoires} repertórios prontos
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {thematicAxes.map((axis, i) => (
                <ThematicAxisCard key={axis.id} axis={axis} index={i} />
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs text-muted-foreground/60">Nexus ENEM · 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
