(function () {
  const STORAGE_KEY = 'theme-preference';
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle.querySelector('.theme-icon');

  const stored = localStorage.getItem(STORAGE_KEY);
  const initial = stored === 'light' || stored === 'dark' ? stored : 'dark';
  applyTheme(initial);

  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    icon.textContent = theme === 'light' ? '☀️' : '🌙';
    toggle.setAttribute('aria-label', theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  }
})();
