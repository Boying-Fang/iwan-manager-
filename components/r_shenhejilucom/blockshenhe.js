// component/blockshenhe.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    block_src:{
      type:String,
      value:''
    },
    block_head:{
      type:String,
      value:''
    },
    time:{
      type:String,
      value:''
    },
    position:{
      type:String,
      value:''
    },
    color:{
      type:String,
      value:''
    },
    status:{
      type:String,
      value:''
    },
    intro:{
      type:String,
      value:''
    },
    blur:{
        type:String,
        value:''
    },
    content:{
        type:String,
        value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag:true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    suggest:function(){
        this.setData({flag:false})
    },
    hide2:function(){
        this.setData({flag:true})
    },
    gotoshenhe:function(){
       setTimeout(() => {
        wx.navigateTo({
            url: '../../pages/shenhe/index',
          })
       }, 2000);
    }
  }
})
