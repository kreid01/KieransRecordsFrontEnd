import React from "react";

export default function Blog(props) {

const blog = [{
    title: 'Bladees\' new glitchy album',
    imageUrl: 'https://e.snmc.io/i/600/s/8f44d923ceeda12d90043f0255070130/10300453/bladee-spiderr-Cover-Art.jpg',
    album: 'Spiderr by Bladee',
    date: '13/10/22',
    content: 'Bladees second studio album of 2022 brings a new musical aestetic from his previous his release. Spiderr incorporates current glitch pop, drill and rage musical trends. The album with its 13 tracks and just over 31 minutes runtime, keeps the listener constantly interested. With the outstanding production from whiteamor and Bladees signature autotune, the album created is very enjoyable and worth the listen.'
}]
const blogData = blog.map(post => {
    return (
    <div className='post--container'>
        <h1>{post.title}</h1>
        <div className='post--details--container'>
         <img src={post.imageUrl}  alt=''/>
            <div className="post--album--info">
                <div className='post--title--date'>
                    <h2>{post.album}</h2>
                    <p className='post--date'><span className="post--date--span">{post.date}</span></p>
                </div>
                <p>{post.content}</p>
            </div>
        </div>
       
    </div>
    )}
)
    return (
        <>
        <div style={props.themeStyles} className='blog--page'>
            <h1 style={props.themeStyles} className="page--header">Blog</h1>
            <section className='blog--container' style={props.themeStyles}>
                {blogData}
            </section>
        </div>
        </>
    )
}