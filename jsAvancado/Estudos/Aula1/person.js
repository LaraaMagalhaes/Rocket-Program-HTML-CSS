// Criando uma classe com propriedades privadas e validações de dados
class Person {
  constructor(name, email, password, birthday) {
    this._name = name;
    this._email = email;
    this._password = password;
    this._birthday = new Date(birthday);
    this._age = this._calculateAge(this._birthday);

    // Validando idade mínima
    if (this._age < 18) {
      throw new Error("Usuário com menos de 18 anos");
    }
  }

  // Método interno para calcular idade com base na data de nascimento
  _calculateAge(birthday) {
    const now = new Date();
    const diffMs = now.getTime() - birthday.getTime();
    return Math.floor(diffMs / 1000 / 60 / 60 / 24 / 365);
  }

  // Getters e setters com regras de negócio

  get name() {
    return this._name;
  }

  set name(name) {
    // Validação: nome deve conter espaço (nome + sobrenome)
    if (!name.includes(" ")) {
      throw new Error("Digite um nome e sobrenome");
    }
    this._name = name;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }

  get password() {
    return this._password;
  }

  set password(password) {
    this._password = password;
  }

  get birthday() {
    return new Date(this._birthday);
  }

  set birthday(birthday) {
    const date = new Date(birthday);
    const age = this._calculateAge(date);

    if (age < 18) {
      throw new Error("Usuário com menos de 18 anos");
    }

    this._birthday = date;
    this._age = age;
  }

  get age() {
    return this._age;
  }
}

// Teste com try/catch para capturar erros de validação
try {
  const user = new Person(
    "Felipe Lima",
    "felipe.lima@alpar.com.br",
    "abc123",
    "1999-05-02"
  );
  console.log(user);

  user.name = "João";            // Vai lançar erro se não tiver sobrenome
  user.birthday = "2009-05-02";  // Vai lançar erro por idade menor que 18
} catch (err) {
  console.error(err.message); // Aqui capturo os erros gerados pelas validações
}
