import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
    typography:{
      fontSize:14,
    },
});

export function MyTable(props){

    const parseInfo=(info)=>{
      const entries=Object.entries(info)
      const rows=entries.map(each=>{
          return(
            <TableRow key={each[0]}>
              <TableCell align="left">{each[1][0]}</TableCell>
              <TableCell align="right">{each[1][1]}</TableCell>
            </TableRow>
            )
          })

      return rows
    }

      return(
      <ThemeProvider theme={theme}>
        <Paper elevation={6}>
          <Table aria-label="simple table">
            <TableBody>
              {parseInfo(props.info)}
            </TableBody>
          </Table>
        </Paper>
      </ThemeProvider>
      )
  }