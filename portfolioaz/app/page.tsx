import Header from '@/components/Header'
import Hero from '@/components/Hero'

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Alex Portfolio',
}

export default function Home() {
  return (
    <div>
        {/* Header */}
        <Header />

        {/* Hero  */}

        <section id='hero'>
          <Hero />

        </section>

        {/* About */}

        {/* Experience */}

        {/* Skills */}

        {/* Projects */}

        {/* Contact me */}
    </div>
  )
}