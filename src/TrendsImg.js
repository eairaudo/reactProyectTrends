import React from 'react';
import './App.css';


class Trends extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgUrl: ''
        }
    }


    componentDidMount() {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q='+this.props.keyword)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    imgUrl: data.results[1].thumbnail
                })
            })
            .catch(console.log)
    }
    render() {

        console.log(this.state.imgUrl)
        return (
            <div className="trends-item" style={{backgroundColor: this.props.valueColor}}>
                <img className="item" src={this.state.imgUrl} alt=""/>
            </div>
        );
    }
}

export default Trends;