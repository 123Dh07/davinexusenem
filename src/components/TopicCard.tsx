import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Topic } from "@/data/enemData";
import { ParagraphModel } from "./ParagraphModel";
import { cn } from "@/lib/utils";

interface TopicCardProps {
  topic: Topic;
  index: number;
}

export function TopicCard({ topic, index }: TopicCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between p-4 rounded-xl text-left",
          "bg-secondary/60 border border-border/40 transition-all duration-300",
          "hover:border-primary/30 hover:bg-secondary/80",
          isOpen && "rounded-b-none border-primary/30"
        )}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-primary font-medium tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display font-semibold text-foreground text-sm sm:text-base">
            {topic.name}
          </h3>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-[11px] text-muted-foreground">
            {topic.repertoires.length}
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 text-muted-foreground transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </div>
      </button>

      {isOpen && (
        <div className="bg-secondary/40 border border-t-0 border-border/40 border-primary/30 rounded-b-xl px-4 pb-4 pt-3 space-y-4 animate-fade-in">
          {topic.repertoires.map((rep, i) => (
            <ParagraphModel key={i} repertoire={rep} />
          ))}
        </div>
      )}
    </div>
  );
}
