import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

import Programming from './pages/activities/programming'
import HokutosaiTennzi from './pages/activities/hokutosai_tennzi'
import Model3D from './pages/activities/3d-modeling'
import Design from './pages/activities/design'
import Meeting from './pages/activities/meeting'
import Study from './pages/activities/study'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/activities/programming" element={<Programming />} />
        <Route path="/activities/hokutosai-tennzi" element={<HokutosaiTennzi />} />
        <Route path="/activities/3d-modeling" element={<Model3D />} />
        <Route path="/activities/design" element={<Design />} />
        <Route path="/activities/meeting" element={<Meeting />} />
        <Route path="/activities/study" element={<Study />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
