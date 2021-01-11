import { Button, Card, CardContent, CardMedia, createStyles, Typography, withStyles } from '@material-ui/core';
import { listenerCount } from 'process';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { SelectieCVPageProps } from '../pages/SelectieCVPage';

export interface SelectieCVProps {
    classes: any;
    cvList:[];
    submit:any;
}
 
export interface SelectieCVState {
    
}

const styles = createStyles({
    bigContainer: {
        display:'flex',
        flexDirection:'column',
    },
    containerCV : {
        display:'flex',
        flexDirection:'column',
        justifyContent: 'space-around'
    },
    row : {
        width: '100%',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom:'5%'
    },
    rowItem: {
        width: '20%'
    },
    card: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent:'center'
    },
    cardImage: {
        height:'250px',
        width:'auto'
    },
    buttonContainer : {
        width:'15%',
        margin:'auto',
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});


class SelectieCV extends React.Component<SelectieCVProps, SelectieCVState> {
    getCv = (elem:any)=>{
        return ( <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {elem.name}
                </Typography>
                <div>
                    <img src={elem.photo_id} width="300px" height="300px"></img>
                </div>
                <Typography>
                     Varsta: {elem.varsta}
                    <br/>
                    Ocupatie: {elem.ocupatie}
                    <br/>
                    Stare conjugala: {elem.stareConjugala}
                </Typography>
            </CardContent>
        </Card>)
    }
    render() { 
        const {classes} = this.props;
        return (
            <div className={classes.bigContainer}>
                <div className = {classes.containerCV}>
                    <div className={classes.row}>
                        <div className={classes.rowItem}>
                            {
                                this.props.cvList.map((elem:any)=>{
                                    return this.getCv(elem);
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={classes.buttonContainer}>
                    <div className={classes.vizualizareButtonBox}>
                        <Button variant="contained" color="primary">
                            Vizualizare
                        </Button>
                    </div>
                    <div className={classes.vizualizareButtonBox}>
                        <Button variant="contained" color="primary" onClick={this.props.submit} >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(SelectieCV);