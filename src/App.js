import React from 'react'
import axios from 'axios'

import {DropSelect} from "./components/DropSelect";
import {RangeSlider} from "./components/RangeSlider";
import {MyButton} from "./components/MyButton";
import {MyTable} from "./components/MyTable";
import {MyCheckbox} from "./components/MyCheckbox";

import {Shapes} from "./data/Shapes";
import {Colors} from "./data/Colors";
import {Characters} from "./data/Characters";

import Paper from '@material-ui/core/Paper';
import './App.css'

//test comment


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
        shape:"",
        shapeColor:"",
        text:"",
        textColor:"",
        sizeRange:[30,50],
        blurRange:[1,5],
        edgeDecay:[1,5],
        textOpacity:[0.7,1.0],
        xRange:[0,224],
        yRange:[0,224],
        angleRange:[0,360],
        overallOpacity:[0.7,1.0],
        img:require("./data/whiteplaceholder.jpg"),
        imgInfo:   [
                        ["shape",""],
                        ["shape color",""],
                        ["text",""],
                        ["text color",""],
                        ["text heading",""],
                        ["upper corner",""],
                        ["lower corner",""]
                    ],
        numImg:1,
        disableButtons:false,
        drawBbox:false,

        }
    }

    componentDidMount() {
      this.initialState=this.state;
    }

    handleDropDownChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    handleSliderChange=(name,event,value)=>{
        this.setState({[name]:value})
    }

    handleCheckChange=(event)=> {
        console.log(event.target.checked)
        this.setState({drawBbox: event.target.checked})
    }

    handleGenerate=()=>{

      this.setState({disableButtons:true})

      for (let i=0;i<this.state.numImg;i++) {
          setTimeout(()=>{
                    axios.post("http://localhost:8000/post-form/", this.state)
                    .then(res => {
                        const imgReceived=res.data.img
                        const infoReceived=Object.entries(res.data.info)
                        this.setState({img: imgReceived,imgInfo:infoReceived})
                        console.log(this.state.imgInfo)
                        })

                    if (i===this.state.numImg-1){
                        this.setState({disableButtons:false})
                        }
                    }, i*250)
            }

      // this.setState({disableButtons:false})

    }

    handleReset=()=>{
      this.setState(this.initialState)
    }

    render(){
        return (
            <div className="App">
                <Paper elevation={16}>
                <div className="container">

                    <div className="table">
                        <MyTable info={this.state.imgInfo} />
                        <br/>
                        <MyCheckbox onChange={this.handleCheckChange} name="drawBbox" disabled={this.state.disableButtons}> draw bounding box on image </MyCheckbox>
                    </div>

                    <div className="frame">
                        <Paper elevation={9}>
                        <img className='photo' src={this.state.img} alt="img" style={{margin:0}}/>
                        </Paper>
                    </div>

                    <div className="sliderPanel">
                        <RangeSlider
                            name="angleRange"
                            prompt="character angle range with respect to vertical"
                            initialValue={this.state.angleRange}
                            onChange={this.handleSliderChange}
                            minSize={0}
                            maxSize={360}
                            res={1}
                            disabled={this.state.disableButtons}
                        />

                        <RangeSlider
                            name="xRange"
                            prompt="x coordinate range"
                            initialValue={this.state.xRange}
                            onChange={this.handleSliderChange}
                            minSize={0}
                            maxSize={224}
                            res={1}
                            disabled={this.state.disableButtons}
                        />

                        <RangeSlider
                            name="yRange"
                            prompt="y coordinate range"
                            initialValue={this.state.yRange}
                            onChange={this.handleSliderChange}
                            minSize={0}
                            maxSize={224}
                            res={1}
                            disabled={this.state.disableButtons}
                        />

                        <RangeSlider
                            name="sizeRange"
                            prompt="target size range"
                            initialValue={this.state.sizeRange}
                            onChange={this.handleSliderChange}
                            minSize={30}
                            maxSize={80}
                            res={1}
                            disabled={this.state.disableButtons}
                        />

                        <RangeSlider
                            name="blurRange"
                            prompt="edge blur range"
                            initialValue={this.state.blurRange}
                            onChange={this.handleSliderChange}
                            minSize={1}
                            maxSize={9}
                            res={1}
                            disabled={this.state.disableButtons}
                        />

                        <RangeSlider
                            name="edgeDecay"
                            prompt="edge decay range"
                            initialValue={this.state.edgeDecay}
                            onChange={this.handleSliderChange}
                            minSize={1}
                            maxSize={7}
                            res={1}
                            disabled={this.state.disableButtons}
                        />

                        <RangeSlider
                            name="textOpacity"
                            prompt="text opacity range"
                            initialValue={this.state.textOpacity}
                            onChange={this.handleSliderChange}
                            minSize={0.0}
                            maxSize={1.0}
                            res={0.01}
                            disabled={this.state.disableButtons}
                        />

                        <RangeSlider
                            name="overallOpacity"
                            prompt="overall opacity range"
                            initialValue={this.state.overallOpacity}
                            onChange={this.handleSliderChange}
                            minSize={0.0}
                            maxSize={1.0}
                            res={0.01}
                            disabled={this.state.disableButtons}
                        />

                      <RangeSlider
                            name="numImg"
                            prompt="number of images to generate"
                            initialValue={this.state.numImg}
                            onChange={this.handleSliderChange}
                            minSize={1}
                            maxSize={50}
                            res={1}
                            disabled={this.state.disableButtons}
                        />
                    </div>

                    <div className="dropdownPanel">
                        <DropSelect data={Shapes} name="shape" prompt="shape" onChange={this.handleDropDownChange} value={this.state.shape} disabled={this.state.disableButtons}/>
                        <DropSelect data={Colors} name="shapeColor" prompt="shape color" onChange={this.handleDropDownChange} value={this.state.shapeColor} disabled={this.state.disableButtons}/>
                        <DropSelect data={Characters} name="text" prompt="character" onChange={this.handleDropDownChange} value={this.state.text} disabled={this.state.disableButtons}/>
                        <DropSelect data={Colors} name="textColor" prompt="character color" onChange={this.handleDropDownChange} value={this.state.textColor} disabled={this.state.disableButtons}/>

                        <div style={{margin:15,textAlign:"center"}}>
                            <MyButton onClick={this.handleGenerate} disabled={this.state.disableButtons}>Generate</MyButton>
                            <MyButton onClick={this.handleReset} disabled={this.state.disableButtons}>Reset</MyButton>
                        </div>
                    </div>



                </div>
                </Paper>
            </div>
        )
    }

}

export default  App;