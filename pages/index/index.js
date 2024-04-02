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
