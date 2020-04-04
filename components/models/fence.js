/**
 * @auth icanner
 * @date 2020/4/4 11:49 上午
 */
import {Cell} from "./cell";

class Fence {
    cells = []
    specs

    constructor(specs) {
        this.specs = specs
    }

    init() {
        this.specs.forEach(spec => {
            // this.pushValuetTitle(spec.value)
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
