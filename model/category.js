/**
 * @auth icanner
 * @date 2020/3/30 8:17 下午
 */
import {Http} from "../utils/http";

class Category {
    static async getHomeLocationC() {
        return await Http.request({
            url: `category/grid/all`
        })
    }
}

export {
    Category
}
