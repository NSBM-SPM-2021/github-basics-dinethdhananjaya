import React from 'react';
import "./Hedder.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'; 
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Hedder() {
    return(
        <div className="hedder">
            <div className="hedder__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
                alt="facebook "/>

                <div className="hedder__input">
                    <SearchIcon />
                    <input placeholder="Search on Facebook" type="text" />
                </div>
            </div>

            <div className="hedder__center">
                <div className="hedder__option hedder__option--active">
                    <HomeIcon fontSize="large" />
                </div>

                <div className="hedder__option">
                    <FlagIcon fontSize="large" />
                </div>

                <div className="hedder__option">
                    <SubscriptionsIcon fontSize="large" />
                </div>

                <div className="hedder__option">
                    <StorefrontIcon fontSize="large" />
                </div>

                <div className="hedder__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className="hedder__right">
                <div className="hedder__info">
                    <Avatar />
                    <h4>dineth dhananjaya</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>


            </div>

        </div>
    );
}

export default Hedder;