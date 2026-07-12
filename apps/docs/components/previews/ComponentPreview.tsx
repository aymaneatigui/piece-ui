"use client";

import dynamic from "next/dynamic";

const previews: Record<string, React.ComponentType> = {
  "button": dynamic(() => import("./ButtonPreview")),
  "checkbox": dynamic(() => import("./CheckboxPreview")),
  "checkbox-group": dynamic(() => import("./CheckboxGroupPreview")),
  "chip-group": dynamic(() => import("./ChipGroupPreview")),
  "confirm-dialog": dynamic(() => import("./ConfirmDialogPreview")),
  "contact-form": dynamic(() => import("./ContactFormPreview")),
  "custom-btn": dynamic(() => import("./CustomBtnPreview")),
  "article-card": dynamic(() => import("./ArticleCardPreview")),
  "project-card": dynamic(() => import("./ProjectCardPreview")),
  "social-icon": dynamic(() => import("./SocialIconPreview")),
  "section-header": dynamic(() => import("./SectionHeaderPreview")),
  "section-wrapper": dynamic(() => import("./SectionWrapperPreview")),
  "menu-button": dynamic(() => import("./MenuButtonPreview")),
  "header": dynamic(() => import("./HeaderPreview")),
  "footer": dynamic(() => import("./FooterPreview")),
  "noise-background": dynamic(() => import("./NoiseBackgroundPreview")),
  "spotlight-reveal": dynamic(() => import("./SpotlightRevealPreview")),
  "line1": dynamic(() => import("./Line1Preview")),
  "line2": dynamic(() => import("./Line2Preview")),
};

// Renders the preview bare. ComponentShowcase owns the surrounding frame —
// wrapping it here too would draw a second border inside the first.
export default function ComponentPreview({ slug }: { slug: string }) {
  const Preview = previews[slug];
  if (!Preview) return null;

  return <Preview />;
}
