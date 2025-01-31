import React from 'react'
import Header from './components/Header/Header'
import AboutPage from './about/page'
import Projects from './projects/page'
import Skills from './skills/page'
import Contact from './contact/page'

const HomePage = () => {
  return (
    <div>
         
            <Header/>
            <AboutPage/>
            <Projects/>
            <Skills />
            <Contact />
    </div>
  )
}

export default HomePage       