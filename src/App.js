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

    let arrayImgPositionRandom = []

    for (let i = 0; i<10; i ++){
      arrayImgPositionRandom.push(ans[Math.floor(Math.random()*ans.length)])
    }

    return arrayImgPositionRandom
  }

  randomArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 2));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  render() {

    let newArray = this.randomArray(this.state.trends);

    let positions = []

    let colors = []

    return (
        <div className="contenedor">
              <div className="trends-box" >
                {newArray.map((object, i) =>{
                  if(i<20){

                    this.getRandomColor()
                    while (colors[colors.length -1] === colorRandom || colors[colors.length -5] === colorRandom) {
                      this.getRandomColor()
                    }
                    colors.push(colorRandom)
                    if(this.arrayRange(0,19).includes(i))
                    {
                      positions.push(i)
                      console.log("apenas entro " +positions)
                      if(positions.includes(i-1) || positions.includes(i-4) || positions.includes(i-5)){
                        if((i===5 && positions.includes(4) && !positions.includes(1)) || (i===10 && positions.includes(9) && !positions.includes(6)) || (i===15 && positions.includes(14) && !positions.includes(11))){
                          return <TrendsImg obj={object} key={i} valueColor={colors[i]}/>
                        }else{
                          positions.pop()
                          console.log("despues de sacar lo que no van " +positions)
                          return <Trends obj={object} key={i} valueColor={colors[i]}/>
                        }
                      }else{
                        return <TrendsImg obj={object} key={i} valueColor={colors[i]}/>
                      }
                    }else{
                      this.getRandomColor()
                      return <Trends obj={object} key={i} valueColor={colors[i]}/>
                    }
                  }
              })}
              </div>
        </div>
    );
  }
}

export default App;