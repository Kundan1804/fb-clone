import React, { useState, useEffect} from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from "./StoryReel"
import db from "./firebase"
// import app from "./firebase"
import {onSnapshot, collection, orderBy, query} from 'firebase/firestore';

function Feed() {

const [posts,setPosts] = useState([]);

    useEffect(() =>{
    const colRef = collection(db, 'posts')
    const q = query(colRef,orderBy("timestamp", "desc"))
    console.log("These are the posts: ",posts)
    onSnapshot(q, snapshot =>(
      setPosts(snapshot.docs.map((doc) =>({ ...doc.data(), id: doc.id})))
    ))
    console.log(posts)
  },[]);

  return (
    <div className="Feed">
        <StoryReel />
        <MessageSender /> 

      {posts.map((post) => {
        return(
         <Post
            key={post.id}
            profilepic={post.profilepic}
            message={post.message}
            timestamp={post.timestamp}
            username={post.username}
            image={post.image}
          />)
        })}        
    </div>
  )
}

export default Feed

