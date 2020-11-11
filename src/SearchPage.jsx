import React from 'react'
import './searchPage.css'
import TuneSharpIcon from '@material-ui/icons/TuneSharp';
import ChannelRow from './channelRow'
import VideoRow from './VideoRow'
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneSharpIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://yt3.ggpht.com/a/AATXAJyTU5ZNp3e0cfxk6HCRtTqmNA9bHiQmz53FaAt77g=s88-c-k-c0x00ffffff-no-rj"
                Channel="IamFlawed"
                verified
                subs="660k"
                noOfVideos={50}
                description="You can find awsome tracks and beats produced by me inside is the content that will make you addective toward it 🎹 🎵 🎼"
                links= "https://www.youtube.com/channel/UCkMD8d0gBo-yxxjhZMzdj_w/videos"

            />
            <hr/>
            <VideoRow
              title="BAARISHEIN (ANUV JAIN) || COVER || FLAWED"
              views="5M views"
              subs="660k"
              timestamp="3 nov 2020"
              channelImage="https://yt3.ggpht.com/a/AATXAJyTU5ZNp3e0cfxk6HCRtTqmNA9bHiQmz53FaAt77g=s48-c-k-c0xffffffff-no-rj-mo"
              channel="IamFlawed ✅"
              image="data:image/jpeg;base64,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"
              link="https://www.youtube.com/watch?v=beWsZgHqP2A&list=LL&index=31"
              description="Hello everyone,
              How are you, hope you all are doing good.🤗 
              At first, I was going to remake this song with Anuv's vocals and some swingy drums.
              I did start working on it but due to some other projects, I couldn’t complete it.
              
              After a while when I reopened this project I started humming the melody and I just couldn’t stop 
              myself from singing it.🥰 
              So I recorded my vocals and just went with the vibe that I was feeling (a rainy day just staying in bed watching the raindrops fall on my window and listening to this song).
              
              And this is what I came up with.
              
              I hope you guys will like and enjoy it as much as I did while making it.❤️ 
              
              So if you liked it, Do comment on what you feel about this and share it with your friends who should hear this.
              
              Comment what other songs should I cover next.
              
              IF you are new to the channel....................
              Subscribeeeeeeeee😬 
              
              Until next time 
              Stay safe 
              Spread love 
              Sayonara ✌️ 🎹 🎵 🎼"
             
            />
            <VideoRow
                    title="Tunes in the air Ft. Nitin Joshi"
                    views="2M views"
                    subs="660k"
                    timestamp="13 jun 2019"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyTU5ZNp3e0cfxk6HCRtTqmNA9bHiQmz53FaAt77g=s48-c-k-c0xffffffff-no-rj-mo"
                    channel="IamFlawed ✅"
                    image="https://i.ytimg.com/vi/CAQfrdgk5-Y/maxresdefault.jpg"
                    link="https://www.youtube.com/watch?v=CAQfrdgk5-Y"
                    
                    description="Hey everyone. 
                    Hope you guys are well stay safe and say Go corona🤣 
                    So here's a track i did for my bro Nitin. 
                    Hope you guys will like it. Do hit the like button and subscribe if you are new to the channel, more content is on it's way. 
                    Till then 
                    Enjoy 🎹 🎵 🎼"
                />


<VideoRow
                    title="SAJNA TENU RAB DA VASTA - UNPLUGGED ADEEL SADIQ [COVER] BY [SHUBH CHAND]"
                    views="15M views"
                    subs="660k"
                    timestamp="3 nov 2019"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyTU5ZNp3e0cfxk6HCRtTqmNA9bHiQmz53FaAt77g=s48-c-k-c0xffffffff-no-rj-mo"
                    channel="IamFlawed ✅"
                    image="https://i.ytimg.com/vi/bTFnOLspjV8/maxresdefault.jpg"
                    link="https://www.youtube.com/watch?v=bTFnOLspjV8"
                    
                    description="Heyaa Fam!! 
                    Hope you are doing fine. I'm here with another cover hope you will like it. Do give it a thumbs up comment down what you think about it, subscribe if youu want to see more content from me and share the video if you like it. Spread love 
                    Till then 
                    PEACE✌ 🎹 🎵 🎼"
                />

<VideoRow
                    title="INTRO FLAWVERSE || FLAWED || 🚀"
                    views="15M views"
                    subs="660k"
                    timestamp="5 apr 2020"
                    channelImage="https://yt3.ggpht.com/a/AATXAJyTU5ZNp3e0cfxk6HCRtTqmNA9bHiQmz53FaAt77g=s48-c-k-c0xffffffff-no-rj-mo"
                    channel="IamFlawed ✅"
                    image="https://yt3.ggpht.com/a/AATXAJyTU5ZNp3e0cfxk6HCRtTqmNA9bHiQmz53FaAt77g=s88-c-k-c0x00ffffff-no-rj"
                    link="https://www.youtube.com/watch?v=QQoIeNzAEys"
                    
                    description="So what is up fam, 
                    Thank you for showing your love on instagram and bcz of that i made a 2nd verse and a whole  🎹 🎵 🎼"
                />
        </div>
    )
}

export default SearchPage
