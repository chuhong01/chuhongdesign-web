# 鉅虹廣告有限公司官方網站

本專案為「鉅虹廣告有限公司」的企業網站，提供公司介紹、詢價表單、最新消息分享、LINE 官方帳號互動、以及後台管理功能。

## 📌 專案簡介

- 🌐 前端語言：HTML / CSS / JavaScript（純靜態網站）
- 📦 架構：`public/` 為網站主要頁面，`admin/` 為後台登入與管理
- ☁️ 自動部署：GitHub Actions + Netlify
- 🔗 LINE：整合 LINE Messaging API，自動回覆 + 推播提醒
- 📮 表單功能：使用表單回傳成功頁面，並可串接 LINE / Email 通知
- 🔐 管理者登入系統：簡易密碼驗證（可串接 Firebase 或其他）

---

## 📁 資料夾結構

```bash
chuhongdesign-web/
├── public/
│   ├── index.html              # 首頁
│   ├── quote-form.html         # 詢價表單頁
│   ├── thanks.html             # 表單送出成功頁
│   ├── form-submit.js          # 表單提交邏輯
│   ├── style.css               # 網站樣式
├── admin/
│   ├── index.html              # 後台登入頁
│   └── dashboard.html          # 後台管理頁（如有）
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions 自動部署設定
├── .gitignore
├── README.md
