import Link from 'next/link'
import React from 'react'


const About = () => {


  return (
    <div className='hover:underline'>
      <Link href='/about/me'>
      <h1 className='font-mono hover:underline'>
        About me
      </h1>
      </Link>
      <Link href='/about/user'>
      <h1 className='font-mono hover:underline'>
        Lihat User
      </h1>
      </Link>


    
    </div>
    
    
  )
}

export default About