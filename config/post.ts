import { Posts } from "@/posts/index";

export type PostItem = {
  id: number,
  title: string;
  description: string;
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
    id: 1,
    title: "Ciência por trás das escadas",
    description:
      "Explorando os princípios científicos que tornam as escadas seguras e funcionais.",
    slug: "stairs",
    component: Posts["stairs"],
    image: {
      url: "https://www.instagram.com/",
      src: "/posts/stairs.svg",
      alt: "Alt - Stairs",
    },
  },
 
];