import React from 'react'
import Welcome from '../component/welcome'
import About from '../page/about'
import Proud from '../page/proud'
import Service from '../page/service'
import Doctor3 from '../page/doctor3'
import Cardid from './cardid'
function Home() {
    return (
        <div className='container'>
            <Welcome />
            <About />
            <Proud />
            <Service />
            <Doctor3 />
            <Cardid/>
        </div>
    )
}
export default Home;