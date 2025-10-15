import { Posts } from "@/posts/index";

export type PostItem = {
  title: string;
  slug: keyof typeof Posts;
  component: (typeof Posts)[keyof typeof Posts];
  image: {
    src: string;
    url: string;
    alt: string;
  };
};

export const components: PostItem[] = [
  {
    title: "Ciência por trás das escadas",
    slug: "stairs",
    component: Posts["stairs"],
    image: {
      url: "https://www.instagram.com/",
      src: "/posts/stairs.svg",
      alt: "Alt - Stairs",
    },
  },
 
];