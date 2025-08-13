
// Demo KPIs & server status
document.addEventListener('DOMContentLoaded', () => {
  const playersEl = document.getElementById('kpiPlayers');
  const statusEl = document.getElementById('serverStatus');
  if(playersEl){ playersEl.textContent = (Math.floor(Math.random()*500)+500).toString(); }
  if(statusEl){
    const ok = Math.random() > 0.1;
    statusEl.textContent = ok ? 'Online' : 'Bảo trì';
    statusEl.className = ok ? 'status-up' : 'status-down';
  }
});
