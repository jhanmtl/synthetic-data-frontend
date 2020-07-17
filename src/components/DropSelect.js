import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import {Select} from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export function DropSelect(props){
    const classes = useStyles();
    const parseData=()=>props.data.map(eachData=>(<MenuItem key={eachData.id} value={eachData.value}>{eachData.value}</MenuItem>))
    return(
          <FormControl className={classes.formControl} disabled={props.disabled}>
            <InputLabel>{props.prompt}</InputLabel>
            <Select name={props.name} onChange={props.onChange} autoWidth={true} value={props.value}>
                {parseData()}
            </Select>
          </FormControl>

    )

}