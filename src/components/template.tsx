import Head from "next/head";
import type { FC, ReactNode } from "react";

export const Template: FC<{ headerItem?: ReactNode }> = ({
  children,
  headerItem,
}) => (
  <>
    <Head>
      <title>Nyansphere</title>
    </Head>
    <header>
      <span className="title">Nyansphere</span>
      {headerItem}
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
      main {
        position: absolute;
        top: 3rem;
        left: 0;
        right: 0;
        bottom: 0;
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
