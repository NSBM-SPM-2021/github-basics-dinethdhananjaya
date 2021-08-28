import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow"; 
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://pbs.twimg.com/profile_images/1115204219898945537/yULEb58N_400x400.jpg" title="Dineth dhananjaya"/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="pages" />
            <SidebarRow Icon={PeopleIcon} title="Friend" />
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplase"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreIcon} title="Marketplace" />
            
        </div>
    )
}

export default Sidebar;
