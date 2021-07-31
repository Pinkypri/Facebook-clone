import React from 'react'
import Story from '../Story/Story'
import "./StoryReel.css"

const StoryReel = () => {
    return (
        <div className="storyReel">
          <Story
          image="https://s.abcnews.com/images/Sports/GTY_world_cup_profile_1_jtm_140529_4x3t_992.jpg"
          profileSrc="https://s.abcnews.com/images/Sports/GTY_world_cup_profile_1_jtm_140529_4x3t_992.jpg"
          title="Ronaldo"/>
          <Story
          image="https://cdn.sharechat.com/msdoni_2a1211f_1594617393567_cmprsd_40.jpg"
          profileSrc="https://cdn.sharechat.com/msdoni_2a1211f_1594617393567_cmprsd_40.jpg"
          title="Ms.Doni"/>
          
                <Story
          image="https://www.behindwoods.com/tamil-actor/simbu/simbu-stills-photos-pictures-394.jpg"
          profileSrc="https://www.behindwoods.com/tamil-actor/simbu/simbu-stills-photos-pictures-394.jpg"
          title="STR"/>
          <Story
          image="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/04/24/971275-srt.jpg"
          profileSrc="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/04/24/971275-srt.jpg"
          title="Sachin"/>
          <Story
          image="https://www.deccanherald.com/sites/dh/files/articleimages/2020/07/23/Suriya1-1595483957.jpg"
          profileSrc="https://www.deccanherald.com/sites/dh/files/articleimages/2020/07/23/Suriya1-1595483957.jpg"
          title="Suriya"/>
          

        </div>
    )
}

export default StoryReel
