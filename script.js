// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Animate skill bars on load
window.addEventListener('load', () => {
  document.querySelectorAll('.skill .bar i').forEach(el => {
    const v = el.getAttribute('data-val') || 60;
    setTimeout(() => { el.style.width = v + '%'; }, 200);
  });
});

// Project modal logic
function openProject(id) {
  const modal = document.getElementById('projectModal');
  const title = document.getElementById('projTitle');
  const body = document.getElementById('projBody');

  if (id === 'lume') {
    title.innerText = 'Lume — Virtual Study Room';
    body.innerHTML = `<p style="margin:0 0 8px">Collaborative platform with Pomodoro timer, scoreboard, and smart to-do lists. Built with HTML, CSS, JS.</p>`;
  } else if (id === 'coa') {
    title.innerText = 'Portable WiFi Water Level Tracker — COA Project';
    body.innerHTML = `<p style="margin:0 0 8px">Monitors water level via WiFi and alerts using C and Arduino. IoT integration implemented.</p>`;
  } else {
    title.innerText = 'Demo Project';
    body.innerHTML = `<p style="margin:0 0 8px">Short demo description.</p>`;
  }

  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProject() {
  const modal = document.getElementById('projectModal');
  modal.classList.add('hidden');
  modal.setAttribute('aria-hidden', 'true');
}

// Contact handler
function submitContact(e) {
  e.preventDefault();
  alert('Thanks! Your message was received. (Demo — replace with EmailJS or backend)');
  document.querySelector('form.contact').reset();
}

// Admin modal
const adminBtn = document.getElementById('adminBtn');
if (adminBtn) adminBtn.addEventListener('click', () => {
  document.getElementById('adminModal').classList.remove('hidden');
  document.getElementById('adminModal').setAttribute('aria-hidden', 'false');
});

function closeAdmin() {
  document.getElementById('adminModal').classList.add('hidden');
  document.getElementById('adminModal').setAttribute('aria-hidden', 'true');
}

function adminLogin() {
  const u = document.getElementById('admUser').value;
  const p = document.getElementById('admPass').value;
  const msg = document.getElementById('adminMsg');

  if (u === 'admin' && p === 'admin123') {
    msg.innerText = 'Login successful — demo mode.';
    setTimeout(() => {
      closeAdmin();
      alert('Admin demo: You can now (not really) update content. Implement a server for persistence.');
    }, 700);
  } else {
    msg.innerText = 'Invalid credentials.';
  }
}

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 320 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
