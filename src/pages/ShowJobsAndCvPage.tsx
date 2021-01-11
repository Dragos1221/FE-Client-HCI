import * as React from 'react';
import { Component } from 'react';
import ServiceApi from '../remote/ServiceApi';
import Cerinte from '../component/Cerinte';
import Cvpage from '../component/cvComponent';
import CvPage from './CvPage';
import { RouteComponentProps } from 'react-router-dom';
export interface ShowProps extends RouteComponentProps {
    
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
    lenghtCv:number;
    lengthJob:number;
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
            curentJob:0,
            curentCv:0,
            lenghtCv:0,
            lengthJob:0,
        }
        this.curentJob=0;
        this.curentCv=-1;
    }


    async componentDidMount(){
        this.curentJob=parseInt(localStorage.getItem("curentJob")||"-1")+1;
        const jobs = await this.service.getAllJobs();
        const firstId = jobs.data[this.curentJob].id;
        localStorage.setItem("curentJob",""+this.curentJob);
        localStorage.setItem("curentJobId",""+firstId);
        const cv= await this.service.getCvFromJob(firstId);
        const cvL =cv.data.length;
        this.setState({
            jobsList:jobs.data,
            cvList:cv.data,
            lenghtCv:cvL,
            lengthJob:jobs.data.length
        })
        console.log(this.state);
    }

    getJobOrCv = ()=>{
        console.log('am ajuns aicis');
        if(this.curentCv < 0)
        {
            return this.showJob("ceva");
        }
        else
        {
            const curentCvFromList = this.state.cvList[this.curentCv];
            const cv ={
                varsta:curentCvFromList.age,
                gen:curentCvFromList.sex,
                statutMarital:curentCvFromList.name,
                educatie:curentCvFromList.education,
                experientaDeMunca:curentCvFromList.professional,
                imgSrc:curentCvFromList.photo_id,
                nume:curentCvFromList.name,
            }
            return this.showCv(cv)
        }  
    }


    next = async()=>{
        console.log(this.state , this.curentCv , this.curentJob);
        this.curentCv+=1;
        if(this.curentCv >= this.state.lenghtCv)
        {
            this.curentCv=-1;
            this.curentJob+=1;
            if(this.curentJob>= this.state.lengthJob)
            {
                this.props.history.push("/");
                return ;
            }
            this.props.history.push("/selectieCV");
            return;

            const firstId = this.state.jobsList[this.curentJob].id;
            try{
                const cv= await this.service.getCvFromJob(firstId);
                const cvL =cv.data.length;
                this.setState({
                    curentCv:this.curentCv,
                    cvList:cv.data,
                    lenghtCv:cvL
                });
                return
            }catch(err){
                this.setState({
                    curentCv:-1,
                    cvList:[],
                    lenghtCv:0
            });
            return;
            }
        }
        this.setState({
            curentCv:this.curentCv
        });
    }

    showJob(job:any)
    {
        return <Cerinte titlu={'asd'} cerinte={'sad'}  nextFunction={this.next}> </Cerinte>
    }

    showCv(cv:CvInterface)
    {
        return <CvPage classes={''}  {...cv} nextFunction={this.next}></CvPage>
    }
    render() {
        console.log('am ajuns aicis2'); 
        return this.getJobOrCv();
    }
}
 
export default Show;