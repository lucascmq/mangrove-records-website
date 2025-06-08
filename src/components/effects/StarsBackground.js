/**
 * StarsBackground.js
 * Background animado com estrelas fractais para Mangrove Records
 * Sistema modular ES6
 */

class Star {
    constructor(x, y, width, height) {
        this.x = x || Math.random() * width;
        this.y = y || Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.brightness = Math.random() * 0.5 + 0.5;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseDirection = Math.random() > 0.5 ? 1 : -1;
        this.width = width;
        this.height = height;
    }

    update(mouseX, mouseY, activeRegion) {
        // Pulsar o brilho
        this.brightness += this.pulseSpeed * this.pulseDirection;
        if (this.brightness > 1) {
            this.brightness = 1;
            this.pulseDirection = -1;
        } else if (this.brightness < 0.5) {
            this.brightness = 0.5;
            this.pulseDirection = 1;
        }

        // Mover a estrela
        this.x += this.speedX;
        this.y += this.speedY;

        // Verificar se está próximo do mouse
        const distToMouse = Math.sqrt(Math.pow(mouseX - this.x, 2) + Math.pow(mouseY - this.y, 2));

        if (distToMouse < activeRegion) {
            // Calcular ângulo em relação ao mouse
            const angle = Math.atan2(this.y - mouseY, this.x - mouseX);

            // Aplicar uma pequena força de repulsão/atração
            const force = (activeRegion - distToMouse) / activeRegion * 0.3;
            this.x += Math.cos(angle) * force;
            this.y += Math.sin(angle) * force;
        }

        // Manter dentro dos limites da tela com efeito de envolvimento
        if (this.x < 0) this.x = this.width;
        if (this.x > this.width) this.x = 0;
        if (this.y < 0) this.y = this.height;
        if (this.y > this.height) this.y = 0;
    }

    draw(ctx, colors) {
        // Desenhar o brilho da estrela
        const glow = this.size * 3;
        const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, glow
        );
        gradient.addColorStop(0, colors.glow);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(this.x, this.y, glow, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Desenhar a estrela
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * this.brightness, 0, Math.PI * 2);
        ctx.fillStyle = colors.star;
        ctx.fill();
    }
}

export default class StarBackground {
    constructor(canvasId = 'starBackground') {
        this.canvas = document.getElementById(canvasId);
        
        if (!this.canvas) {
            console.error(`Canvas #${canvasId} não encontrado!`);
            return;
        }
        
        this.ctx = this.canvas.getContext('2d');
        
        // Garantir que o canvas cubra toda a tela
        this.updateCanvasSize();
        
        // Configurações
        this.nodeCount = 250;
        this.connectionDistance = 200;
        this.activeRegion = 350;
        
        // Configurações para o efeito de trilha
        this.mouseTrail = [];
        this.maxTrailLength = 30;
        
        // Esquemas de cores
        this.colorSchemes = [
            {
                bg: '#0a0a0a',
                star: 'rgba(180, 220, 180, 0.9)',
                line: 'rgba(100, 180, 120, 0.2)',
                trail: 'rgba(120, 200, 150, 0.15)',
                glow: 'rgba(180, 220, 180, 0.3)'
            },
            {
                bg: '#0a0a0f',
                star: 'rgba(180, 180, 220, 0.9)',
                line: 'rgba(120, 120, 180, 0.2)',
                trail: 'rgba(150, 150, 200, 0.15)',
                glow: 'rgba(180, 180, 220, 0.3)'
            },
            {
                bg: '#0f0a0a',
                star: 'rgba(220, 180, 180, 0.9)',
                line: 'rgba(180, 120, 120, 0.2)',
                trail: 'rgba(200, 150, 150, 0.15)',
                glow: 'rgba(220, 180, 180, 0.3)'
            }
        ];
        
        this.colorScheme = 0;
        
        this.setupEventListeners();
        this.initNodes();
        
        // Bind do método animate
        this.animate = this.animate.bind(this);
        this.start();
        
        console.log('🌟 StarBackground inicializado');
    }
    
