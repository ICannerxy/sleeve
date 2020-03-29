/**
 * @auth icanner
 * @date 2020/3/29 9:22 下午
 */
import {Http} from "../utils/http";

class Banner {
    static locationB = 'b-1';

    static async getHomeLocationB() {
        return await Http.request({
            url: `banner/name/${Banner.locationB}`
        })
    }
}
export {
    Banner
}