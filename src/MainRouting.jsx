import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home Page/Home'
import Blog from './components/Blog/Blog'
import Dehradun from './components/dehradun/Routing'
import Dwarka from './components/dwarka/Routing'
import Faridabad from './components/faridabad/Routing'
import Ghaziabad from './components/ghaziabad/Routing'
import Jasola from './components/jasola/Routing'
import Pitampura from './components/pitampura/Routing'
import Tagore from './components/tagore/Routing'
import PageNotFound from './components/PageNotFound/PageNotFound'


function MainRouting() {

  return (
    <>
      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pacificmalls.in' element={<Home />} />
          <Route path='/the-mall-of-faridabad/*' element={<Faridabad />} />
          <Route path='/tagore-garden/*' element={<Tagore />} />
          <Route path='/dehradun/*' element={<Dehradun />} />
          <Route path='/dwarka/*' element={<Dwarka />} />
          <Route path='/nsp-pitampura/*' element={<Pitampura />} />
          <Route path='/jasola/*' element={<Jasola />} />
          <Route path='/ghaziabad/*' element={<Ghaziabad />} />
          <Route path='/blog' element={<Blog />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </Router>
    </>
  )
}

export default MainRouting