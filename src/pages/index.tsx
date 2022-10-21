import * as React from "react"
import type { HeadFC } from "gatsby"

type BigTitleProps = {
  children: React.ReactNode,
};
export const BigTitle = ({ children }: BigTitleProps) => (<h1 className="text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide">
  {children}
</h1>)

type SubtitleProps = {
  children: JSX.Element | string,
};
export const Subtitle = ({ children }: SubtitleProps) => (<h1 className="text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4">
  {children}
</h1>)

type ProjectCardProps = {
  title: string
  subtitle: string
  link: string
  gradientBg: string
}
const ProjectCard = ({ title, subtitle, link, gradientBg }: ProjectCardProps) => (
  <a href={link} target="_blank" rel="noopener noreferrer"
    className={`w-full block shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white hover:duration-200 hover:animate-pulse hover:-translate-y-6 ${gradientBg}`} >
    <div className="text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans">{title}</div>
    <div className="opacity-75 font-sans text-sm md:text-base">{subtitle}</div>
  </a>
)



const IndexPage = () => {
  return (
    <main className="w-full xl:h-screen p-12 md:p-24 lg:p-36 justify-center items-center flex z-50">
      <div className="w-full xl:w-2/3">
        <BigTitle>
          Hello, <br /> I'm Tsang Sze Chun.
        </BigTitle>
        <Subtitle>
          Android Developer. Blogger.😊
        </Subtitle>

        <div className="grid grid-rows-2 xl:grid-rows-1 xl:grid-cols-2 gap-4 mt-20">
          <ProjectCard
            title="GitHub"
            subtitle="A developer needs a Github to support him somewhere in his life."
            link="https://github.com/jacky-ttt/"
            gradientBg="bg-gradient-to-r from-blue-500 to-cyan-500" />
          <ProjectCard
            title="Medium"
            subtitle="I post articles on Medium now and then. Mostly about the dev I used in my work."
            link="https://jacky-ttt.medium.com/"
            gradientBg="bg-gradient-to-r from-violet-500 to-fuchsia-500" />
        </div>
      </div>

    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
