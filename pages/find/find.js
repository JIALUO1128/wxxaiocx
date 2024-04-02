// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 通知卡片标题
		informListTitle: [{
			id: 1,
			title: "通知公告",
		}, {
			id: 2,
			title: "通知公告"
		}, {
			id: 3,
			title: "综合信息"
		}, {
			id: 4,
			title: "学术动态"
		}],
			// 通知卡片数据
	informListCard: [{
		currentTab: 0,
		"text1": "关于加强新生入学后校园安全管理规范的通知",
		"text2": "校园新闻网",
		"imagePath": "../../img/images/card/card1.png",
		"startBackgroundColor": "#b8fcfe",
		"endBackgroundColor": "#defbfc",
	},
	{
		currentTab: 0,
		"text1": "关于开展2023新生入学教育系列培训课程的指导意见",
		"text2": "信息化管理中心",
		"imagePath": "../../img/images/card/card2.png",
		"startBackgroundColor": "#8cb948",
		"endBackgroundColor": "#cddcb7",
	},
	{
		currentTab: 0,
		"text1": "关于加强新生入学后校园安全管理条例实行的通知",
		"text2": "教务处",
		"imagePath": "../../img/images/card/card3.png",
		"startBackgroundColor": "#b4fdff",
		"endBackgroundColor": "#d1fafb",
	},
	{
		currentTab: 1,
		"text1": "关于加强新生入学后校园安全管理规范的通知",
		"text2": "校园新闻网",
		"imagePath": "../../img/images/card/card1.png",
		"startBackgroundColor": "#b8fcfe",
		"endBackgroundColor": "#defbfc",
	},
	{
		currentTab: 2,
		"text1": "关于开展2023新生入学教育系列培训课程的指导意见",
		"text2": "信息化管理中心",
		"imagePath": "../../img/images/card/card2.png",
		"startBackgroundColor": "#8cb948",
		"endBackgroundColor": "#cddcb7",
	},
	{
		currentTab: 3,
		"text1": "关于加强新生入学后校园安全管理条例实行的通知",
		"text2": "教务处",
		"imagePath": "../../img/images/card/card3.png",
		"startBackgroundColor": "#b4fdff",
		"endBackgroundColor": "#d1fafb",
	},
],
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