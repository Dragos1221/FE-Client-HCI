import { Container, createStyles } from '@material-ui/core';
import * as React from 'react';
import { Component } from 'react';
import Cv from '../component/cvComponent'

export interface CvPageProps {
    classes:any;
}
 
export interface CvPageState {
    nume: string;
    imgSrc: string;
    varsta: number;
    gen: string;
    stareConjugala:string;
}


 
class CvPage extends React.Component<CvPageProps, CvPageState> {
    constructor(props: CvPageProps)
    {
        super(props);
        this.state={
            nume:'Dragos',
            varsta: 23,
            imgSrc:'logo192.png',
            stareConjugala:'casa',
            gen:'caine'
        }
    }
    render() { 
        return (
            <Container >
                <Cv {...this.state}>

                </Cv>

       </Container>  );
    }
}
 
export default CvPage;