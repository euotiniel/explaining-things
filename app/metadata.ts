import type { Metadata } from "next";

export const WEBSITE_HOST_URL = "https://explainingthings.com";
export const SITE_NAME = "Explaining Things";
export const SITE_TAGLINE = "Entendendo o que está por trás do cotidiano";

export const meta = {
  title: "Explaining Things — Entendendo o que está por trás do cotidiano",
  description:
    "Explaining Things é um projeto que busca entender o que está por trás do cotidiano. Ele analisa fenômenos comuns — luz, som, toque, movimento — de forma técnica, visual e interativa. A ideia é tornar o comum compreensível.",
  image: `${WEBSITE_HOST_URL}/opengraph-image.png`,
  favicon: "/favicon.ico",
  keywords: [
    // Termos principais
    "explaining things",
    "explicando coisas",
    "como as coisas funcionam",
    "ciência cotidiana",
    "engenharia do dia a dia",
    "curiosidades científicas",
    "fenômenos físicos explicados",
    "projeto educativo técnico",
    "educação visual e interativa",

    // Audiência e propósito
    "curiosos sobre tecnologia",
    "aprendizado técnico",
    "divulgação científica moderna",
    "educação digital",
    "ensino técnico interativo",
    "engenharia visual",
    "aprendizado prático",
    "educação maker",
    "física e design",
    "ciência explicada com design",

    // Referências
    "inspirado por irineu souto",
    "making software",
    "explicações técnicas visuais",
    "design educativo",
    "interface e curiosidade",
  ],
  author: "Otoniel Emanuel",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(WEBSITE_HOST_URL),

  title: {
    default: meta.title,
    template: `%s | ${SITE_NAME}`,
  },

  description: meta.description,
  keywords: meta.keywords,

  authors: [
    {
      name: meta.author,
      url: WEBSITE_HOST_URL,
    },
  ],

  creator: meta.author,
  publisher: meta.author,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: SITE_NAME,
    locale: "pt_AO",
    images: [
      {
        url: meta.image,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - ${SITE_TAGLINE}`,
        type: "image/png",
      },
      {
        url: `${WEBSITE_HOST_URL}/opengraph-image.png`,
        width: 1080,
        height: 1080,
        alt: `${SITE_NAME} - Logo`,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: [meta.image],
    creator: "@explainingthings",
    site: "@explainingthings",
  },

  // Canonical e alternativas
  alternates: {
    canonical: WEBSITE_HOST_URL,
    languages: {
      "pt-AO": WEBSITE_HOST_URL,
      pt: WEBSITE_HOST_URL,
      en: `${WEBSITE_HOST_URL}/en`,
    },
  },
};
