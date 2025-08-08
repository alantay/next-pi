import type { MDXComponents } from "mdx/types";
import { ComponentPropsWithoutRef } from "react";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type UnorderedListProps = ComponentPropsWithoutRef<"ol">;

const mdxComponents = {
  h1: (props: HeadingProps) => {
    return <h1 className="mb-2 font-sans text-3xl font-medium" {...props} />;
  },
  h2: (props: HeadingProps) => (
    <h2
      className="text-heading mt-[1.75em] mb-[0.75em] text-2xl font-bold"
      {...props}
    />
  ),
  p: (props: ParagraphProps) => <p className="mb-4" {...props} />,
  ul: (props: UnorderedListProps) => (
    <ol className="list-disc pl-6 [&>li]:mb-3" {...props} />
  ),
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
