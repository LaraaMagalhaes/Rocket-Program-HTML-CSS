(() => {
    const alertEl = document.getElementById('welcomeAlert');
    if (alertEl) {
      setTimeout(() => {
        const alert = bootstrap.Alert.getOrCreateInstance(alertEl);
        alert.close();
      }, 6000);
    }
  
    const badge = document.getElementById('badgeNotif');
    badge?.parentElement?.addEventListener('click', () => {
      badge.textContent = '0';
      badge.classList.replace('bg-danger', 'bg-secondary');
    });
  })();
  