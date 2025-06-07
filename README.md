# 🌿 Mangrove Records - Website Oficial

Website modular da **Mangrove Records**, label brasileira especializada em **Forest, Darkpsy e Psychedelic Trance**.

## 🎵 Sobre o Projeto

Sistema web moderno construído com **ES6 Modules** e **Webpack**, apresentando dinamicamente os artistas e releases da gravadora através de uma arquitetura escalável e performática.

### ✨ Funcionalidades

- 🎭 **Artistas dinâmicos** - Cards gerados automaticamente
- 🎵 **Releases com players** - Bandcamp e SoundCloud integrados
- 🎛️ **Controles funcionais** - Alternância entre track/EP
- 🎬 **Animações coordenadas** - Experiência visual imersiva
- 📱 **Design responsivo** - Otimizado para todos dispositivos
- ⚡ **Performance otimizada** - Webpack + ES6 modules

## 🚀 Tecnologias

- **JavaScript ES6+** - Modules, Classes, Arrow Functions
- **Webpack 5** - Bundling e otimização
- **Babel** - Transpilação para compatibilidade
- **CSS3** - Grid, Flexbox, Animations
- **HTML5 Semântico** - Acessibilidade e SEO

## 📁 Estrutura do Projeto

```
mangrove-records-website/
├── src/
│   ├── data/
│   │   ├── artists/          # Módulos de dados dos artistas
│   │   └── releases/         # Módulos de dados dos releases
│   ├── components/
│   │   └── cards/            # Classes geradoras de cards
│   ├── utils/                # Utilitários (player controls)
│   ├── scripts/
│   │   └── app.js           # Entry point da aplicação
│   ├── styles/
│   │   ├── main.css         # CSS principal
│   │   └── effects/         # Efeitos especiais (logo)
│   └── assets/
│       └── images/          # Imagens organizadas por categoria
├── public/
│   └── index.html           # Template HTML
├── dist/                    # Build de produção (gerado)
└── config files...          # webpack, babel, package.json
```

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0

### Configuração Local

```bash
# 1. Clone o repositório
git clone https://github.com/mangrove-records/website.git
cd mangrove-records-website

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor local com hot reload
npm start           # Alias para npm run dev

# Build
npm run build       # Build de produção otimizado
npm run build:dev   # Build de desenvolvimento

# Utilitários
npm run clean       # Limpa pasta dist/
```

## 🎨 Customização

### Adicionando Novos Artistas

1. Crie um novo arquivo em `src/data/artists/nomeartista.js`
2. Use a estrutura padrão de dados
3. Adicione a foto em `src/assets/images/Artists/nomeartista/`
4. Importe e adicione no array do `app.js`

### Adicionando Novos Releases

1. Crie um novo arquivo em `src/data/releases/nomerelease.js`
2. Configure players Bandcamp ou SoundCloud
3. Adicione a capa em `src/assets/images/releases/artista/`
4. Importe e adicione no array do `app.js`

## 🚀 Deploy

### Build de Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados em `dist/` prontos para deploy.

### Opções de Hosting

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Servidor tradicional**

## 🎵 Artistas Representados

- **Darkside of FMs** - Darkpsy
- **Dark Mangrove** - Forest  
- **Lendarious** - Forest DJ

## 🔧 Arquitetura Técnica

### Padrões Utilizados

- **Modular Design** - Cada artista/release é um módulo independente
- **Component Pattern** - Classes reutilizáveis para cards
- **Separation of Concerns** - Dados, lógica e apresentação separados
- **Performance First** - Lazy loading, otimização de assets

### Compatibilidade

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## 📄 Licença

MIT License - Mangrove Records Team

## 🤝 Contribuição

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📞 Contato

- **Website**: [mangroverec.com](https://mangroverec.com)
- **Email**: mangroverec@gmail.com
- **Instagram**: [@mangrove_records](https://instagram.com/mangrove_records)

---

**Desenvolvido com 🌿 para a cena underground brasileira**