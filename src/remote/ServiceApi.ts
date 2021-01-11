import axios, { AxiosInstance } from 'axios';
import {CvInterface} from '../pages/ShowJobsAndCvPage'

class ServiceApi {
    private instance: AxiosInstance;
    constructor() {
    	this.instance = axios.create({
    		baseURL:'http://localhost:3000'
    	});

    }

    async getJobs() {
    	return this.instance.get('/admin/jobs');
    }

    async getAllJobs() {
    	return this.instance.get('/process/alljobs');
    }

    async getCvFromJob(jobId:string){
        return this.instance.get<CvInterface[]>('/process/forjob/'+jobId);
    }
}
export default ServiceApi;