/**
 * @auth icanner
 * @date 2020/4/4 9:33 下午
 */
import {CellStatus} from "../../core/enum";

class Cell {
    /**
     * 规格值
     */
    title

    /**
     * 规格值id
     */
    id

    status = CellStatus.WAITING

    constructor(spec) {
        this.title = spec.value
        this.id = spec.value_id
    }
}

export {
    Cell
}