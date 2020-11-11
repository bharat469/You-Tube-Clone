import React from 'react'
import './Video.css'
import { Avatar } from '@material-ui/core';
function Video({ image, link, title, channel, views, timestamp, channelLink,channelImage }) {
    return (
        <div className="videoCard">
            <a href={link}>
                <img src={image} className="videoCard__thumbnail" alt="" />

            </a>
            <div className="videoCard__info">
                <Avatar className="videoCard__avatar" alt={channel} src={channelImage} href={channelLink} />
<div className="videoCard__text">
    <h4>{title}</h4>
    <p>{channel}</p>
    <p>
        {views} . {timestamp}
    </p>
</div>
            </div>
        </div>
    )
}

export default Video
