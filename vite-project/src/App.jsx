import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import About from '../components/About'
import Value from '../components/Value'
import Blog from '../components/Blog'
import Story from '../components/Story'

import '../css/globals.css'

function App() {

  const [language, setLanguage] = useState('EN');
  function handleLanguage(selectedLanguage) {
    setLanguage(selectedLanguage)
  }

  return (
    <Header
      languageSetter={handleLanguage}
      lang={language}
    >
      <Footer lang={language}>
        <div className="main-wrapper">
          <Routes>
            <Route path='/' element={<Main lang={language} />}/>
            <Route path='/about' element={<About lang={language} />}/>
            <Route path='/value' element={<Value lang={language} />}/>
            <Route path='/blog' element={<Blog lang={language} />}/>
            <Route path='/story' element={<Story lang={language} />}/>
          </Routes>
        </div>
      </Footer>
    </Header>
  )
}

export default App
