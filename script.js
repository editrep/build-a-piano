
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

//selects all keys
const keys = document.querySelectorAll('.key');


// --Liseners --
// adds listen event to all keys
keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

// -- Handelers --
function playNote(key) {
    // gets the letter value of key and matches it to the note value
  const noteAudio = document.getElementById(key.dataset.note);
  
  //rewinds the audio to the start so you can play the rapidly
  noteAudio.currentTime = 0; 
  
  //plays the audio
  noteAudio.play();

  // adds active class to style
  key.classList.add('active');

  // turns off active when done playing
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active');
  });
}


document.addEventListener('keydown', (e) => {
  // Get the key that triggered the event
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

    // If the key is being held down, don't play the note again
  if (e.repeat) {
    return;
  }

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }

  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});
