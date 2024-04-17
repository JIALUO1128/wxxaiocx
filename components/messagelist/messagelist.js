Component({
	properties:{
		messagelist:{
		type:Array,
		value:[]
		}
	},
	data:{
		
	},
	methods:{
		handleDelete(e) {  
      const messageId = e.currentTarget.dataset.id;  
      // 触发自定义事件，通知父组件删除消息  
      this.triggerEvent('delete', { id: messageId });  
    },  
	}
})