import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import CodeBlock from "./app/_components/contentComponents/CodeBlock";
import ILH from "./app/_components/contentComponents/InLineHighlight";

// Common utility types
// type WithChildren<T = {}> = T & { children?: React.ReactNode };
type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type CodeProps = ComponentPropsWithoutRef<"code">;

const baseText =
  "break-words whitespace-pre-wrap text-gray-800 dark:text-gray-200";

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className="text-3xl font-bold pt-12 mb-4 text-gray-900 dark:text-gray-100 fade-in"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-gray-100"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-xl font-medium mt-6 mb-3 text-gray-900 dark:text-gray-100"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <h4
      className="text-lg font-medium mt-5 mb-2 text-gray-900 dark:text-gray-100"
      {...props}
    />
  ),

  p: (props: ParagraphProps) => (
    <p className={`leading-relaxed ${baseText}`} {...props} />
  ),

  ol: (props: ListProps) => (
    <ol className={`list-decimal pl-6 space-y-1 ${baseText}`} {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className={`list-disc pl-6 space-y-2 ${baseText}`} {...props} />
  ),
  li: (props: ListItemProps) => (
    <li className={`pl-1 ${baseText}`} {...props} />
  ),

  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong
      className="font-semibold text-gray-900 dark:text-gray-100"
      {...props}
    />
  ),

  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2 transition";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },

  blockquote: (props: BlockquoteProps) => (
    <blockquote className="ml-4 border-l-4 border-gray-500 italic bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-3 pl-4 rounded-md">
      {props.children}
    </blockquote>
  ),

  code: ({ children, className, ...props }: CodeProps) => {
    const match = className?.match(/language-(\w+)/);
    const language = match ? match[1] : undefined;
    return (
      <CodeBlock
        code={String(children).trim()}
        language={language}
        {...props}
      />
    );
  },

  ILH: ({
    children,
    isCopyable,
    isLink,
  }: {
    children: string;
    isCopyable?: boolean;
    isLink?: boolean;
  }) => (
    <ILH isLink={isLink} copyable={isCopyable}>
      {children}
    </ILH>
  ),

  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            {data.headers.map((header, i) => (
              <th key={i} className="border p-2 text-left dark:border-gray-600">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border p-2 dark:border-gray-600">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(
  custom: Partial<MDXProvidedComponents>
): MDXProvidedComponents {
  return { ...components, ...custom };
}
