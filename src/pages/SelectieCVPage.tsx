import * as React from 'react';
import { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import SelectieCV from '../component/SelectieCV';
import ServiceApi from '../remote/ServiceApi';

export interface SelectieCVPageProps extends RouteComponentProps {
    
}
 
export interface SelectieCVPageState {
    cvList:any;
}
 
class SelectieCVPage extends React.Component<SelectieCVPageProps, SelectieCVPageState> {
    private service:ServiceApi= new ServiceApi();
    constructor(props: SelectieCVPageProps) {
        super(props);
        this.state = {
           cvList:[
            {
                "age": "16",
                "cv_id": 3,
                "education": "idk",
                "id": 1,
                "job_id": 2,
                "name": "Moise",
                "order_in_job": 1,
                "photo_id": "https://firebasestorage.googleapis.com/v0/b/jobs-cv.appspot.com/o/Thu%20Dec%2024%202020%2012%3A39%3A54%20GMT%2B0200%20(Eastern%20European%20Standard%20Time)-asd.jpg?alt=media&token=7a6c7fe6-7ace-4512-81e8-ab8e3c341ed8",
                "professional": "professional history3",
                "sex": "F"
            },
           ]
        }
    }

    async componentDidMount(){
        const curentJob = localStorage.getItem("curentJobId") ||'';
        try{
            const data = await this.service.getCvFromJob(curentJob);
            console.log(data);
            this.setState({
                cvList:data.data,
            })
            
        }catch(err){

        }
    }

    submit= ()=>{
        this.props.history.push("/show");
    }
    render() { 
        return (
            <div style={{width:'100%'}}>
                <SelectieCV
                    {...this.state} submit = {this.submit}
                />
            </div>
        );
    }
}
 
export default SelectieCVPage;