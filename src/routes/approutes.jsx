import React from 'react'
import Home from "../page/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homelayout from '../layouts/homelayout'
import Dashlayout from '../layouts/dashlayout'
import About from "../page/about"
import Contact from "../page/contact"
import Notfound from '../component/not-found'
import Login from '../page/login'
import Service from '../page/service'
import Doctor from '../page/doctor'
const Approutes = () => {
    
    return (
        <Router>
            <Routes>
                {/*home routes*/}
                <Route path="/" element={<Homelayout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>\
                    <Route path="/login" element={<Login />}/>
                    <Route path="/service" element={<Service />}/>
                    <Route path="/doctor" element={<Doctor />}/>
                    <Route path="/*" element={<Notfound />}/>
                </Route>
                      {/*dashlayout routes*/}
                <Route path="/dashlayout" element={<Dashlayout />}>
                    <Route index element={<dash />} />
                </Route>

            </Routes>
        </Router>
    )
}

export default Approutes
