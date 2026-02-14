export function CornerAnnotation({
  text,
  position = "top-left",
}: {
  text: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <span
      className={`absolute ${positionClasses[position]} text-[10px] uppercase tracking-widest text-foreground/30 font-mono`}
    >
      {text}
    </span>
  );
}
