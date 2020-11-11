import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
function Sidebar() {
    return (
        <div className="sidebar">
            
            <SidebarRow selected title="home" Icon={HomeSharpIcon}/>
            <SidebarRow title="Trending" Icon={WhatshotSharpIcon}/>
            <SidebarRow title="Subscription" Icon={SubscriptionsSharpIcon}/>
            <hr/>
            <SidebarRow title="Library" Icon={VideoLibrarySharpIcon}/>
            <SidebarRow title="history" Icon={HistorySharpIcon}/>
            <SidebarRow title="Your Videos" Icon={OndemandVideoSharpIcon}/>
            <SidebarRow title="Watch Later" Icon={WatchLaterSharpIcon}/>
            <SidebarRow title="Liked Video" Icon={ThumbUpAltSharpIcon}/>
            <SidebarRow title="Show more" Icon={ExpandMoreSharpIcon}/>
            <hr/>
        </div>
    )
}

export default Sidebar
