export function DotLeader({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-baseline w-full text-sm uppercase tracking-wider gap-2">
      <span className="shrink-0 text-foreground/70">{label}</span>
      <span className="flex-1 border-b border-dotted border-foreground/20 mb-1.5" />
      <span className="shrink-0 text-accent font-medium font-mono">{value}</span>
    </div>
  );
}
