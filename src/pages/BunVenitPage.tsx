import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BunVenit from '../component/BunVenit';

export interface BunVenitPageProps extends RouteComponentProps {
    
}
 
export interface BunVenitPageState {
    age:string;
    gender:string;
    specializare:string;
}
 
class BunVenitPage extends React.Component<BunVenitPageProps, BunVenitPageState> {
    
    constructor(props: BunVenitPageProps) {
        super(props);
        this.state = {
            age:'',
            gender:'',
            specializare:'',
        }
    }

    handleChange = (data: any) => {
        console.log("ajunge2");
        this.setState({
            ...data,
        });
    };

    submit = async() => {
        this.validate();
        localStorage.clear();
        localStorage.setItem("varsta",this.state.age);
        localStorage.setItem("gen",this.state.gender);
        localStorage.setItem("specializare",this.state.specializare);
        this.props.history.push('/show');

    };

    validate = () => {

    }

    render() { 
        return (
            <BunVenit
                {...this.state}
                handleChange2={this.handleChange}
                submit={() => this.submit()}
            >
            </BunVenit>
        );
    }
}
 
export default BunVenitPage;