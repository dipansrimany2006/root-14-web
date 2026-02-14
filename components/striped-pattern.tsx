"use client";

export function StripedPattern({
  className = "",
  spacing = 40,
  strokeWidth = 0.5,
  opacity = 0.08,
  angle = -45,
}: {
  className?: string;
  spacing?: number;
  strokeWidth?: number;
  opacity?: number;
  angle?: number;
}) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={`stripe-${spacing}-${angle}`}
          x="0"
          y="0"
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
          patternTransform={`rotate(${angle})`}
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2={spacing}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            opacity={opacity}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#stripe-${spacing}-${angle})`} />
    </svg>
  );
}
