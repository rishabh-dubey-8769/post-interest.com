import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const CreatePost = () => {
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    alert("You have successfully posted.")
    e.preventDefault()
    const formData=new FormData(e.target)
    axios.post("https://post-interest-com.onrender.com/create-post",formData)
    .then((res)=>{
      navigate("/feed")
    })
    .catch((err)=>{
      console.log(err)
      alert('Error creating post.')
    });
  }
  return (
    <section className='create-post-section'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit} >
            <input type="file" name="image" accept="image/*"  />
            <input type="text" name="caption" placeholder='Enter caption' required />
            <button type="submit" >Submit</button>
        </form>
        <Link to="/feed" ><button className='btn-footer'>See all Posts</button></Link>
    </section>
    
  )
}

export default CreatePost
