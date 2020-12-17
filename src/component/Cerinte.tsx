import { Button, Card, CardContent, createStyles, Icon, Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

export interface CerinteProps {
    classes:any;
    titlu:string;
    cerinte:string;
    submit():void;
}
 
export interface CerinteState {
    
}
 
const styles = createStyles({
    card: {
        width:'500px'
    },
    cardBox: {
        position:'relative',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'50px'
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

class Cerinte extends React.Component<CerinteProps, CerinteState> {
    render() { 
        const {classes, titlu, cerinte} = this.props;
        return (
            <div>
                <div className={classes.cardBox}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Icon><InsertEmoticonIcon/></Icon>
                            <Typography variant="h5" component="h2">
                                {titlu}
                            </Typography>
                            <Typography variant="body2" component="p">
                                1. {titlu} 
                                <br/>
                                2. {titlu} 
                                <br/>
                                3. {titlu} 
                                <br/>
                                4. {titlu} 
                                <br/>
                                5. {titlu} 
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
 
export default withStyles(styles)(Cerinte);