import React, { Component } from 'react';

class Background extends Component {

    render() {
        return(
            <div>
                <video loop autoPlay
                    width='100%' height='100%'
                    src='/PATAGONIA 8K.mkv' type='video/mp4'
                >
                    Your browser does not support this video tag.
                </video>
            </div>
        );
    }
}

export default Background;