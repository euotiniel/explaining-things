import { Metadata } from "next";
import { notFound } from "next/navigation";
import { components } from "@/config/post";
import Link from "next/link";
import Image from "next/image";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = components.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Postagem não encontrada",
      description: "A postagem que procura não foi encontrado.",
    };
  }

  return {
    title: post.title,
    description: `Leia "${post.title}" em...`,
    openGraph: {
      title: post.title,
      description: `Leia "${post.title}" em...`,
      siteName: "explaining-things",
      locale: "pt-PT",
      type: "article",
      images: [
        {
          url: post?.image.src || "",
          width: 1200,
          height: 630,
          alt: post?.image.alt || "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = components.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const PostComponent = post.component;

  return (
    <main className="border border-double border-[#333333]/10 mt-10">
      <article className="flex w-full flex-col">
        <header className="flex items-end justify-between border-b border-[#333333]/10 py-6 md:py-10 px-2.5 md:px-6 ">
        <div className="flex flex-col items-center justify-center w-full gap-5">
          <span className="text-xs font-departure-mono uppercase">
          Outubro 15, 2025
        </span>
            <h1 className="text-2xl md:text-3xl font-semibold uppercase leading-tight text-center">
            {post.title}
          </h1>
          <p className="text-base md:text-xl max-w-full leading-relaxed text-center">
            {post.description} </p>
            
        </div>

        </header>
        <div className="my-10 md:my-28 px-2.5 md:px-6 ">
          <PostComponent />
        </div>
      </article>
    </main>
  );
}
