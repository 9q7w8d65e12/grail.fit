document.querySelector('.email-link').addEventListener('click', function(e) {
    const email = 'grail20260301ai@gmail.com';
    
    // 執行複製
    navigator.clipboard.writeText(email);

    // 建立一個漂亮的小氣泡提示 (Toast)
    const toast = document.createElement('div');
    toast.innerText = 'Email 已複製! 請打開 mail app...';
    toast.style.cssText = `
        position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
        background: #7fbce1; color: #000; padding: 10px 20px;
        border-radius: 20px; z-index: 10001; font-weight: bold;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(toast);

    // 2秒後自動消失
    setTimeout(() => { toast.remove(); }, 4000);

    // 讓原生 mailto 繼續跑，不要寫 e.preventDefault()
});