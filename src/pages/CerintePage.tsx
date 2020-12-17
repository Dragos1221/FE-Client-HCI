import * as React from 'react';
import { Component } from 'react';
import Cerinte from "../component/Cerinte";

export interface CerintePageProps {
    
}
 
export interface CerintePageState {
    titlu:string;
    cerinte:string;
}
 
class CerintePage extends React.Component<CerintePageProps, CerintePageState> {

    constructor(props:CerintePageProps) {
        super(props);

        this.state = {
            titlu:'Lorem ipsum dolor sit amet',
            cerinte:''
        }
    }

    submit = () => {

    }

    render() { 
        return (
            <Cerinte
                {...this.state}
                submit = {this.submit}
            >
            </Cerinte>
        );
    }
}
 
export default CerintePage;