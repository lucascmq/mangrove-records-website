/**
 * Dados do artista: Lendarious
 * Módulo ES6 - Mangrove Records
 */

import { artistImages } from '../../utils/ImportImages.js';

export const lendarious = {
    // Identificação única
    id: 'lendarious',
    slug: 'lendarious',

    // Informações básicas
    nome: 'Lendarious',
    genero: 'Forest',
    
    // Assets visuais
foto: artistImages['lendarious/profile'],    
    // Descrição artística
    descricao: 'DJ especializado em Forest Psytrance, explorando paisagens sonoras naturais através de seleções musicais que conectam o público com as frequências orgânicas da floresta.',
    
    // Redes sociais e plataformas (DJ - sem Spotify)
    redesSociais: {
        instagram: {
            url: 'https://www.instagram.com/lendarious420/',
            label: '📷 Instagram', 
            ariaLabel: 'Perfil do Lendarious no Instagram'
        },
        soundcloud: {
            url: 'https://www.soundcloud.com/user-253220086',
            label: '🔊 SoundCloud',
            ariaLabel: 'Perfil do Lendarious no SoundCloud'
        }
    },

    // Metadados para SEO e futuras funcionalidades
    metadata: {
        alt: 'Foto do DJ Lendarious, co-fundador da Mangrove Records e especialista em Forest Psytrance',
        keywords: ['forest psytrance', 'dj', 'mangrove records', 'electronic music'],
        ativo: true,
        destaque: true,
        ordem: 3, // Terceira posição no site
        tipo: 'dj' // Diferenciação entre DJ e Live/Produtor
    }
};

// Export default para facilitar imports
export default lendarious;