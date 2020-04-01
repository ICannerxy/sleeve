// components/hot-list/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banner: Object
  },

  observers: {
    'banner': function (banner) {
      if (!banner) {
        return
      }
      if (banner.items.length === 0) {
         return
      }
      const leftItem = banner.items.find(i => i.name === 'left')
      const rightTopItem = banner.items.find(i => i.name === 'right-top')
      const rightBottomItem = banner.items.find(i => i.name === 'right-bottom')
      this.setData({
        leftItem,
        rightTopItem,
        rightBottomItem
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
