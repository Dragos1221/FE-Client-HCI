import * as React from 'react';
import { Component } from 'react';
import ServiceApi from '../remote/ServiceApi';
import Cerinte from '../component/Cerinte';
import Cvpage from '../component/cvComponent';
import CvPage from './CvPage';
export interface ShowProps {
    
}


export interface CvInterface{
    varsta:any;
    gen:any;
    statutMarital:any;
    educatie:any;
    experientaDeMunca:any;
    imgSrc:any;
    nume:any;
}
 
export interface ShowState {
    jobsList:any;
    cvList:any;
    curentJob:number;
    curentCv:number;
    lenghtCv:number
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
            cvList:[],
            curentJob:1,
            curentCv:0,
            lenghtCv:0,
        }
        this.curentJob=1;
        this.curentCv=0;
    }

    async componentDidMount(){
        console.log('am ajuns aicis3');
        const jobs = await this.service.getAllJobs();
        const cv= await this.service.getCvFromJob('2');
        const cvL =cv.data.length;
        this.setState({
            jobsList:jobs,
            cvList:cv,
            lenghtCv:cvL,
        })
    }

    getJobOrCv = ()=>{
        console.log('am ajuns aicis');
        if(this.curentCv < 1)
        {
            return this.showJob("ceva");
        }
        else
        {
            const cv ={
                varsta:"any",
                gen:"any",
                statutMarital:"any",
                educatie:"any",
                experientaDeMunca:"any",
                imgSrc:"any",
                nume:"any",
            }
            return this.showCv(cv)
        }

        return <div>Loading....</div>
        
    }


    next =()=>{
        this.curentCv+=1;
        if(this.curentCv > this.state.lenghtCv)
        {
            this.curentCv=0;
            this.curentJob+=1;
        }
        this.setState({
            curentCv:this.curentCv,
        })
    }

    showJob(job:any)
    {
        return <Cerinte titlu={'asd'} cerinte={'sad'}  nextFunction={this.next}> </Cerinte>
    }

    showCv(cv:CvInterface)
    {
        return <CvPage classes={''}  nextFunction={this.next}></CvPage>
    }
    render() {
        console.log('am ajuns aicis2'); 
        return this.getJobOrCv();
    }
}
 
export default Show;