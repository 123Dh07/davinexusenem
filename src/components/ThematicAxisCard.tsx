import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
    <div
      className={cn(
        "glass-card-hover overflow-hidden opacity-0 animate-fade-in"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
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
        <ChevronDown
          className={cn(
            "w-6 h-6 text-muted-foreground transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-6 space-y-3 animate-fade-in">
          {axis.topics.map((topic, i) => (
            <TopicCard key={i} topic={topic} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
