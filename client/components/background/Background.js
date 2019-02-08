import React, { Component } from 'react';
import Video from './Video';

// import videos
import video1 from './video/02. Xiaomi Mi 6 Official Announcement Trailer.mp4';
import video2 from './video/lPAHpBRmwwugYZQSKRngHvihLOUjIDlkzyXsoEBz (4).mp4'
import video3 from './video/12. Globe - Power of One to Move Millions.mp4';
import video4 from './video/17. Formula 1 Ferrari Shell Commercial.mp4';
import video5 from './video/10. 2017 Amazon Holiday Commercial.mp4';

var myVids = [
    video1, video2, video3, video4, video5
];

class Background extends Component {
    render() {
        return(
            <div>
                <Video videos={myVids} />
            </div>
        )
    }
}

export default (Background);