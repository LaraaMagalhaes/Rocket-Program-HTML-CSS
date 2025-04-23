export class Usuario {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  exibirPerfil(container) {
    container.innerHTML = `
      <p><strong>Nome:</strong> ${this.name}</p>
      <p><strong>E‑mail:</strong> ${this.email}</p>
      <hr/>
    `;
  }
}

export class Aluno extends Usuario {
  constructor(name, email, password, turma) {
    super(name, email, password);
    this.turma = turma;
    this.role  = 'aluno';
  }

  exibirPerfil(container) {
    super.exibirPerfil(container);
    container.innerHTML += `<p><strong>Turma:</strong> ${this.turma}</p>`;
  }
}

export class Professor extends Usuario {
  constructor(name, email, password, materias) {
    super(name, email, password);
    this.materias = materias;   
    this.role     = 'professor';
  }

  exibirPerfil(container) {
    super.exibirPerfil(container);
    container.innerHTML += `
      <p><strong>Matérias:</strong> ${this.materias.join(', ')}</p>
    `;
  }
}
