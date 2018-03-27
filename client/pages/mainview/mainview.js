// pages/mainview/mainview.js
var icon = new Array(
  './user-unlogin.png',
  './user-unlogin.png',
  './user-unlogin.png',
  './user-unlogin.png',
  './user-unlogin.png',
  './user-unlogin.png',
  './user-unlogin.png',
  './user-unlogin.png',
  './user-unlogin.png'
)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    listData: [
      { "code": 0, tr: ["收款码", "我的收入", "我的店铺"] },
      { "code": 1, tr: ["设备", "余额理财", "收银员"] },
      { "code": 2, tr: ["餐饮/网店", "会员", "商户贷款"] }
    ],

    listIcon: [
      './user-unlogin.png',
      './user-unlogin.png',
      './user-unlogin.png',
      './user-unlogin.png',
      './user-unlogin.png',
      './user-unlogin.png',
      './user-unlogin.png',
      './user-unlogin.png',
      './user-unlogin.png'
    ]
  },

  bindTap0: function(){
    wx.showLoading({
      title: '加载中',
      // mask: true
    });
    wx.navigateTo({
      url: '../qrcode/qrcode',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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