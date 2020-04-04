/**
 * @auth icanner
 * @date 2020/3/30 10:14 下午
 */
import {Http} from "../utils/http";

class Activity {

    static locationD = 'a-2';

    static async getHomeLocationD() {
        return await Http.request({
            url: `activity/name/${Activity.locationD}`
        })
    }
}

export {
    Activity
}