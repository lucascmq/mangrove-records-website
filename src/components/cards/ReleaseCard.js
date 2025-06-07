/**
 * Classe ReleaseCard - Gerador de cards de releases
 * Mangrove Records - Sistema modular ES6
 */

export class ReleaseCard {
    constructor(releaseData) {
        this.release = releaseData;
    }

    /**
     * Gera o HTML do card do release
     * @returns {string} HTML completo do card
     */
    render() {
        return `
            <article class="release-card loading" data-release="${this.release.id}">
                <img src="${this.release.capa}" 
                     alt="${this.release.metadata.alt}" 
                     class="release-artwork">
                
                <div class="release-info">
                    <h3 class="release-title">${this.release.titulo}</h3>
                    <p class="release-artist">${this.release.artista}</p>

                    ${this.renderPlayers()}
                    ${this.renderControls()}
                </div>
            </article>
        `;
    }

    /**
     * Gera os players (Bandcamp ou SoundCloud)
     * @returns {string} HTML dos players
     */
    renderPlayers() {
        // Verifica se é player único (SoundCloud) ou duplo (Bandcamp)
        if (this.release.player) {
            // Player único SoundCloud
            return this.renderSoundCloudPlayer();
        } else {
            // Players duplos Bandcamp
            return this.renderBandcampPlayers();
        }
    }

    /**
     * Gera player único do SoundCloud
     * @returns {string} HTML do player SoundCloud
     */
    renderSoundCloudPlayer() {
        const player = this.release.player;
        
        return `
            <div class="player-option soundcloud-player-option">
                <p class="player-description">${player.descricao}</p>
                <iframe class="soundcloud-player" 
                    width="100%" 
                    height="${player.altura}"
                    scrolling="no" 
                    frameborder="no" 
                    allow="autoplay"
                    src="${player.embedUrl}">
                </iframe>
            </div>
        `;
    }

    /**
     * Gera os players duplos do Bandcamp
     * @returns {string} HTML dos players Bandcamp
     */
    renderBandcampPlayers() {
        const trackPlayer = this.release.players.track;
        const albumPlayer = this.release.players.album;

        return `
            <div class="player-option track-player-option"${!trackPlayer.ativo ? ' style="display: none;"' : ''}>
                <p class="player-description">${trackPlayer.descricao}</p>
                <iframe class="bandcamp-player"
                    src="${trackPlayer.embedUrl}"
                    seamless>
                    <a href="${trackPlayer.linkUrl}">${trackPlayer.linkText}</a>
                </iframe>
            </div>

            <div class="player-option album-player-option"${!albumPlayer.ativo ? ' style="display: none;"' : ''}>
                <p class="player-description">${albumPlayer.descricao}</p>
                <iframe class="bandcamp-player"
                    src="${albumPlayer.embedUrl}"
                    seamless>
                    <a href="${albumPlayer.linkUrl}">${albumPlayer.linkText}</a>
                </iframe>
            </div>
        `;
    }

    /**
     * Gera os controles do player
     * @returns {string} HTML dos controles
     */
    renderControls() {
        // SoundCloud não precisa de controles (player único)
        if (this.release.player) {
            return '';
        }

        // Bandcamp precisa dos controles duplos
        const trackControl = this.release.controles.track;
        const albumControl = this.release.controles.album;

        return `
            <div class="player-controls">
                <button onclick="${trackControl.funcao}" 
                        class="player-toggle${trackControl.ativo ? ' active' : ''}">
                    ${trackControl.label}
                </button>
                <button onclick="${albumControl.funcao}" 
                        class="player-toggle${albumControl.ativo ? ' active' : ''}">
                    ${albumControl.label}
                </button>
            </div>
        `;
    }

    /**
     * Cria o elemento DOM do card
     * @returns {HTMLElement} Elemento DOM pronto para inserção
     */
    createElement() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = this.render();
        return wrapper.firstElementChild;
    }

    /**
     * Aplica animação de entrada suave
     * @param {HTMLElement} element - Elemento DOM do card
     * @param {number} delay - Delay da animação (ms)
     */
    static applyLoadAnimation(element, delay = 0) {
        setTimeout(() => {
            element.classList.add('loaded');
        }, delay);
    }

    /**
     * Insere o card em um container específico
     * @param {string|HTMLElement} container - Seletor ou elemento container
     * @param {number} animationDelay - Delay da animação de entrada
     */
    insertInto(container, animationDelay = 0) {
        // Resolve o container
        const targetContainer = typeof container === 'string' 
            ? document.querySelector(container) 
            : container;

        if (!targetContainer) {
            console.error(`Container não encontrado: ${container}`);
            return;
        }

        // Cria e insere o elemento
        const cardElement = this.createElement();
        targetContainer.appendChild(cardElement);

        // Aplica animação de entrada
        ReleaseCard.applyLoadAnimation(cardElement, animationDelay);

        return cardElement;
    }

    /**
     * Método estático para criar múltiplos cards
     * @param {Array} releasesData - Array de dados de releases
     * @param {string|HTMLElement} container - Container alvo
     */
    static renderMultiple(releasesData, container) {
        releasesData
            .sort((a, b) => a.metadata.ordem - b.metadata.ordem) // Ordena pela ordem definida
            .forEach((release, index) => {
                const card = new ReleaseCard(release);
                card.insertInto(container, index * 300); // Escalonar animações (mais lento que artistas)
            });
    }
}

export default ReleaseCard;