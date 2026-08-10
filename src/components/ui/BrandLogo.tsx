import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export default function BrandLogo({ className = "", variant = "dark" }: BrandLogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}>
      {/* Brand Icon Mark */}
      <div className="relative flex items-center justify-center w-8 h-8 bg-black rounded-sm transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white"
        >
          {/* Minimalist Geometric B / Slash Identity */}
          <path
            d="M4 4H14C17.3137 4 20 6.68629 20 10C20 11.6569 19.3284 13.1569 18.2426 14.2426C17.1569 15.3284 15.6569 16 14 16H4V4Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          />
          {/* Signature Orange Accent Bar (#FE8301) */}
          <path
            d="M4 20H18"
            stroke="#FE8301"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <span className="font-heading font-extrabold text-xl tracking-tight leading-none">
        <span className={isLight ? "text-white" : "text-black"}>the</span>
        <span className={isLight ? "text-white" : "text-black"}>BLANC</span>
        <span className="text-[#FE8301]">MEDIA</span>
      </span>
    </Link>
  );
}
