"use client";

import { useState } from "react";

interface ILHProps {
  children: string;
  copyable?: boolean;
  isLink?: boolean;
}

export default function ILH({
  children,
  copyable = false,
  isLink = false,
}: ILHProps) {
  const [copied, setCopied] = useState(false);

  const baseStyles = `
    font-mono text-sm
    px-2 py-1
    rounded-md
    border
    transition-all duration-200
    hover:shadow-sm
    dark:hover:shadow-md
  `;

  const linkStyles = `
    ${baseStyles}
    bg-slate-800 text-white border-slate-500
    dark:bg-[#1f2937] dark:text-[#cbd5e1] dark:border-[#2d3748]
    cursor-pointer
  `;

  const copyableStyles = `
    ${baseStyles}
    bg-[#f9fafb] text-[#111827] border-[#e5e7eb]
    dark:bg-[#1f2937] dark:text-[#cbd5e1] dark:border-[#2d3748]
    ${copied ? "cursor-default" : "cursor-pointer active:scale-95"}
  `;

  const staticStyles = `
    ${baseStyles}
    bg-[#f9fafb] text-[#111827] cursor-text border-[#e5e7eb]
    dark:bg-[#1f2937] dark:text-[#cbd5e1] dark:border-[#2d3748]
    cursor-default
  `;

  const handleCopy = async () => {
    if (!copyable) return;

    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  if (isLink) {
    return (
      <a
        href={children}
        target="_blank"
        rel="noopener noreferrer"
        className={linkStyles}
        aria-label={`Open ${children} in new tab`}
      >
        {children}
      </a>
    );
  }

  return copyable ? (
    <button
      type="button"
      onClick={handleCopy}
      className={copyableStyles}
      aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
      disabled={copied}
    >
      {copied ? "Copied!" : children}
    </button>
  ) : (
    <span className={staticStyles}>{children}</span>
  );
}
