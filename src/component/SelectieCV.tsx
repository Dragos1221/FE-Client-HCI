import { Button, Card, CardContent, CardHeader, CardMedia, createStyles, Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';

export interface SelectieCVProps {
    classes: any;
    nume: string;
    varsta: string;
    ocupatie: string;
    imgSrc: string;
    stareConjugala: string;
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
    render() { 
        const {classes, nume, varsta, ocupatie, imgSrc, stareConjugala} = this.props;
        return (
            <div className={classes.bigContainer}>
                <div className = {classes.containerCV}>
                    <div className={classes.row}>
                        <div className={classes.rowItem}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {nume}
                                    </Typography>
                                    <CardMedia image = {imgSrc} className={classes.cardImage} />
                                    <Typography>
                                        Varsta: {varsta}
                                        <br/>
                                        Ocupatie: {ocupatie}
                                        <br/>
                                        Stare conjugala: {stareConjugala}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={classes.rowItem}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {nume}
                                    </Typography>
                                    <CardMedia image = {imgSrc} className={classes.cardImage} />
                                    <Typography>
                                        Varsta: {varsta}
                                        <br/>
                                        Ocupatie: {ocupatie}
                                        <br/>
                                        Stare conjugala: {stareConjugala}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={classes.rowItem}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {nume}
                                    </Typography>
                                    <CardMedia image = {imgSrc} className={classes.cardImage} />
                                    <Typography>
                                        Varsta: {varsta}
                                        <br/>
                                        Ocupatie: {ocupatie}
                                        <br/>
                                        Stare conjugala: {stareConjugala}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.rowItem}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {nume}
                                    </Typography>
                                    <CardMedia image = {imgSrc} className={classes.cardImage} />
                                    <Typography>
                                        Varsta: {varsta}
                                        <br/>
                                        Ocupatie: {ocupatie}
                                        <br/>
                                        Stare conjugala: {stareConjugala}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={classes.rowItem}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {nume}
                                    </Typography>
                                    <CardMedia image = {imgSrc} className={classes.cardImage} />
                                    <Typography>
                                        Varsta: {varsta}
                                        <br/>
                                        Ocupatie: {ocupatie}
                                        <br/>
                                        Stare conjugala: {stareConjugala}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        <div className={classes.rowItem}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {nume}
                                    </Typography>
                                    <CardMedia image = {imgSrc} className={classes.cardImage} />
                                    <Typography>
                                        Varsta: {varsta}
                                        <br/>
                                        Ocupatie: {ocupatie}
                                        <br/>
                                        Stare conjugala: {stareConjugala}
                                    </Typography>
                                </CardContent>
                            </Card>
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
                        <Button variant="contained" color="primary">
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(SelectieCV);