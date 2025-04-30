angular.module('UserApp', [])
.service('UsuarioService', function ($q, $timeout) {

  const usuarios = [
    { nome: "Maria",  tipo: "Aluno",     email: "maria@gmail.com",  dataCadastro: new Date() },
    { nome: "João",   tipo: "Professor", email: "joao@outlook.com",   dataCadastro: new Date() },
    { nome: "Bruna",  tipo: "Aluno",     email: "bruna@gmail.com",  dataCadastro: new Date() },
    { nome: "Pedro",  tipo: "Aluno",     email: "pedro@hotmail.com",  dataCadastro: new Date() },
    { nome: "Carla",  tipo: "Professor", email: "carla@gmail.com",  dataCadastro: new Date() }
  ];

  this.listar = () => usuarios;
  this.salvar = function (usuario) {
    return $q(function (resolve) {          
      $timeout(function () {                
        const copia = angular.copy(usuario);
        copia.dataCadastro = new Date();
        usuarios.push(copia);             
        resolve();                          
      }, 2000);
    });
  };

  this.remover = index => usuarios.splice(index, 1);
})
.controller('AppController', function ($scope, UsuarioService) {
  $scope.mensagem   = "Bem-vindo ao sistema de cadastro escolar";
  $scope.usuarios   = UsuarioService.listar();
  $scope.novoUsuario = {};
  $scope.isSaving   = false;   
  $scope.sucesso    = false;   
  $scope.filtro     = '';
  $scope.filtroTipo = '';

  $scope.salvarUsuario = function (form) {
    if (form.$invalid || $scope.isSaving) return;

    $scope.isSaving = true;
    $scope.sucesso  = false;

    UsuarioService.salvar($scope.novoUsuario)
      .then(function () {
        $scope.sucesso    = true;
        $scope.novoUsuario = {};   
        form.$setPristine();
        form.$setUntouched();
      })
      .finally(function () {
        $scope.isSaving = false;
      });
  };

  $scope.removerUsuario = UsuarioService.remover;
});
