import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
  return (
    <div className="storyReel">
        <Story image="https://s1.best-wallpaper.net/wallpaper/m/1202/Tom-Cruise-in-Mission-Impossible-Ghost-Protocol_m.webp"
               profileSrc="https://avatars.githubusercontent.com/u/89646576?s=400&u=091053fa5695eb2b2e16b8092cb0bc1dfd1ed6a5&v=4"
               title="Kundan Agrawal"
        />
        <Story image="https://t3.ftcdn.net/jpg/05/63/10/88/360_F_563108832_Rh2mcGC0rhhBFPtHBNMDPKizyyw6WiBl.jpg"
               profileSrc="https://cdnb.artstation.com/p/assets/images/images/039/181/737/large/jan-schlegel-achilles.jpg?1625161337"
               title="Achillies Peleuside"
        />
        <Story image="https://www.wallpaperuse.com/wallp/34-340269_m.png"
               profileSrc="https://www.hollywoodreporter.com/wp-content/uploads/2017/01/steve_harvey.jpg?w=1296&h=730&crop=1"
               title="Steve Harvey"
        />
        <Story image="https://s3.us-east-1.amazonaws.com/roundhouseagency/2020/production/casestudy/ninja-streaming-room/images/RedBull_NinjaStudio_R5_C1_V1_1.jpg"
               profileSrc="https://deadline.com/wp-content/uploads/2020/05/ninja-gamer-on-mixer.jpg?w=681&h=383&crop=1"
               title="Tyler Blevins"
        />
        <Story image="https://cellularnews.com/wp-content/uploads/2020/06/01-divergent-movie-poster-325x485.jpg"
               profileSrc="https://i.pinimg.com/originals/ec/bd/f4/ecbdf4b384a0dd0bf65371cb0a6b762b.jpg"
               title="Tobias Eaton"
        />
    </div>
  )
}

export default StoryReel


