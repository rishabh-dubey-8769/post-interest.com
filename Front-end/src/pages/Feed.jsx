import React, { useState,useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
alert("Wait for 5-10 seconds & kindly refresh your page if your new post is not visible.")
const Feed = () => {

    const [ posts, setPosts ] = useState([
        {
           
        }
    ])

    useEffect(()=>{

        axios.get("https://post-interest-com.onrender.com/posts")
        .then((res)=>{

            setPosts(res.data.posts)

        })
        .catch((err) => {
            console.error("Failed to fetch posts:", err);
            // Handle error state
        })
        
    },[])
    

    return (

        <section className='feed-section' >
            <Link to="/create-post"><button className='btn-top'>Home</button></Link>
            <h2 className='feed-heading'>All Feeds here</h2>

            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='post-card' >
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h1>No posts available</h1>
                )
            }

        </section>

    )
}


export default Feed


