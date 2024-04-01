Component({

  properties: {
    /* {
      事例数据
      id: 1,
      title: "通知公告",
    } */
    informListCard: {
      type: Array,
      value: []

    },
    /* {
      currentTab: 0,
      "text1": "关于加强新生入学后校园安全管理规范的通知",
      "text2": "校园新闻网",
      "imagePath": "../../assets/images/card/card1.png",
      "startBackgroundColor": "#b8fcfe",
      "endBackgroundColor": "#defbfc",
    }, */
    informListTitle: {
      type: Array,
      value: [],

    },
  },
  /**
   * 页面的初始数据
   */

  data: {
    currentTab: 0
  },
  methods: {
    switchTab: function (event) {
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentTab: index
      });
    },
  },
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  }
})