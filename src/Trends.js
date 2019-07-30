import React from 'react';
import './App.css';


class Trends extends React.Component {


    render() {
        return (
            <div className="trends-item" style={{backgroundColor: this.props.valueColor}}>
                <span className="item anim-typewriter line-1">{this.props.obj.keyword}</span>
            </div>
        );
    }
}

export default Trends;