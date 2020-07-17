import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";

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


export function MyCheckbox(props) {

    return(
            <ThemeProvider theme={theme}>
                <FormControlLabel
                    control={
                        <Checkbox
                            name={props.name}
                            color="primary"
                            size="small"
                            onChange={props.onChange}
                            disabled={props.disabled}
                        />
                    }
                    label={props.children}
                />
            </ThemeProvider>
    )
}