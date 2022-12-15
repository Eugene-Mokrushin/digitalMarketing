import React, { useEffect } from 'react'
import data from '../data/about'

import '../css/about.css'

export default function About({ lang }) {

    useEffect(() => {
        const elements = document.querySelectorAll('.ptext')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('shownP')
                } else {
                    entry.target.classList.remove('shownP')
                }
            })
        })
        elements.forEach((el) => observer.observe(el))
    }, [])

    return (
        <main className='main'>
            <div className="mainText">
                <p className="ptext">{data[lang].p1}</p>
                <p className="ptext">{data[lang].p2}</p>
                <p className="ptext">{data[lang].p3}</p>
                <p className="ptext">{data[lang].p4}</p>
                <p className="ptext">{data[lang].p5}</p>
                <p className="ptext">{data[lang].p6}</p>
                <p className='propt'>{data[lang].propt}</p>
            </div>
            <div className="team">
                <div className="titleO">{data[lang].our}</div>
                <div className="title">{data[lang].we}</div>
                <div className="we">
                    <div className="block">
                        <div className="imgWrapper">
                            <img src="./eugene.jpg" alt="Eugene Mokrushin" />
                        </div>
                        <div className="name">{data[lang].eugene}</div>
                        <div className="position">{data[lang].etitle}</div>
                        <div className="twitter"><a href="">{data.twitter}</a></div>
                    </div>
                    <div className="block">
                        <div className="imgWrapper">
                            <img src="./nicolas.jpeg" alt="Nicolas Azar" />
                        </div>
                        <div className="name">{data[lang].nicola}</div>
                        <div className="position">{data[lang].ntitle}</div>
                        <div className="twitter"><a href="">{data.twitter}</a></div>
                    </div>
                </div>
            </div>
            <section className='finish'>
                <img src="./logo.png" alt="logo" />
                <div className="title">{data[lang].finishTitle}</div>
                <div className="subtitle">{data[lang].finishSub}</div>
                <div className="btn">{data[lang].finishBtn}</div>
                <div className="poeple">
                    <img src="./Dot.svg" alt="dot" />
                    <span className="num">{data[lang].finishNum1}</span>
                    <span className="textnum">{data[lang].finishNum2}</span>
                </div>
            </section>
        </main>
    )
}
