// theme.js - Pengaturan tema untuk semua halaman
(function() {
    function applyTheme() {
        const mode = localStorage.getItem('websiteMode') || 'light';
        const theme = localStorage.getItem('websiteTheme') || 'modern';
        const fontSize = localStorage.getItem('websiteFontSize') || '16';

        document.body.classList.remove('dark-mode', 'theme-classic', 'theme-modern', 'theme-estetik');
        
        if (mode === 'dark') {
            document.body.classList.add('dark-mode');
        }
        
        document.body.classList.add(`theme-${theme}`);
        document.documentElement.style.fontSize = fontSize + 'px';
        
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.setAttribute('name', 'theme-color');
            document.head.appendChild(metaThemeColor);
        }
        
        if (mode === 'dark') {
            metaThemeColor.setAttribute('content', '#1a1a1a');
        } else if (theme === 'classic') {
            metaThemeColor.setAttribute('content', '#1e3c3f');
        } else if (theme === 'estetik') {
            metaThemeColor.setAttribute('content', '#2c3e50');
        } else {
            metaThemeColor.setAttribute('content', '#0b3b3c');
        }
    }

    function updateActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === currentPage) {
                link.classList.add('active');
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        applyTheme();
        updateActiveNav();
    });

    window.addEventListener('storage', function(e) {
        if (e.key === 'websiteMode' || e.key === 'websiteTheme' || e.key === 'websiteFontSize') {
            applyTheme();
        }
    });
})();
