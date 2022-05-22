import axios, { AxiosResponse } from 'axios';

export const DB_URL = 'https://next-ts-course-project-default-rtdb.firebaseio.com/sales.json';

export type Sale = {
    id?: string;
    volume: number;
    username: string;
}

export type Sales = {
    [key: string]: Sale
};

export default class SalesService {
    public static getSales(): Promise<AxiosResponse<Sales>> {
        return axios.get<Sales>(DB_URL);
    }
}