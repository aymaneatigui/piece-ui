import type { Meta, StoryObj } from "@storybook/react";
import { useMotionValue } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const meta = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProject = {
  title: "AtiguiSolutions Portfolio",
  description:
    "A modern portfolio and CMS built with Next.js 15, Tailwind CSS v4, and Prisma. Features an admin dashboard for managing projects, articles, and services.",
  tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
  imageUrl: "https://picsum.photos/seed/project/1311/652",
  liveUrl: "https://example.com",
  githubUrl: "https://github.com",
  dribbbleUrl: "https://dribbble.com",
  caseStudyUrl: "/projects/portfolio",
};

// Wrapper to provide a MotionValue for the story
function ProjectCardDemo({ project = sampleProject }: { project?: typeof sampleProject }) {
  const progress = useMotionValue(0);
  return (
    <div className="relative min-h-screen bg-[#0d0d0d] p-6">
      <ProjectCard
        index={0}
        totalCards={3}
        project={project}
        progress={progress}
        targetScale={0.9}
        stickyTop="top-6"
      />
    </div>
  );
}

export const Default: Story = {
  render: () => <ProjectCardDemo />,
};

export const NoImage: Story = {
  render: () => (
    <ProjectCardDemo
      project={{ ...sampleProject, imageUrl: undefined }}
    />
  ),
};

export const MinimalLinks: Story = {
  render: () => (
    <ProjectCardDemo
      project={{
        ...sampleProject,
        dribbbleUrl: undefined,
        caseStudyUrl: undefined,
      }}
    />
  ),
};
