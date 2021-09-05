import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
    return (
        <div className='feed'>
            
            <StoryReel />
            <MessageSender />

            <Post 
            profilePic="https://www.esprit.eu/cms/resource/image/97688/ratio1x1/1600/1600/bcd1ac2cce3327686ddf398a9e726bdf/ql/11219-image-sp-u-main-update-men.jpg"
            message="wow this work"
            timestamp="timestamp"
            username="dineth"
            image="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Post 
             profilePic="https://s7g3.scene7.com/is/image/soloinvest/n02949A?$big_image_web$"
             message="wow this work"
             timestamp="timestamp"
             username="pasindu"
             image="https://www.fonewalls.com/wp-content/uploads/Dont-Touch-Scary-Lock-Screen-Wallpaper-1080x2340--300x585.jpg"
            />
            <Post
             profilePic="https://www.esprit.eu/cms/resource/image/97688/ratio1x1/1600/1600/bcd1ac2cce3327686ddf398a9e726bdf/ql/11219-image-sp-u-main-update-men.jpg"
             message="wow this work"
             timestamp="timestamp"
             username="dineth"
             image="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
        </div>
    )
}

export default Feed;
