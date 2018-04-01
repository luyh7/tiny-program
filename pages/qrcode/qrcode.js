// pages/qrcode/qrcode.js
import drawQrcode from '../../libs/weapp.qrcode.min.js'
const config = require('../../config.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideLoading();
    var qrUrl = config.service.consumerPayUrl;
    drawQrcode({
      width: 200,
      height: 200,
      canvasId: 'myQrcode',
      text: 'http://111.230.51.46:2333/alipay.html'
      // text: 'https://openauth.alipaydev.com/oauth2/publicAppAuthorize.htm?app_id=2016091100484470&scope=auth_base&redirect_uri=http://111.230.51.46:2333/alipay.html'
    });
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