import React from 'react'
import './videoRow.css'
function VideoRow({ views, subs, description, timesstamp, channel, link, title, image }) {
    return (
        <div className="videoRow">
            <a href={link}>
                <img src={image} alt={channel} /> </a>
                <div className="videoRow__text">


            <h3>{title}</h3>
            <p className="videoRow__headline">
                {channel}.{""}
                <span className="videoRow__subs"><span className="videoRow__subsNumber" >{subs} Subscribers</span></span>{""} {views}  .{timesstamp}
            </p>
            <p className="videoRow__description">{description}</p>
                </div>
        </div>
    )
}

export default VideoRow
