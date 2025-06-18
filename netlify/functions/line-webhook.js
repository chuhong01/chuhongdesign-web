// line-webhook.js
const express = require('express');
const line = require('@line/bot-sdk');

// 替換成你自己的 LINE Channel 設定
const config = {
  channelAccessToken: 'YOUR_CHANNEL_ACCESS_TOKEN',
  channelSecret: 'YOUR_CHANNEL_SECRET',
};

const app = express();
const port = process.env.PORT || 3000;

// 建立 LINE 客戶端
const client = new line.Client(config);

// 接收 webhook 訊息
app.post('/webhook', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then(result => res.json(result))
    .catch(err => {
      console.error(err);
      res.status(500).end();
    });
});

// 事件處理器
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return Promise.resolve(null);
  }

  const msg = event.message.text;

  // 自動回覆觸發條件
  if (msg === '我要詢價') {
    return client.replyMessage(event.replyToken, {
      type: 'text',
      text: '請點選下方連結填寫詢價表單：\nhttps://你的網域/quote-form.html',
    });
  }

  // 預設回覆
  return client.replyMessage(event.replyToken, {
    type: 'text',
    text: `您剛剛說的是：「${msg}」`,
  });
}

// 啟動伺服器
app.listen(port, () => {
  console.log(`LINE Webhook server running on port ${port}`);
});
