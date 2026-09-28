const pages = [...document.querySelectorAll('.page')];

function showPage(id){
  pages.forEach(p => p.classList.toggle('active', p.id === id));
  window.scrollTo({top:0, behavior:'smooth'});
}

document.querySelectorAll('[data-next]').forEach(btn => {
  btn.addEventListener('click', () => showPage(btn.dataset.next));
});

const letter = "Ada sesuatu yang mau aku sampaikan... Kamu mungkin nggak sadar, tapi kehadiranmu selalu jadi hal yang berarti. Terima kasih sudah selalu ada, mendengar, bercanda, dan membuat banyak momen kecil jadi terasa istimewa. Jangan pernah lupa, kamu itu luar biasa. ♡";
let i = 0;
let typingStarted = false;
function typeLetter(){
  if(typingStarted) return;
  typingStarted = true;
  const el = document.getElementById('typedLetter');
  const timer = setInterval(() => {
    el.textContent += letter[i++];
    if(i >= letter.length) clearInterval(timer);
  }, 24);
}
document.querySelector('[data-next="letter"]').addEventListener('click', () => setTimeout(typeLetter, 350));

document.querySelectorAll('.choices button').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = {
      good: "WAAA, berarti Princess harus hati-hati nih... kamu terlalu kenal! 😭💗",
      okay: "Lumayan! Tapi masih ada beberapa rahasia yang belum kamu tahu. 🎀",
      mystery: "Hmmm... berarti kita harus bikin lebih banyak memories lagi! 🐱💕"
    }[btn.dataset.answer];
    document.getElementById('answerText').textContent = text;
    document.getElementById('questionNext').classList.remove('hidden');
  });
});

document.getElementById('gift').addEventListener('click', () => {
  document.getElementById('gift').style.display = 'none';
  document.getElementById('surpriseMessage').classList.add('show');
  document.getElementById('surpriseNext').classList.remove('hidden');
});

document.querySelectorAll('.note').forEach(note => {
  note.addEventListener('click', () => {
    document.getElementById('noteReveal').textContent = note.dataset.note;
  });
});

document.getElementById('restart').addEventListener('click', () => {
  showPage('opening');
  document.getElementById('gift').style.display = '';
  document.getElementById('surpriseMessage').classList.remove('show');
  document.getElementById('surpriseNext').classList.add('hidden');
  document.getElementById('answerText').textContent = '';
  document.getElementById('questionNext').classList.add('hidden');
  document.getElementById('noteReveal').textContent = 'Klik salah satu kartu ♡';
});
