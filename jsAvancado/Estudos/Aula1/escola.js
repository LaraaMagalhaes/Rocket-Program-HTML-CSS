class User {
    constructor(name, email, password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
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
  
    login(email, password, platform) {
      return this.email === email && this.password === password;
    }
  }
  
  class Student extends User {
    constructor(name, email, password, ra) {
      super(name, email, password);   
      this.ra = ra;                   
      this.grade = null;              
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

    login(email, password, platform) {
      if (platform !== 'student') return false;                       
      return this.email === email && this.password === password;
    }
  }
  
  class Teacher extends User {
    gradeStudent(student, grade) {
      if (grade >= 0 && grade <= 10) {
        student.setGrade(grade);
      }
    }
  }
  
  const student = new Student(
    'João',
    'joao.silva.com.br',
    '123123',
    '1111'
  );
  console.log('Estudante criado:', student);
  
  const teacher = new Teacher(
    'Felipe',
    'felipe.lima.alpar.com.br',
    'ABC123'
  );
  console.log('Professor criado:', teacher);
  
  student.setGrade(8);
  console.log('Estudante com nota configurada:', student);
  
  console.log(
    'Estudante – login estudante (senha errada):',
    student.login('joao.silva.com.br', '12312', 'student')
  );
  console.log(
    'Estudante – login estudante (senha certa):',
    student.login('joao.silva.com.br', '123123', 'student')
  );
  console.log(
    'Estudante – login professor:',
    student.login('joao.silva.com.br', '123123', 'teacher')
  );
  
  console.log(
    'Professor – login professor (senha errada):',
    teacher.login('felipe.lima.alpar.com.br', 'ABC123wrong', 'teacher')
  );
  console.log(
    'Professor – login professor (senha certa):',
    teacher.login('felipe.lima.alpar.com.br', 'ABC123', 'teacher')
  );
  console.log(
    'Professor – login estudante:',
    teacher.login('felipe.lima.alpar.com.br', 'ABC123', 'student')
  );
  
  teacher.gradeStudent(student, 8);
  console.log('Estudante após nota pelo professor:', student);
  
  teacher.gradeStudent(student, -1);
  console.log('Após tentativa de nota inválida:', student);
  