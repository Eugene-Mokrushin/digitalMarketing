import React, { useEffect } from 'react'
import '../css/value.css'
import data from '../data/value'

export default function Value({ lang }) {

  useEffect(() => {
    const elements = document.querySelectorAll('.hiddenB')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('shownB')
        } else {
          entry.target.classList.remove('shownB')
        }
      })
    })
    elements.forEach((el) => observer.observe(el))
  }, [lang])

  function handleEnter(e) {
    e.target.closest('.block').classList.add('flipped')
  }

  function handleLeave(e) {
    e.target.closest('.block').classList.remove('flipped')
  }

  const cards = data[lang].values.map((value, index) => {
    return (
      <div
        className="block hiddenB"
        key={index + " " + value}
        onMouseEnter={e => handleEnter(e)}
        onMouseLeave={e => handleLeave(e)}
      >
        <div className="front">
          {value}
        </div>
        <div className="back">

          {data[lang].explains[index]}
        </div>
      </div>
    )
  })

  return (
    <main className='mainValue'>
      <div className="title">{data[lang].mainTitle}</div>
      <div className="blocks">
        {cards}
      </div>
    </main>
  )
}
