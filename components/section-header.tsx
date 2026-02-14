export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <div className="bg-accent text-background px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] inline-block">
        {title}
      </div>
      {subtitle && (
        <p className="mt-3 text-sm uppercase tracking-wider text-foreground/50">
          {subtitle}
        </p>
      )}
      <div className="mt-4 h-px bg-foreground/20" />
    </div>
  );
}