    updateCanvasSize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        this.mouseX = this.centerX;
        this.mouseY = this.centerY;
    }
    
    setupEventListeners() {
        // Redimensionamento da janela
        window.addEventListener('resize', () => {
            this.updateCanvasSize();
            this.initNodes();
        });
        
        // Rastreamento do mouse
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.recordMousePosition(e.clientX, e.clientY);
        });
        
        document.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            this.mouseX = touch.clientX;
            this.mouseY = touch.clientY;
            this.recordMousePosition(touch.clientX, touch.clientY);
        });
        
        // Configurar botões de controle se existirem
        this.setupControlButtons();
    }
    
    setupControlButtons() {
        const colorBtn = document.getElementById('colorBtn');
        const densityBtn = document.getElementById('densityBtn');
        const resetBtn = document.getElementById('resetBtn');
        
        if (colorBtn) {
            colorBtn.addEventListener('click', () => {
                this.colorScheme = (this.colorScheme + 1) % this.colorSchemes.length;
                console.log(`🎨 Esquema de cores alterado para: ${this.colorScheme}`);
            });
        }
        
        if (densityBtn) {
            densityBtn.addEventListener('click', () => {
                this.connectionDistance = this.connectionDistance === 150 ? 200 : 
                                         this.connectionDistance === 200 ? 100 : 150;
                console.log(`🔗 Densidade de conexões: ${this.connectionDistance}`);
            });
        }
        
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.initNodes();
                console.log('🔄 Nós reinicializados');
            });
        }
    }

    recordMousePosition(x, y) {
        this.mouseTrail.push({ x, y });
        if (this.mouseTrail.length > this.maxTrailLength) {
            this.mouseTrail.shift();
        }
    }
    
    initNodes() {
        this.nodes = [];
        
        // Criar estrelas simplesmente distribuídas por toda a tela
        for (let i = 0; i < this.nodeCount; i++) {
            this.nodes.push(new Star(null, null, this.width, this.height));
        }
        
        console.log(`⭐ ${this.nodes.length} estrelas espalhadas pela tela`);
    }
    
    drawConnections() {
        const colors = this.colorSchemes[this.colorScheme];
        
        this.ctx.lineWidth = 0.5;
        
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const dx = this.nodes[i].x - this.nodes[j].x;
                const dy = this.nodes[i].y - this.nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < this.connectionDistance) {
                    // Opacidade baseada na distância
                    const opacity = 1 - (distance / this.connectionDistance);
                    
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
                    this.ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
                    this.ctx.strokeStyle = colors.line;
                    this.ctx.globalAlpha = opacity * 0.8;
                    this.ctx.stroke();
                    this.ctx.globalAlpha = 1;
                }
            }
        }
    }
    
    drawMouseTrail() {
        const colors = this.colorSchemes[this.colorScheme];
        
        for (let i = 1; i < this.mouseTrail.length; i++) {
            const prev = this.mouseTrail[i-1];
            const current = this.mouseTrail[i];
            
            this.ctx.beginPath();
            this.ctx.moveTo(prev.x, prev.y);
            this.ctx.lineTo(current.x, current.y);
            this.ctx.strokeStyle = colors.trail;
            this.ctx.lineWidth = 1.5 * (i / this.mouseTrail.length);
            this.ctx.stroke();
        }
    }
    
    drawStarConnections() {
        const colors = this.colorSchemes[this.colorScheme];
        
        if (this.mouseTrail.length > 0) {
            const currentPos = this.mouseTrail[this.mouseTrail.length-1];
            
            this.nodes.forEach(star => {
                const dx = star.x - currentPos.x;
                const dy = star.y - currentPos.y;
                const distance = Math.sqrt(dx*dx + dy*dy);
                
                if (distance < this.connectionDistance) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(currentPos.x, currentPos.y);
                    this.ctx.lineTo(star.x, star.y);
                    this.ctx.strokeStyle = colors.line;
                    this.ctx.lineWidth = 0.7 * (1 - distance/this.connectionDistance);
                    this.ctx.stroke();
                }
            });
        }
    }
    
    animate() {
        const colors = this.colorSchemes[this.colorScheme];
        
        // Limpar canvas com fundo gradiente
        this.ctx.fillStyle = colors.bg;
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        // Desenhar trilha do mouse
        this.drawMouseTrail();
        
        // Desenhar conexões entre estrelas
        this.drawConnections();
        
        // Desenhar conexões com o mouse
        this.drawStarConnections();
        
        // Atualizar e desenhar estrelas
        this.nodes.forEach(star => {
            star.update(this.mouseX, this.mouseY, this.activeRegion);
            star.draw(this.ctx, colors);
        });
        
        requestAnimationFrame(this.animate);
    }
    
    start() {
        this.animate();
    }
    
    stop() {
        // Para parar a animação se necessário
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
    
    // Métodos públicos para controle externo
    changeColorScheme(scheme) {
        if (scheme >= 0 && scheme < this.colorSchemes.length) {
            this.colorScheme = scheme;
        }
    }
    
    setConnectionDistance(distance) {
        this.connectionDistance = distance;
    }
    
    reset() {
        this.initNodes();
    }
}