// Tooltip-Popup

let cells = document.querySelectorAll('.cal-case');
let poppies = [];

for (cell of cells) {
  let events = cell.querySelectorAll('.event');
  if (events.length) {
    for (ev of events) {
      let trigger = ev.querySelector('.trigger');
      let poppy = ev.querySelector('.qtip');
      // console.log(poppy);
      poppies.push(
        new Popper(trigger, poppy, {
          placement: "bottom",
          modifiers: {
            flip: {
              behavior: ['bottom'] // poppies dürfen nicht herumspringen
            },
            offset: {
              enabled: true,
              offset: '0px, 10px' // tooltip etwas nach unten schieben, um den Pfeil auszugleichen
             }
           }
        }));
      trigger.addEventListener('click', function(e) {showInfo(e, this);});
      poppy.style.zIndex = 1000; // funktioniert nicht?
    }
  }
}

function showInfo (event, element) {
  event.preventDefault(); // link darf nirgendwo hinführen :-)
  let sibling = element.nextElementSibling; // ist das genug stabil?
  sibling.classList.toggle('hidden'); // sibling ist das popover
  let closeButton =  sibling.querySelector('.close-popover');
  if (!closeButton.classList.contains('check')) {
    closeButton.addEventListener('click', function(e) {
      // console.log('clicked');
      closeButton.classList.add('check');
      closeButton.parentElement.classList.toggle('hidden');
      // console.log(e.target);
    });
  }
}
