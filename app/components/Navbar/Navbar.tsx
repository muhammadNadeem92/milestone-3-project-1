import React from 'react'
import Link from 'next/link'
import Style from './navbar.module.css'

const Navbar = () => {
  return (
    <div>
        <nav className={Style.nav}>
          <h2 className={Style.p}><Link href='/'>Muhammad<span className={Style.span}>Nadeem</span></Link></h2>
            <ul className={Style.ul}>
                <li className={Style.li}><Link href='/' className={Style.link}>Home</Link></li>
                <li className={Style.li}><Link href='/about' className={Style.link}>About</Link></li>
                <li className={Style.li}><Link href='contact' className={Style.link}>Contact</Link></li>
                <li className={Style.li}><Link href='skills' className={Style.link}>Skills</Link></li>
                <li className={Style.li}><Link href='projects' className={Style.link}>Projects</Link></li>
            </ul>
        </nav>
        
    </div>
  )
}

export default Navbar 