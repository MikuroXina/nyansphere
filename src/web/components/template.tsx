import type { FC, ReactNode } from "react";
import Head from "next/head";
import { InternalLink } from "./internal-link";

export const Template: FC<{ headerItems?: ReactNode[] }> = ({
  children,
  headerItems,
}) => (
  <>
    <Head>
      <title>Nyansphere</title>
    </Head>
    <header>
      <span className="title">
        <InternalLink href="/">Nyansphere</InternalLink>
      </span>
      {headerItems?.map((item, i) => (
        <span key={i}>{item}</span>
      ))}
    </header>
    <main>{children}</main>
    <style jsx>{`
      header {
        position: fixed;
        width: 100%;
        z-index: 5;
        padding: 0.2rem 1rem;
        box-shadow: #aaa 0px 4px 8px;
        background-color: white;
      }
      span {
        margin: 1rem;
      }
      main {
        position: absolute;
        top: 3rem;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: scroll;
      }
      .title {
        font-weight: bold;
        margin-right: 1rem;
      }
    `}</style>
    <style jsx global>{`
      html {
        overflow: hidden;
        box-sizing: border-box;
      }
      body {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </>
);
