import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  showArrow = true,
  className = "",
  onClick,
  type = "button"
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-heading font-semibold transition-all duration-300 rounded-xs group cursor-pointer tracking-tight";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3.5 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5"
  };

  const variantStyles = {
    primary: "bg-[#FE8301] text-white hover:bg-[#E57400] shadow-sm hover:shadow-md",
    secondary: "bg-white text-black border border-neutral-300 hover:border-black hover:bg-neutral-50",
    outline: "bg-transparent text-black border border-black hover:bg-black hover:text-white",
    text: "bg-transparent text-black hover:text-[#FE8301] px-0 py-0"
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {content}
    </button>
  );
}
