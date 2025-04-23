// login.js – autenticação
import { Aluno, Professor } from './usuario.js';
const users = [
  new Aluno('João Silva',   'joao@escola.com',  '123', '3A'),
  new Aluno('Maria Souza',  'maria@escola.com', '456', '2B'),
  new Professor('Carlos Luz','carlos@escola.com','abc',['Matemática','Física'])
];
const form      = document.getElementById('loginForm');
const erroLabel = document.getElementById('erro');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem('currentUser', JSON.stringify({
      role: user.role,
      data: { ...user }
    }));
    window.location.href = './perfil.html';
  } else {
    erroLabel.textContent = 'E‑mail ou senha inválidos.';
  }
});
