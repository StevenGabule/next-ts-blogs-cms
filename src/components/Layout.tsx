import Link from 'next/link';
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { start, done } from 'nprogress';

Router.events.on('routeChangeStart', () => start());
Router.events.on('routeChangeComplete', () => done());
Router.events.on('routeChangeError', () => done());

type Props = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => (
  <div className="root">
    <Head>
      <title>{title}</title>
      <meta name={'description'} content={'A site for my programming portfolio'} />
      <meta charSet={'utf-8'} />
      <meta name={'viewport'} content={'noindex, nofollow'} />
    </Head>
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/hireme">
        <a>Hire me</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
    </header>
    <h1>{title}</h1>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        font-size: 1.2em;
        background: indigo;
      }
      header a {
        color: darkgrey;
        text-decoration: none;
      }
      header a:hover {
        font-weight: bold;
        color: lightgrey;
      }
      footer {
        padding: 1em;
      }
    `}</style>
    <style global jsx>{`
      body {
        margin: 0;
        font-size: 110%;
        background: #f0f0f0;
      }
    `}</style>
  </div>
);

export default Layout;
