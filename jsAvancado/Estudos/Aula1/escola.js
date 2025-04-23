// Criando uma classe base para representar um usuário genérico do sistema
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // Métodos para acessar e modificar as propriedades
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getEmail() {
    return this.email;
  }
  setEmail(email) {
    this.email = email;
  }

  getPassword() {
    return this.password;
  }
  setPassword(password) {
    this.password = password;
  }

  // Método de login padrão para qualquer usuário
  login(email, password, platform) {
    return this.email === email && this.password === password;
  }
}


// Agora uma classe Student que herda de User
class Student extends User {
  constructor(name, email, password, ra) {
    super(name, email, password); // reutilizando o construtor da superclasse
    this.ra = ra;                 // RA = registro acadêmico
    this.grade = null;            // nota ainda não atribuída
  }

  getRA() {
    return this.ra;
  }
  setRA(ra) {
    this.ra = ra;
  }

  getGrade() {
    return this.grade;
  }
  setGrade(grade) {
    this.grade = grade;
  }

  // Reescrevendo o método de login (polimorfismo)
  // Aqui só loga se a plataforma for "student"
  login(email, password, platform) {
    if (platform !== 'student') return false;
    return this.email === email && this.password === password;
  }
}


// Classe Teacher herda de User também
class Teacher extends User {
  // Método para dar nota a um estudante
  gradeStudent(student, grade) {
    if (grade >= 0 && grade <= 10) {
      student.setGrade(grade);
    }
  }
}

// Testes abaixo 👇

// Criando um estudante
const student = new Student(
  'João',
  'joao.silva.com.br',
  '123123',
  '1111'
);
console.log('Estudante criado:', student);

// Criando um professor
const teacher = new Teacher(
  'Felipe',
  'felipe.lima.alpar.com.br',
  'ABC123'
);
console.log('Professor criado:', teacher);

// Definindo nota diretamente
student.setGrade(8);
console.log('Estudante com nota configurada:', student);

// Testes de login do estudante
console.log(
  'Estudante – login estudante (senha errada):',
  student.login('joao.silva.com.br', '12312', 'student')
);
console.log(
  'Estudante – login estudante (senha certa):',
  student.login('joao.silva.com.br', '123123', 'student')
);
console.log(
  'Estudante – login como professor (deve falhar):',
  student.login('joao.silva.com.br', '123123', 'teacher')
);

// Testes de login do professor
console.log(
  'Professor – login errado:',
  teacher.login('felipe.lima.alpar.com.br', 'ABC123wrong', 'teacher')
);
console.log(
  'Professor – login certo:',
  teacher.login('felipe.lima.alpar.com.br', 'ABC123', 'teacher')
);
console.log(
  'Professor – login como estudante (deve falhar):',
  teacher.login('felipe.lima.alpar.com.br', 'ABC123', 'student')
);

// Professor dando nota ao aluno
teacher.gradeStudent(student, 8);
console.log('Estudante após nota pelo professor:', student);

// Teste com nota inválida
teacher.gradeStudent(student, -1);
console.log('Após tentativa de nota inválida:', student);
