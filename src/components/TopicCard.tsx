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
      className="glass-card-hover overflow-hidden"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display font-semibold text-foreground">
            {topic.name}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground">
            {topic.repertoires.length} repertórios
          </span>
          <ChevronDown
            className={cn(
              "w-5 h-5 text-muted-foreground transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </div>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 space-y-3 animate-fade-in">
          {topic.repertoires.map((rep, i) => (
            <ParagraphModel key={i} repertoire={rep} />
          ))}
        </div>
      )}
    </div>
  );
}
