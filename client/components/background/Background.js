import React, { Component } from 'react';

const styles = {
    width:'100%',
    height:'100%'
};

class Background extends Component {

    render() {

        return(
            <div>
                <video loop autoPlay muted
                    src='/PATAGONIA 8K.mkv' type='video/mp4' style={styles}>
                    Your browser does not support this video tag.
                </video>
            </div>
        );
    }
};

export default (Background);