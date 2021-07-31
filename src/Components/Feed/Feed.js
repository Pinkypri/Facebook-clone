import React,{useState,useEffect} from 'react'
import MessageSender from '../MessageSender/MessageSender'
import StoryReel from '../StoryReel/StoryReel'
import {db} from "../../firebase"
import Post from '../Post/Post'
import "./Feed.css"
const Feed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapShot)=>{
          setPosts(
          snapShot.docs.map((doc)=>{
            return{
                id:doc.id,
                data:doc.data()
            }
          }));
      });

    }, [])

    return (
        <div className="feed">
              <StoryReel/> 
              <MessageSender/> 
              {posts.map((post)=>{
                  return(
                      <Post
                      key={post.id}
                      profilePic={post.data.profilePic}
                      message={post.data.message}
                      timestamp={post.data.timestamp}
                      username={post.data.username}
                      image={post.data.image}/>
                  )
              })}
        </div>
    )
}

export default Feed
