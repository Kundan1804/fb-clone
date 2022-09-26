import React, { useState, useEffect} from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from "./StoryReel"
import db from "./firebase"
import { onSnapshot, collection } from 'firebase/firestore'

function Feed() {
  const [posts,setPosts] = useState([]);
  const colRef = collection(db, 'posts')

  useEffect(() =>{
    const colRef = collection(db, 'posts')
    onSnapshot(snapshot =>(
      setPosts(snapshot.docs.map((doc) =>({id: doc.id, data: doc.data()})))
    ))
    console.log(posts)
  },[]);
  return (
    <div className="Feed">
        <StoryReel />
        <MessageSender />

        {posts.map((post) => {
          <Post 
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        })}

       
    </div>
  )
}

export default Feed