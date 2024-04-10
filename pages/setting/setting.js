// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		settingList: [{
      id: 1,
      iconUrl: "../../img/images/icons/setting-icons/icon1.png",
      text: "新消息通知"
    }, {
      id: 2,
      iconUrl: "../../img/images/icons/setting-icons/icon2.png",
      text: "版本更新"
    }, {
      id: 3,
      iconUrl: "../../img/images/icons/setting-icons/icon3.png",
      text: "清除缓存"
    }, {
      id: 4,
      iconUrl: "../../img/images/icons/setting-icons/icon4.png",
      text: "修改密码"
    }, {
      id: 5,
      iconUrl: "../../img/images/icons/setting-icons/icon5.png",
      text: "关于我们"
    }, ]
	},
	logout() {
    // 删除名为 'userInfo' 的本地存储数据
    wx.removeStorageSync('userInfo')
    wx.navigateTo({
      url: '/pages/login/login-user/login-user',
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