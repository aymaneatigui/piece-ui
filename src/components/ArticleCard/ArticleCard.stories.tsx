import type { Meta, StoryObj } from "@storybook/react";
import { ArticleCard } from "./ArticleCard";

const meta = {
  title: "Components/ArticleCard",
  component: ArticleCard,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleArticle = {
  id: "1",
  slug: "building-with-tailwind-v4",
  title: "Building Modern UIs with Tailwind CSS v4",
  description: "A deep dive into the new features and improvements in Tailwind CSS v4, including the new Vite plugin and CSS-first configuration.",
  coverImage: "https://picsum.photos/seed/article/640/360",
  publishedAt: new Date("2026-01-15"),
  tags: [{ tag: { name: "Tailwind" } }, { tag: { name: "CSS" } }],
};

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <ArticleCard article={sampleArticle} />
    </div>
  ),
};

export const NoCoverImage: Story = {
  render: () => (
    <div className="w-72">
      <ArticleCard
        article={{ ...sampleArticle, coverImage: null }}
      />
    </div>
  ),
};

export const NoTags: Story = {
  render: () => (
    <div className="w-72">
      <ArticleCard
        article={{ ...sampleArticle, tags: [] }}
      />
    </div>
  ),
};

export const Grid: Story = {
  render: () => (
    <div className="grid w-[900px] grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <ArticleCard
          key={i}
          article={{
            ...sampleArticle,
            id: String(i),
            title: `Article ${i}: ${sampleArticle.title}`,
            coverImage: `https://picsum.photos/seed/article${i}/640/360`,
          }}
        />
      ))}
    </div>
  ),
};
