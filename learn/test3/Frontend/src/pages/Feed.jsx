import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';


function Feed() {
    const [posts, setposts] = useState([
        // {
        //     _id: "1",
        //     image: "https://i.pinimg.com/1200x/f1/a4/cc/f1a4ccda642ec52068e77a4cb314b607.jpg",
        //     caption: "boy image "
        // }
    ]);

    useEffect(() => {
      axios.get("http://localhost:3000/posts")
      .then((res)=>{
        setposts(res.data.posts)
      })
    
      
    }, [])
    

    return (
        <section className='feed-section'>
            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div className="post-card" key={post._id}>
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h1>No Post available</h1>
                )
            }
        </section>
    )
}

export default Feed
