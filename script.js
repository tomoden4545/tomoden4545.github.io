<script>
// --- 1. 時計の機能 ---
function updateClock() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const formatted = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    
    // HTML側に id="clock" という要素があるか確認してください
    const clockEl = document.getElementById("clock");
    if (clockEl) {
        clockEl.textContent = formatted;
    }
}
setInterval(updateClock, 1000);
updateClock();

// --- 2. ダークモード切り替え機能（ここを追加！） ---
const themeBtn = document.getElementById('theme-toggle');

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        // bodyにdark-modeクラスを付け外しする
        document.body.classList.toggle('dark-mode');
        
        // 切り替わったか確認用（ブラウザのコンソールで見れます）
        console.log("Mode Toggled: ", document.body.classList.contains('dark-mode'));
    });
}
    const btn = document.querySelector("#theme-button");

btn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next); // 次回からこれを優先する
});

const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobileMenu");

mobileBtn.onclick = () => {
    mobileMenu.classList.toggle("active");
};

</script>
