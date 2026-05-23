// ═══ VOIAGO DASHBOARD - SHARED JS ═══

// ── Auth Guard ──────────────────────────────────────────────
function getUser() {
  const u = localStorage.getItem('voiago_user');
  return u ? JSON.parse(u) : null;
}

function requireAuth() {
  const user = getUser();
  if (!user) {
    window.location.href = 'signup.html';
    return null;
  }
  return user;
}

function logout() {
  localStorage.removeItem('voiago_user');
  sessionStorage.removeItem('voiago_open_dashboard');
  window.location.href = 'Index.html';
}

// ── Populate User Info ────────────────────────────────────────
function populateUser() {
  const user = getUser();
  if (!user) return;
  const nameEls = document.querySelectorAll('[data-user-name]');
  const roleEls = document.querySelectorAll('[data-user-role]');
  const initEls = document.querySelectorAll('[data-user-initial]');
  nameEls.forEach(el => el.textContent = user.name || 'مستخدم');
  roleEls.forEach(el => el.textContent = user.role === 'admin' ? 'مدير' : 'سائح');
  initEls.forEach(el => el.textContent = (user.name || 'U')[0].toUpperCase());
}

// ── Toast ─────────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = `toast ${type} show`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3500);
}

// ── Active Nav ─────────────────────────────────────────────────
function setActiveNav() {
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === path) {
      item.classList.add('active');
    }
  });
}

// ── Mobile Menu ───────────────────────────────────────────────
function toggleSidebar() {
  document.querySelector('.dash-sidebar').classList.toggle('open');
}

// ── Chart Helpers (CSS-only mini charts) ──────────────────────
function animateValues() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'));
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current.toLocaleString('ar');
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}

function animateProgressBars() {
  document.querySelectorAll('.progress-fill[data-width]').forEach(bar => {
    const w = bar.getAttribute('data-width');
    setTimeout(() => bar.style.width = w + '%', 200);
  });
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const user = requireAuth();
  if (!user) return;
  populateUser();
  setActiveNav();
  animateValues();
  animateProgressBars();
});
