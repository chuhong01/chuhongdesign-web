// form-submit.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
        });

        if (response.ok) {
          // ✅ 成功後導向感謝頁
          window.location.href = 'thank-you.html';
        } else {
          alert('❌ 發送失敗，請稍後再試！');
        }
      } catch (error) {
        console.error('送出錯誤:', error);
        alert('❌ 發送時發生錯誤，請稍後再試！');
      }
    });
  }
});
