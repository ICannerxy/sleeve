/**
 * @auth icanner
 * @date 2020/4/8 10:13 下午
 */
class SkuCode {

    code
    spuId
    segments = []
    constructor(code) {
        this.code = code
    }

    _splitTosegments() {
        // 2$1-44#3-9#4-14
        const spuAndSpec = this.code.split('$');
        this.spuId = spuAndSpec[0]
        const specCodeArray = spuAndSpec[1].split('#')


    }
}