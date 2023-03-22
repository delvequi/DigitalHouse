const form = document.querySelector('form');
const sessionComment = document.getElementById('session-comment');
const localComment = document.getElementById('local-comment');

// Pega os comentários existentes do storage e os mostra no carregamento da página
if (sessionStorage.getItem('comment')) {
  sessionComment.textContent = sessionStorage.getItem('comment');
}
if (localStorage.getItem('comment')) {
  localComment.textContent = localStorage.getItem('comment');
}

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const comment = document.getElementById('comment').value;
  
  // guarda os comentários no session e local storage
  sessionStorage.setItem('comment', comment);
  localStorage.setItem('comment', comment);
  
  // atualiza o comentário no html
  sessionComment.textContent = sessionStorage.getItem('comment');
  localComment.textContent = localStorage.getItem('comment');
  
  // limpa o campo input
  document.getElementById('comment').value = '';
});
