import { useState } from "react";
import { X } from "lucide-react";
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
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "opacity-0 animate-fade-in group",
          "flex flex-col items-center justify-center gap-4 p-6",
          "min-h-[180px] rounded-2xl text-center cursor-pointer",
          "bg-card border border-border/50 transition-all duration-300",
          "hover:border-primary/40 hover:bg-card/90",
          "hover:shadow-[0_8px_32px_-8px_hsl(var(--primary)/0.15)]",
          "hover:-translate-y-1"
        )}
        style={{ animationDelay: `${index * 60}ms` }}
      >
        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:scale-105 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <div className="space-y-1">
          <h2 className="font-display text-base sm:text-lg font-bold text-foreground leading-tight">
            {axis.name}
          </h2>
          <p className="font-mono text-[11px] text-muted-foreground">
            {axis.topics.length} temas · {totalRepertoires} rep.
          </p>
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-background/85 backdrop-blur-md overflow-y-auto animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-3xl my-8 mx-4 bg-card border border-border/50 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/30 bg-secondary/30">
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
                className="p-2 rounded-xl hover:bg-muted/50 transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
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
