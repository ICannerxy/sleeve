/**
 * @auth icanner
 * @date 2020/4/4 12:01 下午
 */
import {Http} from "../utils/http";

class Spu {
    static getDetail(id) {
        return Http.request({
            url: `spu/id/${id}/detail`
        })
    }
}

export {
    Spu
}
