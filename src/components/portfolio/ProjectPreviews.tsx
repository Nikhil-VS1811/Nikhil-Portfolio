import { Send, Sparkles, Code2, ShieldAlert, MapPin } from "lucide-react";

/**
 * Consistent presentation: each preview is a rounded "browser" frame with
 * a faux titlebar + URL pill, and the app UI rendered inside. Designed to
 * read well at small sizes (card hero).
 */
function Frame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div className="w-full h-full rounded-xl border border-border bg-background/80 backdrop-blur-sm shadow-xl shadow-black/20 overflow-hidden flex flex-col">
      {/* Titlebar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-border bg-muted/40">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        </div>
        <div className="flex-1 mx-2 px-2 py-0.5 rounded-md bg-background/60 border border-border/60 text-[9px] font-mono text-muted-foreground truncate text-center">
          {url}
        </div>
      </div>
      {/* App body */}
      <div className="flex-1 min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}

export function ChatPreview() {
  return (
    <Frame url="geetai.app/chat">
      <div className="h-full flex flex-col bg-gradient-to-b from-background to-muted/20">
        <div className="px-3 py-1.5 border-b border-border/60 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-400" strokeWidth={2} />
          <span className="text-[10px] font-medium text-foreground">GeetAI</span>
          <span className="ml-auto text-[8px] font-mono text-muted-foreground">mood · calm</span>
        </div>
        <div className="flex-1 px-3 py-2 space-y-1.5 overflow-hidden">
          <div className="flex justify-end">
            <div className="max-w-[75%] px-2 py-1 rounded-lg rounded-tr-sm bg-primary/15 border border-primary/20">
              <div className="h-1 w-20 bg-foreground/40 rounded-full" />
              <div className="h-1 w-14 bg-foreground/30 rounded-full mt-0.5" />
            </div>
          </div>
          <div className="flex">
            <div className="max-w-[80%] px-2 py-1 rounded-lg rounded-tl-sm bg-card border border-border">
              <div className="text-[8px] font-mono text-amber-400/80 mb-0.5">Gita 2.47</div>
              <div className="h-1 w-24 bg-foreground/30 rounded-full" />
              <div className="h-1 w-20 bg-foreground/20 rounded-full mt-0.5" />
              <div className="h-1 w-16 bg-foreground/20 rounded-full mt-0.5" />
            </div>
          </div>
        </div>
        <div className="px-2 py-1.5 border-t border-border/60 flex items-center gap-1.5">
          <div className="flex-1 h-5 rounded-md bg-muted/60 border border-border/60 flex items-center px-2">
            <span className="text-[8px] text-muted-foreground/70">Share what's on your mind…</span>
          </div>
          <div className="w-5 h-5 rounded-md bg-primary/90 flex items-center justify-center">
            <Send className="w-2.5 h-2.5 text-primary-foreground" strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function CodeReviewPreview() {
  return (
    <Frame url="ai-code-reviewer.app/review">
      <div className="h-full flex bg-gradient-to-b from-background to-muted/10">
        {/* Code panel */}
        <div className="w-[55%] border-r border-border/60 px-2 py-1.5 font-mono text-[8px] leading-[1.4] overflow-hidden">
          <div className="flex items-center gap-1 mb-1">
            <Code2 className="w-2.5 h-2.5 text-primary" strokeWidth={2} />
            <span className="text-muted-foreground">app.py</span>
          </div>
          {[
            { n: 1, w: 70, c: "text-foreground/70" },
            { n: 2, w: 85, c: "text-foreground/70" },
            { n: 3, w: 60, c: "text-red-400/80", hl: true },
            { n: 4, w: 78, c: "text-foreground/60" },
            { n: 5, w: 50, c: "text-foreground/60" },
            { n: 6, w: 90, c: "text-yellow-400/80", hl: true },
            { n: 7, w: 65, c: "text-foreground/60" },
          ].map((l) => (
            <div key={l.n} className={`flex items-center gap-1.5 px-1 rounded ${l.hl ? "bg-red-500/5" : ""}`}>
              <span className="text-muted-foreground/50 w-3 text-right">{l.n}</span>
              <span className={`h-[3px] rounded-full ${l.c.includes("red") ? "bg-red-400/60" : l.c.includes("yellow") ? "bg-yellow-400/60" : "bg-foreground/30"}`} style={{ width: `${l.w}%` }} />
            </div>
          ))}
        </div>
        {/* Issues panel */}
        <div className="flex-1 px-2 py-1.5 space-y-1">
          <div className="text-[8px] font-mono uppercase tracking-wide text-muted-foreground mb-1">3 issues</div>
          {[
            { sev: "high", color: "red", label: "SQL injection risk" },
            { sev: "med", color: "yellow", label: "Unused import" },
            { sev: "low", color: "blue", label: "Naming convention" },
          ].map((i) => (
            <div key={i.label} className="px-1.5 py-1 rounded-md bg-card border border-border/60">
              <div className="flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${i.color === "red" ? "bg-red-400" : i.color === "yellow" ? "bg-yellow-400" : "bg-blue-400"}`} />
                <span className="text-[8px] font-mono uppercase text-muted-foreground">{i.sev}</span>
              </div>
              <div className="text-[8px] text-foreground/80 mt-0.5">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function FraudPreview() {
  const bars = [30, 50, 25, 70, 45, 90, 40, 60, 35, 75, 55, 80];
  return (
    <Frame url="fraud-detection.app/dashboard">
      <div className="h-full flex flex-col bg-gradient-to-b from-background to-muted/10">
        <div className="px-3 py-1.5 border-b border-border/60 flex items-center gap-2">
          <ShieldAlert className="w-3 h-3 text-red-400" strokeWidth={2} />
          <span className="text-[9px] font-medium text-foreground">Risk Monitor</span>
          <span className="ml-auto text-[8px] font-mono text-muted-foreground">live</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 px-2 py-1.5 border-b border-border/40">
          {[
            { label: "flagged", value: "42", c: "text-red-400" },
            { label: "review", value: "18", c: "text-yellow-400" },
            { label: "cleared", value: "316", c: "text-emerald-400" },
          ].map((s) => (
            <div key={s.label} className="px-1.5 py-1 rounded-md bg-card border border-border/60">
              <div className="text-[8px] font-mono text-muted-foreground">{s.label}</div>
              <div className={`text-[11px] font-semibold leading-none mt-0.5 ${s.c}`}>{s.value}</div>
            </div>
          ))}
        </div>
        <div className="flex-1 px-2.5 py-2 flex flex-col">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-[8px] font-mono text-muted-foreground">risk score · 24h</span>
          </div>
          <div className="flex-1 flex items-end gap-1">
            {bars.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-sm bg-gradient-to-t ${h > 70 ? "from-red-500/80 to-red-400/30" : h > 50 ? "from-yellow-500/70 to-yellow-400/30" : "from-emerald-500/70 to-emerald-400/30"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function MapPreview() {
  return (
    <Frame url="feed-map-ai.vercel.app">
      <div className="h-full flex flex-col bg-gradient-to-b from-background to-muted/10">
        <div className="px-3 py-1.5 border-b border-border/60 flex items-center gap-2">
          <MapPin className="w-3 h-3 text-primary" strokeWidth={2} />
          <span className="text-[9px] font-medium text-foreground">FeedMap</span>
          <span className="ml-auto text-[8px] font-mono text-muted-foreground">128 reports</span>
        </div>
        <div className="flex-1 relative overflow-hidden">
          {/* faux map grid */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(var(--border)/0.5) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)/0.5) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          {/* pins */}
          {[
            { x: "20%", y: "30%", c: "bg-red-400" },
            { x: "55%", y: "45%", c: "bg-yellow-400" },
            { x: "70%", y: "25%", c: "bg-red-400" },
            { x: "35%", y: "65%", c: "bg-emerald-400" },
            { x: "78%", y: "70%", c: "bg-primary" },
            { x: "45%", y: "35%", c: "bg-emerald-400" },
          ].map((p, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${p.c} ring-2 ring-background shadow-md`}
              style={{ left: p.x, top: p.y }}
            />
          ))}
          {/* legend */}
          <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center gap-2 px-1.5 py-1 rounded-md bg-card/90 backdrop-blur border border-border/60">
            <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-400" /><span className="text-[8px] font-mono text-muted-foreground">urgent</span></div>
            <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400" /><span className="text-[8px] font-mono text-muted-foreground">infra</span></div>
            <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /><span className="text-[8px] font-mono text-muted-foreground">resolved</span></div>
          </div>
        </div>
      </div>
    </Frame>
  );
}