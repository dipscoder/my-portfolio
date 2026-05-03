import type { MDXComponents } from 'mdx/types';

// `@next/mdx` looks for this file at the project root to register
// components used inside MDX content. We use the host page's CSS for
// styling, so we just pass through.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components };
}
