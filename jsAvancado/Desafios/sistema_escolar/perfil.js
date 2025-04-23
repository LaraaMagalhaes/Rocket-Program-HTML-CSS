import { Aluno, Professor } from './usuario.js';

const container  = document.getElementById('profile');
const storedUser = JSON.parse(localStorage.getItem('currentUser'));

if (!storedUser) {
  window.location.href = './index.html';
}

let currentUser;

if (storedUser?.role === 'aluno') {
  const { name, email, password, turma } = storedUser.data;
  currentUser = new Aluno(name, email, password, turma);
} else if (storedUser?.role === 'professor') {
  const { name, email, password, materias } = storedUser.data;
  currentUser = new Professor(name, email, password, materias);
} else {
  container.textContent = 'Usuário desconhecido.';
}

if (currentUser) currentUser.exibirPerfil(container);
