
// Render news from JSON
document.addEventListener('DOMContentLoaded', async () => {
  const wrap = document.getElementById('newsList');
  const content = wrap.querySelector('.content');
  try{
    const res = await fetch('assets/js/news.json');
    const list = await res.json();
    content.innerHTML = list.map(item => `
      <article style="padding:12px 0;border-bottom:1px solid rgba(148,163,184,.15)">
        <div class="badge">${item.date}</div>
        <h3 style="margin:6px 0 4px">${item.title}</h3>
        <p class="notice">${item.excerpt}</p>
        <a class="btn secondary" href="#">Đọc thêm</a>
      </article>
    `).join('');
  }catch(e){
    content.innerHTML = '<p>Lỗi tải tin. Vui lòng thử lại.</p>';
  }
});
