import { Avatar, Button, createStyles, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';

export interface BunVenitProps {
    classes:any;
    age:string;
    gender:string;
    specializare:string;
    handleChange2(data: any): void;
    submit():void;
}
 
export interface BunVenitState {
}

const styles = createStyles({
	titleBox: {
		display: 'flex',
		flexDirection: 'column',
        alignItems: 'center',
        maring:'auto',
        marginTop:'10px'
	},
	icon: {
		marginRight: '5px',
	},
    welcomMessage : {
        display:'inline-block',
        margin:'auto',
        marginTop:'20px'
    },
    page : {
        display:'flex',
        flexDirection:'column',
        //backgroundColor:'grey',
        width:'700px',
        margin:'auto',
        border:'1px solid black',
        borderRadius:'5px',
        boxShadow: '1px 3px 1px #9E9E9E',
        marginTop:'10px'
    },
    formControl : {
        width:'150px'
    },
    ageBox : {
        margin:'auto',
        marginTop:'10px',
        padding:'15px',
    },
    genderBox : {
        margin:'auto',
        marginTop:'10px',
        padding:'15px',
    },
    specBox : {
        margin:'auto',
        marginTop:'10px',
        padding:'15px',
    },
    spec:{
        width:'300px'
    },
    genLabel : {
        display:'inline-block',
        margin:'auto',
        marginLeft:'160px'
    },
	button: {
		marginTop: '5px',
    },
    buttonBox: {
        margin:'auto',
        marginTop:'10px',
        padding:'15px',
	},
});

 
class BunVenit extends React.Component<BunVenitProps, BunVenitState> {
    //state = { :  }

    handleData = (type: any) => (event: any) => {
        console.log("ajunge");
        this.props.handleChange2({
            [type]: event.target.value,
        });
    };

    varsta = () => {
        let lst = [];

        for(let i = 10; i <= 60; ++i) {
            lst[i] = i;
        }

        return lst;
    }
    
    render() { 
        const {classes} = this.props;
        return ( 
            <form className={classes.page}>
                <div className={classes.titleBox}>
  					<Avatar className={classes.icon}>
  						<AssignmentSharpIcon />
  					</Avatar>
  					<Typography component="h1" variant="h5">
                        Bun venit
  					</Typography>
  				</div>
                <div className={classes.ageBox}>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel>Varsta</InputLabel>
                        <Select
                            value={this.props.age}
                            onChange={this.handleData('age')}
                            label="Varsta"
                            >
                            {this.varsta().map((item) => (
                                <MenuItem key={item} value = {item}>{item}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className={classes.genderBox}>
                    <label className={classes.genLabel}>Selectati genul: </label>
                    <RadioGroup aria-label="gender" name="gender1" value={this.props.gender} onChange={this.handleData('gender')} row>
                        <FormControlLabel value="male" control={<Radio />} label="Barbat" />
                        <FormControlLabel value="female" control={<Radio />} label="Femeie" />
                        <FormControlLabel value="disabled" disabled control={<Radio />} label="Altceva (Optiune Ileagala)" />
                    </RadioGroup>
                </div>
                <div className={classes.specBox}>
                    <TextField
                        className={classes.spec}
                        label="Specializare"
                        multiline
                        rows={4}
                        variant="outlined"
                        value={this.props.specializare}
                        onChange={this.handleData('specializare')}
                    />
                </div>
                <div className={classes.buttonBox}>
  						<Button
  							className={classes.button}
  							fullWidth
  							variant="contained"
  							color="primary"
  							//onClick={this.props.submit}
  						>
                Next
  						</Button>
  				</div>
            </form>
         );
    }
}
 
export default withStyles(styles)(BunVenit);