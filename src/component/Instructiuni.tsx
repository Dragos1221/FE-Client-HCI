import { Button, Card, CardActions, CardContent, Container, createStyles, Icon, Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

export interface InstructiuniProps {
    classes:any;
    text:string;
    submit():void;
}
 
export interface InstructiuniState {
    
}

const styles = createStyles({
    card: {
        width:'500px'
    },
    cardBox: {
        marginTop:'2%',
        marginLeft:'33%'
    },
	button: {
        width:'100px'
    },
    buttonBox: {
        display:'inline-block',
        position:'absolute',
        right:'20px',
        bottom:'20px'
	},
});
 
class Instructiuni extends React.Component<InstructiuniProps, InstructiuniState> {
    render() {
        const {classes, text} = this.props; 
        return (
            <div>
                <div className={classes.cardBox}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Icon><InsertEmoticonIcon/></Icon>
                            <Typography variant="h5" component="h2">
                                Instructiuni
                            </Typography>
                            <Typography variant="body2" component="p">
                                {text}
                            </Typography>
                        </CardContent>
                    </Card>
            </div>
            <div className={classes.buttonBox}>
                <Button
                    className={classes.button}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={this.props.submit}
                >
                Next
                </Button>
            </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(Instructiuni);