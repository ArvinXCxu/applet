//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    longitude:0,
    latitude:0
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        const latitude = res.latitude // 纬度
        const longitude = res.longitude // 经度
        this.setData({latitude:latitude,longitude:longitude})
      }
    })
  }
})
