const SignalVisualization = () => {
  // Generate smooth pitch curve path
  const generateSignalPath = (yOffset: number, amplitude: number, frequency: number) => {
    const points = [];
    const width = 800;
    const segments = 100;
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width;
      const noise = Math.sin(i * 0.3) * 5 + Math.cos(i * 0.7) * 3;
      const y = yOffset + Math.sin((i / segments) * Math.PI * frequency) * amplitude + noise;
      points.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
    }
    
    return points.join(' ');
  };

  return (
    <div className="absolute inset-0 overflow-hidden opacity-60">
      <svg
        viewBox="0 0 800 300"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Grid lines */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="hsl(220 12% 14%)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Primary signal line - pitch stability */}
        <path
          d={generateSignalPath(150, 40, 2.5)}
          fill="none"
          stroke="hsl(175 35% 45%)"
          strokeWidth="2"
          className="signal-line"
          strokeLinecap="round"
        />
        
        {/* Secondary signal - amplitude envelope */}
        <path
          d={generateSignalPath(180, 20, 4)}
          fill="none"
          stroke="hsl(175 35% 45% / 0.3)"
          strokeWidth="1.5"
          className="signal-line signal-pulse"
          style={{ animationDelay: '1s' }}
          strokeLinecap="round"
        />
        
        {/* Tertiary signal - timing markers */}
        <path
          d={generateSignalPath(120, 15, 6)}
          fill="none"
          stroke="hsl(175 35% 45% / 0.2)"
          strokeWidth="1"
          className="signal-line"
          style={{ animationDelay: '2s' }}
          strokeLinecap="round"
        />
        
        {/* Measurement markers */}
        {[200, 400, 600].map((x, i) => (
          <g key={i} className="signal-pulse" style={{ animationDelay: `${i * 0.5}s` }}>
            <line
              x1={x}
              y1="100"
              x2={x}
              y2="200"
              stroke="hsl(175 35% 45% / 0.15)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <circle
              cx={x}
              cy="150"
              r="3"
              fill="hsl(175 35% 45% / 0.4)"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default SignalVisualization;
