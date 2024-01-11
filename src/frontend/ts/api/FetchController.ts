import axios from "axios";

export const BaseURL: string = "http://176.123.169.53/api/v1/";

export default class FetchController {
    constructor(public postfixURL: string) {
        this.postfixURL = postfixURL;
    }

    async fetchList(page: number=1, pageSize: number=20, searchArgs: object={}) {
        let url = `${BaseURL}${this.postfixURL}?page=${page}&page_size=${pageSize}`

        for (const [key, value] of Object.entries(searchArgs)) {
            url += `&${key}=${value}`;
        }
        
        let fetchResult = await axios.get(url);

        return fetchResult.data
    }

    async fetchOne(id: string | number) {
        let url = `${BaseURL}${this.postfixURL}${id}/`
        
        let fetchResult = await axios.get(url);

        return fetchResult.data
    }

    async create(data: object) {
        let url = `${BaseURL}${this.postfixURL}`;
        
        let fetchResult = await axios.post(url, data);

        return fetchResult.data
    }

    async update(id: number | string, data: object) {
        let url = `${BaseURL}${this.postfixURL}${id}/`;
        
        let fetchResult = await axios.patch(url, data);

        return fetchResult.data
    }


}