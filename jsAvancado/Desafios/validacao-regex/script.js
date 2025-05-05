document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const cpf = document.getElementById('cpf');
  
    const nomeValido = /^[A-Za-zÀ-ÿ\s]+$/;
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfValido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  
    validarCampo(nome, nomeValido, 'nome-msg');
    validarCampo(email, emailValido, 'email-msg');
    validarCampo(cpf, cpfValido, 'cpf-msg');
  
    // EXTRA: validação real de CPF (matemática)
    const msgCpf = document.getElementById('cpf-msg');
    if (cpfValido.test(cpf.value)) {
      if (!validarCPFReal(cpf.value)) {
        msgCpf.innerHTML += `<br><small style="color:#ff6b81;">⚠️ CPF com formato correto, mas inválido matematicamente</small>`;
      }
    }
  });
  
  function validarCampo(input, regex, msgId) {
    const msg = document.getElementById(msgId);
  
    if (regex.test(input.value)) {
      msg.textContent = 'Válido ✅';
      input.classList.add('valido');
      input.classList.remove('invalido');
    } else {
      msg.textContent = 'Inválido ❌';
      input.classList.add('invalido');
      input.classList.remove('valido');
    }
  }
  
  // EXTRA: Validador real de CPF (lógica dos dígitos verificadores)
  function validarCPFReal(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
  
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;
  
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;
  
    return true;
  }
  