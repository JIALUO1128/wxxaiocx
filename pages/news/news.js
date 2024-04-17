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
	],
	messagelist:[{
		id:1,
		text1:"补课申请",
		text2:"任课教师:系统管理员",
		imageUrl:"../../img/images/icons/yellow-bell.png",
		time:"昨天"
	},{
		id:2,
		text1:"域名申请",
		text2:"工作部门:系统维护 请假申请人:xxx",
		imageUrl:"../../img/images/icons/Internet.png",
		time:"昨天"
	},{
		id:3,
		text1:"出国旅游申请",
		text2:"工作部门:系统维护 请假申请人:xxx",
		imageUrl:"../../img/images/icons/apply.png",
		time:"昨天"
	},
],
  },
	onMessageDelete(e) {  
    const messageId = e.detail.id;  
    // 从 messagelist 中删除对应的消息项  
    const newMessagelist = this.data.messagelist.filter(item => item.id !== messageId);  
    this.setData({ messagelist: newMessagelist });  
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