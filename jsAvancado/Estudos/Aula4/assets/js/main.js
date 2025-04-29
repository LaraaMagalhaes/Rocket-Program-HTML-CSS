// Aqui estamos pegando o módulo já criado anteriormente no service
window.app.controller('task-controller', function($scope, taskService) {

  // Pega a lista de tarefas do service e mostra na tela
  $scope.tasks = taskService.getTasks();

  // Controla se o modal de adicionar tarefa está aberto ou não
  $scope.modalActive = false;

  // Guarda os dados digitados no formulário antes de salvar
  $scope.taskInput = {
    title: '',
    date: ''
  };

  // Indica qual filtro de visualização o usuário selecionou (completas, incompletas ou de hoje)
  $scope.selectedFilter = null;

  // Abre ou fecha o modal de adicionar tarefa
  $scope.toggleModal = () => {
    $scope.modalActive = !$scope.modalActive;
  };

  // Quando o formulário de adicionar tarefa for enviado
  $scope.handleSubmitAddTask = () => {
    const { title, date } = $scope.taskInput;

    // Se algum campo estiver vazio, não faz nada
    if (!title || !date) return;

    // Usa o service para adicionar a nova tarefa
    taskService.addTask(title, date);

    // Atualiza a lista de tarefas com a nova
    $scope.tasks = taskService.getTasks();

    // Fecha o modal e limpa os campos do formulário
    $scope.toggleModal();
    $scope.taskInput.title = '';
    $scope.taskInput.date = '';
  };

  // Quando marcar ou desmarcar uma tarefa como concluída
  $scope.toggleTaskChecked = () => {
    taskService.toggleChecked(); // apenas salva no localStorage
    $scope.tasks = taskService.getTasks(); // atualiza a lista na tela
  };

  // Remove uma tarefa da lista
  $scope.deleteTask = (currentTask) => {
    taskService.removeTask(currentTask.id); // remove com base no ID
    $scope.tasks = taskService.getTasks(); // atualiza a lista
  };

  // Filtra as tarefas conforme a opção selecionada pelo usuário
  $scope.filterTasks = function(task) {
    if ($scope.selectedFilter === 'completed') return task.checked;
    if ($scope.selectedFilter === 'incomplete') return !task.checked;

    // Para o filtro "Hoje", usamos a lógica de data atual
    if ($scope.selectedFilter === 'today') {
      const taskDate = new Date(task.date);
      const start = new Date();
      start.setHours(0, 0, 0, 0); 
      const end = new Date();
      end.setHours(23, 59, 59, 999); 

      return taskDate.getTime() >= start.getTime() &&
             taskDate.getTime() <= end.getTime();
    }

    // Se nenhum filtro estiver selecionado, mostra tudo
    return true;
  };
});
