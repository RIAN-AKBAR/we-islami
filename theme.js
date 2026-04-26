// theme.js - Pengaturan tema untuk semua halaman
(function() {
    // Daftar semua tema yang tersedia
    const allThemes = [
        'classic', 'modern', 'estetik', 
        'hijau', 'biru', 'ungu', 'maroon', 
        'oranye', 'toska', 'lavender', 
        'coklat', 'peach', 'navy'
    ];
    
    function applyTheme() {
        const mode = localStorage.getItem('websiteMode') || 'light';
        const theme = localStorage.getItem('websiteTheme') || 'modern';
        const fontSize = localStorage.getItem('websiteFontSize') || '16';

        // Hapus semua class tema dan mode
        document.body.classList.remove('dark-mode');
        allThemes.forEach(t => document.body.classList.remove(`theme-${t}`));
        
        // Apply mode
        if (mode === 'dark') {
            document.body.classList.add('dark-mode');
        }
        
        // Apply theme
        document.body.classList.add(`theme-${theme}`);
        
        // Apply font size
        document.documentElement.style.fontSize = fontSize + 'px';
        
        // Update meta theme-color untuk mobile
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.setAttribute('name', 'theme-color');
            document.head.appendChild(metaThemeColor);
        }
        
        // Set warna sesuai mode dan tema
        if (mode === 'dark') {
            metaThemeColor.setAttribute('content', '#1a1a1a');
        } else {
            const themeColors = {
                classic: '#1e3c3f',
                modern: '#0b3b3c',
                estetik: '#2c3e50',
                hijau: '#1b5e20',
                biru: '#0277bd',
                ungu: '#4a148c',
                maroon: '#800000',
                oranye: '#e65100',
                toska: '#00695c',
                lavender: '#4527a0',
                coklat: '#4e342e',
                peach: '#bf360c',
                navy: '#1a237e'
            };
            metaThemeColor.setAttribute('content', themeColors[theme] || '#0b3b3c');
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

    function syncSettingsFromStorage() {
        // Event listener untuk perubahan storage dari halaman lain
        window.addEventListener('storage', function(e) {
            if (e.key === 'websiteMode' || e.key === 'websiteTheme' || e.key === 'websiteFontSize') {
                applyTheme();
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        applyTheme();
        updateActiveNav();
        syncSettingsFromStorage();
    });
})();
