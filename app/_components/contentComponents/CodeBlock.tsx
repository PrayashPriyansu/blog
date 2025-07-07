"use client";

import { Clipboard, Check } from "lucide-react";
import { useState } from "react";
import ShikiHighlighter from "react-shiki";

interface CodeBlockProps {
  code: string;
  language?: string;
}

function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="relative rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 shadow-md overflow-hidden group">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 text-xs font-medium bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
        <span className="uppercase tracking-wide">{language}</span>
        <button
          onClick={handleCopy}
          aria-label="Copy code"
          className="flex items-center gap-1 px-2 py-1 bg-gray-800 text-gray-100 rounded-md hover:bg-gray-700 transition"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              Copied
            </>
          ) : (
            <>
              <Clipboard className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Highlighted Code */}
      <div className="overflow-x-auto">
        <ShikiHighlighter
          language={language}
          theme="ayu-dark"
          showLanguage={false} // We show it in header instead
          addDefaultStyles
          as="div"
          className="text-sm font-mono p-4 min-w-full"
          style={{ textAlign: "left" }}
        >
          {code.trim()}
        </ShikiHighlighter>
      </div>
    </div>
  );
}

export default CodeBlock;

// "use client";

// import { codeToHtml } from "shiki";
// import { ComponentPropsWithoutRef, useEffect, useState } from "react";

// interface CodeBlockProps extends ComponentPropsWithoutRef<"code"> {
//   language?: string;
//   theme?: string;
//   code: string;
// }

// function CodeBlock({ code, language, theme, ...props }: CodeBlockProps) {
//   const [highlightedHTML, setHighlightedHTML] = useState<string | null>(null);

//   useEffect(() => {
//     async function highlightCode() {
//       try {
//         console.log(language);
//         const highlighted = await codeToHtml(code, {
//           lang: language || "javascript",
//           theme: theme || "vitesse-dark",
//         });
//         setHighlightedHTML(highlighted);
//       } catch (error) {
//         console.error("Error highlighting code:", error);
//         setHighlightedHTML(code); // Fallback to plain code
//       }
//     }

//     highlightCode();
//   }, [code, language, theme]);

//   return (
//     <pre className="overflow-x-auto ">
//       {highlightedHTML === null ? (
//         <code {...props}>Loading...</code>
//       ) : (
//         <code
//           dangerouslySetInnerHTML={{ __html: highlightedHTML }}
//           {...props}
//         />
//       )}
//     </pre>
//   );
// }

// export default CodeBlock;
