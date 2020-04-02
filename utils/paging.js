/**
 * @auth icanner
 * @date 2020/4/2 6:59 下午
 */
import {Http} from "./http";

class Paging {

    start
    count
    req
    locker = false
    url
    moreData = true
    accumulator = []

    /**
     * 构造器 默认10条 从第一页开始
     *
     * @param req
     * @param count
     * @param start
     */
    constructor(req, count = 10, start = 0) {
        this.start = start
        this.count = count
        this.req = req
        this.url = req.url
    }

    /**
     * 获取更多数据
     */
    async getMoreData() {
        if (!this.moreData) {
            return
        }
        // 获取锁
        if (!this._getLocker()) {
            return
        }
        const data = await this._actualGetData()
        // 释放锁
        this._releaseLocker();
        return data;
    }

    _getCurrentReq() {
        let url = this.url
        const params = `start=${this.start}&count=${this.count}`
        if (url.includes('?')) {
            url += '&' + params;
        } else {
            url += '?' + params;
        }
        this.req.url = url
        return this.req
    }

    /**
     * 获取锁
     *
     * @returns {boolean}
     */
    _getLocker() {
        if (this.locker) {
            return false
        }
        this.locker = true
        return true
    }

    /**
     * 释放锁
     */
    _releaseLocker() {
        this.locker = false;
    }

    /**
     * 实际调用方
     *
     * @private
     */
    async _actualGetData() {
        const req = this._getCurrentReq();
        let pagging = await Http.request(req)
        if (!pagging) {
            return null
        }
        if (pagging.total === 0) {
            return {
                empty: true,
                items: [],
                moreData: false,
                accumulator: []
            }
        }
        this.moreData = Paging._moreData(pagging.total_page, pagging.page);
        if (this.moreData) {
            this.start += this.count
        }
        this._accumulate(pagging.items)
        return {
            empty: false,
            items: pagging.items,
            moreData: this.moreData,
            accumulator: this.accumulator
        }

    }

    _accumulate(items) {
        this.accumulator.concat(items)
    }

    static _moreData(totalPage, pageNum) {
        return pageNum < totalPage - 1
    }
}

export {
    Paging
}