export const selectTask = (task)=>{
    return {
        type: 'TASK_SELECTED',
        payload: task
    }
};

export const addListItem = (task={})=>{
    task.title = document.getElementById('title').value;
    task.description = document.getElementById('description').value;
    task.comment ='';
    task.completed ='';
    return {
        type: 'TASK_ADDED',
        payload: task
    }
};

export const taskCompleted = (task) =>{
    return{
        type: 'TASK_COMPLETED',
        payload: task
    }
};

export const addCommentsToTask = (task) =>{
    task.comment = document.getElementById('comments').value;
    return{
        type: 'TASK_COMMENTED',
        payload: task
    }
};