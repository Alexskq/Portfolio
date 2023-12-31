import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from  '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import Image from 'next/image'
// import type { GetStaticProps } from 'next'
// import { Experience, PageInfo, Project, Skill, Social } from "../typings"
// import { fetchExperiences } from '@/utils/fetchExperiences'
// import { fetchPageInfos } from '@/utils/fetchPageInfo'
// import { fetchProjects } from '@/utils/fetchProjects'
// import { fetchSkills } from '@/utils/fetchSkills'
// import { fetchSocials } from '@/utils/fetchSocials'

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Alex Portfolio',
}

export default function Home() {
  
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {/* Header */}
        <Header />

        {/* Hero  */}

        <section id='hero' className='snap-start'>
          <Hero />

        </section>

        {/* About */}
        <section id="about" className='snap-center'>
          <About />
        </section>

        {/* Experience */}
        <section id="experience" className='snap-center'>
          <WorkExperience />
        </section>

        {/* Skills */}
        <section id='skills' className='snap-start'>
          <Skills />

        </section>

        {/* Projects */}
        <section id='projects' className='snap-start'>
          <Projects />
        </section>

        {/* Contact me */}
        <section id='contact' className='snap-start'>
          <ContactMe />
        </section>

        <Link href="#hero">
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className='flex items-center justify-center'>
              <Image
                alt="footer"
                src="/profil picture.jpg"
                width={400}
                height={400}
                className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
              />
            </div>
          </footer>
        </Link>
    </div>
  )
}

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const pageInfo: PageInfo = await fetchPageInfos();
//   const experiences: Experience[] = await fetchExperiences();
//   const skills: Skill[] = await fetchSkills();
//   const projects: Project[] = await fetchProjects();
//   const socials: Social[]  = await fetchSocials();  

//   return {
//     props: {
//       pageInfo,
//       experiences,
//       skills,
//       projects,
//       socials
//     }
//   }
// }