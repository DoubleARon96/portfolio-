function loadGTM() {
  if (window.gtmLoaded) return; // Prevent duplicate loads
  window.gtmLoaded = true;

  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZQK1R0EW65';
  script.async = true;

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }

    gtag('js', new Date());
    gtag('config', 'G-ZQK1R0EW65');
  };

  document.head.appendChild(script);
}

function acceptCookies() {
  localStorage.setItem('cookiesAccepted', 'true');
  document.getElementById('cookie-banner').style.display = 'none';
  loadGTM();
}

function declineCookies() {
  localStorage.setItem('cookiesAccepted', 'false');
  document.getElementById('cookie-banner').style.display = 'none';
}

window.addEventListener('DOMContentLoaded', () => {
  const consent = localStorage.getItem('cookiesAccepted');

  if (consent === 'true') {
    loadGTM();
    document.getElementById('cookie-banner').style.display = 'none';
  }
});
