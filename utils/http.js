/**
 * @auth icanner
 * @date 2020/3/29 8:52 下午
 */

import {config} from "../config/config";
import {promisic} from "./util";

class Http {
    static async request({url, data, method = 'GET'}) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appkey: config.appKey
            }
        })
        return res.data;
    }
}

// promisic(wx.request)({
//     url:
//     data: data,
//
// })

export {
    Http
}