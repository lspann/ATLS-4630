const googleFonts = [
  'Spicy Rice',
  'Updock',
  'Cinzel',
  'Righteous',
  'Orbitron',
  'Raleway',
  'Aclonica',
  'Questrial',
  'Playfair Display',
  'Poppins',
  'Tangerine',
  'Sixtyfour Convergence',
  'Kanit',
  'Space Grotesk',
  'Bebas Neue',
  'Qwitcher Grypen',
  'Pacifico',
  'Lobster',
  'Chakra Petch',
  'Lilita One',
  'Montserrat Alternates',
  'Pirata One',
  'Bungee Tint',
  'Silkscreen',
  'Creepster',
  'Sankofa Display',
  'VT323',
  'Kalnia Glaze',
  'Monoton',
  'Julius Sans One'
];

function displayFonts() {
  const container = document.getElementById('fonts-container');
  
  googleFonts.forEach(font => {
    const fontCard = document.createElement('div');
    fontCard.className = 'font-card';
    
    // Add font name
    const fontName = document.createElement('div');
    fontName.className = 'font-name';
    fontName.textContent = font;
    fontCard.appendChild(fontName);
    
    const fontPreview = document.createElement('div');
    fontPreview.className = 'font-preview';
    fontPreview.textContent = 'The quick brown fox jumps over the lazy dog';
    fontPreview.style.fontFamily = font;
    fontCard.appendChild(fontPreview);
    
    container.appendChild(fontCard);
    
    const fontLink = document.createElement('link');
    fontLink.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, '+')}`;
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
  });
}

window.onload = displayFonts;