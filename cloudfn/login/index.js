// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

// 获取数据库的引用
const db = cloud.database()
const userInfo = db.collection('user_info')

// 云函数入口函数
exports.main = async (event) => {
  // 拿到微信上下文相关信息
  const { OPENID } = cloud.getWXContext()

  // 查询是否已经注册
  let users = await userInfo.where({
    openid: OPENID
  }).get()

  if (users.data.length) {
    // 已经注册过
    console.log('已经注册过')
    return {
      code: 0,
      data: users.data
    }
  } else {
    // 如果没有注册
    let nowData = {
      openid: OPENID,
      userinfo: event.userinfo,
      due: new Date()
    }
    let isAdd = await userInfo.add({
      data: nowData
    })
    return {
      code: 0,
      res: isAdd,
      data: nowData
    }
  }
}
// // 云函数入口文件
// const cloud = require('wx-server-sdk')

// cloud.init()

// // 云函数入口函数
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()

//   return {
//     event,
//     openid: wxContext.OPENID,
//     appid: wxContext.APPID,
//     unionid: wxContext.UNIONID,
//   }
// }
