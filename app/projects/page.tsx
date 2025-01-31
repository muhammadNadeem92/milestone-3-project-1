import React from 'react'
import Style from '@/app/projects/project.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <div>
              <h2 className={Style.h2}>PROJECTS</h2>

    <div className={Style.maindiv}>
   

      <div className={Style.pro1}>
       <Image src={"/images/project-1.png"} alt='custom css project ' width={400} height={350}  className={Style.image}/>
       <h3 className={Style.h3}>Simple Multiple Pages Website</h3>
       <p className={Style.p}>in which i use next.js and custom css</p>
       <button className={Style.button}><Link href='https://next-js-assigments.vercel.app/' target='_blank'  >View Project</Link></button>
      </div>
      <div className={Style.pro2}>
      <Image src={"/images/project-2.png"} alt='data fetch ' width={400} height={350} className={Style.image} />
       <h3 className={Style.h3}>API Data Fetching Assignment</h3>
       <p className={Style.p}>in which I fetch data an external API</p>
       <button className={Style.button}><Link href='https://class-assignment-07-alpha.vercel.app/' target='_blank'  >View Project</Link></button>
      </div>
      <div className={Style.pro3}>
      <Image src={"/images/project-3.png"} alt='blog assignmnet' width={400} height={350} className={Style.image} />
       <h3 className={Style.h3}>Blog Assignment</h3>
       <p className={Style.p}>in which I use next.js ,tailwind css,and sanity CMS  </p>
       <button className={Style.button}><Link href='https://class-assignment-08-8nuz.vercel.app/' target='_blank'  >View Project</Link></button>
      </div>
      <div className={Style.pro4}>
      <Image src={"/images/project-4.png"} alt='ui hackathon' width={400} height={350}  className={Style.image}/>
      <h3 className={Style.h3}>E-Commerce Website UI</h3>
      <p className={Style.p}>This e commerce website I created during the Hackathon</p>
      <button className={Style.button}><Link href='https://ui-hackathon-drab.vercel.app/' target='_blank' >View Project</Link></button>
      </div>
    </div>
    </div>
  )
}

export default Projects