//app.js
App({
  data: {
    isMusicPlay: []
  },
  onLaunch: function () {
  //  console.log('小程序启动')
  },
  onHide: function () {
   this.data.isMusicPlay = []
  }
})