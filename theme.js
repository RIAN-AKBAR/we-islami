
// theme.js - Pengaturan tema untuk semua halaman
(function() {
    // Fungsi untuk menerapkan tema
    function applyTheme() {
        const mode = localStorage.getItem('websiteMode') || 'light';
        const theme = localStorage.getItem('websiteTheme') || 'modern';
        const fontSize = localStorage.getItem('websiteFontSize') || '16';

        // Hapus semua class tema dan mode
        document.body.classList.remove('dark-mode', 'theme-classic', 'theme-modern', 'theme-estetik');
        
        // Terapkan mode
        if (mode === 'dark') {
            document.body.classList.add('dark-mode');
        }
        
        // Terapkan tema
        document.body.classList.add(`theme-${theme}`);
        
        // Terapkan ukuran font
        document.documentElement.style.fontSize = fontSize + 'px';
        
        console.log('Theme applied:', { mode, theme, fontSize });
    }

    // Fungsi untuk update active class di navigasi
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

    // Terapkan tema saat halaman dimuat
    document.addEventListener('DOMContentLoaded', function() {
        applyTheme();
        updateActiveNav();
    });

    // Dengarkan perubahan localStorage dari halaman lain
    window.addEventListener('storage', function(e) {
        if (e.key === 'websiteMode' || e.key === 'websiteTheme' || e.key === 'websiteFontSize') {
            applyTheme();
        }
    });
})();
