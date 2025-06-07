/**
 * Dados do set: Mangrove Series EP. 1 - Lendarious DJ Set
 * Módulo ES6 - Mangrove Records
 */

import { releaseImages } from '../../utils/ImportImages.js';


export const lendariousset = {
    // Identificação única
    id: 'lendarious-set',
    slug: 'mangrove-series-ep1-lendarious',

    // Informações básicas
    titulo: 'Mangrove Series EP. 1',
    artista: 'Lendarious DJ Set',
    
    // Assets visuais (pode usar foto do Lendarious ou criar capa específica)
   capa: releaseImages['lendarious/release1'],    
    // Sistema de player SoundCloud (sem alternância)
    player: {
        tipo: 'soundcloud',
        descricao: 'DJ Set completo',
        embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2107292403&color=%231d2117&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        linkUrl: 'https://soundcloud.com/mangroverecords/mangrove-series-ep-1-lendarious-dj-set',
        linkText: 'Mangrove Series EP. 1 - Lendarious DJ Set',
        altura: '166px' // SoundCloud precisa de mais altura
    },

    // Metadados para SEO e futuras funcionalidades
    metadata: {
        alt: 'Capa do set \'Mangrove Series EP. 1\' do Lendarious',
        keywords: ['forest psytrance', 'dj set', 'mangrove records', 'lendarious'],
        tipo: 'DJ Set',
        plataforma: 'SoundCloud',
        ano: 2024, // Ajuste se necessário
        ativo: true,
        destaque: true,
        ordem: 3 // Terceira posição nos releases
    }
};

// Export default para facilitar imports
export default lendariousset;