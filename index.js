`use strict`;


import { renderList } from './renderList.js';
import { formListener } from './formListener.js';
import { saveList, loadList } from './ls.js';
import { listClickListener } from './listClickListener.js';
import { formChangeListener } from './formChangeListener.js';
import { byName } from './filters.js';


// Create a new task
    // by clicking on the button
    // by pressing enter
// Delete a task
// Search tasks by name
// Mark a task as completed (2/2)
// Delete all completed tasks

const startApp = () => {

    let tasksList = loadList();
    
    renderList(tasksList);

    const updateList = () => {
        saveList(tasksList);
        renderList(tasksList);
    };

    // adding new task
    const onSubmit = (newTask) => {

        // error if task are empty
        if (newTask.trim() === '') {
            alert('Task field can\'t be empty!');
            return;
        }
        
        tasksList.push({
            name: newTask,
            completed: false,
        });
        updateList();
    };

    formListener(onSubmit);


    // delete task via cross button
    listClickListener((index) => {
        tasksList.splice(index, 1);
        updateList();
    });

    // filtering tasks by name
    formChangeListener((text) => {
        const filteredTasks = tasksList.filter(byName(text));
        renderList(filteredTasks);
    });

    // delete all completed tasks
    const deleteCompletedBtn = document.querySelector('#deleteCompletedBtn');
    deleteCompletedBtn.addEventListener('click', () => {
      const filteredList = tasksList.filter(task => !task.completed);
      tasksList = filteredList; 
      updateList()
    });

};

document.addEventListener('DOMContentLoaded', startApp);
