import React, { useEffect } from 'react'
import data from '../data/story'
import '../css/story.css'
export default function Story({ lang }) {

    useEffect(() => {
        const elements = document.querySelectorAll('.textTimeLine')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('shownTime')
                } else {
                    entry.target.classList.remove('shownTime')
                }
            })
        })
        elements.forEach((el) => observer.observe(el))
    }, [lang])

    return (
        <main className='mainStory'>
            <section className="timeline">
                <ul>
                    <li>
                        <div className="textTimeLine">
                            {data[lang].t1}
                        </div>
                    </li>
                    <li>
                        <div className="textTimeLine">
                            {data[lang].t2}
                        </div>
                    </li>
                    <li>
                        <div className="textTimeLine">
                            {data[lang].t3}
                        </div>
                    </li>
                    <li>
                        <div className="textTimeLine">
                            {data[lang].t4}
                        </div>
                    </li>
                    <li>
                        <div className="textTimeLine">
                            {data[lang].t5}
                        </div>
                    </li>
                    <li>
                        <div className="textTimeLine">
                            {data[lang].t6}
                        </div>
                    </li>
                </ul>
            </section>
        </main>
    )
}
