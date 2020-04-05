/**
 * @auth icanner
 * @date 2020/4/4 9:33 下午
 */
class Cell {
    /**
     * 规格值
     */
    title

    /**
     * 规格值id
     */
    id

    constructor(spec) {
        this.title = spec.value
        this.id = spec.value_id
    }
}

export {
    Cell
}