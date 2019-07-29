import React from 'react';
import './App.css';
import Trends from './Trends';
import TrendsImg from './TrendsImg';


let colorRandom

class App extends React.Component {

  state = {
    trends: [],
    bgColor: [
      'rgb(52, 168, 82)',
      'rgb(234, 67, 53)',
      'rgb(250, 187, 5)',
      'rgb(66, 133, 244)',
    ]
  }

  componentDidMount() {
    fetch('https://api.mercadolibre.com/trends/MLA')
        .then(res => res.json())
        .then((data) => {
          this.setState({
            trends: data
          })
        })
        .catch(console.log)
      this.getRandomColor()
     setInterval(() => {
        this.setState(() => {
          return { unseen: "entre de vuelta"}
        });
      }, 2000);
  }

  getRandomColor(){
    colorRandom = this.state.bgColor[Math.floor(Math.random()*this.state.bgColor.length)];
  }

  arrayRange(start, end) {
    let ans = [];
    for (let i = start; i <= end; i++) {
      ans.push(i);
    }

    return ans[Math.floor(Math.random()*ans.length)];;
  }

  randomArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {

    const newArray = this.randomArray(this.state.trends);

    let positions = []

    return (
        <div className="contenedor">
              <div className="trends-box" >
                {newArray.map((object, i) =>{
                  if(i<20){
                    if(i === this.arrayRange(0,19))
                    {
                      console.log("entro por aca",i)
                      positions.push(i)
                      console.log(positions);
                      this.getRandomColor()
                      if(positions.includes(i-1) || positions.includes(i-4) || positions.includes(i-5) || positions.includes(i-6)){
                        if((i===5 && positions.includes(4)) || (i===10 && positions.includes(9)) || (i===15 && positions.includes(14))){
                          return <TrendsImg obj={object} key={i} valueColor={colorRandom} valuePosition={positions}/>
                        }else{
                          positions.splice(i, 1)
                          return <Trends obj={object} key={i} valueColor={colorRandom}/>
                        }
                      }else{
                        return <TrendsImg obj={object} key={i} valueColor={colorRandom} valuePosition={positions}/>
                      }
                    }else{
                      this.getRandomColor()
                      return <Trends obj={object} key={i} valueColor={colorRandom}/>
                    }
                  }
              })}
              </div>
        </div>
    );
  }
}

export default App;