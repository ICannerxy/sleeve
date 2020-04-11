// components/relam/index.js
import {FenceGroup} from "../models/fence-group";
import {Judger} from "../models/judger";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    judger: Object
  },

  observers: {
    'spu': function (spu) {
      if(!spu) {
        return
      }
      const fenceGroup = new FenceGroup(spu)
      // 初始化规格列表
      fenceGroup.initFences()
      const judger = new Judger(fenceGroup)
      this.data.judger = judger
      this.bindInitData(fenceGroup)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindInitData(fenceGroup) {
      this.setData({
          fences: fenceGroup.fences
      })
    },

    /**
     * 点击cell改变状态
     *
     * @param event
     */
    onCellTap(event) {
      const cell = event.detail.cell
      const judger = this.data.judger
      judger.judge(cell)
      this.setData({
        fences: judger.fenceGroup.fences
      })
    }
  }
})
