const beginningElement = document.getElementById('beginning'); // Pobranie elementu o id 'intro'
const panelElement = document.getElementById('panel'); // Pobranie elementu o id 'login-panel'


panelElement.style.display = 'none'; // Ukrycie panelu logowania na początku

beginningElement.addEventListener('animationend', () => {
  beginningElement.style.display = 'none'; // Ukrycie elementu intro po zakończeniu animacji
  panelElement.style.display = 'inherit'; // Wyświetlenie panelu logowania
  panelElement.classList.add('fade-in'); // Dodanie klasy stylu do animacji
});
