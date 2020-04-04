/**
 * @auth icanner
 * @date 2020/4/4 6:11 下午
 */
class Matrix {
    /**
     * 二维数组
     */
    m

    constructor(metrix) {
        this.m = metrix
    }

    /**
     * 获取行数
     *
     * @returns {*}
     */
    getRowsNum() {
        return this.m.length
    }

    /**
     * 获取列数
     *
     * @returns {*}
     */
    getColsNum() {
        return this.m[0].length
    }


    /**
     * 遍历， 返回回调函数
     *
     * @param cb 需要回调的函数
     * @returns {*}
     */
    forEach(cb) {
        for (let j = 0; j < this.getColsNum(); j++) {
            for (let i = 0; i < this.getRowsNum(); i++) {
                const element = this.m[i][j]
                cb(element, i, j)
            }
        }
    }
}

export {
    Matrix
}