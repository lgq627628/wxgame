// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const db = cloud.database()
const pics = db.collection('share_pic')
const titles = db.collection('share_title')

// 云函数入口函数
exports.main = async (event, context) => {

  let prom_pic = await pics.get()
  let prom_title = await titles.get()

  return {
    title: prom_title.data[~~(Math.random() * prom_title.data.length)],
    pic: prom_pic.data[~~(Math.random() * prom_pic.data.length)],
    errMsg: prom_title.errMsg
  }
}
