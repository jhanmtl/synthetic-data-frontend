import React from 'react'
import {CircularProgress} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import InputLabel from "@material-ui/core/InputLabel";



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#64b5f6",
    },
  },

    typography:{
      fontSize:10,
    },
});

export function MyProgress(){
    return(
        <div style={{textAlign:"center"}}>
            <div>
                <ThemeProvider theme={theme}>
                    <CircularProgress />
                </ThemeProvider>
            </div>
            <br/>
            <InputLabel>
                initializing backend ...
            </InputLabel>
        </div>
    )

}