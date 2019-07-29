import React from 'react';
import './App.css';


class Trends extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgUrl: ''
        }
    }


    componentWillMount() {
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

        console.log(this.props.keyword)
        return (
            <div className="trends-item" style={{backgroundColor: this.props.valueColor}}>
                <img className="item" src={this.state.imgUrl} alt=""/>
            </div>
        );
    }
}

export default Trends;