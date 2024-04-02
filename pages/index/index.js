// index.js
Page({
  data:{
    background: ['tabbar1', 'tabbar2', 'tabbar3'],
    icons: [{
      name: 'icon1',
      title: '学校概况',
      imgUrl: '/img/images/icons/icon1.png',
      backgroundColor: '#F6B059'
    }, {
      name: 'icon2',
      title: '成绩查询',
      imgUrl: '/img/images/icons/icon2.png',
      backgroundColor: '#8F6AFF'
    }, {
      name: 'icon3',
      title: '缴费入口',
      imgUrl: '/img/images/icons/icon3.png',
      backgroundColor: '#EC1E71'
    }, {
      name: 'icon4',
      title: '学院预警',
      imgUrl: '/img/images/icons/icon4.png',
      backgroundColor: '#03E391'
    }, {
      name: 'icon5',
      title: '全部',
      imgUrl: '/img/images/icons/icon5.png',
      backgroundColor: '#031E9DFF'
    }],
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
      "imagePath": "../../assets/images/card/card1.png",
      "startBackgroundColor": "#b8fcfe",
      "endBackgroundColor": "#defbfc",
    },
    {
      currentTab: 0,
      "text1": "关于开展2023新生入学教育系列培训课程的指导意见",
      "text2": "信息化管理中心",
      "imagePath": "../../assets/images/card/card2.png",
      "startBackgroundColor": "#8cb948",
      "endBackgroundColor": "#cddcb7",
    },
    {
      currentTab: 0,
      "text1": "关于加强新生入学后校园安全管理条例实行的通知",
      "text2": "教务处",
      "imagePath": "../../assets/images/card/card3.png",
      "startBackgroundColor": "#b4fdff",
      "endBackgroundColor": "#d1fafb",
    },
    {
      currentTab: 1,
      "text1": "关于加强新生入学后校园安全管理规范的通知",
      "text2": "校园新闻网",
      "imagePath": "../../assets/images/card/card1.png",
      "startBackgroundColor": "#b8fcfe",
      "endBackgroundColor": "#defbfc",
    },
    {
      currentTab: 2,
      "text1": "关于开展2023新生入学教育系列培训课程的指导意见",
      "text2": "信息化管理中心",
      "imagePath": "../../assets/images/card/card2.png",
      "startBackgroundColor": "#8cb948",
      "endBackgroundColor": "#cddcb7",
    },
    {
      currentTab: 3,
      "text1": "关于加强新生入学后校园安全管理条例实行的通知",
      "text2": "教务处",
      "imagePath": "../../assets/images/card/card3.png",
      "startBackgroundColor": "#b4fdff",
      "endBackgroundColor": "#d1fafb",
    },
  ],
  // 推荐应用数据
  recommenndCards:[{
    id:1,
    text1:"成绩查询",
    text2:"查询当前及历史成绩",
    imagePath:"/img/images/icons/icon-tj1.png",
    backgroundColor:"#fdae24"
  },
  {
    id:2,
    text1:"成绩查询",
    text2:"查询当前及历史成绩",
    imagePath:"/img/images/icons/icon-tj2.png",
    backgroundColor:"#19aeef"
  },
  {
    id:3,
    text1:"成绩查询",
    text2:"查询当前及历史成绩",
    imagePath:"/img/images/icons/icon-tj3.png",
    backgroundColor:"#22dc95"
  },
  {
    id:4,
    text1:"成绩查询",
    text2:"查询当前及历史成绩",
    imagePath:"/img/images/icons/icon-tj4.png",
    backgroundColor:"#d36a6c"
  },
],
     /* 推荐组件标题 */
     texts: ['推荐应用','根据您最近浏览和办理应用为您推荐'],
     indicatorDots: true,
     vertical: false,
     autoplay: true,
     interval: 2000,
     duration: 800,
     circular: true
  }
  
})
