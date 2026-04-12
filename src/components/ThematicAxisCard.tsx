import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { ThematicAxis as AxisType } from "@/data/enemData";
import { TopicCard } from "./TopicCard";
import { cn } from "@/lib/utils";

interface ThematicAxisCardProps {
  axis: AxisType;
  index: number;
  favoritos: string[];
  onToggleFavorito: (id: string) => void;
  estudados: string[];
  onToggleEstudado: (id: string) => void;
  axisId: string;
}

export function ThematicAxisCard({ axis, index, favoritos, onToggleFavorito, estudados, onToggleEstudado, axisId }: ThematicAxisCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = axis.icon;

  const totalRepertoires = axis.topics.reduce((acc, t) => acc + t.repertoires.length, 0);

  const estudadosNoAxis = axis.topics.reduce((acc, topic, ti) =>
    acc + topic.repertoires.filter((_, i) =>
      estudados.includes(`${axis.id}-${topic.name}-${i}`)
    ).length, 0
  );

  const progresso = totalRepertoires > 0 ? Math.round((estudadosNoAxis / totalRepertoires) * 100) : 0;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "opacity-0 animate-fade-in group relative",
          "flex flex-col items-start gap-5 p-5",
          "rounded-2xl text-left cursor-pointer",
          "bg-card border border-border/60",
          "transition-all duration-300 ease-out",
          "hover:border-primary/30 hover:bg-card/80",
          "hover:shadow-[0_0_40px_-12px_hsl(217_91%_60%_/_0.15)]",
          "active:scale-[0.98]"
        )}
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/15">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="space-y-1.5 w-full">
          <h2 className="font-semibold text-foreground text-[15px] leading-snug tracking-tight">
            {axis.name}
          </h2>
          <p className="font-mono text-[11px] text-muted-foreground">
            {axis.topics.length} temas · {totalRepertoires} rep.
          </p>
          {/* Barra de progresso */}
          <div className="w-full mt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-mono text-muted-foreground">Progresso</span>
              <span className="text-[10px] font-mono text-green-400 font-semibold">{progresso}%</span>
            </div>
            <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-green-400 rounded-full transition-all duration-500"
                style={{ width: `${progresso}%` }}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[12px] font-medium text-primary/70 group-hover:text-primary transition-colors mt-auto">
          Explorar
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-background/90 backdrop-blur-xl overflow-y-auto animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-3xl my-6 mx-4 bg-card border border-border/60 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-scale"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-border/40">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-bold text-lg text-foreground tracking-tight">
                    {axis.name}
                  </h2>
                  <p className="font-mono text-[11px] text-muted-foreground mt-0.5">
                    {axis.topics.length} temas · {totalRepertoires} repertórios · {progresso}% concluído
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* Barra de progresso no modal */}
            <div className="px-5 pt-3">
              <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-400 rounded-full transition-all duration-500"
                  style={{ width: `${progresso}%` }}
                />
              </div>
            </div>

            <div className="p-5 space-y-3">
              {axis.topics.map((topic, i) => (
                <TopicCard
                  key={i}
                  topic={topic}
                  index={i}
                  favoritos={favoritos}
                  onToggleFavorito={onToggleFavorito}
                  estudados={estudados}
                  onToggleEstudado={onToggleEstudado}
                  axisId={axisId}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}