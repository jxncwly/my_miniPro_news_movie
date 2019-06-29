// pages/movie/movie.js

// 引入list-data.js文件
let list_data = require('../../datas/list-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies_data: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获得页面数据
    let movies_data = list_data.movies_data
    this.setData({movies_data})
  },

  // 点击跳转到详情页
  toDetail(e){
    // console.log(e)
    let id = e.currentTarget.dataset.id
    // console.log(id)
    wx.navigateTo({
      url: '/pages/movieDetail/movieDetail?id=' + id
    })
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