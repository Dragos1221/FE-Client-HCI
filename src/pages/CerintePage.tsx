import * as React from 'react';
import { Component } from 'react';
import Cerinte from "../component/Cerinte";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ServiceApi from '../remote/ServiceApi'

export interface CerintePageProps extends RouteComponentProps {
    
}
 
export interface CerintePageState {
    titlu:string;
    cerinte:string;
    jobList: any;
}
 
class CerintePage extends React.Component<CerintePageProps, CerintePageState> {
    private service: ServiceApi;
    constructor(props:CerintePageProps) {
        super(props);
        this.state = {
            titlu:'Lorem ipsum dolor sit amet',
            cerinte:'',
            jobList:[],
        }
        this.service= new ServiceApi();
    }

    async componentDidMount()
    {
        const data = await this.service.getAllJobs();
        console.log(data);

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