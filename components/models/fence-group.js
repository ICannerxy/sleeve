/**
 * @auth icanner
 * @date 2020/4/4 11:49 上午
 */
import {Matrix} from "./matrix";
import {Fence} from "./fence";

class FenceGroup {
    spu
    skulist = []

    constructor(spu) {
        this.spu = spu
        this.skulist = spu.sku_list
    }

    /**
     * 初始化fence数组
     */
    initFences() {
        const matrix = this._createMatirx(this.skulist)
        const fences = []
        let currentJ = -1
        matrix.forEach((element, i, j) => {
            if (currentJ !== j) {
                // 开启一个新列, 需要创建一个新的fence
                currentJ = j
                fences[currentJ] = this._createFence(element)
            }
            fences[currentJ].pushValuetTitle(element.value)
        } )

        console.log(fences)
    }

    _createFence(element) {
        return new Fence();
        // fence.pushValtTitle(element.value)
    }

    /**
     * 创建二维数组
     *
     * @param skuList
     * @returns {Matrix}
     * @private
     */
    _createMatirx(skuList) {
        const m = []
        skuList.forEach(sku => {
            m.push(sku.specs)
        })
        return new Matrix(m)
    }
}

export {
    FenceGroup
}