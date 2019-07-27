import React from 'react';
import './App.css';


class Trends extends React.Component {


    render() {
        return (
            <div className="trends-item" style={{backgroundColor: this.props.valueColor}}>
                <span className="item">{this.props.obj.keyword}</span>
                <img src={this.props.obj.url} alt=""/>
            </div>
        );
    }
}

export default Trends;