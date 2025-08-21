// اسکرول به بخش‌ها
document.addEventListener('DOMContentLoaded', function() {
    // اسکرول نرم
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // فرم درخواست پروژه
    const projectForm = document.getElementById('projectForm');
    if (projectForm) {
        projectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // گرفتن مقادیر فرم
            const formData = new FormData(this);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            // نمایش پیام موفقیت
            alert('درخواست شما با موفقیت ثبت شد! به زودی با شما تماس خواهیم گرفت.');
            
            // ریست کردن فرم
            this.reset();
        });
    }

    // انیمیشن اسکرول
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // اعمال انیمیشن به کارت‌ها
    const cards = document.querySelectorAll('.skill-card, .service-card, .project-card');
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
});

// افکت پارالاکس برای بخش اصلی
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});

// اعتبارسنجی فرم پیشرفته
function validateForm() {
    const form = document.getElementById('projectForm');
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '#e2e8f0';
        }
    });
    
    return isValid;
}

// اضافه کردن اعتبارسنجی به فرم
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('projectForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            if (!validateForm()) {
                e.preventDefault();
                alert('لطفاً تمام فیلدهای اجباری را پر کنید.');
            }
        });
        
        // اعتبارسنجی بلادرنگ
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#dc3545';
                } else {
                    this.style.borderColor = '#5a67d8';
                }
            });
        });
    }
});