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
    <main className="flex flex-col items-center justify-center py-16 md:py-24 lg:py-16 px-4 md:px-6">
      <article className="flex w-full max-w-[540px] flex-col">
        <header className="flex flex-col items-center justify-center gap-6 mb-8 md:mb-12">
          <h1 className="text-md font-semibold text-neutral-200">
            {post.title}
          </h1>
          <div className="relative w-full h-52">
            <Image
              src={post.image.src}
              alt={post.image.alt || post.title}
              fill
              priority
              className="object-cover rounded-md brightness-[0.7]"
              placeholder="blur"
              blurDataURL="/placeholder.jpg"
              sizes="(max-width: 640px) 100vw, 540px"
            />
          </div>
        </header>

        <div className="flex items-center justify-center prose prose-invert max-w-none prose-sm md:prose-base">
          <PostComponent />
        </div>
      </article>
    </main>
  );
}
