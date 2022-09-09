import React, { FC } from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Users from './pages/Users/Users'
import AddNews from './pages/AddNews'
import News from './pages/News'

const App: FC = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/users" element={<Users />} />
          <Route path="/addNews" element={<AddNews />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
