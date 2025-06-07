// Importa TODAS as imagens dos artistas automaticamente
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    // Remove './' do início e cria chave limpa
    // './darkside/profile.jpg' → 'darkside/profile'
    const key = item.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '');
    images[key] = r(item);
  });
  return images;
}

// Importa todas as imagens da pasta Artists
const artistImages = importAll(
  require.context('../assets/images/Artists', true, /\.(png|jpe?g|svg)$/)
);


// Importa todas as imagens dos releases
const releaseImages = importAll(
  require.context('../assets/images/releases', true, /\.(png|jpe?g|svg)$/)
);

export { artistImages, releaseImages };