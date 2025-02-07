"use client";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

import { ReactNode } from "react";

interface AnimatedLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
}

function AnimatedLink({
  children,
  href,

  ...props
}: AnimatedLinkProps) {
  const router = useRouter();

  // function sleep(ms: number) {
  //   return new Promise((resolve) => {
  //     setTimeout(resolve, ms);
  //   });
  // }

  async function handletransition(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    e.preventDefault();

    // document.querySelector("body")?.classList.add("page-transition-out");

    document.startViewTransition(() => router.push(href));

    // await sleep(200);
    // router.push(href);
    // document.querySelector("body")?.classList.remove("page-transition-out");
    // document.querySelector("body")?.classList.add("page-transition-in");
    // await sleep(200);
    // document.querySelector("body")?.classList.remove("page-transition-in");
  }

  return (
    <Link href={href} onClick={(e) => handletransition(e)} {...props}>
      {children}
    </Link>
  );
}

export default AnimatedLink;
