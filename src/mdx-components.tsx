import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className={`text-5xl font-bold whitespace-pre`}>{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl whitespace-pre">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl whitespace-pre">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl whitespace-pre">{children}</h4>,
    p: ({ children }) => <p className="whitespace-pre">{children}</p>,
    img: (props) => (
      <Image
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}