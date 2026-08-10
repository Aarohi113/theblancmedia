import Badge from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightedWord?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  isHero?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlightedWord,
  description,
  align = "left",
  light = false,
  isHero = false,
  className = ""
}: SectionHeaderProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";
  
  // Render title with selective orange word highlight (#FE8301)
  const renderTitle = () => {
    if (!highlightedWord || !title.includes(highlightedWord)) {
      return title;
    }

    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className="text-[#FE8301]">{highlightedWord}</span>
        {parts[1]}
      </>
    );
  };

  const HeadingTag = isHero ? "h1" : "h2";

  const headingSize = isHero
    ? "text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.08]"
    : "text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15]";

  return (
    <div className={`flex flex-col ${alignClasses} max-w-4xl ${className}`}>
      {badge && <Badge text={badge} className="mb-4" />}

      <HeadingTag
        className={`font-heading tracking-tight ${headingSize} ${
          light ? "text-white" : "text-black"
        }`}
      >
        {renderTitle()}
      </HeadingTag>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg lg:text-xl leading-relaxed font-medium ${
            light ? "text-neutral-300" : "text-neutral-600"
          } ${align === "center" ? "max-w-2xl" : "max-w-2xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
