// pages/logs/logs.js
const util = require('../../pages/utils/utils')
Page({

  /**
   * 页面的初始数据
   */
  data: {
		logs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
		this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})