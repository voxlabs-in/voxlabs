import SignalVisualization from "@/components/SignalVisualization";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <SignalVisualization />
        
        <div className="relative z-10 container max-w-4xl px-6 py-24">
          <div className="space-y-8">
            <p className="text-primary font-mono text-sm tracking-widest uppercase">
              Voxlabs
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
              Turn Invisible Vocal Skills Into Measurable Mastery
            </h1>
            
            <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
              A research-driven platform that quantifies the biomechanics of singing — so serious learners and teachers can drive real improvement.
            </p>
            
            <div className="pt-4">
              <a 
                href="mailto:founder@voxlabs.in?subject=Private%20Testing%20Interest"
                className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors font-medium rounded"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Email for Private Testing
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 border-t border-border">
        <div className="container max-w-4xl px-6">
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-8">
            The Problem
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <p className="text-foreground font-medium">Blind practice</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Most singers practice daily without knowing what actually improves.
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-foreground font-medium">Gaps between sessions</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Teachers lack a way to monitor progress between sessions.
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-foreground font-medium">Scores without insight</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Current tools score outcomes but don't explain why or how improvement happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Voxlabs Does Differently */}
      <section className="py-24 border-t border-border bg-card">
        <div className="container max-w-4xl px-6">
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-8">
            Our Approach
          </p>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-12 max-w-2xl">
            What Voxlabs Does Differently
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <span className="text-primary font-mono text-sm mt-1">01</span>
              <div>
                <p className="text-foreground text-lg font-medium mb-1">
                  Measures pitch with context
                </p>
                <p className="text-text-secondary">
                  We model pitch stability relative to loudness and breath.
                </p>
              </div>
            </div>
            
            <div className="h-px bg-border" />
            
            <div className="flex gap-6 items-start">
              <span className="text-primary font-mono text-sm mt-1">02</span>
              <div>
                <p className="text-foreground text-lg font-medium mb-1">
                  Builds internal hearing
                </p>
                <p className="text-text-secondary">
                  Reference tones fade intentionally so singers rely on their own auditory feedback.
                </p>
              </div>
            </div>
            
            <div className="h-px bg-border" />
            
            <div className="flex gap-6 items-start">
              <span className="text-primary font-mono text-sm mt-1">03</span>
              <div>
                <p className="text-foreground text-lg font-medium mb-1">
                  Quantifies control, not performance
                </p>
                <p className="text-text-secondary">
                  We track motor-control signals (timing, sustain, stability), not social metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vocal Learning Is Hard */}
      <section className="py-24 border-t border-border">
        <div className="container max-w-4xl px-6">
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-8">
            The Challenge
          </p>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 max-w-2xl">
            Why Vocal Learning Is Hard
          </h2>
          
          <div className="max-w-2xl space-y-6">
            <p className="text-text-secondary leading-relaxed">
              Pitch, loudness, breath, and timing are interdependent. Existing tools score inputs without modeling the control system behind them.
            </p>
            
            <p className="text-foreground font-medium">
              Voxlabs models that system instead.
            </p>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 border-t border-border bg-card">
        <div className="container max-w-4xl px-6">
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-8">
            Who It's For
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="text-foreground font-medium">Serious vocal learners</p>
              <p className="text-text-tertiary text-sm">
                Who want measurable progress
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-foreground font-medium">Music educators & coaches</p>
              <p className="text-text-tertiary text-sm">
                Who need objective tools
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-foreground font-medium">Choirs & structured programs</p>
              <p className="text-text-tertiary text-sm">
                With learning environments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-24 border-t border-border">
        <div className="container max-w-4xl px-6">
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-8">
            Current Status
          </p>
          
          <div className="max-w-2xl space-y-6">
            <p className="text-foreground text-lg">
              We're in private MVP testing with early users and educators.
            </p>
            
            <div className="pt-2">
              <a 
                href="mailto:founder@voxlabs.in"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                founder@voxlabs.in
                <span className="text-primary/50">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container max-w-4xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <p className="text-foreground font-medium">Voxlabs</p>
              <p className="text-text-tertiary text-sm">
                Built by engineers and musicians.
              </p>
            </div>
            
            <div className="flex flex-col md:items-end gap-2">
              <a 
                href="mailto:founder@voxlabs.in"
                className="text-text-secondary hover:text-foreground transition-colors text-sm"
              >
                founder@voxlabs.in
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <div style="margin-top:40px; font-size:12px; opacity:0.7; text-align:center;">
  VoxLabs is a product of OORGA LLP.
</div>

  );
};

export default Index;
