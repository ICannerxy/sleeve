/**
 * @auth icanner
 * @date 2020/4/4 11:49 上午
 */
import {Matrix} from "./matrix";
import {Fence as fence, Fence} from "./fence";

class FenceGroup {
    spu
    skulist = []
    /**
     * 多组规格
     */
    fences

    constructor(spu) {
        this.spu = spu
        this.skulist = spu.sku_list
    }

    /**
     * 初始化fence数组
     */
    initFences1() {
        const matrix = this._createMatirx(this.skulist)
        const fences = []
        let currentJ = -1
        matrix.each((element, i, j) => {
            if (currentJ !== j) {
                // 开启一个新列, 需要创建一个新的fence
                currentJ = j
                fences[currentJ] = this._createFence(element)
            }
            fences[currentJ].pushValuetTitle(element.value)
        })

        console.log(fences)
    }

    /**
     * 封装矩阵转秩后的数据
     */
    initFences() {
        // 规格列表转为数组
        const matrix = this._createMatirx(this.skulist)
        const fences = []

        // 矩阵转秩
        const AT = matrix.transpose();
        AT.forEach(rows => {
            const fence = new Fence(rows);
            fence.init()
            fences.push(fence)
        })
        this.fences = fences;
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