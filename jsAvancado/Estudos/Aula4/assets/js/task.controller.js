app.controller("TaskController", function ($scope, $filter, TaskService) {
  $scope.modalActive = false;
  $scope.showCompletedOnly   = false;
  $scope.showIncompletedOnly = false;
  $scope.showTodayOnly       = false;
  $scope.today  = new Date().toLocaleDateString();
  $scope.tasks  = TaskService.getTasks();

  $scope.taskInput = {
    id: "",
    title: "",
    date: null,
    checked: false,
  };

  $scope.filteredTasks = () => {
    let filtered = $filter("filter")(
      $filter("filter")($scope.tasks, $scope.showCompletedOnly ? { checked: true } : {}),
      $scope.showIncompletedOnly ? { checked: false } : {}
    );

    if ($scope.showTodayOnly) {
      const start = new Date(); start.setHours(0, 0, 0, 0);
      const end   = new Date(); end.setHours(23, 59, 59, 999);

      filtered = filtered.filter(task => {
        const d = new Date(task.date);
        return d >= start && d <= end;
      });
    }
    return filtered;
  };

  $scope.validate = (errorObj, touched) => {
    if (!touched) return {};                            
    const hasError = Object.values(errorObj || {})
                           .reduce((acc, curr) => acc || curr, false);
    return hasError ? { "border-color": "red" } : {};
  };

  $scope.toggleModal = () => { $scope.modalActive = !$scope.modalActive; };

  $scope.handleSubmitAddTask = () => {
    const { title, date } = $scope.taskInput;
    if (!title || !date) return;

    TaskService.addTask(title, date);
    $scope.tasks = TaskService.getTasks();

    $scope.toggleModal();
    $scope.taskInput.title = "";
    $scope.taskInput.date  = null;
  };

  $scope.toggleCheckedTask = () => {
    TaskService.toggleCheck();
    $scope.tasks = TaskService.getTasks();
  };

  $scope.deleteTask = currentTask => {
    TaskService.removeTask(currentTask.id);
    $scope.tasks = TaskService.getTasks();
  };
});
