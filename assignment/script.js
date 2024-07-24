const jsonData = {
    "tasks": [
      {
        "id": 1,
        "title": "Explore the world of management",
        "description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion."
      },
      {
        "id": 2,
        "title": "Learn JavaScript Basics",
        "description": "Implement dynamic content rendering using vanilla JavaScript."
      }
    ]
  };
  

  function renderTasks(data) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; 
  
    data.tasks.forEach(task => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${task.title}</strong>: ${task.description}`;
      taskList.appendChild(listItem);
    });
  }
  
  renderTasks(jsonData);
  