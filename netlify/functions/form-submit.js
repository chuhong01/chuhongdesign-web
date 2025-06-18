exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email, message } = data;

    // 檢查欄位
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: '缺少必要欄位' }),
      };
    }

    // TODO: 可在此加入通知 LINE、寄送 Email、儲存資料等動作

    console.log("📨 收到詢價：", { name, email, message });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: '詢價成功' }),
    };
  } catch (error) {
    console.error("❌ 發生錯誤：", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: '伺服器錯誤' }),
    };
  }
};
