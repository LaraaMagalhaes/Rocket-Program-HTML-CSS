window.app.factory('taskService', function() {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  
    const saveTasks = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
  
    return {
      getTasks: () => tasks,
  
      addTask: (title, date) => {
        tasks.push({
          id: Math.random().toString(36).substr(2, 9),
          title,
          checked: false,
          date,
          dateStr: new Date(date).toLocaleDateString()
        });
        saveTasks();
      },
  
      toggleChecked: () => {
        saveTasks();
      },
  
      deleteTask: (taskId) => {
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasks();
      }
    };
  });
  