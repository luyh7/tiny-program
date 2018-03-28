// pages/userlogin/userlogin.js
var config = require('../../config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  userLogin: function (e){
    var value = e.detail.value;
    var username = value.username;
    var password = value.password;
    if(!username || !password){
      wx.showToast({
        title: '用户名或密码不能为空',
        icon: 'none',
      })
      return;
    }
    console.log(config.service.userLoginUrl);
    wx.request({
      url: config.service.userLoginUrl,
      data: {
        "username": username, 
        "password": password},
      method: "POST",
      success: res => {
        console.log(res.data);
      }
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