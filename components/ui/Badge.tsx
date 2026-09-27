"use client";

interface BadgeProps {
  text: string;
  className?: string;
}

export default function Badge({ text, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-[#2A2A2E] bg-[#1C1C1F] px-3 py-1 text-xs font-medium text-[#78716C] transition-all duration-200 hover:border-[#3A3A3F] hover:text-[#A8A29E] ${className}`}
    >
      {text}
    </span>
  );
}
