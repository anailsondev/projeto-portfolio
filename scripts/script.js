const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Alterna entre os temas claro e escuro
function temaEscuro(tipo) {
  if (tipo) {
    body.classList.add('escuro');
    botao.innerHTML = '<i data-lucide="sun" aria-hidden="true"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i data-lucide="moon" aria-hidden="true"></i>';
  }
  lucide.createIcons();
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
});
