// Contador de visitas
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount = parseInt(visitCount) + 1;
localStorage.setItem('visitCount', visitCount);

// Actualizar elementos
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('visitCount').textContent = visitCount;
    updateTime();
    setInterval(updateTime, 1000);
});

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('currentTime').textContent = timeString;
}

function incrementCounter() {
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    document.getElementById('visitCount').textContent = visitCount;
    
    // Efecto visual
    const counterElement = document.getElementById('visitCount');
    counterElement.style.transform = 'scale(1.2)';
    counterElement.style.color = '#ff6b6b';
    
    setTimeout(() => {
        counterElement.style.transform = 'scale(1)';
        counterElement.style.color = '#ffd700';
    }, 200);
}

function showInfo() {
    const info = {
        'Navegador': navigator.userAgent,
        'Idioma': navigator.language,
        'Plataforma': navigator.platform,
        'Resolución': screen.width + 'x' + screen.height,
        'Zona horaria': Intl.DateTimeFormat().resolvedOptions().timeZone
    };
    
    let message = 'Información del sistema:\n\n';
    for (const [key, value] of Object.entries(info)) {
        message += `${key}: ${value}\n`;
    }
    
    alert(message);
}

// Efectos visuales adicionales
document.addEventListener('mousemove', function(e) {
    const container = document.querySelector('.container');
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    container.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

document.addEventListener('mouseleave', function() {
    const container = document.querySelector('.container');
    container.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
});
