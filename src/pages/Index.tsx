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
              We turn invisible vocal skills into measurable, trainable signals.
            </h1>
            
            <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
              A learning platform for singers and teachers who want real control — not vague advice.
            </p>
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
              <p className="text-foreground font-medium">Practice without insight</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Singers practice daily but don't know what is actually improving.
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-foreground font-medium">Delayed feedback</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Teachers cannot give real-time feedback between sessions.
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-foreground font-medium">Scoring over skill</p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Existing apps score outcomes but don't teach control.
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
            What Voxlabs does differently
          </h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <span className="text-primary font-mono text-sm mt-1">01</span>
              <p className="text-foreground text-lg">
                Measures pitch stability together with loudness and timing.
              </p>
            </div>
            
            <div className="h-px bg-border" />
            
            <div className="flex gap-6 items-start">
              <span className="text-primary font-mono text-sm mt-1">02</span>
              <p className="text-foreground text-lg">
                Gradually removes reference tones to build internal hearing.
              </p>
            </div>
            
            <div className="h-px bg-border" />
            
            <div className="flex gap-6 items-start">
              <span className="text-primary font-mono text-sm mt-1">03</span>
              <p className="text-foreground text-lg">
                Focuses on control signals, not performance scoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Is Hard */}
      <section className="py-24 border-t border-border">
        <div className="container max-w-4xl px-6">
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-8">
            The Challenge
          </p>
          
          <div className="max-w-2xl space-y-6">
            <p className="text-text-secondary leading-relaxed">
              Vocal learning is difficult because pitch, loudness, breath, and timing interact non-linearly.
            </p>
            
            <p className="text-text-secondary leading-relaxed">
              Most tools simplify the problem.
            </p>
            
            <p className="text-foreground font-medium">
              Voxlabs models the underlying control behaviour instead.
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
              <p className="text-foreground font-medium">Music teachers & trainers</p>
              <p className="text-text-tertiary text-sm">
                Who need objective tools
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-foreground font-medium">Choirs & programs</p>
              <p className="text-text-tertiary text-sm">
                With structured learning environments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-24 border-t border-border">
        <div className="container max-w-4xl px-6">
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-8">
            Status
          </p>
          
          <div className="max-w-2xl space-y-6">
            <p className="text-foreground text-lg">
              Voxlabs is currently in private MVP testing.
            </p>
            
            <p className="text-text-secondary leading-relaxed">
              We are working closely with early users and educators.
            </p>
            
            <div className="pt-4">
              <a 
                href="mailto:hello@voxlabs.co"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                hello@voxlabs.co
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
                href="mailto:hello@voxlabs.co"
                className="text-text-secondary hover:text-foreground transition-colors text-sm"
              >
                hello@voxlabs.co
              </a>
              <p className="text-text-tertiary text-sm">
                Built in India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
