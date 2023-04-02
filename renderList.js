
const listElement = document.querySelector('#list');

export const renderList = (tasksList) => {
    listElement.innerHTML = '';

    tasksList.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
            <div class="form-check">
                <label class="form-check-label">
                    <input class="checkbox" type="checkbox" ${task.completed ? 'checked' : ''} data-completed="${task.completed}">
                    ${task.name}
                    <i class="input-helper"></i>
                    <i class="fa fa-edit"></i>
                </label>
            </div>
            <a class="remove mdi mdi-close-circle-outline" data-index="${index}"></a>
        `;
        listElement.append(taskElement);

        // edit task
        const editTask = taskElement.querySelector('.fa-edit');
            editTask.addEventListener('click', () => {
            const editedTask = prompt('Enter the edited task:');
            if (editedTask !== null) {
                tasksList[index].name = editedTask;
                renderList(tasksList);
                localStorage.setItem('tasksList', JSON.stringify(tasksList));
            }
        });

        // save completion
        const checkbox = taskElement.querySelector('.checkbox');
            checkbox.addEventListener('change', () => {
                const completed = checkbox.checked;
                tasksList[index].completed = completed;
                checkbox.setAttribute('data-completed', completed);
                localStorage.setItem('tasksList', JSON.stringify(tasksList));
        });

    });

};


  
