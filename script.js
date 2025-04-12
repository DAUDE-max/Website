function CopyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
      // Erfolgsmeldung anzeigen
      const successMessage = document.getElementById('successMessage');
      successMessage.style.display = 'block';
      setTimeout(() => successMessage.style.display = 'none', 3000); // Nachricht nach 3 Sekunden ausblenden
    }).catch(function(err) {
      console.error('Fehler beim Kopieren:', err);
    })
  }
