import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Topic } from "@/data/enemData";
import { RepertoireTable } from "./RepertoireTable";
import { cn } from "@/lib/utils";

interface TopicCardProps {
  topic: Topic;
  index: number;
  favoritos: string[];
  onToggleFavorito: (id: string) => void;
  estudados: string[];
  onToggleEstudado: (id: string) => void;
  axisId: string;
}

export function TopicCard({ topic, index, favoritos, onToggleFavorito, estudados, onToggleEstudado, axisId }: TopicCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const estudadosNoTopic = topic.repertoires.filter((_, i) =>
    estudados.includes(`${axisId}-${topic.name}-${i}`)
  ).length;

  return (
    <div className={cn(
      "rounded-xl border border-border/40 overflow-hidden transition-all duration-300",
      isOpen ? "bg-secondary/40 border-primary/15" : "hover:border-border/70 hover:bg-secondary/20"
    )}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left transition-colors active:scale-[0.995]"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-primary/60 font-semibold tabular-nums w-5">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="font-semibold text-foreground text-[14px] tracking-tight">
            {topic.name}
          </h3>
        </div>
        <div className="flex items-center gap-2.5 shrink-0 ml-2">
          {estudadosNoTopic > 0 && (
            <span className="text-[10px] font-mono text-green-400 font-semibold">
              {estudadosNoTopic}/{topic.repertoires.length} estudados
            </span>
          )}
          <span className="text-[11px] text-muted-foreground font-mono">
            {topic.repertoires.length} rep.
          </span>
          <ChevronRight
            className={cn(
              "w-3.5 h-3.5 text-muted-foreground transition-transform duration-300",
              isOpen && "rotate-90"
            )}
          />
        </div>
      </button>

      {isOpen && (
        <div className="animate-fade-in border-t border-border/30">
          <RepertoireTable
            repertoires={topic.repertoires}
            favoritos={favoritos}
            onToggleFavorito={onToggleFavorito}
            estudados={estudados}
            onToggleEstudado={onToggleEstudado}
            axisId={axisId}
            topicName={topic.name}
          />
        </div>
      )}
    </div>
  );
}