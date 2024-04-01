Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    /*  事例数据
   {  id:1,
      text1: "成绩查询",
      text2: "查询当前及历史成绩",
      imagePath: "/assets/images/icons/icon-tj1.png",
      backgroundColor: "#22dc95",
    }, */
    recommendCards: {
      type: Array,
      value: [],
    },
    texts:{
      type:Array,
      value:[]
    }
  }
})