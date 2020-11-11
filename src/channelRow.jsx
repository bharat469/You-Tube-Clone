import React from 'react'
import './channelRow.css'
import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
function channelRow({image,Channel,subs,noOfVideos,links,description,verified}) {
    return (
        <div className="channelRow">
            <a href={links}>
<Avatar className="channelRow__logo" alt={Channel} src={image}/>
            </a>
            <div className="channelRow__text">
    <h4>{Channel}{verified && <VerifiedIcon/>}</h4>
    <p>{subs} Subscribers .{noOfVideos} Video</p>
    <p>{description}</p>
            </div>
        </div>
    )
}

export default channelRow
