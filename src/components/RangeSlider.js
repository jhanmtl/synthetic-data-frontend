import React from 'react'
import {Slider} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import InputLabel from "@material-ui/core/InputLabel";



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#64b5f6",
    },
    secondary: {
      main: '#11cb5f',
    },
  },

    typography:{
      fontSize:10,
    },
});


export function RangeSlider(props){


    const handleChange=(event,value)=>{
        props.onChange(props.name,event,value)
    }


    return(

        <div style={{marginLeft:"5%",marginRight:"5%"}}>
            <ThemeProvider theme={theme}>
                <div className="sliderText">
                    <InputLabel>{props.prompt}</InputLabel>
                </div>

                            <Slider
                                name={props.name}
                                value={props.initialValue}
                                onChange={handleChange}
                                min={props.minSize}
                                max={props.maxSize}
                                valueLabelDisplay="auto"
                                step={props.res}
                                disabled={props.disabled}
                                />

            </ThemeProvider>
        </div>
    )

}