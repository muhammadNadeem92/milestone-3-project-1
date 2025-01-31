import Image from 'next/image'
import React from 'react'
import Style from './header.module.css'

const Header = () => {
  return (
    <div>
        <div className={Style.mainDiv}>
            <div className={Style.textDiv}>
                <p className={Style.p}>Hi !</p>
                <h3 className={Style.h3}>I'm<span className={Style.span}> Muhammad Nadeem </span>
                 <br />
                a Frontend Developer</h3>
                <br /><br />
               
                <button className={Style.button}>Hire Me </button>
                <button className={Style.button2}>Experiences</button>
                

            </div>
            <div className={Style.imgDiv}>
            <Image src={'/images/profileP.png'} alt='image' width={400} height={400} className={Style.Img} />
            </div>
            
        </div>
    </div>
  )
}

export default Header