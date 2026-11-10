function init() {
  // Find the input, clickable div, and heading in the provided HTML.
  const entryInput = document.getElementById('entryinput');
  const entryButton = document.getElementById('entrybutton');
  const textOutput = document.getElementById('textoutput');

  // Run this code whenever the "Alert Me" div is clicked.
  entryButton.addEventListener('click', function () {
    const message = entryInput.value;

    // Show the student's name followed by exactly what was typed.
    window.alert('Sandra Arias: ' + message);

    // Show only the typed message in the heading below the button.
    textOutput.textContent = message;
  });
}

window.addEventListener('load', init);
