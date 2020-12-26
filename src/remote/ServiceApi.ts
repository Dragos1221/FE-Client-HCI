import axios, { AxiosInstance } from 'axios';
// eslint-disable-next-line @typescript-eslint/naming-convention


class ServiceApi {
    private instance: AxiosInstance;
    constructor() {
    	this.instance = axios.create({
    		baseURL: "http://localhost:3000",
    	});
    }

    async getAllJobs() {
    	return this.instance.get('/process/allJob');
    }

    
}
export default ServiceApi;