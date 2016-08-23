export default function (state = null, action) {
    switch(action.type){
        case 'TASK_SELECTED':
            return action.payload;
            break;

        case 'TASK_COMMENTED':
            return Object.assign({}, action.payload);
            break;
    }
    return state;
}