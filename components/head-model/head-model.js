// components/head-model/head-model.js
const app = getApp()
Page({
  attached: function () {},
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /* switchTab 跳转到message页面*/
  switchTab() {
    wx.switchTab({
      url: '/pages/message/message'
    })
  },
  //扫描二维码
  scanMate() {
    wx.scanCode({
      onlyFromCamera: true, // 默认false，true为只允许从相机扫码
      success: res => {
        console.info(res); //打印出来，查看自己想要的返回结果数据
        console.info(res.result); //打印二维码中的内容

        // 下面写自己的业务逻辑

      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    navBarHeight: app.globalData.navBarHeight,
    menuRight: app.globalData.menuRight,
    menuTop: app.globalData.menuTop,
    menuHeight: app.globalData.menuHeight,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})