import type { FC } from "react";
import Link from "next/link";

export const InternalLink: FC<{ href: string }> = ({ href, children }) => (
  <>
    <Link href={href}>
      <a>{children}</a>
    </Link>
    <style jsx>{`
      a {
        color: black;
        text-decoration: none;
      }
      a:hover {
        color: #555;
      }
    `}</style>
  </>
);
