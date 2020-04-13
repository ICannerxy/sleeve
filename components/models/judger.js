/**
 * @auth icanner
 * @date 2020/4/7 9:56 下午
 */
import {SkuCode} from "./sku_code";
import {CellStatus} from "../../core/enum";

class Judger {

    fenceGroup
    pathDict = []

    constructor(fenceGroup) {
        this.fenceGroup = fenceGroup
        this._initPathDict()
    }

    _initPathDict() {
        this.fenceGroup.spu.sku_list.forEach(sku => {
            const skuCode = new SkuCode(sku.code)
            this.pathDict = this.pathDict.concat(skuCode.totalSegments)
        })
        console.log(this.pathDict)
    }

    judge(cell) {
        console.log(cell, x, y)
        this._changeCellStatus(cell)
    }

    /**
     * 改变cell状态
     *
     * @param cell
     * @private
     */
    _changeCellStatus(cell) {
        if (cell.status === CellStatus.WAITING) {
            cell.status = CellStatus.SELECTED
        }
        if (cell.status === CellStatus.SELECTED) {
            cell.status = CellStatus.WAITING
        }
    }


}

export {
    Judger
}