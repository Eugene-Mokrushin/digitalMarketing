import React, { useEffect } from 'react'

import data from '../data/main'
import '../css/main.css'

export default function Main({ lang }) {

    useEffect(() => {
        const elements = document.querySelectorAll('.hidden')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('shown')
                } else {
                    entry.target.classList.remove('shown')
                }
            })
        })
        elements.forEach((el) => observer.observe(el))
    }, [])

    return (
        <main className='main-wrapper'>
            <section className='encouragement hidden'>
                <p className="title1">{data[lang].title1}</p>
                <p className="title2">{data[lang].title2}</p>
                <p className="subtitle">{data[lang].subtitle}</p>
                <div className="buttons">
                    <div className="button1">{data[lang].button1}</div>
                    <div className="button2">{data[lang].button2}</div>
                </div>
                <div className="manySubs">
                    <img src="./Dot.svg" alt="dot" className="dot" />
                    <span className="num">1000+</span>
                    <p className="text">{data[lang].text}</p>
                </div>
            </section>
            <section className='whyLove hidden'>
                <div className="title">{data[lang].titleLove}</div>
                <div className="reasons">
                    <div className="reason">
                        <div className="text">{data[lang].title1Love}</div>
                        <div className="sub">{data[lang].subTitle1Love}</div>
                    </div>
                    <div className="reason">
                        <div className="text">{data[lang].title2Love}</div>
                        <div className="sub">{data[lang].subTitle2Love}</div>
                    </div>
                    <div className="reason">
                        <div className="text">{data[lang].title3Love}</div>
                        <div className="sub">{data[lang].subTitle3Love}</div>
                    </div>
                </div>
            </section>
            <section className='firstStep hidden'>
                <div className="titleNum">{data[lang].step1}</div>
                <div className="titleFirstStep">{data[lang].s1Title}</div>
                <div className="descrFirstStep">{data[lang].s1subTitle}</div>
                <div className="buttonFirstStep">{data[lang].s1button}</div>
                <div className="firstStepDetails">
                    <div className="descr">
                        <div className="what">{data[lang].whatIsTitle}</div>
                        <div className="title">
                            {data[lang].s1WhatIsTitle1}
                        </div>
                        <div className="title2">
                            {data[lang].s1WhatIsTitle2}
                            <span className="spot">{data[lang].spot}</span>
                        </div>
                        <ul>
                            <li>{data[lang].bul1}</li>
                            <li>{data[lang].bul2}</li>
                        </ul>
                        <div className="buttons">
                            <div className="fb">{data[lang].step1B1}</div>
                            <div className="sb">{data[lang].step1B2}</div>
                        </div>
                    </div>
                    <div className="photo">
                        <img src="./page.png" alt="homepage demo" />
                    </div>
                </div>
            </section>
            <section className='secondStep hidden'>
                <div className="step">{data[lang].step2}</div>
                <div className="title">{data[lang].s2Title}</div>
                <div className="subTitle">{data[lang].subTitleS2}</div>
                <div className="blocks">
                    <div className="block">
                        <div className="headline">{data[lang].s2Block1Title}</div>
                        <div className="title1">{data[lang].s2Block1Title2}</div>
                        <div className="title2">{data[lang].s2Block1SubTitle2}</div>
                        <img src="./Mobile.svg" alt="mobile" />
                    </div>
                    <div className="block">
                        <div className="headline">{data[lang].s2Block2Title}</div>
                        <div className="title1">{data[lang].s2Block2Title2}</div>
                        <div className="title2">{data[lang].s2Block2SubTitle2}</div>
                    </div>
                </div>
                <div className="button">
                    {data[lang].s2Button}
                </div>
            </section>
            <section className='thirdStep hidden'>
                <div className="step">{data[lang].step3}</div>
                <div className="title">{data[lang].s3Title}</div>
                <div className="subtitle">{data[lang].s3SubTitle}</div>
                <div className="blocks">
                    <div className="block">
                        <div className="headline">{data[lang].s3headline}</div>
                        <div className="title1">{data[lang].s3BlockTitle1}</div>
                        <div className="title2">{data[lang].s3BlockTitle2}
                            <span>{data[lang].s3Span}</span>
                        </div>
                        <ul>
                            <li>{data[lang].s3bul1}</li>
                            <li>{data[lang].s3bul2}</li>
                        </ul>
                        <div className="btns">
                            <div className="fb">{data[lang].s3b1}</div>
                            <div className="sb">{data[lang].s3b2}</div>
                        </div>
                    </div>
                    <div className="block">
                        <img src="./jobs.png" alt="jobs" />
                    </div>
                </div>
            </section>
            <section className='manyCreators hidden' style={{ backgroundImage: "url(./manyusers.png)" }}>
                <span>{data[lang].manyUsers}</span>
            </section>
            <section className='finish hidden'>
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
