import * as React from 'react';
import { Component } from 'react';
import SelectieCV from '../component/SelectieCV';

export interface SelectieCVPageProps {
    
}
 
export interface SelectieCVPageState {
    nume: string;
    varsta: string;
    ocupatie: string;
    imgSrc: string;
    stareConjugala: string;
}
 
class SelectieCVPage extends React.Component<SelectieCVPageProps, SelectieCVPageState> {
    constructor(props: SelectieCVPageProps) {
        super(props);
        this.state = {
            nume:'Dragos Andrei',
            varsta:'29',
            ocupatie:'Muncitor',
            imgSrc:'',
            stareConjugala:'Casatorit'
        }
    }

    render() { 
        return (
            <div>
                <SelectieCV
                    {...this.state}
                />
            </div>
        );
    }
}
 
export default SelectieCVPage;