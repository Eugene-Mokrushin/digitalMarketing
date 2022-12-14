import { useState } from 'react'

import Header from '../components/Header'

import '../css/globals.css'

function App() {

  const [lang, setLang] = useState('EN')

  function changeLang(lang) {
    lang === "EN" ? setLang("DE") : setLang("EN")
  }

  return (
    <Header
      handleLanguage={changeLang}
      lang={lang}
    >
      <div className="main-wrapper">

      </div>
    </Header>
  )
}

export default App
