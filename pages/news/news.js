// pages/news/news.js

// 引入list-data.js文件
let list_data = require('../../datas/list-data.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    newsData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 将娱乐新闻数据取出
    let newsData = list_data.news_data
    this.setData({newsData})
  },
  carouselToDetail(e){
    // console.log(e)
    let id = e.target.dataset.detailid
    wx.navigateTo({
      url: '/pages/newsDetail/newsDetail?id=' + id,
    })
  },
  toDetail(e){
    // console.log(e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/newsDetail/newsDetail?id=' + id,
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