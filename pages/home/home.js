// pages/home/home.js

import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: [],
        activityD: null,
        themeE: null,
        themeESpu: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad(options) {
        this.initData();

    },

    /**
     * 初始化数据
     *
     * @returns {Promise<void>}
     */
    async initData() {
        const theme = new Theme();
        await theme.getAllThemes();
        const themeA = theme.getHomeLocationA();
        const themeE = theme.getHomeLocationE();

        let themeESpu = [];
        if (themeE.online) {
            const data = await Theme.getHomelocationESpu();
            if (data) {
                themeESpu = data.spu_list.splice(0, 8)
            }
        }
        const bannerB = await Banner.getHomeLocationB();
        const grid = await Category.getHomeLocationC();
        const activityD = await Activity.getHomeLocationD();
        this.setData({
            themeA,
            bannerB,
            grid,
            activityD,
            themeE,
            themeESpu
        })
    },


    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})