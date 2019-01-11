Page({
  onItemClick: function (e) {
    var targetUrl = '/page/component/qrcode/qrcode?pay=' + e.currentTarget.dataset.pay
    wx.navigateTo({
      url: targetUrl
    })
  },


  onPullDownRefresh () {
    wx.stopPullDownRefresh()
  }
})
