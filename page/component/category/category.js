Page({
    data: {
        category: [
            {name:'成都',id:'guowei'},
            {name:'哈尔滨',id:'shucai'},
            {name:'重庆',id:'chaohuo'},
            {name:'武汉',id:'dianxin'},
            {name:'忻州',id:'danfan'}
        ],
        detail:[],
        curIndex: 0,
        isScroll: false,
        toView: 'guowei'
    },
    onReady(){
        var self = this;
        wx.request({
            url:'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
            success(res){
                self.setData({
                    detail : res.data
                })
            }
        });
    },
    switchTab(e){
      console.log(e);
      const self = this;
      this.setData({
        isScroll: true
      })
      setTimeout(function(){
        self.setData({
          toView: e.target.dataset.id,
          curIndex: e.target.dataset.index
        })
      },0)
      setTimeout(function () {
        self.setData({
          isScroll: false
        })
      },1)
        
    }
})