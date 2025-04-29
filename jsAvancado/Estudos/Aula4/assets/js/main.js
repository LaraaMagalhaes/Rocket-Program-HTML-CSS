const app = angular.module('task-module', []);

app.controller('task-controller', ['$scope', function ($scope) {

  $scope.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

 
  $scope.modalActive = false;


  $scope.taskInput = { title: '', date: '' };


  $scope.selectedFilter = null;
  $scope.toggleModal = () => { $scope.modalActive = !$scope.modalActive; };
  $scope.handleSubmitAddTask = () => {
    const { title, date } = $scope.taskInput;
    if (!title || !date) return;

    $scope.tasks.push({
      id: Math.random().toString(36).substr(2, 9),
      title,
      checked: false,
      date,
      dateStr: new Date(date).toLocaleDateString()
    });

    localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    $scope.toggleModal();
    $scope.taskInput = { title: '', date: '' };
  };

  $scope.toggleTaskChecked = () => {
    localStorage.setItem('tasks', JSON.stringify($scope.tasks));
  };

  $scope.deleteTask = currentTask => {
    $scope.tasks = $scope.tasks.filter(task => task.id !== currentTask.id);
    localStorage.setItem('tasks', JSON.stringify($scope.tasks));
  };

  $scope.getFilter = () => {
    const filtro = $scope.selectedFilter;  

    return task => {
      if (filtro === 'completed')   return task.checked;     
      if (filtro === 'incomplete')  return !task.checked;  
      if (filtro === 'today') {
        const d = new Date(task.date);
        const inicio = new Date(); inicio.setHours(0,0,0,0);
        const fim    = new Date(); fim.setHours(23,59,59,999);
        return d >= inicio && d <= fim;                     
      }
      return true;                                           
    };
  };

}]);
