"use client";

export function DotPattern({
  className = "",
  spacing = 24,
  radius = 1,
  opacity = 0.15,
}: {
  className?: string;
  spacing?: number;
  radius?: number;
  opacity?: number;
}) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={`dot-${spacing}-${radius}`}
          x="0"
          y="0"
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx={spacing / 2}
            cy={spacing / 2}
            r={radius}
            fill="currentColor"
            opacity={opacity}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#dot-${spacing}-${radius})`} />
    </svg>
  );
}
