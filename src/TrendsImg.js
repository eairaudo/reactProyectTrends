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
        fetch('https://api.mercadolibre.com/sites/MLA/search?q='+this.props.obj.keyword)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    imgUrl: data.results[0].thumbnail
                })
            })
            .catch(console.log)
    }
    render() {
        return (
            <div className="trends-item " style={{backgroundColor: this.props.valueColor}}>
                <img className="item img" src={this.state.imgUrl} alt=""/>
            </div>
        );
    }
}

export default Trends;