import 'dotenv/config'
import linebot from 'linebot'
import axios from 'axios'
import { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw } from './com/flex.js'
import intro from './tem/intro_flex.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})

// 輸入名字回傳flex資料
bot.on('message', async (event0) => {
  if (event0.message.type === 'text') {
    const text = event0.message.text
    if (text.startsWith('Tokino') || text.startsWith('Sora')) a(event0)
    if (text.startsWith('AZki')) b(event0)
    if (text.startsWith('Robocosan')) c(event0)
    if (text.startsWith('Sakura') || text.startsWith('Miko')) d(event0)
    if (text.startsWith('Shirakami') || text.startsWith('Fubuki')) e(event0)
    if (text.startsWith('Natsuiro') || text.startsWith('Matsuri')) f(event0)
    if (text.startsWith('Yozora') || text.startsWith('Mel')) g(event0)
    if (text.startsWith('Haato') || text.startsWith('Haachama')) h(event0)
    if (text.startsWith('Aki') || text.startsWith('Rosenthal')) i(event0)
    if (text.startsWith('Minato') || text.startsWith('Aqua')) j(event0)
    if (text.startsWith('Yuzuki') || text.startsWith('Choco')) k(event0)
    if (text.startsWith('Nakiri') || text.startsWith('Ayame')) l(event0)
    if (text.startsWith('Murasaki') || text.startsWith('Shion')) m(event0)
    if (text.startsWith('Oozora') || text.startsWith('Subaru')) n(event0)
    if (text.startsWith('Ookami') || text.startsWith('Mio')) o(event0)
    if (text.startsWith('Nekomata') || text.startsWith('Okayu')) p(event0)
    if (text.startsWith('Inugami') || text.startsWith('Korone')) q(event0)
    if (text.startsWith('Shiranui') || text.startsWith('Flare')) r(event0)
    if (text.startsWith('Shirogane') || text.startsWith('Noel')) s(event0)
    if (text.startsWith('Houshou') || text.startsWith('Marine')) t(event0)
    if (text.startsWith('Usada') || text.startsWith('Pekora')) u(event0)
    if (text.startsWith('Uruha') || text.startsWith('Rushia')) v(event0)
    if (text.startsWith('Hoshimachi') || text.startsWith('Suisei')) w(event0)
    if (text.startsWith('Amane') || text.startsWith('Kanata')) x(event0)
    if (text.startsWith('Kiryu') || text.startsWith('Coco')) y(event0)
    if (text.startsWith('Tsunomaki') || text.startsWith('Watame')) z(event0)
    if (text.startsWith('Tokoyami') || text.startsWith('Towa')) aa(event0)
    if (text.startsWith('Himemori') || text.startsWith('Luna')) ab(event0)
    if (text.startsWith('Yukihana') || text.startsWith('Lamy')) ac(event0)
    if (text.startsWith('Momosuzu') || text.startsWith('Nene')) ad(event0)
    if (text.startsWith('Shishiro') || text.startsWith('Botan')) ae(event0)
    if (text.startsWith('Omaru') || text.startsWith('Polka')) af(event0)
    if (text.startsWith('Ayunda') || text.startsWith('Risu')) ag(event0)
    if (text.startsWith('Moona') || text.startsWith('Hoshinova')) ah(event0)
    if (text.startsWith('Airani') || text.startsWith('Iofifteen')) ai(event0)
    if (text.startsWith('Kureiji') || text.startsWith('Ollie')) aj(event0)
    if (text.startsWith('Anya') || text.startsWith('Melfissa')) ak(event0)
    if (text.startsWith('Pavolia') || text.startsWith('Reine')) al(event0)
    if (text.startsWith('Mori') || text.startsWith('Calliope')) am(event0)
    if (text.startsWith('Takanashi') || text.startsWith('Kiara')) an(event0)
    if (text.startsWith('Ninomae') || text.startsWith('Ina')) ao(event0)
    if (text.startsWith('Gawr') || text.startsWith('Gura')) ap(event0)
    if (text.startsWith('Watson') || text.startsWith('Amelia')) aq(event0)
    if (text.startsWith('IRys')) ar(event0)
    if (text.startsWith('Tsukumo') || text.startsWith('Sana')) as(event0)
    if (text.startsWith('Ceres') || text.startsWith('Fauna')) at(event0)
    if (text.startsWith('Ouro') || text.startsWith('Kronii')) au(event0)
    if (text.startsWith('Nanashi') || text.startsWith('Mumei')) av(event0)
    if (text.startsWith('Hakos') || text.startsWith('Bae')) aw(event0)
  }
})

