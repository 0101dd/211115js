import 'dotenv/config'
import linebot from 'linebot'
import axios from 'axios'
// import cheerio from 'cheerio'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人開始')
})

// bot.on('message', async (event) => {
//   const txt = event.message.text
//   console.log(txt)
//   event.reply(txt)
// })

// live
bot.on('message', async (event) => {
  // const text = event.message.text
  try {
    const result = []
    const { data } = await axios.get('https://api.holotools.app/v1/live')
    let i = 0
    for (i; i <= data.live.length; i++) {
      // const live = data.live[i].status
      const type = event.message.text
      console.log(type)
      if (type === 'live') {
        result.push('https://www.youtube.com/watch?v=' + data.live[i].yt_video_key)
        if (result.length >= 5) {
          break
        }
      } event.reply(result)
    }
    console.log(result)
    if (result.length > 0) {
      // event.reply(result)
    } else {
      event.reply('找不到')
    }
  } catch (error) {
    console.log(error)
    event.reply('error')
  }
})

// past
bot.on('message', async (event) => {
  // const text = event.message.text
  try {
    const result1 = []
    const { data } = await axios.get('https://api.holotools.app/v1/live')
    let i = 0
    for (i; i <= data.ended.length; i++) {
      // const past = data.ended[i].status
      const type = event.message.text
      console.log(type)
      if (type === 'past') {
        result1.push('https://www.youtube.com/watch?v=' + data.ended[i].yt_video_key)
        if (result1.length >= 5) {
          break
        }
      }
      event.reply(result1)
    }
    console.log(result1)
  } catch (error) {
    console.log(error)
    event.reply('error')
  }
})
