// Cria o app principal
const app = angular.module('task-module', []);

// Cria o controller principal
app.controller('task-controller', function($scope) {

  // Lista de tarefas (pega do localStorage ou começa vazia)
  $scope.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

  // Modal aberto ou fechado
  $scope.modalActive = false;

  // Dados do formulário (novo título e data)
  $scope.taskInput = {
    title: '',
    date: ''
  };

  // Filtro escolhido (completed, incomplete, today)
  $scope.selectedFilter = null;

  // Abre/fecha o modal
  $scope.toggleModal = () => {
    $scope.modalActive = !$scope.modalActive;
  };

  // Adiciona uma nova tarefa
  $scope.handleSubmitAddTask = () => {
    const { title, date } = $scope.taskInput;

    if (!title || !date) return; // Se faltar dados, não adiciona

    $scope.tasks.push({
      id: Math.random().toString(36).substr(2, 9), // Gera um ID aleatório
      title: title,
      checked: false, // Começa não concluída
      date: date,
      dateStr: new Date(date).toLocaleDateString()
    });

    localStorage.setItem('tasks', JSON.stringify($scope.tasks)); // Salva no localStorage
    $scope.toggleModal(); // Fecha o modal
    $scope.taskInput.title = '';
    $scope.taskInput.date = ''; // Limpa o formulário
  };

  // Atualiza o localStorage quando marcar/desmarcar tarefa
  $scope.toggleTaskChecked = () => {
    localStorage.setItem('tasks', JSON.stringify($scope.tasks));
  };

  // Deleta uma tarefa
  $scope.deleteTask = (currentTask) => {
    $scope.tasks = $scope.tasks.filter(task => task.id !== currentTask.id);
    localStorage.setItem('tasks', JSON.stringify($scope.tasks));
  };

  // Filtra tarefas conforme o filtro selecionado
  $scope.filterTasks = function(task) {
    if ($scope.selectedFilter === 'completed') return task.checked;
    if ($scope.selectedFilter === 'incomplete') return !task.checked;
    if ($scope.selectedFilter === 'today') {
      const today = new Date().toLocaleDateString();
      return task.dateStr === today;
    }
    return true; // Se não tiver filtro, mostra tudo
  };

});
