import Features from '@/components/Home/Features'
import Hero from '@/components/Home/Hero'
import React from 'react'
import CTA from '@/components/Home/CTA'
function page() {
  return (
    <div>
      <Hero/>
      <Features/>
      <CTA/>
    </div>
  )
}

export default page