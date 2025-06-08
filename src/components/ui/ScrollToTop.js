/**
 * ScrollToTop.js
 * Botão elegante para voltar ao topo da página
 * Mangrove Records - Sistema modular ES6
 */

export default class ScrollToTop {
    constructor() {
        this.button = null;
        this.isVisible = false;
        this.scrollThreshold = 300; // Mostrar após 300px de scroll
        
        this.createButton();
        this.setupEventListeners();
        
        console.log('🔝 ScrollToTop inicializado');
    }
    
    createButton() {
        // Criar o botão
        this.button = document.createElement('button');
        this.button.id = 'scrollToTop';
        this.button.className = 'scroll-to-top';
        this.button.setAttribute('aria-label', 'Voltar ao topo');
        this.button.title = 'Voltar ao topo';
        
        // Ícone SVG de seta para cima
        this.button.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L4 12H8V20H16V12H20L12 4Z" fill="currentColor"/>
            </svg>
        `;
        
        // Adicionar estilos inline como fallback
        this.button.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: rgba(180, 220, 180, 0.1);
            border: 1px solid rgba(180, 220, 180, 0.3);
            border-radius: 50%;
            color: rgba(180, 220, 180, 0.9);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            transition: all 0.3s ease;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        `;
        
        // Adicionar ao DOM
        document.body.appendChild(this.button);
    }
    
    setupEventListeners() {
        // Clique no botão
        this.button.addEventListener('click', () => {
            this.scrollToTop();
        });
        
        // Scroll da página
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
        
        // Hover effects
        this.button.addEventListener('mouseenter', () => {
            this.button.style.background = 'rgba(180, 220, 180, 0.2)';
            this.button.style.borderColor = 'rgba(180, 220, 180, 0.5)';
            this.button.style.transform = this.isVisible ? 'translateY(-5px) scale(1.1)' : 'translateY(20px)';
        });
        
        this.button.addEventListener('mouseleave', () => {
            this.button.style.background = 'rgba(180, 220, 180, 0.1)';
            this.button.style.borderColor = 'rgba(180, 220, 180, 0.3)';
            this.button.style.transform = this.isVisible ? 'translateY(0)' : 'translateY(20px)';
        });
    }
    
    handleScroll() {
        const scrollY = window.scrollY;
        const shouldShow = scrollY > this.scrollThreshold;
        
        if (shouldShow && !this.isVisible) {
            this.showButton();
        } else if (!shouldShow && this.isVisible) {
            this.hideButton();
        }
    }
    
    showButton() {
        this.isVisible = true;
        this.button.style.opacity = '1';
        this.button.style.visibility = 'visible';
        this.button.style.transform = 'translateY(0)';
    }
    
    hideButton() {
        this.isVisible = false;
        this.button.style.opacity = '0';
        this.button.style.visibility = 'hidden';
        this.button.style.transform = 'translateY(20px)';
    }
    
    scrollToTop() {
        // Animação suave para o topo
        const start = window.scrollY;
        const duration = 800; // 800ms
        const startTime = performance.now();
        
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
        
        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);
            
            window.scrollTo(0, start * (1 - easedProgress));
            
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };
        
        requestAnimationFrame(animateScroll);
        
        // Feedback visual
        this.button.style.transform = 'translateY(0) scale(0.9)';
        setTimeout(() => {
            this.button.style.transform = 'translateY(0) scale(1)';
        }, 150);
    }
    
    // Métodos públicos para controle externo
    setThreshold(pixels) {
        this.scrollThreshold = pixels;
    }
    
    destroy() {
        if (this.button && this.button.parentNode) {
            this.button.parentNode.removeChild(this.button);
        }
        window.removeEventListener('scroll', this.handleScroll);
        console.log('🗑️ ScrollToTop removido');
    }
    
    hide() {
        this.hideButton();
    }
    
    show() {
        this.showButton();
    }
}