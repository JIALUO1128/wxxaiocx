// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		things:[
			{
			id: 1,
			text: "待办",
			backgroundColor: "#f31a71",
			imageUrl: "../../img/images/icons/clock.png"
		},
		{
      id: 2,
      text: "待阅",
      backgroundColor: "#209bfd",
      imageUrl: "../../img/images/icons/reference.png"
    }, {
      id: 3,
      text: "已办",
      backgroundColor: "#ffbf6b",
      imageUrl: "../../img/images/icons/finish.png"
    }, {
      id: 4,
      text: "已阅",
      backgroundColor: "#8867f5",
      imageUrl: "../../img/images/icons/small-bell.png"
    }, {
      id: 5,
      text: "系统",
      backgroundColor: "#3ad1ae",
      imageUrl: "../../img/images/icons/smalleye.png"
    }
	]

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