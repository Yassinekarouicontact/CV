// Sélectionner tous les boutons et le premier bouton
const buttons = document.querySelectorAll('.custom-btn');
const firstButton = buttons[0]; // Le premier bouton

// Ajouter l'événement 'mouseover' pour activer le bouton survolé
buttons.forEach((button) => {
  button.addEventListener('mouseover', function () {
    // Supprimer la classe active de tous les boutons
    buttons.forEach((btn) => btn.classList.remove('active'));
    // Ajouter la classe active au bouton survolé
    this.classList.add('active');
  });
});

// Ajouter l'événement 'mouseout' pour revenir au premier bouton
document
  .querySelector('.button-group')
  .addEventListener('mouseleave', function () {
    // Supprimer la classe active de tous les boutons
    buttons.forEach((btn) => btn.classList.remove('active'));
    // Ajouter la classe active au premier bouton
    firstButton.classList.add('active');
  });
