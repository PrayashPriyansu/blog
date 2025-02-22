import Link from "next/link";
import React, { ComponentPropsWithoutRef } from "react";
import CodeBlock from "./app/_components/contentComponents/CodeBlock";
import ILH from "./app/_components/contentComponents/InLineHighlight";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;
type CodeProps = ComponentPropsWithoutRef<"code">;

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className="text-gray-900 dark:text-gray-100 font-bold text-3xl pt-12 mb-4 fade-in"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-gray-900 dark:text-gray-100 font-semibold text-2xl mt-8 mb-4"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-gray-900 dark:text-gray-100 font-medium text-xl mt-6 mb-3"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="font-medium text-lg mt-5 mb-2" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p
      className="text-gray-800 dark:text-gray-200 leading-relaxed break-words whitespace-pre-wrap"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol
      className="text-gray-800 dark:text-gray-200 list-decimal pl-6  break-words whitespace-pre-wrap"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-gray-800 dark:text-gray-200 list-disc pl-6 space-y-2 break-words whitespace-pre-wrap"
      {...props}
    />
  ),
  li: (props: ListItemProps) => (
    <li className="pl-1 break-words whitespace-pre-wrap" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em
      className="italic font-medium break-words whitespace-pre-wrap"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong
      className="font-semibold text-gray-900 dark:text-gray-100"
      {...props}
    />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = "text-blue-500 hover:text-blue-700 transition";
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
    <blockquote className="ml-4 flex items-center justify-center border-l-4 border-gray-500  italic text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 p-3 pl-4 rounded-md">
      {props.children}
    </blockquote>
  ),
  code: ({ children, className, ...props }: CodeProps) => {
    const match = className?.match(/language-(\w+)/);
    const language = match ? match[1] : undefined;
    return <CodeBlock code={String(children)} language={language} {...props} />;
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
      <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            {data.headers.map((header, index) => (
              <th
                key={index}
                className="border border-gray-300 dark:border-gray-600 p-2 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border border-gray-300 dark:border-gray-600 p-2"
                >
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
  otherComponents: MDXProvidedComponents
): MDXProvidedComponents {
  return { ...components, ...otherComponents };
}
