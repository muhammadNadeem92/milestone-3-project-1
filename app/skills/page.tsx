import React from 'react'
import Style from '@/app/skills/skills.module.css'
import Image from 'next/image'

const skills = () => {
  return (
    <div className={Style.maindiv}>
        <h2 className={Style.h2}>MY SKILLS</h2>
        <section className={Style.sec}>
        <div className={Style.div1}><h3 className={Style.h3}>Next.js</h3>
          <Image src={"/images/nextjs.webp"} alt='' width={170} height={100} className={Style.image}/>
        </div>
        <div className={Style.div2}><h3 className={Style.h3}>Typescript</h3>
        <Image src={"/images/ts.png"} alt='' width={110} height={100}className={Style.image2}/>

        </div>
        <div className={Style.div3}><h3 className={Style.h3}>HTML</h3>
        <Image src={"/images/html.jpg"} alt='' width={150} height={150} className={Style.image1}/>

        </div>
        <div className={Style.div4}><h3 className={Style.h3}>CSS</h3>
        <Image src={"/images/CSS-Logo.png"} alt='' width={200} height={150} className={Style.image0}/>

        </div>
        <div className={Style.div5}><h3 className={Style.h3}>Tailwind css</h3>
        <Image src={"/images/tailwind css.webp"} alt='' width={170} height={150} className={Style.image}/>

        </div>
        <div className={Style.div6}><h3 className={Style.h3}>Shadcn</h3>
        <Image src={"/images/shadcn.webp"} alt='' width={170} height={150} className={Style.image}/>

        </div>
        <div className={Style.div7}><h3 className={Style.h3}>React.js</h3>
        <Image src={"/images/react-js.svg"} alt='' width={100} height={100}className={Style.image2}/>

        </div>
        <div className={Style.div8}><h3 className={Style.h3}>Javascript</h3>
        <Image src={"/images/javascript.png"} alt='' width={100} height={120}className={Style.image2}/>

        </div>
        </section>

    </div>
  )
}

export default skills