/**
 * @auth icanner
 * @date 2020/4/2 5:22 下午
 */
import {Paging} from "../utils/paging";

class SpuPaging {

    static getLatestPaging() {
        return new Paging({
            url: `spu/latest`
        }, 3)
    }
}

export {
    SpuPaging
}