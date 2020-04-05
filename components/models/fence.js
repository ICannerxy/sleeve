/**
 * @auth icanner
 * @date 2020/4/4 11:49 上午
 */
import {Cell} from "./cell";

class Fence {
    /**
     * 规格值
     * @type {*[]}
     */
    cells = []

    /**
     * 规格
     */
    specs

    /**
     * 规格名称 ex：颜色 图案。。
     */
    title

    /**
     * 规格id
     */
    id

    constructor(specs) {
        this.specs = specs
        this.title = specs[0].key
        this.id = specs[0].key_id
    }

    init() {
        this._initCells()
    }

    /**
     * 初始化规格列表
     * @private
     */
    _initCells() {
        this.specs.forEach(spec => {
            // some every
            const existed = this.cells.some(cell => {
               return cell.value_id === spec.id
            })
            if (existed) {
                return
            }
            const cell = new Cell(spec)
            this.cells.push(cell)
        })
    }


    pushValuetTitle(title) {
        this.cells.push(title)
    }
}

export {
    Fence
}
