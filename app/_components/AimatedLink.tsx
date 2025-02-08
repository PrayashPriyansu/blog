"use client";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { ReactNode } from "react";

interface Props extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
}

function AnimeLink({
  children,
  href,
  target = "_self",
  rel = "",
  ...props
}: Props) {
  const router = useRouter();

  function sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  async function handletransition(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    e.preventDefault();

    // document.startViewTransition(() => router.push(href));

    document.querySelector("body")?.classList.add("page-transition-out");

    await sleep(500);
    router.push(href);
    document.querySelector("body")?.classList.remove("page-transition-out");
    document.querySelector("body")?.classList.add("page-transition-in");
    await sleep(500);
    document.querySelector("body")?.classList.remove("page-transition-in");
  }

  console.log(props);

  if (target === "_blank")
    return (
      <Link href={href} target={target} rel={rel} {...props}>
        {children}
      </Link>
    );

  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      onClick={(e) => handletransition(e)}
      {...props}
    >
      {children}
    </Link>
  );
}

export default AnimeLink;
