import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Topic } from "@/data/enemData";
import { RepertoireTable } from "./RepertoireTable";
import { cn } from "@/lib/utils";

interface TopicCardProps {
  topic: Topic;
  index: number;
}

export function TopicCard({ topic, index }: TopicCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border/40 overflow-hidden transition-all duration-300 hover:border-primary/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between p-4 text-left transition-colors",
          "hover:bg-secondary/50",
          isOpen && "bg-secondary/40 border-b border-border/30"
        )}
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <span className="font-mono text-xs text-primary font-bold tabular-nums">
              {index + 1}
            </span>
          </div>
          <h3 className="font-display font-semibold text-foreground text-sm sm:text-[15px]">
            {topic.name}
          </h3>
        </div>
        <div className="flex items-center gap-2 shrink-0 ml-2">
          <span className="text-[11px] text-muted-foreground font-medium px-2 py-0.5 rounded-full bg-muted/40">
            {topic.repertoires.length} repertórios
          </span>
          <ChevronRight
            className={cn(
              "w-4 h-4 text-muted-foreground transition-transform duration-300",
              isOpen && "rotate-90"
            )}
          />
        </div>
      </button>

      {isOpen && (
        <div className="animate-fade-in bg-secondary/20">
          <RepertoireTable repertoires={topic.repertoires} />
        </div>
      )}
    </div>
  );
}
