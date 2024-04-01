Component({
  data: {

  },
  properties: {
    /* 接受icon数据 */
    /*  {
       id: 1,
       title: "科研服务",
       imageUrl: "../../assets/images/icons/图标.png"
     } */
    icons: {
      type: Array,
      value: []
    },
    /* 接收标题 */
    title: {
      type: String,
      value: ""
    }
  }
})