import { Card, CardHeader, CardMedia, createStyles, Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';


export interface CvProps {
    classes : any;
    imgSrc : any;
    nume : string;
    varsta: number;
    stareConjugala:string;
    gen:string;

}
 
export interface CvState {
    
}

const styles = createStyles({
    container: {
        border:' dotted',
        display:'flex',
        flexDirection:'row',
        height:'100%',
        width:'100%',
        marginBottom:'10%',
    },
    abc:{
        display:'flex',
        justifyContent:'center'
    },
    profilePicture : {
        height:'100%',
    },
    
});
 
class Cv extends React.Component<CvProps, CvState> {
    render() { 
        const {classes  , imgSrc , nume} = this.props;
        return ( 
        <div className={classes.container}>
            <Card className={classes.profilePicture}>
                 <div className={classes.abc}>
                    <CardHeader
                         title={nume}
                    ></CardHeader>
                 </div>
                    <CardMedia
                        image={imgSrc}
                     />
            </Card>
            <Card>
                <Typography>
                    Varsta:{this.props.varsta}
                </Typography>
                <Typography>
                    Gen:{this.props.gen}
                </Typography>
                <Typography>
                    Stare conjugala: {this.props.stareConjugala}
                </Typography>
            </Card>
            <Card>
                <CardHeader>
                    Experienta
                </CardHeader>
                <Typography>
                    Stare conjugala: {this.props.stareConjugala}
                </Typography>
            </Card>
            <Card>
                <CardHeader>
                    Experienta
                </CardHeader>
                <Typography>
                    Stare conjugala: {this.props.stareConjugala}
                </Typography>
            </Card>      
        </div> );
    }
}
 
export default withStyles(styles)(Cv)