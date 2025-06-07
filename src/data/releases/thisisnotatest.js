/**
 * Dados do release: This is not a test
 * Módulo ES6 - Mangrove Records
 */

export const thisisnotatest = {
    // Identificação única
    id: 'darkside',
    slug: 'this-is-not-a-test',

    // Informações básicas
    titulo: 'This is not a test',
    artista: 'Darkside of FMs',
    
    // Assets visuais
    capa: '../src/assets/images/releases/darkside/release1.jpg',
    
    // Sistema de players Bandcamp
    players: {
        track: {
            descricao: 'Track em destaque',
            embedUrl: 'https://bandcamp.com/EmbeddedPlayer/track_id:219016130/size=large/bgcol=333333/linkcol=2ebd35/minimal=true/tracklist=false/artwork=small/track=219016130/t=1/transparent=true/',
            linkUrl: 'https://mangroverec.bandcamp.com/album/ep-this-is-not-a-test-darkside-of-fms',
            linkText: 'EP This is Not a Test - Darkside Of FMs by Mangrove Records',
            ativo: true // Player padrão ativo
        },
        album: {
            descricao: 'EP completo',
            embedUrl: 'https://bandcamp.com/EmbeddedPlayer/album=3597835462/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/',
            linkUrl: 'https://mangroverec.bandcamp.com/album/ep-this-is-not-a-test-darkside-of-fms',
            linkText: 'EP This is Not a Test - Darkside Of FMs by Mangrove Records',
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
        alt: 'Capa do EP \'This is not a test\' do Darkside of FMs',
        keywords: ['darkpsy', 'psytrance', 'mangrove records', 'darkside of fms'],
        tipo: 'EP',
        ano: 2024, // Ajuste se necessário
        ativo: true,
        destaque: true,
        ordem: 1 // Primeira posição nos releases
    }
};

// Export default para facilitar imports
export default thisisnotatest;