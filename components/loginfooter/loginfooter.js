// components/loginfooter/loginfooter.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    footerList: [{
      id: 1,
      text: "刷脸登陆",
      iconUrl: "../../assets/images/icons/login-icons/face.png",
      path: ""
    }, {
      id: 2,
      text: "一键登录",
      iconUrl: "../../assets/images/icons/login-icons/yijiandenglu.png",
      path: ""
    }, {
      id: 3,
      text: "微信登陆",
      iconUrl: "../../assets/images/icons/login-icons/weixindenglu.png",
      path: ""
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    next_calculator: function (event) {
      const id = event.currentTarget.dataset.id;
      // 获取当前页面栈
      const pages = getCurrentPages();
      // 获取当前页面实例
      const currentPage = pages[pages.length - 1];
      
      // console.log(currentPage.route);
      if (id == 1) {
        const url = 'pages/login/login-face/login-face';
        // 判断当前页面路由是否与目标路由一致
        if (currentPage.route === url) {
          console.log('当前页面路由与目标路由一致');
        } else {
          wx.navigateTo({
            url: "/"+url,
          })
        }

      }
      if (id == 2) {
        const url = '/pages/login/login-quick/login-quick';
        wx.navigateTo({
          // url: '/pages/login/login-quick/login-quick',
          url: url,
        })

      }

    },
  }
})