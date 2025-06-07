/**
 * App.js - Ponto de entrada principal
 * Mangrove Records - Sistema modular ES6
 */

// Imports dos estilos
import '../styles/main.css';
import '../styles/effects/logo-effects.css';


// Imports dos dados dos artistas
import { darksideoffms } from '../data/artists/darksideoffms.js';
import { darkmangrove } from '../data/artists/darkmangrove.js';
import { lendarious } from '../data/artists/lendarious.js';

// Imports dos dados dos releases
import { thisisnotatest } from '../data/releases/thisisnotatest.js';
import { submergedforest } from '../data/releases/submergedforest.js';
import { lendariousset } from '../data/releases/lendariousset.js';

// Imports dos componentes
import { ArtistCard } from '../components/cards/ArtistCard.js';
import { ReleaseCard } from '../components/cards/ReleaseCard.js';

import { logoImages } from '../utils/ImportImages.js';

// Imports dos utilitários
import { initializePlayerControls } from '../utils/playerControls.js';

/**
 * Classe principal da aplicação
 */
class MangroveApp {
    constructor() {
        this.artists = [darksideoffms, darkmangrove, lendarious];
        this.releases = [thisisnotatest, submergedforest, lendariousset];
        this.init();
    }

    /**
     * Inicializa a aplicação
     */
    init() {
        // Aguarda o DOM estar pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadContent());
        } else {
            this.loadContent();
        }
    }

    /**
     * Carrega todo o conteúdo dinâmico
     */
    loadContent() {
        console.log('🎵 Mangrove Records - Iniciando aplicação...');

        this.loadArtists();
        this.loadReleases();
        this.loadLogos();
        this.activateLoadingAnimations();
        initializePlayerControls();

        console.log('✅ Aplicação carregada com sucesso!');
    }

    /**
     * Carrega os cards de artistas dinamicamente
     */
    loadArtists() {
        const container = document.querySelector('#artists-container');

        if (!container) {
            console.warn('⚠️ Container de artistas não encontrado');
            return;
        }

        // Limpa o container
        container.innerHTML = '';

        // Ordena artistas pela ordem definida nos metadados
        const sortedArtists = this.artists
            .filter(artist => artist.metadata.ativo)
            .sort((a, b) => a.metadata.ordem - b.metadata.ordem);

        // Cria e insere os cards com animação escalonada
        sortedArtists.forEach((artist, index) => {
            const card = new ArtistCard(artist);
            card.insertInto(container, index * 200);
        });

        console.log(`🎭 ${sortedArtists.length} artistas carregados`);
    }

    /**
     * Carrega os cards de releases dinamicamente
     */
    loadReleases() {
        const container = document.querySelector('#releases-container');

        if (!container) {
            console.warn('⚠️ Container de releases não encontrado');
            return;
        }

        // Limpa o container
        container.innerHTML = '';

        // Ordena releases pela ordem definida nos metadados
        const sortedReleases = this.releases
            .filter(release => release.metadata.ativo)
            .sort((a, b) => a.metadata.ordem - b.metadata.ordem);

        // Cria e insere os cards com animação escalonada
        sortedReleases.forEach((release, index) => {
            const card = new ReleaseCard(release);
            card.insertInto(container, index * 300);
        });

        console.log(`🎵 ${sortedReleases.length} releases carregados`);
    }

    /**
     * Ativa animações de loading para elementos estáticos
     */
    activateLoadingAnimations() {
        const loadingElements = document.querySelectorAll('.loading');

        loadingElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('loaded');
            }, 100 + (index * 100));
        });
    }

    /**
     * Adiciona um novo artista dinamicamente
     * @param {Object} artistData - Dados do artista
     */
    addArtist(artistData) {
        this.artists.push(artistData);
        this.loadArtists(); // Recarrega a seção
    }

    /**
     * Remove um artista
     * @param {string} artistId - ID do artista
     */
    removeArtist(artistId) {
        this.artists = this.artists.filter(artist => artist.id !== artistId);
        this.loadArtists(); // Recarrega a seção
    }

    /**
     * Obtém artista por ID
     * @param {string} artistId - ID do artista
     * @returns {Object|null} Dados do artista
     */
    getArtist(artistId) {
        return this.artists.find(artist => artist.id === artistId) || null;
    }

    loadLogos() {
    const aboutLogo = document.querySelector('.about-logo');
    if (aboutLogo && logoImages['Logo_Mangrove_Records']) {
        aboutLogo.src = logoImages['Logo_Mangrove_Records'];
        console.log('🌿 Logo da Mangrove carregada');
    }
}
}



// Inicializa a aplicação
const app = new MangroveApp();

// Exporta para uso em outros módulos se necessário
export default app;