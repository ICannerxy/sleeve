/**
 * @auth icanner
 * @date 2020/4/7 9:56 下午
 */
import {SkuCode} from "./sku_code";

class Judger {

    fenceGroup
    pathDict = []

    constructor(fenceGroup) {
        this.fenceGroup = fenceGroup
        this.initPathDict()
    }

    initPathDict() {
        this.fenceGroup.spu.sku_list.forEach(sku => {
            const skuCode = new SkuCode(sku.code)
            this.pathDict = this.pathDict.concat(skuCode.totalSegments)
        })
        console.log(this.pathDict)
    }
}

export {
    Judger
}