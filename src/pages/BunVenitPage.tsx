import * as React from 'react';
import { Component } from 'react';
import BunVenit from '../component/BunVenit';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface BunVenitPageProps extends RouteComponentProps {
    
}
 
export interface BunVenitPageState  {
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
        const body = {
            age: this.state.age,
            gender: this.state.gender,
            specializare: this.state.specializare,
        };
        try {
            localStorage.setItem('age',this.state.age);
            localStorage.setItem('gender',this.state.gender);
            localStorage.setItem('specializare',this.state.specializare);
            this.props.history.push('/cerinte')
        } catch (err) {
            console.log(err.data);
        }
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