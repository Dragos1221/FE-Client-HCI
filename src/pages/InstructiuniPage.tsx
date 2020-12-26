import * as React from 'react';
import { Component } from 'react';
import Instructiuni from '../component/Instructiuni';

export interface InstructiuniPageProps {
    
}
 
export interface InstructiuniPageState {
    text:string;
}
 
class InstructiuniPage extends React.Component<InstructiuniPageProps, InstructiuniPageState> {
    
    constructor(props: InstructiuniPage) {
        super(props);
        
        this.state = {
            text: 'Imaginaţi-vă că sunteţi un specialist în resurse umane responsabil de recrutarea şi selecţia resurselor umane în organizaţia din care faceţi parte. Există două posturi de muncă pentru care va trebui să consultaţi CV-urile primite din partea candidaţilor/ aplicanţilor. Cele două posturi sunt Manager Resurse Umane şi Asistent Resurse Umane.'
        }
    }
    
    submit = () => {

    }

    render() { 
        return (
            <Instructiuni
                {...this.state}
                submit={this.submit}
            ></Instructiuni>
        );
    }
}
 
export default InstructiuniPage;