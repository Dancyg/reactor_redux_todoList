export const selectTask = (task)=>{
    return {
        type: 'TASK_SELECTED',
        payload: task
    }
};

export const addListItem = (task={})=>{
    let title = document.getElementById('title');
    let description = document.getElementById('description');

    if(title.value && description.value){
        task.title = title.value;
        task.description = description.value;
        task.comments =[''];
        task.completed ='';
        title.value = '';
        description.value = '';

        return {
            type: 'TASK_ADDED',
            payload: task
        }
    }

};

export const taskCompleted = (task) =>{
    return{
        type: 'TASK_COMPLETED',
        payload: task
    }
};

export const addCommentsToTask = (task) =>{
    let commentContainer = document.getElementById('comments');
    if (commentContainer.value) {
        task.comments.push(commentContainer.value);
        commentContainer.value = '';

        return {
            type: 'TASK_COMMENTED',
            payload: task
        }
    }
};