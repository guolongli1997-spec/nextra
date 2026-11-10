import { ArrowRightIcon } from '@components/icons'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from 'nextra-theme-docs'
import { MdxIcon } from 'nextra/icons'
import docsCardDark from 'public/assets/card-1.dark.png'
import docsCard from 'public/assets/card-1.png'
import { Feature, Features } from './_components/features'
import { MotionDiv, MotionH3 } from './_components/framer-motion'
import { I18n } from './_components/i18n-demo'
import styles from './page.module.css'
import './page.css'
import type { FC } from 'react'

export const metadata: Metadata = {
  description:
    'Build fast, customizable, and content-rich websites with Nextra. Powered by Next.js, it offers seamless Markdown support, customizable themes, file conventions, and easy integration with MDX, making it perfect for documentation, blogs, and static websites.'
}

const IndexPage: FC = () => {
  return (
    <div className="home-content">
      <div className="content-container">
        <h1 className="headline">
          Make beautiful websites <br className="max-sm:hidden" />
          with Next.js & MDX
        </h1>
        <p className="subtitle">
          Simple, powerful and flexible site generation framework{' '}
          <br className="max-md:hidden" />
          with everything you love from{' '}
          <Link href="https://nextjs.org" className="text-current">
            Next.js
          </Link>
          .
        </p>
        <p  'radial-gradient(farthest-corner, #06080a, #e2e5ea)',
                    'radial-gradient(farthest-corner, #06080a, #e2e5ea)',
                    'radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)'
                  ]
                }}
                transition={{
                  backgroundPosition: {
                    times: [0, 0.5, 0.5, 1],
                    repeat: Infinity,
                    duration: 10,
                    delay: 1
                  },
                  backgroundImage: {
                    times: [0, 0.2, 0.8, 1],
                    repeat: Infinity,
                    duration: 10,
                    delay: 1
                  }
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage:
                    'radial-gradient(farthest-corner, #06080a, #e2e5ea)',
                  backgroundSize: '400% 400%',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              <MotionH3
                animate={{
                  color: ['#dae5ff', '#fff', '#fff', '#dae5ff']
                }}
                transition={{
                  color: {
                    times: [0.25, 0.35, 0.7, 0.8],
                    repeat: Infinity,
                    duration: 10,
                    delay: 1
                  }
                }}
                style={{
                  position: 'relative',
                  mixBlendMode: 'difference'
                }}
              >
                Dark <br />
                mode <br />
                included
              </MotionH3>
            </Feature>
            <Feature
              index={6}
              large
              id="search-card"
              href="/docs/docs-theme/theme-configuration#search"
            >
              <h3>
                Full-text search,
                <br />
                zero-config needed
              </h3>
              <p className="z-2">
                Nextra indexes your content automatically at build-time and
                performs incredibly fast full-text search via{' '}
                <Link href="https://github.com/cloudcannon/pagefind">
                  Pagefind
                </Link>
                .
              </p>
              <div className="absolute inset-0 z-1 size-full bg-[linear-gradient(to_right,white_250px,_transparent)] max-sm:hidden dark:bg-[linear-gradient(to_right,#202020_250px,_transparent)]" />
              <video
                autoPlay
                loop
                muted
                playsInline
                className="x:focus-visible:nextra-focus block dark:hidden"
              >
                <source src="/assets/search.mp4" type="video/mp4" />
              </video>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="x:focus-visible:nextra-focus hidden -translate-x-4 dark:block"
              >
                <source src="/assets/search-dark.mp4" type="video/mp4" />
              </video>
            </Feature>
            <Feature
              index={7}
              large
              id="fs-card"
              style={{
                color: 'white',
                backgroundImage:
                  'url(/assets/routing.png), url(/assets/gradient-bg.jpeg)',
                backgroundSize: '140%, 180%',
                backgroundPosition: '130px -8px, top',
                backgroundRepeat: 'no-repeat',
                textShadow: '0 1px 6px rgb(38 59 82 / 18%)',
                aspectRatio: '1.765'
              }}
              href="/docs/docs-theme/page-configuration"
            >
              <h3>
                Organize pages intuitively, <br />
                with file-system routing from Next.js
              </h3>
            </Feature>
            <Feature
              index={8}
              id="a11y-card"
              style={{
                backgroundSize: 750,
                backgroundRepeat: 'no-repeat',
                minHeight: 288
              }}
            >
              <h3>A11y as a top priority</h3>
              <p>
                Nextra respects system options <br className="show-on-mobile" />
                such as <b>Increase Contrast</b> and <b>Reduce Motion</b>.
              </p>
            </Feature>
            <Feature index={9} href="/docs/guide/ssg">
              <h3>
                Hybrid rendering, <br />
                next generation
              </h3>
              <p className="mr-6">
                You can leverage the hybrid rendering power from Next.js with
                your Markdown content including{' '}
                <Link href="https://nextjs.org/docs/app/building-your-application/rendering/server-components">
                  Server Components
                </Link>
                ,{' '}
                <Link href="https://nextjs.org/docs/app/building-your-application/rendering/client-components">
                  Client Components
                </Link>
                , and{' '}
                <Link href="https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration">
                  Incremental Static Regeneration (ISR)
                </Link>
                .
              </p>
            </Feature>
            <Feature index={10} large>
              <h3>And more...</h3>
              <p>
                SEO / RTL Layout / Pluggable Themes / Built-in Components / Last
                Git Edit Time / Multi-Docs...
                <br />A lot of new possibilities to be explored.
              </p>
              <p className="subtitle">
                <Link className="no-underline" href="/docs">
                  Start using Nextra →
                </Link>
              </p>
            </Feature>
          </Features>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
