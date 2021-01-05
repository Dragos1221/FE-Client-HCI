import * as React from 'react';
import BunVenit from '../component/BunVenit';

export interface BunVenitPageProps {
    
}
 
export interface BunVenitPageState {
    age:string;
    gender:string;
    specializare:string;
    isVarstaError: boolean;
    isGenError: boolean;
    isSpecializareError: boolean;
}
 
class BunVenitPage extends React.Component<BunVenitPageProps, BunVenitPageState> {
    
    constructor(props: BunVenitPageProps) {
        super(props);
        this.state = {
            age:'',
            gender:'',
            specializare:'',
            isVarstaError:false,
            isGenError:false,
            isSpecializareError:false,
        }
    }

    handleChange = (data: any) => {
        this.setState({
            ...data,
        });
    };

    changeError = (type: any) => {
        console.log(type);
        if(type.type === "age") {
            this.setState({
                isVarstaError:false
            })
        }

        if(type.type === 'specializare') {
            this.setState({
                isSpecializareError:false
            })
        }

        if(type.type === 'gender') {
            this.setState({
                isGenError:false
            })
        }
    }

    submit = async() => {
        this.validate();
        const body = {
            age: this.state.age,
            gender: this.state.gender,
            specializare: this.state.specializare,
        };
        try {
            console.log(body);
        } catch (err) {
            console.log(err.data);
        }
    };

    validate = async () => {

        if(this.state.age.length === 0) {
            this.setState({
                isVarstaError:true
            })
        }
        else {
            this.setState({
                isVarstaError:false
            })
        }

        if(this.state.gender.length === 0) {
            this.setState({
                isGenError:true
            })
        }
        else {
            this.setState({
                isGenError:false
            })
        }

        if(this.state.specializare.length === 0) {
            this.setState({
                isSpecializareError:true
            })
        }
        else {
            this.setState({
                isSpecializareError:false
            })
        }


    }

    render() { 
        return (
            <BunVenit
                {...this.state}
                handleChange2={this.handleChange}
                changeError={this.changeError}
                submit={() => this.submit()}
            >
            </BunVenit>
        );
    }
}
 
export default BunVenitPage;