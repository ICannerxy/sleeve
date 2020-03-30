import {Http} from "../utils/http";

class Theme {
    static locationA = 't-1'
    static locationE = 't-2'

    static async getHomeLoactionA() {
        return await Http.request({
            url: 'theme/by/names',
            data: {
                names: Theme.locationA
            }
        })
    }

    static async getHomeLocationE() {
        return await Http.request({
            url: ``
        })
    }
}

export {
    Theme
}