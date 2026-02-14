export function TerminalBlock({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-foreground/20 bg-background">
      {title && (
        <div className="border-b border-foreground/20 px-4 py-2 text-[10px] uppercase tracking-widest text-foreground/40">
          {title}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-foreground/80">
        <code>{children}</code>
      </pre>
    </div>
  );
}
