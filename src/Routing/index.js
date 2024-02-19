import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Teams from '../Pages/Teams';
import News from '../Pages/News';
import Projects from '../Pages/Projects';
const Routing = () => {
    return <div>
        <Routes>
            <Route path='/haqqımızda' element={<About/>}  />
            <Route path='/əlaqə' element={<Contacts/>}  />
            <Route path='/komandamız' element={<Teams/>}  />
            <Route path='/xəbərlər' element={<News/>}  />
            <Route path='/layihələr' element={<Projects/>}  />
            <Route path='/' exact element={<Home/>}  />

        </Routes>
    </div>;
}

export default Routing;