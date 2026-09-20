const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const showMore = document.getElementById('showMore');
const moreNote = document.getElementById('moreNote');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Please fill in all fields.';
    return;
  }

  formMessage.textContent = `Thanks, ${name}! Your enquiry was received (demo only).`;
  form.reset();
});

showMore.addEventListener('click', () => {
  moreNote.style.display = moreNote.style.display === 'block' ? 'none' : 'block';
  showMore.textContent = moreNote.style.display === 'block' ? 'Hide note' : 'Show more';
});
