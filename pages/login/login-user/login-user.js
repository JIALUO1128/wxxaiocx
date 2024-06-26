// pages/login/login-user/login-user.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
		navBarHeight: app.globalData.navBarHeight,
    menuRight: app.globalData.menuRight,
    menuTop: app.globalData.menuTop,
    menuHeight: app.globalData.menuHeight,
	},
  off(){
    wx.navigateBack({})
  },
  login(){
    wx.setStorageSync('userInfo', {name:"user"});
    wx.redirectTo({
      url: '/pages/setting/setting',
      success: function(res) {
        console.log('页面刷新成功');
      },
      fail: function(res) {
        console.log('页面刷新失败');
      }
    })
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