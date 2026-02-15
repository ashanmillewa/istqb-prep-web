import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Clock } from "lucide-react";

interface ExamTimerProps {
  durationSeconds: number;
  onTimeUp: () => void;
  isActive: boolean;
}

export function ExamTimer({ durationSeconds, onTimeUp, isActive }: ExamTimerProps) {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isActive, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = (timeLeft / durationSeconds) * 100;

  return (
    <div className="flex items-center gap-4 bg-card border rounded-lg px-4 py-2 shadow-sm">
      <Clock className="w-4 h-4 text-muted-foreground" />
      <span className={`font-mono font-medium tabular-nums ${timeLeft < 60 ? "text-destructive" : "text-foreground"}`}>
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </span>
      <Progress value={progress} className="w-24 h-2" />
    </div>
  );
}