// 輸入!live回傳正在直播的影片網址
bot.on('message', async (event) => {
  if (event.message.type === 'text') {
    if (event.message.text.startsWith('!live')) {
      try {
        const result = []
        const { data } = await axios.get('https://api.holotools.app/v1/live')
        // ---------------------------------------------
        const random = (min, max) => {
          return Math.round(Math.random() * (max - min)) + min
        }

        const result3 = []
        for (let i = 0; i < data.live.length; i++) {
          const num = random(0, data.live.length)
          if (result3.includes(num)) {
            i--
          } else {
            result3.push(num)
            if (result3.length >= 6) {
              break
            }
            console.log(num)
            result.push('https://www.youtube.com/watch?v=' + data.live[num].yt_video_key)
            if (result.length >= 5) {
              break
            }
          }
        }
        // ---------------------------------------------
        // for (const live of data.live) {
        //   result.push('https://www.youtube.com/watch?v=' + live.yt_video_key)
        //   if (result.length >= 5) {
        //     break
        //   }
        // }
        // console.log(result)
        // event.reply(result)
        if (result.length > 0) {
          event.reply(result)
        } else {
          event.reply('沒有人直播中')
        }
      } catch (error) {
        console.log(error)
        event.reply('error')
      }
    }
  }
})

// 輸入！past回傳ended直播影片網址
bot.on('message', async (event1) => {
  if (event1.message.type === 'text') {
    if (event1.message.text.startsWith('!past')) {
      try {
        const result = []
        const { data } = await axios.get('https://api.holotools.app/v1/live')
        // let i = 0
        const random = (min, max) => {
          return Math.round(Math.random() * (max - min)) + min
        }

        const result3 = []
        const past = data.ended
        for (let i = 0; i < past.length; i++) {
          const num = random(0, past.length)
          if (result3.includes(num)) {
            i--
          } else {
            result3.push(num)
            if (result3.length >= 6) {
              break
            }
            console.log(num)
            result.push('https://www.youtube.com/watch?v=' + past[num].yt_video_key)
            if (result.length >= 5) {
              break
            }
          }
        }
        // for (const ended of data.ended) {
        //   result.push('https://www.youtube.com/watch?v=' + ended.yt_video_key)
        //   if (result.length >= 5) {
        //     break
        //   }
        // }
        // event1.reply(result)
        console.log(result)
        if (result.length > 0) {
          event1.reply(result)
        } else {
          event1.reply('沒有過去的直播')
        }
      } catch (error) {
        console.log(error)
        event1.reply('error')
      }
    }
  }
})

// 輸入頻道名字(!title + xxx)回覆直播title 跟 同接人數-----------------------
bot.on('message', async (event3) => {
  if (event3.message.type === 'text') {
    if (event3.message.text.startsWith('!title ')) {
      const title = event3.message.text.replace('!title ', '')
      try {
        const { data } = await axios.get('https://api.holotools.app/v1/live')
        let i = 0
        for (i; i < data.live.length; i++) {
          const str = data.live[i].channel.name
          console.log('1: ' + title)
          if (str.includes(title)) {
            console.log(str.includes(title))
            console.log(data.live[i].title)
            event3.reply('👉  ' + data.live[i].title + '\n👉  同接人數： ' + String(data.live[i].live_viewers))
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})

// 輸入！upcoming回傳即將直播的影片網址
bot.on('message', async (event4) => {
  if (event4.message.type === 'text') {
    if (event4.message.text.startsWith('!upcoming')) {
      try {
        const result0 = []
        const { data } = await axios.get('https://api.holotools.app/v1/live')
        const result = data.upcoming.filter(obj => obj.title.includes('Free') === false)
        const result1 = result.filter(obj => obj.title.includes('FREE') === false)
        const result2 = result1.filter(obj => obj.title.includes('SCHEDULE') === false)
        // console.log(result2)
        const random = (min, max) => {
          return Math.round(Math.random() * (max - min)) + min
        }

        const result3 = []
        for (let i = 0; i < result2.length; i++) {
          const num = random(0, result2.length)
          if (result3.includes(num)) {
            i--
          } else {
            result3.push(num)
            if (result3.length >= 6) {
              break
            }
            console.log(num)
            result0.push('https://www.youtube.com/watch?v=' + result2[num].yt_video_key)
            if (result0.length >= 5) {
              break
            }
          }
        }
        if (result0.length > 0) {
          event4.reply(result0)
        } else {
          event4.reply('找不到')
        }
      } catch (error) {
        console.log(error)
        event4.reply('error')
      }
    }
  }
})

// 輸入 intro 回傳使用說明
bot.on('message', async (event6) => {
  if (event6.message.text === '!intro') {
    event6.reply(intro)
  }
})
