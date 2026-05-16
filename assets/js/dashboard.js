document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar-link[data-section]');
    const sections = document.querySelectorAll('.dashboard-section');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');

            // Update Active Link
            sidebarLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show Target Section
            sections.forEach(section => {
                section.style.display = 'none';
                if (section.id === targetSection) {
                    section.style.display = 'block';
                }
            });

            // If mobile or tablet (up to 1024px), close sidebar after click
            if (window.innerWidth <= 1024) {
                document.querySelector('.sidebar').classList.remove('active');
            }
        });
    });

    // Simulate Metrics
    function simulateMetrics() {
        const latencyVal = document.getElementById('latency-val');
        const tokenVal = document.getElementById('token-val');
        
        if (latencyVal) {
            setInterval(() => {
                const val = (Math.random() * (45 - 35) + 35).toFixed(2);
                latencyVal.textContent = `${val}ms`;
            }, 2000);
        }

        if (tokenVal) {
            setInterval(() => {
                const val = Math.floor(Math.random() * (1200 - 800) + 800);
                tokenVal.textContent = `${val} t/s`;
            }, 3000);
        }
    }

    simulateMetrics();

    // Chart Simulation (Using CSS heights for bars)
    const bars = document.querySelectorAll('.progress-bar-sim');
    bars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = targetWidth + '%';
        }, 500);
    });
});
