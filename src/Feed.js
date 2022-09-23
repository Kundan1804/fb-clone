import React, { useState, useEffect} from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from "./StoryReel"
import db from "./firebase"
import app from "./firebase"
import { query, getDocs, onSnapshot, collection } from 'firebase/firestore';

function Feed() {
  const colRef = collection(db, 'posts')
  const posts =[]
  let tempost=[]

onSnapshot(colRef, (snapshot) => {
  
      // snapshot.docs.forEach((doc) =>{
        
      //   posts.push({...doc.data(), id: doc.id})
      // })
      // console.log(posts)
      snapshot.docs.map((doc) =>[
        
        posts.push({ ...doc.data(), id: doc.id})
      ])
      console.log(posts)

        tempost=posts.map((post) =>[
          <Post
            key={post.id}
            //profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
         />
  
        ]) 
console.log(tempost)
     } )

  return (
    <div className="Feed">
        <StoryReel />
        <MessageSender /> 

      {posts.map((post) => [
         <Post
            key={post.id}
            //profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
      ])}

      <Post
          profilepic="https://avatars.githubusercontent.com/u/89646576?s=400&u=091053fa5695eb2b2e16b8092cb0bc1dfd1ed6a5&v=4"
          message="WOW this works!"
          timestamp="This is a timestamp"
          username="Minato"
          image="https://i.ytimg.com/vi/thk_vtuv9Jk/maxresdefault.jpg"
        /> 
        
       
    </div>
  )
}

export default Feed

