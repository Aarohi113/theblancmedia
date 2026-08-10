interface BadgeProps {
  text: string;
  className?: string;
}

export default function Badge({ text, className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 bg-[#F4F4F4] text-black text-xs font-semibold uppercase tracking-wider border border-neutral-200/80 rounded-xs ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-[#FE8301]"></span>
      {text}
    </span>
  );
}
