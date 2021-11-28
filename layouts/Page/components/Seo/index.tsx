import Head from "next/head";
import React from "react";

export function Seo(props: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@codecoolture" />
        <meta name="twitter:site" content="@codecoolture" />
      </Head>

      {props.children}
    </>
  );
}

Seo.Title = function SeoTitle(props: { children: string }) {
  return (
    <Head>
      <meta property="og:title" content={props.children} />
      <meta name="twitter:title" content={props.children} />

      <title>{props.children}</title>
    </Head>
  );
};

Seo.Description = function SeoDescription(props: { children: string }) {
  return (
    <Head>
      <meta property="og:description" content={props.children} />
      <meta name="twitter:description" content={props.children} />
      <meta name="description" content={props.children} />
    </Head>
  );
};

Seo.Image = function SeoImage(props: { children: string }) {
  return (
    <Head>
      <meta property="og:image" content={props.children} />
      <meta name="twitter:image" content={props.children} />
    </Head>
  );
};

Seo.Url = function SeoUrl(props: { children: string }) {
  return (
    <Head>
      <meta property="og:url" content={props.children} />
    </Head>
  );
};
