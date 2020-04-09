/**
 * @auth icanner
 * @date 2020/4/8 10:13 下午
 */
import {combination} from "../../utils/util";

class SkuCode {

    code
    spuId
    totalSegments = []
    constructor(code) {
        this.code = code
        this._splitTosegments()
    }

    _splitTosegments() {
        // 2$1-44#3-9#4-14
        const spuAndSpec = this.code.split('$');
        this.spuId = spuAndSpec[0]
        const specCodeArray = spuAndSpec[1].split('#')
        const length = specCodeArray.length
        for(let i = 1 ; i <= length; i ++) {
            const segments = combination(specCodeArray, i )
            const newSegments = segments.map(segs => {
                return segs.join('#')
            })
            this.totalSegments = this.totalSegments.concat(newSegments)
        }

    }
}

export {
    SkuCode
}