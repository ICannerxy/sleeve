import {Http} from "../utils/http";

class Theme {
    static locationA = 't-1'
    static locationE = 't-2'
    static locationF = 't-3'
    static locationH = 't-4'

    themes = []

    /**
     * 获取所有主题
     *
     * @returns {Promise<void>}
     */
    async getAllThemes() {
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
        this.themes = await Http.request({
            url: `theme/by/names`,
            data: {
                names
            }
        });
    }

    /**
     * 获取首页第一个主题
     *
     * @returns {*}
     */
    getHomeLocationA() {
        return this.themes.find(t => t.name === Theme.locationA)
    }

    /**
     * 获取首页第五个主题
     *
     * @returns {*}
     */
    getHomeLocationE() {
        return this.themes.find(t => t.name === Theme.locationE)
    }

    /**
     * 获取首页第六个主题
     *
     * @returns {*}
     */
    getHomeLocationF() {
        return this.themes.find(t => t.name === Theme.locationF)
    }

    /**
     * 获取首页第七个主题
     *
     * @returns {*}
     */
    getHomeLocationH() {
        return this.themes.find(t => t.name === Theme.locationH)
    }

    static getHomelocationESpu() {
        return Theme.getThemeSpuByName(Theme.locationE)
    }

    /**
     * 根据名称获取spu单个主题
     *
     * @param name
     * @returns {Promise<any.data>}
     */
    static getThemeSpuByName(name) {
        return Http.request({
            url: `theme/name/${name}/with_spu`
        })
    }
}

export {
    Theme
}