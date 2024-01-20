import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import { Pixelify_Sans } from 'next/font/google'

const pixelfy = Pixelify_Sans({ subsets: ["latin"] })

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className={`text-5xl ${pixelfy.className}`}>{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl">{children}</h4>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}