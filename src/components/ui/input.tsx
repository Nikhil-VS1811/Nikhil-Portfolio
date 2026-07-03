import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-xl border border-border bg-card/40 backdrop-blur-md px-4 py-2 text-sm text-foreground",
          "shadow-[0_1px_0_0_color-mix(in_oklab,white_4%,transparent)_inset]",
          "transition-[border-color,background-color,box-shadow] duration-200 ease-out",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          "placeholder:text-muted-foreground/70",
          "hover:border-border/90 hover:bg-card/60",
          "focus-visible:outline-none focus-visible:border-primary/60 focus-visible:bg-card/70 focus-visible:ring-4 focus-visible:ring-primary/10",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
