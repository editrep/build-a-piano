
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

//selects all keys
const keys = document.querySelectorAll('.key');
const playSongBtn = document.getElementById('playSong');


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

// -- Extra Credit: Automating a Song --
// inspiration from Exemplar Submissions on Cavas (Jonathan Netala, Spring 2025 | Twinkle, Twinkle, Little Star)
// song notes from https://www.mintmusic.co.uk/2025/09/golden-huntrx-kpop-demon-hunters.html
const song = [ 'G', 'A', 'B', 'B', 'G', 'A', 'B', 'B', 'D', 'G', 'G', 'A', 'D', 'G', 'G', 'F', 'E', 'E', 'F', 'G', 'G', 'A', 'B', 'B', 'G', 'A', 'B', 'B', 'D', 'G', 'G', 'A', 'F', 'E', 'F', 'F', 'E', 'F', 'E', 'E', 'D', 'D', 'A','A', 'A', 'D', 'D', 'A', 'A', 'A', 'G', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'D', 'D', 'A', 'A', 'A', 'D', 'D', 'A', 'A', 'A', 'B', 'D', 'A', 'A', 'A', 'A', 'G', 'F', 'F', 'E', 'D', 'E', 'E', 'E'];
    // 'E', 'G', 'C', 'B', 'D', 'G', 'E', 'D', 'F', 'A', 'D', 'C', 'B', 'F', 'E', 'G', 'C', 'B', 'D', 'G', 'E', 'D', 'F', 'A', 'D', 'B', 'B', 'E', 'E', 'E', 'E', 'B', 'B', 'D', 'D', 'A', 'D', 'D', 'D', 'D', 'C', 'C', 'C', 'B', 'D', 'D', 'D', 'C', 'C', 'B', 'A', 'B', 'G', 'E', 'E', 'G', 'F', 'E', 'D', 'D'];
let songIndex = 0;

playSongBtn.addEventListener('click', () => {
  songIndex = 0;
  playNextNote();
});

function playNextNote() {
  if (songIndex < song.length) {
    const key = document.querySelector(`[data-note="${song[songIndex]}"]`);
    playNote(key);

    songIndex++;
    setTimeout(playNextNote, 500); // Adjust timing between notes
  }
}