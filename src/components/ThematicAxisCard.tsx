import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { ThematicAxis as AxisType } from "@/data/enemData";
import { TopicCard } from "./TopicCard";
import { cn } from "@/lib/utils";

interface ThematicAxisCardProps {
  axis: AxisType;
  index: number;
}

export function ThematicAxisCard({ axis, index }: ThematicAxisCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = axis.icon;

  const totalRepertoires = axis.topics.reduce(
    (acc, t) => acc + t.repertoires.length,
    0
  );

  return (
    <>
      {/* Card quadrado */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "opacity-0 animate-fade-in flex flex-col items-center justify-center gap-3 p-6",
          "aspect-square rounded-2xl text-center",
          "bg-card border border-border/60 transition-all duration-300",
          "hover:border-primary/50 hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.2)]",
          "hover:-translate-y-1"
        )}
        style={{ animationDelay: `${index * 80}ms` }}
      >
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h2 className="font-display text-base sm:text-lg font-bold text-foreground">
            {axis.name}
          </h2>
          <p className="font-mono text-[11px] text-muted-foreground mt-1">
            {axis.topics.length} temas · {totalRepertoires} rep.
          </p>
        </div>
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-background/80 backdrop-blur-sm p-4 pt-12 overflow-y-auto animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-3xl bg-card border border-border/60 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between p-6 border-b border-border/40">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    {axis.name}
                  </h2>
                  <p className="font-mono text-xs text-muted-foreground mt-0.5">
                    {axis.topics.length} temas · {totalRepertoires} repertórios
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Topics */}
            <div className="p-6 space-y-3">
              {axis.topics.map((topic, i) => (
                <TopicCard key={i} topic={topic} index={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
