import axios, { AxiosInstance, AxiosResponse } from "axios";

class BaseApiService {

    private api: AxiosInstance

    private BASE_URL: string = "http://localhost:3000"

    constructor(apiInstance?: AxiosInstance) {
        this.api = apiInstance || axios.create({
            baseURL: this.BASE_URL,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
    }

    async get<T>(path: string, params={}): Promise<T> {
        try {
            const response: AxiosResponse<T> = await this.api.get(path, { params });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async post<T>(url: string, data: object): Promise<T> {
        try {
          const response: AxiosResponse<T> = await this.api.post(url, data);
          return response.data;
        } catch (error) {
          throw error;
        }
      }
    
    async put<T>(url: string, data: object): Promise<T> {
        try {
          const response: AxiosResponse<T> = await this.api.put(url, data);
          return response.data;
        } catch (error) {
          throw error;
        }
    }
    
    async delete<T>(url: string, id: string): Promise<T> {
        try {
          const response: AxiosResponse<T> = await this.api.delete(`${url}/${id}`);
          return response.data;
        } catch (error) {
          throw error;
        }
    }
}

export default BaseApiService