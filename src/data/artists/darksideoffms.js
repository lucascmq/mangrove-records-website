/**
 * Dados do artista: Darkside of FMs
 * Módulo ES6 - Mangrove Records
 */

import { artistImages } from '../../utils/ImportImages.js';

export const darksideoffms = {
    id: 'darkside-of-fms',
    slug: 'darkside-of-fms',

    // Informações básicas
    nome: 'Darkside of FMs',
    genero: 'Darkpsy',

    // Assets visuais
    foto: artistImages['darkside/profile'],
    // Descrição artística
    descricao: '"Psychedelic music for advanced minds" - Explorando as frequências mais profundas da consciência através do darkpsytrance.',

    // Redes sociais e plataformas
    redesSociais: {
        spotify: {
            url: 'https://open.spotify.com/artist/5NIN5d64Gq6ScSSohDdvYZ',
            label: '🎵 Spotify',
            ariaLabel: 'Perfil do Darkside of FMs no Spotify'
        },
        instagram: {
            url: 'https://www.instagram.com/darksidefmslive/',
            label: '📷 Instagram',
            ariaLabel: 'Perfil do Darkside of FMs no Instagram'
        },
        soundcloud: {
            url: 'https://soundcloud.com/darksidepsytrance/',
            label: '🔊 SoundCloud',
            ariaLabel: 'Perfil do Darkside of FMs no SoundCloud'
        }
    },

    // Metadados para SEO e futuras funcionalidades
    metadata: {
        alt: 'Foto do artista Darkside of FMs, produtor brasileiro de Darkpsy',
        keywords: ['darkpsy', 'psytrance', 'mangrove records', 'electronic music'],
        ativo: true,
        destaque: true, // Para possível seção "artista em destaque"
        ordem: 1 // Ordem de exibição no site
    }
};

// Export default para facilitar imports
export default darksideoffms;