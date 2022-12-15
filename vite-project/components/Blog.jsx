import React, { useEffect } from 'react'
import data from '../data/blog'
import '../css/blog.css'

export default function Blog({ lang }) {

    useEffect(() => {
        const elements = document.querySelectorAll('.post')
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('shownPost')
                } else {
                    entry.target.classList.remove('shownPost')
                }
            })
        })
        elements.forEach((el) => observer.observe(el))
    }, [])

    function handleOpenPost(e) {
        e.target.closest('.post').classList.add('opened')
    }

    function handleClosePost(e) {
        e.target.closest('.post').classList.remove('opened')
    }

    const allPosts = data[lang].title.map((post, index) => {
        return (
            <article className="post" key={post}>
                <div className="author">
                    <div className="imgWrapper">
                        <img src={data[lang].authorPic[index]} alt="Author picture" />
                    </div>
                    <div className="nameNdate">
                        <div className="name">{data[lang].author[index]}</div>
                        <div className="date">{data[lang].date[index]}</div>
                    </div>
                </div>
                <div className="titleImgWrapper">

                    <img src={data[lang].img[index]} alt="Post photo" />

                    <div className="titleReadMore">
                        <div className="title">
                            {post}
                        </div>
                        <div className="readmore" onClick={e => handleOpenPost(e)}>Read more</div>
                    </div>
                </div>
                <div className="text">
                    {data[lang].text[index].split('<br>').map(textPart => (<><p>{textPart}</p><br /><br /></>))}
                </div>
                <div className="hide" onClick={e => { handleClosePost(e) }}>Hide</div>
            </article>
        )
    })

    return (
        <main className="mainBlog">
            <div className="titleBlog">{data[lang].mainTitle}</div>
            {allPosts}

        </main>
    )
}
