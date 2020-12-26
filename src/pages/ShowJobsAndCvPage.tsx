import * as React from 'react';
import { Component } from 'react';
import ServiceApi from '../remote/ServiceApi';
import Cerinte from '../component/Cerinte';
export interface ShowProps {
    
}
 
export interface ShowState {
    jobsList:any;
    curentJob:number;
    curentCv:number;
}
 
class Show extends React.Component<ShowProps, ShowState> {
    private service: ServiceApi;
    private curentJob:number;
    private curentCv:number;
    constructor(props:ShowProps)
    {
        super(props);
        this.service= new ServiceApi();
        this.state={
            jobsList:[],
            curentJob:1,
            curentCv:0,
        }
        this.curentJob=-1;
        this.curentCv=1;
    }

    async componentDidMount(){
        console.log('am ajuns aicis3');
        const jobs = await this.service.getAllJobs();
        this.setState({
            jobsList:jobs,
        })
    }

    getJobOrCv = ()=>{
        console.log('am ajuns aicis');
        if(this.curentJob <1)
        {
            this.curentJob+=1;
            return this.showJob("ceva");
        }

        return <div>Loading....</div>
        
    }

    showJob(job:any)
    {
        return <Cerinte titlu={'asd'} cerinte={'sad'}  submit={()=>{}}> </Cerinte>
    }
    render() {
        console.log('am ajuns aicis2'); 
        return this.getJobOrCv();
    }
}
 
export default Show;