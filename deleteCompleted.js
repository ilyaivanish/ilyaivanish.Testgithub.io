const deleteCompletedBtn = document.querySelector('#deleteCompletedBtn');

export const deleteCompleted = (tasksList, updateList) => {
    deleteCompletedBtn.addEventListener('click', () => {
        const filteredList = tasksList.filter(task => !task.completed);
        tasksList = filteredList; 
        updateList();
    });
};
