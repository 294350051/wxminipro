// pages/list/list.js
Page({
    
  /**
   * 页面的初始数据
   */
  data: {
    name:'nima',
    student:[
      {id:110,name:'ea',age:30},
      {id:111,name:'eaa',age:31},
      {id:112,name:'eae',age:30}
    ],
    list:[],
    counter:0,
  },
  handleBtnClick(){
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter-1
    })
  },

  handleGetUserInfo(event){
    console.log(event)
  },

  /**
   * 生命周期函数--监听页面加载,
   */
  onLoad: function () {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // 初次渲染时候获取用户信息，也可以用在监听页面显示时候 
  onReady: function () {
     wx.getUserInfo({
       complete: (res) => {
         console.log(res)
       },
     })
     wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success:(res)=>{
        console.log(res)
        this.setData({
          list:data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})