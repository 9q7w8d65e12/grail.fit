document.addEventListener('DOMContentLoaded', function() {
    const billingToggle = document.getElementById('billingToggle');
    const basicPriceElement = document.getElementById('price-basic');
    const proPriceElement = document.getElementById('price-pro');

    // 定義價格數據
    const prices = {
        monthly: {
            basic: 'NT$339 <span>/月</span>',
            pro: 'NT$599 <span>/月</span>'
        },
        yearly: {
            // 參考圖片：年繳優惠通常為總額或大幅折扣後的平均
            // 這裡顯示折扣後的年繳總額
            basic: 'NT$329 <span>/月 (省下 $840)</span>',
            pro: 'NT$499 <span>/月 (省下 $1,200)</span>'
        }
    };

    // 切換事件
    billingToggle.addEventListener('change', function() {
        if (this.checked) {
            // 切換到年繳
            updatePrices('yearly');
        } else {
            // 切換到月繳
            updatePrices('monthly');
        }
    });

    function updatePrices(type) {
        // 加入簡單的淡出淡入動畫效果
        [basicPriceElement, proPriceElement].forEach(el => {
            el.style.opacity = 0;
        });

        setTimeout(() => {
            basicPriceElement.innerHTML = prices[type].basic;
            proPriceElement.innerHTML = prices[type].pro;
            
            [basicPriceElement, proPriceElement].forEach(el => {
                el.style.opacity = 1;
            });
        }, 200);
    }
    
    // 初始化價格顯示（CSS 已處理轉場）
    basicPriceElement.style.transition = 'opacity 0.2s ease';
    proPriceElement.style.transition = 'opacity 0.2s ease';
});