// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
// 获取数据库的引用
const db =  cloud.database()
const gameData = db.collection('game_data')

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  // 查询用户是否已经保存过数据
  let hasData = await gameData.where({
    openid: wxContext.OPENID
  }).get()

  if (hasData.data.length) {
    // 如果有就更新
    return await gameData.where({
      openid: wxContext.OPENID
    }).update({
      data: {
        openid: wxContext.OPENID,
        gameData: event.gameData
      }
    })
  } else {
    // 如果没有
    let dataObj = {
      openid: wxContext.OPENID,
      gameData: event.gameData
    }
    let promData = await gameData.add({
      data: dataObj
    })
    return {
      code: 0,
      res: promData,
      data: dataObj
    }
  }
}