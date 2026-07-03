import { Send, Sparkles, Code2, ShieldAlert, MapPin, GitBranch, Activity, FileText, Workflow, Play, Database, Webhook, Bot } from "lucide-react";

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
    <Frame url="ai-code-reviewer.vercel.app/dashboard">
      <div className="h-full flex flex-col bg-gradient-to-b from-background to-muted/10">
        {/* Header bar */}
        <div className="px-3 py-1.5 border-b border-border/60 flex items-center gap-2">
          <Sparkles className="w-3 h-3 text-primary" strokeWidth={2} />
          <span className="text-[9px] font-medium text-foreground">AI Code Reviewer</span>
          <div className="ml-auto flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[7px] font-mono text-emerald-400">live</span>
          </div>
        </div>

        {/* Repo + health score */}
        <div className="px-2.5 py-1.5 border-b border-border/40 flex items-center gap-2">
          <GitBranch className="w-2.5 h-2.5 text-muted-foreground" strokeWidth={2} />
          <span className="text-[8px] font-mono text-foreground/80 truncate">Nikhil-VS1811/AI-Code-Reviewer</span>
          <div className="ml-auto flex items-center gap-1">
            <span className="text-[7px] font-mono text-muted-foreground">health</span>
            <span className="text-[10px] font-semibold text-emerald-400 leading-none">87</span>
          </div>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-1 px-2 py-1.5 border-b border-border/40">
          {[
            { label: "critical", value: "2", c: "text-red-400" },
            { label: "warnings", value: "11", c: "text-yellow-400" },
            { label: "passed", value: "94", c: "text-emerald-400" },
          ].map((s) => (
            <div key={s.label} className="px-1.5 py-1 rounded-md bg-card border border-border/60">
              <div className="text-[7px] font-mono uppercase tracking-wide text-muted-foreground">{s.label}</div>
              <div className={`text-[11px] font-semibold leading-none mt-0.5 ${s.c}`}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Body: code + findings */}
        <div className="flex-1 flex min-h-0">
          {/* Code panel */}
          <div className="w-[48%] border-r border-border/60 px-2 py-1.5 font-mono text-[8px] leading-[1.4] overflow-hidden">
            <div className="flex items-center gap-1 mb-1">
              <Code2 className="w-2.5 h-2.5 text-primary" strokeWidth={2} />
              <span className="text-muted-foreground">auth/login.py</span>
            </div>
            {[
              { n: 12, w: 70, c: "fg" },
              { n: 13, w: 85, c: "fg" },
              { n: 14, w: 60, c: "red", hl: true },
              { n: 15, w: 78, c: "fg" },
              { n: 16, w: 50, c: "fg" },
              { n: 17, w: 90, c: "yellow", hl: true },
              { n: 18, w: 65, c: "fg" },
            ].map((l) => (
              <div key={l.n} className={`flex items-center gap-1.5 px-1 rounded ${l.hl ? (l.c === "red" ? "bg-red-500/10" : "bg-yellow-500/10") : ""}`}>
                <span className="text-muted-foreground/50 w-3 text-right">{l.n}</span>
                <span
                  className={`h-[3px] rounded-full ${l.c === "red" ? "bg-red-400/70" : l.c === "yellow" ? "bg-yellow-400/70" : "bg-foreground/30"}`}
                  style={{ width: `${l.w}%` }}
                />
              </div>
            ))}
          </div>

          {/* Findings panel */}
          <div className="flex-1 px-2 py-1.5 space-y-1 overflow-hidden">
            <div className="flex items-center gap-1 mb-0.5">
              <ShieldAlert className="w-2.5 h-2.5 text-red-400" strokeWidth={2} />
              <span className="text-[7px] font-mono uppercase tracking-wide text-muted-foreground">findings</span>
            </div>
            {[
              { sev: "high", color: "red", label: "SQL injection risk" },
              { sev: "med", color: "yellow", label: "Hardcoded secret" },
              { sev: "low", color: "blue", label: "Naming convention" },
            ].map((i) => (
              <div key={i.label} className="px-1.5 py-1 rounded-md bg-card border border-border/60">
                <div className="flex items-center gap-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${i.color === "red" ? "bg-red-400" : i.color === "yellow" ? "bg-yellow-400" : "bg-blue-400"}`} />
                  <span className="text-[7px] font-mono uppercase text-muted-foreground">{i.sev}</span>
                </div>
                <div className="text-[8px] text-foreground/80 mt-0.5 leading-tight">{i.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer: analytics sparkline */}
        <div className="px-2.5 py-1.5 border-t border-border/60 flex items-center gap-2">
          <Activity className="w-2.5 h-2.5 text-primary" strokeWidth={2} />
          <span className="text-[7px] font-mono text-muted-foreground">7d reviews</span>
          <div className="flex-1 flex items-end gap-0.5 h-3.5">
            {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-primary/70 to-primary/20"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <FileText className="w-2.5 h-2.5 text-muted-foreground" strokeWidth={2} />
          <span className="text-[7px] font-mono text-muted-foreground">PDF</span>
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

export function WorkflowPreview() {
  const nodes = [
    { x: "6%", y: "22%", label: "Webhook", Icon: Webhook, tone: "primary" },
    { x: "36%", y: "12%", label: "GPT-4", Icon: Bot, tone: "emerald" },
    { x: "36%", y: "62%", label: "Postgres", Icon: Database, tone: "yellow" },
    { x: "68%", y: "38%", label: "Transform", Icon: Sparkles, tone: "primary" },
  ] as const;
  const toneClass = (t: string) =>
    t === "emerald"
      ? "text-emerald-400 border-emerald-500/40 bg-emerald-500/10"
      : t === "yellow"
      ? "text-yellow-400 border-yellow-500/40 bg-yellow-500/10"
      : "text-primary border-primary/40 bg-primary/10";
  return (
    <Frame url="workflow-builder.app/editor">
      <div className="h-full flex flex-col bg-gradient-to-b from-background to-muted/10">
        {/* Header */}
        <div className="px-3 py-1.5 border-b border-border/60 flex items-center gap-2">
          <Workflow className="w-3 h-3 text-primary" strokeWidth={2} />
          <span className="text-[9px] font-medium text-foreground">Workflow Builder</span>
          <div className="ml-auto flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[7px] font-mono text-emerald-400">running</span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="px-2.5 py-1 border-b border-border/40 flex items-center gap-2">
          <span className="text-[8px] font-mono text-foreground/80 truncate">flows / lead-qualifier · v3</span>
          <div className="ml-auto flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-primary/15 border border-primary/30">
            <Play className="w-2 h-2 text-primary" strokeWidth={2.5} />
            <span className="text-[7px] font-mono text-primary">execute</span>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 relative min-h-0 overflow-hidden">
          {/* dot grid */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, hsl(var(--border)/0.7) 1px, transparent 1px)",
              backgroundSize: "12px 12px",
            }}
          />

          {/* connector lines */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="wf-line" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path d="M14 26 C 24 26, 30 16, 40 16" stroke="url(#wf-line)" strokeWidth="0.6" fill="none" />
            <path d="M14 26 C 24 26, 30 66, 40 66" stroke="url(#wf-line)" strokeWidth="0.6" fill="none" />
            <path d="M50 16 C 60 16, 62 42, 72 42" stroke="url(#wf-line)" strokeWidth="0.6" fill="none" />
            <path d="M50 66 C 60 66, 62 42, 72 42" stroke="url(#wf-line)" strokeWidth="0.6" fill="none" />
          </svg>

          {/* nodes */}
          {nodes.map((n) => (
            <div
              key={n.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: n.x, top: n.y }}
            >
              <div className={`flex items-center gap-1 px-1.5 py-1 rounded-md border backdrop-blur-sm ${toneClass(n.tone)}`}>
                <n.Icon className="w-2.5 h-2.5" strokeWidth={2} />
                <span className="text-[8px] font-mono">{n.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer: execution log */}
        <div className="px-2.5 py-1.5 border-t border-border/60 flex items-center gap-2">
          <Activity className="w-2.5 h-2.5 text-primary" strokeWidth={2} />
          <span className="text-[7px] font-mono text-muted-foreground">logs</span>
          <span className="text-[7px] font-mono text-emerald-400">webhook → gpt-4 · 218ms</span>
          <span className="ml-auto text-[7px] font-mono text-muted-foreground">3 nodes · ok</span>
        </div>
      </div>
    </Frame>
  );
}