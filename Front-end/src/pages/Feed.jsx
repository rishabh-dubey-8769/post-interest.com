import React, { useState,useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
alert("Wait for 5-10 seconds & kindly refresh your page if your new post is not visible.")
const Feed = () => {
    const [ posts, setPosts ] = useState([
        {
            // _id: "1",
            // image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            // caption: "Beautiful scenery",
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
                            {/* <p>
                                Posted at: {new Date(post.createdAt).toLocaleString()}
                            </p> */}
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


