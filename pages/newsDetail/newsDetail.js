// pages/newsDetail/newsDetail.js

const app = getApp()
// 引入list-data.js文件
let list_data = require('../../datas/list-data.js')
// 获取全局唯一背景音频管理器
const backgroundAudioManager = wx.getBackgroundAudioManager()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsObj: {},  //页面数据
    isPlay: false,  //当前是否播放音乐
    isCollected: false, //收藏状态
    index: null
  },

  //点击播放音乐或暂停音乐
  musicControl(){
    // 播放标识变量取反
    let isPlay = !this.data.isPlay
    this.setData({isPlay})
    // app的isMusicPlay参数更新，只留当前播放音乐的状态
    app.data.isMusicPlay = []
    app.data.isMusicPlay[this.data.index] = isPlay
    console.log(app.data.isMusicPlay)
    // 获取播放背景音乐相关数据
    let {dataUrl,title,coverImgUrl} = this.data.newsObj.music
    // 如果当前播放状态为true则播放背景音乐，否则暂停
    if (isPlay) {
      wx.playBackgroundAudio({ dataUrl, title, coverImgUrl})
    } else {
      wx.pauseBackgroundAudio()
    }
  },

  // 点击分享图标逻辑方法
  handleShare(){
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享到qq空间', '分享到微信好友'],
      itemColor: '#666',
      success (res) {
        switch (res.tapIndex) {
          case 2: 
          
        }
      }
    })
  },

  // 点击收藏图标逻辑方法
  handleCollect(){
    let isCollected = !this.data.isCollected
    this.setData({ isCollected })
    let title = isCollected ? '收藏成功' : '取消收藏'
    wx.showToast({
      title,
      icon: 'success'
    })
    let collectedObj = wx.getStorageSync('isCollected')
    collectedObj[this.data.index] = isCollected
    wx.setStorage({
      key: 'isCollected',
      data: collectedObj,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    // 根据传入的options.id的值取到对应的数据
    let index = options.id
    // 获取对应下标的页面数据
    let newsObj = list_data.news_data[index]
    // 判断初始化isPlay是 true 还是 false(根据app数据isMusicPlay判断))
    let isPlay = app.data.isMusicPlay[index] ? true:false
    this.setData({newsObj,index,isPlay})

    //判断初始化isCollected数据是true还是false(数据放在本地存储)
    let collectedObj = wx.getStorageSync('isCollected')
      
    if (!collectedObj) {
      //如果key'isCollected'不存在，说明没有收藏过
      collectedObj = {}
      wx.setStorage({
        key: 'isCollected',
        data: collectedObj,
      })
    } else {
      //如果之前已经收藏过，则根据index判断当前页面isCollected
      let isCollected = collectedObj[index] ? collectedObj[index]:false
      this.setData({isCollected})
    }

    // 监听背景音乐播放
    backgroundAudioManager.onPlay(() => {
      // console.log('音乐播放')
      //找到当前播放的音乐对应的下标
      let musicIndex = app.data.isMusicPlay.findIndex(item => {
        return item != undefined
      })
      console.log(musicIndex)
      //更新app标识音乐播放状态数据
      app.data.isMusicPlay[musicIndex] = true
      console.log(app.data.isMusicPlay)
      //更新当前页面isPlay数据
      let isPlay = app.data.isMusicPlay[this.data.index] ? app.data.isMusicPlay[this.data.index]:false
      this.setData({isPlay})
    })

    // 监听背景音乐暂停
    backgroundAudioManager.onPause(() => { 
      // console.log('音乐暂停')
      //找到当前播放的音乐对应的下标
      let musicIndex = app.data.isMusicPlay.findIndex(item => {
        return item != undefined
      })
      console.log(musicIndex)
      //更新app标识音乐播放状态数据
      app.data.isMusicPlay[musicIndex] = false
      console.log(app.data.isMusicPlay)
      //更新当前页面isPlay数据
      let isPlay = app.data.isMusicPlay[this.data.index] ? app.data.isMusicPlay[this.data.index] : false
      this.setData({ isPlay })
    })

    // 监听背景音频停止事件
    backgroundAudioManager.onEnded(() => {
      // console.log('音乐停止')
      //找到当前播放的音乐对应的下标
      let musicIndex = app.data.isMusicPlay.findIndex(item => {
        return item != undefined
      })
      console.log(musicIndex)
      //更新app标识音乐播放状态数据
      app.data.isMusicPlay[musicIndex] = false
      console.log(app.data.isMusicPlay)
      //更新当前页面isPlay数据
      let isPlay = app.data.isMusicPlay[this.data.index] ? app.data.isMusicPlay[this.data.index] : false
      this.setData({ isPlay })
    })

    // wx.onAppHide(()=>{
    //   app.data.isMusicPlay=[]
    // })
    // console.log(app.data.isMusicPlay)
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