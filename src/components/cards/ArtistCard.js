/**
 * Classe ArtistCard - Gerador de cards de artistas
 * Mangrove Records - Sistema modular ES6
 */

export class ArtistCard {
    constructor(artistData) {
        this.artist = artistData;
    }

    /**
     * Gera o HTML do card do artista
     * @returns {string} HTML completo do card
     */
    render() {
        return `
            <article class="artist-card loading">
                <img src="${this.artist.foto}" 
                     alt="${this.artist.metadata.alt}" 
                     class="artist-image">
                
                <div class="artist-info">
                    <h3 class="artist-name">${this.artist.nome}</h3>
                    <p class="artist-genre">${this.artist.genero}</p>
                    <p class="artist-description">
                        ${this.artist.descricao}
                    </p>
                    
                    <nav class="artist-links" aria-label="Links sociais do ${this.artist.nome}">
                        ${this.renderSocialLinks()}
                    </nav>
                </div>
            </article>
        `;
    }

    /**
     * Gera os links das redes sociais
     * @returns {string} HTML dos links sociais
     */
    renderSocialLinks() {
        const links = [];
        
        // Itera sobre as redes sociais do artista
        for (const [platform, data] of Object.entries(this.artist.redesSociais)) {
            links.push(`
                <a href="${data.url}" 
                   class="social-link" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   aria-label="${data.ariaLabel}">
                    ${data.label}
                </a>
            `);
        }
        
        return links.join('');
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
        ArtistCard.applyLoadAnimation(cardElement, animationDelay);

        return cardElement;
    }

    /**
     * Método estático para criar múltiplos cards
     * @param {Array} artistsData - Array de dados de artistas
     * @param {string|HTMLElement} container - Container alvo
     */
    static renderMultiple(artistsData, container) {
        artistsData
            .sort((a, b) => a.metadata.ordem - b.metadata.ordem) // Ordena pela ordem definida
            .forEach((artist, index) => {
                const card = new ArtistCard(artist);
                card.insertInto(container, index * 200); // Escalonar animações
            });
    }
}

export default ArtistCard;