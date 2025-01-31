import React from 'react'
import Image from 'next/image'
import Style from '@/app/about/about.module.css'

const AboutPage = () => {
  return (
    <div className={Style.maindiv} >
      <div className={Style.div} >
        <div className={Style.imgDiv}>
            <Image src={'/images/profileP.png'} alt='profile_image' width={400} height={450} className={Style.img}/>
        </div>
        <section className={Style.sec}>
            <h3 className={Style.h3}>About <span className={Style.span}>Me</span></h3>
            <h2 className={Style.h2}>Frontend <span className={Style.span2}>Developer</span></h2>
            <p className={Style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit similique quibusdam ad porro distinctio, ipsa inventore dicta. Suscipit quisquam at possimus quis obcaecati sunt, eos exercitationem nisi laudantium, beatae amet?</p>

            <button className={Style.button}>Porject</button>
          </section>
        </div>
    </div>
  )
}

export default AboutPage