import React from 'react'
import {Avatar,LinearProgress} from '@material-ui/core'
import { InsertEmoticon,PhotoLibrary,Videocam} from '@material-ui/icons'
import "./MessageSender.css"
import {useSelector} from "react-redux"
import { useState } from 'react'
import { db,storage,timestamp} from "../../firebase"

const MessageSender = () => {
    const user = useSelector((state) => state.user);
    const [input, setInput] = useState("");
    const [image, setImage] = useState("");
    const [progress, setProgress] = useState(0);
    const handlesubmit=(event)=>{
    event.preventDefault();
    const uploadTask=storage.ref(`images/${image.name}`).put(image);

    uploadTask.on("state_changed",
    (snapShot)=>{
           const progress=Math.round((snapShot.bytesTransferred/snapShot.totalBytes)*1000);
          setProgress(progress);
    },(error)=>{console.log(error);
    },()=>{
        storage.ref("images").child(image.name).getDownloadURL().then((url)=>{
            
    db.collection("posts").add({
        message:input,
        timestamp:timestamp,
        profilePic:user.photoURL,
        username:user.displayName,
        image:url,
    });
    setProgress(0);
    setInput("");
    setImage("");
       }).catch((error)=>{
           console.log(error);
       })
    })
    }
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    type="text"
                    placeholder={`What's on your mind,${user.displayName}`}
                    className="messageSender_input"
                    />
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                    <button type="submit" onClick={handlesubmit}>
                     hidden
                    </button>
                </form>
            </div>
            {progress >0 &&(<LinearProgress variant="determinate" value={progress}/>)}
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <Videocam style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibrary style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
