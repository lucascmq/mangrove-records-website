/**
 * Dados do artista: Dark Mangrove
 * Módulo ES6 - Mangrove Records
 */

import { artistImages } from '../../utils/ImportImages.js';

export const darkmangrove = {
    // Identificação única
    id: 'dark-mangrove',
    slug: 'dark-mangrove',

    // Informações básicas
    nome: 'Dark Mangrove',
    genero: 'Forest',

    // Assets visuais
    foto: artistImages['darkmangrove/profile'],
    // Descrição artística
    descricao: 'Mistura de sonoridades de uma floresta noturna alinhada à roça interiorana paulista. Uma imersão total através das frequências do Forest.',

    // Redes sociais e plataformas
    redesSociais: {
        spotify: {
            url: 'https://open.spotify.com/artist/6fYRA0BBS8DtMGPxo1RAP0',
            label: '🎵 Spotify',
            ariaLabel: 'Perfil do Dark Mangrove no Spotify'
        },
        instagram: {
            url: 'https://www.instagram.com/darkmangrove_lightscrawl/',
            label: '📷 Instagram',
            ariaLabel: 'Perfil do Dark Mangrove no Instagram'
        },
        soundcloud: {
            url: 'https://soundcloud.com/darkmangrove',
            label: '🔊 SoundCloud',
            ariaLabel: 'Perfil do Dark Mangrove no SoundCloud'
        }
    },

    // Metadados para SEO e futuras funcionalidades
    metadata: {
        alt: 'Foto do artista Dark Mangrove (Felype Montanari), fundador da Mangrove Records e produtor de Forest',
        keywords: ['forest psytrance', 'mangrove records', 'electronic music', 'dark mangrove'],
        ativo: true,
        destaque: true,
        ordem: 2 // Segunda posição no site
    }
};

// Export default para facilitar imports
export default darkmangrove;