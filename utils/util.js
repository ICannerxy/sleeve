/**
 * @auth icanner
 * @date 2020/3/29 8:52 下午
 */

/**
 * promisic封装ajax
 * @param func
 * @returns {function(*=): Promise<any>}
 */
const promisic = function (func) {
    return function (params = {}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: (res) => {
                    resolve(res);
                },
                fail: (error) => {
                    reject(error);
                }
            });
            func(args);
        });
    };
};

export {
    promisic
}
