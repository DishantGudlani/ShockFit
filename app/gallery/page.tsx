import { AnimatedTestimonialsDemo } from '@/components/animated-testimonials'
import Tsparticles from '@/components/Tsparticles'
import React from 'react'

const page = () => {
  return (
    <div style={{ overflow: 'hidden', height: '100vh' }}>
      <Tsparticles />
      <AnimatedTestimonialsDemo /> 
    </div>
  )
}

export default page
