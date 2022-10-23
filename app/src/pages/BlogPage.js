import React from "react";

export default function Blog(props) {

const blog = [{
    title: 'Bladees\' New Glitchy Album',
    imageUrl: 'https://e.snmc.io/i/600/s/8f44d923ceeda12d90043f0255070130/10300453/bladee-spiderr-Cover-Art.jpg',
    album: 'Spiderr by Bladee',
    date: '13/10/22',
    content: 'Bladees second studio album of 2022 brings a new musical aestetic from his previous his release. Spiderr incorporates current glitch pop, drill and rage musical trends. The album with its 13 tracks and just over 31 minutes runtime, keeps the listener constantly interested. With the outstanding production from whiteamor and Bladees signature autotune, the album created is very enjoyable and worth the listen.',
},
{
    title: 'Blue Rev, This Years Noisy Pop Album',
    imageUrl: 'https://e.snmc.io/i/600/s/fbaf0066460c8599cda34354254a4b08/10128558/alvvays-blue-rev-Cover-Art.jpg',
    album: 'Blue Rev by Alvvays',
    date: '23/10/22',
    content: 'Alvvays delivers an enchanting album experience. With front-woman Molly Rankin and her astonishing vocal performance and sognwriting being backed by twee pop and shoegaze guitar chords and riffs, it is hard to not love this album. Molly and her songwriting delves into love interests and losing loved ones using cpativating harmonizaiton',
}]
const blogData = blog.map((post , i)=> {
    return (
    <div className='post--container' key={i}>
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