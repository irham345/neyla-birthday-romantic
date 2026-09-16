// Countdown timer
function updateCountdown() {
    // Target date: September 17, 2026
    const targetDate = new Date('2026-09-17T00:00:00').getTime();
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
        
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = '<p style="color: #ff69b4; font-size: 1.5em; font-weight: bold;">🎉 Hari spesial Neyla! 🎉</p>';
        }
    }, 1000);
}

// Surprise button function
function surpriseMe() {
    // Create confetti effect
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.background = ['#ff69b4', '#667eea', '#764ba2', '#FFD700'][Math.floor(Math.random() * 4)];
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    
    document.body.appendChild(confetti);
    
    // Animate confetti falling
    let top = 0;
    let left = parseFloat(confetti.style.left);
    let velocityX = (Math.random() - 0.5) * 4;
    
    const animate = setInterval(() => {
        top += 5;
        left += velocityX;
        confetti.style.top = top + 'px';
        confetti.style.left = left + 'px';
        confetti.style.opacity = 1 - (top / window.innerHeight);
        
        if (top > window.innerHeight) {
            clearInterval(animate);
            confetti.remove();
        }
    }, 20);
    
    // Show alert message
    alert('💗 Selamat ulang tahun Neyla! Semoga semua impianmu terwujud! 💗');
}

// Create multiple confetti on surprise
function createMultipleConfetti() {
    for (let i = 0; i < 50; i++) {
        setTimeout(surpriseMe, i * 50);
    }
}

// Play music
function playMusic() {
    const audio = document.getElementById('birthdayMusic');
    if (audio.paused) {
        audio.play();
        alert('🎵 Lagu dimulai...');
    } else {
        audio.pause();
        alert('⏸️ Lagu dijeda');
    }
}

// Run countdown on page load
window.addEventListener('load', () => {
    updateCountdown();
    
    // Add some sparkle effect on load
    createSparkles();
});

// Sparkle effect
function createSparkles() {
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.width = '5px';
        sparkle.style.height = '5px';
        sparkle.style.background = '#FFD700';
        sparkle.style.left = Math.random() * window.innerWidth + 'px';
        sparkle.style.top = Math.random() * window.innerHeight + 'px';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '100';
        sparkle.style.animation = 'sparkleAnimation 1s forwards';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }, 500);
}

// Add sparkle animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnimation {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(style);