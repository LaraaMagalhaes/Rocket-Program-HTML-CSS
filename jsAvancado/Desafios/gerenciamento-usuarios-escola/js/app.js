angular.module('UserApp', [])
.service('UsuarioService', function () {

    const usuarios = [
      { nome: "Maria", tipo: "Aluno", dataCadastro: new Date() },
      { nome: "João", tipo: "Professor", dataCadastro: new Date() },
      { nome: "Bruna", tipo: "Aluno", dataCadastro: new Date() },
      { nome: "Pedro", tipo: "Aluno", dataCadastro: new Date() },
      { nome: "Carla", tipo: "Professor", dataCadastro: new Date() }
    ];

    this.listar = function () {
      return usuarios;
    };
  
    this.adicionar = function (usuario) {
      usuario.dataCadastro = new Date();
      usuarios.push(usuario);
    };
  
    this.remover = function (index) {
      usuarios.splice(index, 1);
    };
  })
  
  .controller('AppController', function ($scope, UsuarioService) {
    $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";
    $scope.usuarios = UsuarioService.listar();
    $scope.novoUsuario = {};
    $scope.filtro = '';
    $scope.filtroTipo = '';
  
    $scope.adicionarUsuario = function () {
      if (!$scope.novoUsuario.nome || !$scope.novoUsuario.tipo) return;
      UsuarioService.adicionar($scope.novoUsuario);
      $scope.novoUsuario = {}; 
    };
  
    $scope.removerUsuario = function (index) {
      UsuarioService.remover(index);
    };
  });