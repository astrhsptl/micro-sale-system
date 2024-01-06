import axios from "axios";

const BaseURL: string = "http://backend.localhost/api/v1/";

export default class FetchController {
    constructor(public postfixURL: string) {
        this.postfixURL = postfixURL;
    }

    async fetchList(page: number=1, pageSize: number=20) {
        let fetchResult = await axios.get(
            `${BaseURL}${this.postfixURL}?page=${page}&page_size=${pageSize}`
        );

        return fetchResult.data
    }
}