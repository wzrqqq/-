Page({
  data: {
    img: '/image/wechat-qrcode.jpg'
  },

  onLoad: function (options) {
    if (options.pay == 'wechat') {
      this.data.img = '/image/wechat-qrcode.jpg'
    } else {
      this.data.img = '/image/alipay-qrcode.jpg'
    }
  },

  onPullDownRefresh () {
    wx.stopPullDownRefresh()
  }
})
