// pages/application/application.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    informListTitle:[{
      id:1,
      title:"最新上线"
    },
    {
      id:2,
      title:"电子商务"
    },
    {
      id:3,
      title:"教学服务"
    },
    {
      id:4,
      title:"科研服务"
    },

  ],
  icons:[{
  id:1,
  iconsTitle:"学校概况",
  imageUrl:"../../img/images/icons/school.png"
  },
  {
    id:2,
    iconsTitle:"学习地图",
    imageUrl:"../../img/images/icons/map.png"
    },
    {
      id:3,
      iconsTitle:"我的消费",
      imageUrl:"../../img/images/icons/money.png"
      },
      {
        id:4,
        iconsTitle:"电子邮件",
        imageUrl:"../../img/images/icons/email.png"
        },
        {
          id:5,
          iconsTitle:"图书借阅",
          imageUrl:"../../img/images/icons/book.png"
          },
          {
            id:6,
            iconsTitle:"奖励成果",
            imageUrl:"../../img/images/icons/trophy.png"
            },
            {
              id:7,
              iconsTitle:"我的党建",
              imageUrl:"../../img/images/icons/redflag.png"
              },
              {
                id:8,
                iconsTitle:"网上审批",
                imageUrl:"../../img/images/icons/people.png"
                },
  
  ],
  icons2:[{
		id: 1,
		title: "科研服务",
		imageUrl: "../../img/images/icons/图标.png"
	},
	{
		id: 2,
		title: "科研服务",
		imageUrl: "../../img/images/icons/图标2.png"
	}, {
		id: 3,
		title: "科研服务",
		imageUrl: "../../img/images/icons/图标3.png"
	}, {
		id: 4,
		title: "科研服务",
		imageUrl: "../../img/images/icons/图标4.png"
	}, 
], 
/* 推荐应用数据 */
recommendCards: [{
		id: 1,
		text1: "成绩查询",
		text2: "查询当前及历史成绩",
		imagePath: "/img/images/icons/icon-tj1.png",
		backgroundColor: "#22dc95",
	},
	{
		id: 2,
		text1: "图书借阅",
		text2: "查看图书借阅记录",
		imagePath: "/img/images/icons/icon-tj2.png",
		backgroundColor: "#fdae24",
	},
	{
		id: 3,
		text1: "网上查询",
		text2: "自助网上缴费",
		imagePath: "/img/images/icons/icon-tj3.png",
		backgroundColor: "#19aeef",
	},
	{
		id: 4,
		text1: "学院预警",
		text2: "查看学院预警信息",
		imagePath: "/img/images/icons/icon-tj4.png",
		backgroundColor: "#d36a6c",
	},
],
/* 推荐组件标题 */
texts: ['推荐应用','根据您最近浏览和办理应用为您推荐'],
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