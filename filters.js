export const allRadioBtn = document.querySelector('#allRadioBtn');
export const completedRadioBtn = document.querySelector('#completedRadioBtn');
export const notCompletedRadioBtn = document.querySelector('#notCompletedRadioBtn');
export const byName = (text) => (task) => task.name.toUpperCase().includes(text.toUpperCase());
