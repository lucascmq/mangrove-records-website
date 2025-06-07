/**
 * Dados do release: Submerged Forest
 * Módulo ES6 - Mangrove Records
 */

import { releaseImages } from '../../utils/ImportImages.js';


export const submergedforest = {
    // Identificação única
    id: 'submerged',
    slug: 'submerged-forest',

    // Informações básicas
    titulo: 'Submerged Forest',
    artista: 'Dark Mangrove',
    
    // Assets visuais
  capa: releaseImages['darkmangrove/release1'],    
    // Sistema de players Bandcamp
    players: {
        track: {
            descricao: 'Track em destaque',
            embedUrl: 'https://bandcamp.com/EmbeddedPlayer/track=3161746601/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/artwork=small/transparent=true/',
            linkUrl: 'https://mangroverec.bandcamp.com/album/submerged-forest-dark-mangrove',
            linkText: 'Submerged Forest by Dark Mangrove',
            ativo: true // Player padrão ativo
        },
        album: {
            descricao: 'EP completo',
            embedUrl: 'https://bandcamp.com/EmbeddedPlayer/album=2675863255/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/',
            linkUrl: 'https://mangroverec.bandcamp.com/album/ep-submerged-florest-dark-mangrove',
            linkText: 'EP Submerged Florest - Dark Mangrove by Mangrove Records',
            ativo: false // Player oculto por padrão
        }
    },

    // Controles do player
    controles: {
        track: {
            label: 'Track Destaque',
            funcao: 'togglePlayer(this, \'track\')',
            ativo: true
        },
        album: {
            label: 'EP Completo',
            funcao: 'togglePlayer(this, \'album\')',
            ativo: false
        }
    },

    // Metadados para SEO e futuras funcionalidades
    metadata: {
        alt: 'Capa do EP \'Submerged Forest\' do Dark Mangrove',
        keywords: ['forest psytrance', 'mangrove records', 'dark mangrove', 'submerged forest'],
        tipo: 'EP',
        ano: 2024, // Ajuste se necessário
        ativo: true,
        destaque: true,
        ordem: 2 // Segunda posição nos releases
    }
};

// Export default para facilitar imports
export default submergedforest;