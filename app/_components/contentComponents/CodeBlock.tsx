"use client";

import { Clipboard } from "lucide-react";
import { useState } from "react";
import ShikiHighlighter from "react-shiki";

interface CodeBlockProps {
  code: string;
  language?: string;
}

function CodeBlock({ code, language, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000); // Reset after 2s
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  }

  return (
    <div className="relative">
      <ShikiHighlighter
        language={language || "javascript"}
        className="code-block"
        theme="ayu-dark"
        showLanguage={false}
        addDefaultStyles={true}
        as="div"
        style={{
          textAlign: "left",
        }}
        {...props}
      >
        {code.trim()}
      </ShikiHighlighter>
      <div className="absolute right-2 top-1/2 -translate-y-1/2  flex items-center">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-stone-200  duration-200 rounded-md shadow-sm hover:bg-gray-100 hover:text-gray-700 transition"
        >
          {copied ? "Copied!" : ""}
          <Clipboard className="w-4 h-4" />
        </button>
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
