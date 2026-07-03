import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[96px] w-full rounded-xl border border-border bg-card/40 backdrop-blur-md px-4 py-3 text-sm text-foreground leading-relaxed",
          "shadow-[0_1px_0_0_color-mix(in_oklab,white_4%,transparent)_inset]",
          "transition-[border-color,background-color,box-shadow] duration-200 ease-out",
          "placeholder:text-muted-foreground/70",
          "hover:border-border/90 hover:bg-card/60",
          "focus-visible:outline-none focus-visible:border-primary/60 focus-visible:bg-card/70 focus-visible:ring-4 focus-visible:ring-primary/10",
          "disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
