export default {
  type: 'flex',
  altText: 'Introduction',
  contents: {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '🔷使用說明🔷',
          size: '24px',
          weight: 'bold',
          align: 'center',
          color: '#74cfe2'
        },
        {
          type: 'text',
          text: '1️⃣輸入名字瞭解基本資料',
          size: '18px',
          weight: 'bold',
          margin: '3px',
          color: '#5c6079'
        },
        {
          type: 'text',
          text: '»包含自我介紹、官網連結、Twitter連結、Youtube網址',
          wrap: true,
          offsetStart: '20px',
          size: '14px',
          color: '#aaaaaa'
        },
        {
          type: 'text',
          text: '»名字的第一個字母為大寫',
          wrap: true,
          offsetStart: '20px',
          size: '14px',
          color: '#aaaaaa'
        },
        {
          type: 'text',
          text: '2️⃣輸入  !live  知道誰正在直播',
          size: '18px',
          weight: 'bold',
          margin: '3px',
          wrap: true,
          color: '#5c6079'
        },
        {
          type: 'text',
          text: '»最多回傳5筆資料',
          wrap: true,
          offsetStart: '20px',
          size: '14px',
          color: '#aaaaaa'
        },
        {
          type: 'text',
          text: '3️⃣輸入  !past  知道過去的直播',
          size: '18px',
          weight: 'bold',
          margin: '3px',
          color: '#5c6079',
          wrap: true
        },
        {
          type: 'text',
          text: '»最多回傳5筆資料',
          wrap: true,
          offsetStart: '20px',
          size: '14px',
          color: '#aaaaaa'
        },
        {
          type: 'text',
          text: '4️⃣輸入  !title  + 名字',
          size: '18px',
          weight: 'bold',
          margin: '3px',
          color: '#5c6079'
        },
        {
          type: 'text',
          text: '知道正在直播的標題和同接人數',
          size: '18px',
          weight: 'bold',
          margin: '3px',
          color: '#5c6079'
        },
        {
          type: 'text',
          text: '»!title 後有空格，名字首字為大寫',
          wrap: true,
          offsetStart: '20px',
          size: '14px',
          color: '#aaaaaa'
        },
        {
          type: 'text',
          text: '5️⃣輸入  !upcoming  知道之後的直播',
          size: '18px',
          weight: 'bold',
          margin: '3px',
          color: '#5c6079',
          wrap: true
        },
        {
          type: 'text',
          text: '»最多回傳5筆資料',
          wrap: true,
          offsetStart: '20px',
          size: '14px',
          color: '#aaaaaa'
        }
      ]
    }
  }
}
