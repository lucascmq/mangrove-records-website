/**
 * Utilitários para controle dos players de releases
 * Mangrove Records - Sistema modular ES6
 */

/**
 * Alterna entre track destaque e EP completo
 * @param {HTMLElement} button - Botão clicado
 * @param {string} type - Tipo do player ('track' ou 'album')
 */
window.togglePlayer = function(button, type) {
    // Encontra o card pai do botão
    const releaseCard = button.closest('.release-card');
    if (!releaseCard) {
        console.error('Card do release não encontrado');
        return;
    }

    // Encontra os players e controles
    const trackPlayer = releaseCard.querySelector('.track-player-option');
    const albumPlayer = releaseCard.querySelector('.album-player-option');
    const trackButton = releaseCard.querySelector('.player-controls button:first-child');
    const albumButton = releaseCard.querySelector('.player-controls button:last-child');

    if (!trackPlayer || !albumPlayer || !trackButton || !albumButton) {
        console.error('Elementos do player não encontrados');
        return;
    }

    // Encontra os iframes para pausar música
    const trackIframe = trackPlayer.querySelector('.bandcamp-player');
    const albumIframe = albumPlayer.querySelector('.bandcamp-player');

    if (type === 'track') {
        // Para a música do album player recarregando o iframe
        if (albumIframe) {
            const albumSrc = albumIframe.src;
            albumIframe.src = '';
            setTimeout(() => {
                albumIframe.src = albumSrc;
            }, 100);
        }
        
        // Mostra player track, esconde album
        trackPlayer.style.display = 'flex';
        albumPlayer.style.display = 'none';
        
        // Atualiza botões
        trackButton.classList.add('active');
        albumButton.classList.remove('active');
        
        console.log('🎵 Player: Track destaque ativado');
        
    } else if (type === 'album') {
        // Para a música do track player recarregando o iframe
        if (trackIframe) {
            const trackSrc = trackIframe.src;
            trackIframe.src = '';
            setTimeout(() => {
                trackIframe.src = trackSrc;
            }, 100);
        }
        
        // Mostra player album, esconde track
        trackPlayer.style.display = 'none';
        albumPlayer.style.display = 'flex';
        
        // Atualiza botões
        trackButton.classList.remove('active');
        albumButton.classList.add('active');
        
        console.log('💿 Player: EP completo ativado');
    }

    // Adiciona efeito visual suave
    const activePlayer = type === 'track' ? trackPlayer : albumPlayer;
    activePlayer.style.opacity = '0';
    
    setTimeout(() => {
        activePlayer.style.opacity = '1';
    }, 50);
};

/**
 * Inicializa os controles de player para todos os releases
 */
export function initializePlayerControls() {
    console.log('🎛️ Inicializando controles de player...');
    
    // A função togglePlayer já está disponível globalmente
    // Não precisa fazer mais nada aqui por enquanto
    
    console.log('✅ Controles de player inicializados');
}

export default { togglePlayer: window.togglePlayer, initializePlayerControls };