const keywords = [
    "Styling logic", 
    "Virtual try-on", 
    "Aesthetic configuration", 
    "Color theory", 
    "Fit analysis"
];

const feedbacks = [
    "is incredibly precise", 
    "feels futuristic", 
    "is mind-blowing", 
    "saves me so much time", 
    "is highly professional"
];

const userNames = [
    "Fashion Enthusiast", 
    "Trendsetter", 
    "Tech Geek", 
    "UI/UX Designer", 
    "Grail Member"
];

function generateAIFeedback() {
    const kw = keywords[Math.floor(Math.random() * keywords.length)];
    const fb = feedbacks[Math.floor(Math.random() * feedbacks.length)];
    const name = userNames[Math.floor(Math.random() * userNames.length)];
    const randomID = Math.floor(Math.random() * 900 + 100);
    
    // 英文版組合邏輯：The [關鍵字] [回饋內容]. 
    return `"${kw} ${fb}. Highly recommended!" — ${name} #${randomID}`;
}

const testimonialEl = document.getElementById('ai-testimonial');

function updateTestimonial() {
    testimonialEl.classList.remove('show');
    
    setTimeout(() => {
        testimonialEl.innerText = generateAIFeedback();
        testimonialEl.classList.add('show');
    }, 800);
}

// 初始執行
testimonialEl.innerText = generateAIFeedback();
setInterval(updateTestimonial, 4500);

function scrollToMain() {
            document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
        }

        // 漢堡選單
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileClose = document.getElementById('mobileClose');

        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
        });
        mobileClose.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });

        mobileMenu.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });

        // Modal
        const modal = document.getElementById('loginModal');
        const closeBtn = document.querySelector('.close-btn');
        const step1 = document.getElementById('loginStep1');
        const step2 = document.getElementById('loginStep2');
        const toStep2Btn = document.getElementById('toStep2');
        const backBtn = document.getElementById('backToStep1');
        let isLoggedIn = false;

        function openModal() {
            modal.style.display = 'flex';
        }

        function closeModal() {
            modal.style.display = 'none';
            setTimeout(() => {
                step1.style.display = 'block';
                step2.style.display = 'none';
            }, 300);
        }

        // 所有登入按鈕開啟 modal
        document.querySelectorAll('.open-modal-btn').forEach(btn => {
            btn.addEventListener('click', openModal);
        });

        // big-btn：未登入時攔截
        document.querySelectorAll('.big-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (!isLoggedIn) {
                    e.preventDefault();
                    openModal();
                }
            });
        });

        // 用戶登入 → step2
        toStep2Btn.addEventListener('click', () => {
            step1.style.display = 'none';
            step2.style.display = 'block';
        });

        // 返回 → step1
        backBtn.addEventListener('click', () => {
            step2.style.display = 'none';
            step1.style.display = 'block';
        });

        // 關閉
        closeBtn.addEventListener('click', closeModal);

        window.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });