import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const styles = {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 'auto',
    width: 'auto',
    minWidth: '100%',
    minHeight: '100%'
};

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            src: this.props.videos[0]
        };
    }

    componentDidMount() {
        let video = ReactDOM.findDOMNode(this);
        video.addEventListener("ended", e => {
            if (this.state.index < this.props.videos.length - 1) {
                let nextIndex = this.state.index + 1;
                this.setState({
                    index: nextIndex,
                    src: this.props.videos[nextIndex]
                });
            }
            else if (this.state.index == this.props.videos.length - 1 ) {
                this.setState({
                    index: 0,
                    src: this.props.videos[0]
                })
            }
        });
    }

    componentDidUpdate(prevProps, prevState) {
        let video = ReactDOM.findDOMNode(this);
        video.play();
    }

    render() {
        return (
            <video
                src={this.state.src}
                style={styles}
                muted
                autoPlay
            />
        );
    }
}

export default (Video);