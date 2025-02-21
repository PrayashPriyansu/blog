"use client";

interface ILHProps {
  children: string;
  isClick?: boolean;
  isLink?: boolean;
}

export default function ILH({
  children,
  isClick = false,
  isLink = false,
}: ILHProps) {
  if (isLink) {
    return (
      <a
        href={children}
        target="_blank"
        rel="noopener noreferrer"
        className={`
            font-mono text-sm
            px-2 py-1
            rounded-md
            border
            transition-colors duration-200
           
            bg-slate-800
            text-white
            border-slate-500
            
            dark:bg-[#1f2937]
            dark:text-[#cbd5e1]
            dark:border-[#2d3748]
            
            hover:shadow-sm
            dark:hover:shadow-md
            ${isClick && "active:scale-95 cursor-pointer"}
          `}
      >
        {children}
      </a>
    );
  }

  return (
    <span
      onClick={() => isClick && navigator.clipboard.writeText(children)}
      className="
        font-mono text-sm
        px-2 py-1
        rounded-md
        border
        transition-colors duration-200
        cursor-pointer
        active:scale-95
        bg-[#f9fafb]
        text-[#111827]
        border-[#e5e7eb]
        
        dark:bg-[#1f2937]
        dark:text-[#cbd5e1]
        dark:border-[#2d3748]
        
        hover:shadow-sm
        dark:hover:shadow-md
      "
    >
      {children}
    </span>
  );
}
