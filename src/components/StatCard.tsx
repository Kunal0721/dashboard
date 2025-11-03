import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";
import CountUp from "./ui/CountUp";

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  isPositive?: boolean;
  variant?: "default" | "primary";
  className?: string;
  symbol?: string;
}

export function StatCard({
  title,
  value,
  change,
  isPositive = true,
  variant = "default",
  className,
}: StatCardProps) {
  return (
    <Card
      className={cn(
        "transition-all border h-full",
        variant === "primary" &&
        "bg-blue-50 dark:bg-[hsl(201,100%,94%)] dark:text-black",
        variant === "default" && "bg-muted/30 dark:bg-slate-900/50",
        className
      )}
    >
      <CardContent className="p-4 md:p-6">
        <p className={cn("text-xs md:text-sm font-medium mb-2 md:mb-3",
          variant === "primary" ? "text-foreground dark:text-black" : "text-foreground"
        )}>
          {title}
        </p>
        <div className="flex items-end justify-between">
          <h3 className={cn("text-2xl md:text-3xl font-bold tracking-tight",
            variant === "primary" ? "dark:text-black" : ""
          )}>
            <CountUp from={0} to={typeof value === 'number' ? value : parseFloat(value)} separator="," direction="up" duration={1} className="count-up-text" />
          </h3>
          <div
            className={cn("flex items-center gap-0.5 md:gap-1 text-xs md:text-sm font-medium",
              variant === "primary" ? "dark:text-black" : ""
            )}
          >
            {change}
            {isPositive ? (
              <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
            ) : (
              <TrendingDown className="h-3 w-3 md:h-4 md:w-4" />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
