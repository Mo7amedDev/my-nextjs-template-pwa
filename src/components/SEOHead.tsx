"use client";
import Head from "next/head";
import { useParams, usePathname } from "next/navigation";

export default function SEOHead() {
  const pathname = usePathname();
  const { locale } = useParams() as { locale: string };
  const baseUrl = "https://your-saas.com";
  const locales = ["en", "fr", "es", "ar"];

  return (
    <Head>
      {locales.map((loc) => (
        <link
          key={loc}
          rel="alternate"
          hrefLang={loc}
          href={`${baseUrl}/${loc}${pathname}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${pathname}`} />
    </Head>
  );
}
