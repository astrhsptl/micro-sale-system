import axios from "axios";

const BaseURL: string = "http://backend.localhost/api/v1/";

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
}