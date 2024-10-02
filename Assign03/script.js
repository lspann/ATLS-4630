async function fetchGoogleFonts() {
    try {
      const apiKey = 'YOUR_GOOGLE_FONTS_API_KEY';
      const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`;

      const response = await fetch(url);
      const data = await response.json();
      displayFonts(data.items);
    } catch (error) {
      console.error("Error fetching fonts:", error);
    }
  }

  function displayFonts(fonts) {
    const container = document.getElementById('fonts-container');
    fonts.slice(0, 10).forEach(font => { // Limit to top 10 fonts
      const fontCard = document.createElement('div');
      fontCard.className = 'font-card';
      
      // Add font name
      const fontName = document.createElement('div');
      fontName.className = 'font-name';
      fontName.textContent = font.family;
      fontCard.appendChild(fontName);
      
      // Add preview
      const fontPreview = document.createElement('div');
      fontPreview.className = 'font-preview';
      fontPreview.textContent = 'The quick brown fox jumps over the lazy dog';
      fontPreview.style.fontFamily = font.family;
      fontCard.appendChild(fontPreview);
      
      // Append to container
      container.appendChild(fontCard);
      
      // Dynamically load the font
      const fontLink = document.createElement('link');
      fontLink.href = `https://fonts.googleapis.com/css2?family=${font.family.replace(/ /g, '+')}`;
      fontLink.rel = 'stylesheet';
      document.head.appendChild(fontLink);
    });
}

// Fetch fonts on page load
window.onload = fetchGoogleFonts;