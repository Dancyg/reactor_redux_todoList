export default function (state=null, action) {
    switch(action.type) {

        case 'TASK_ADDED':
            return state.concat(action.payload);
            break;

        case 'TASK_COMPLETED':
            action.payload.completed = 'completed';
            return state.concat([]);
            break;

        default:
            if(!state) {
                return [
                    {
                        id:1,
                        title: 'Buy vegetables',
                        description: 'Don\'t forget to buy a vegetables due to new diet',
                        completed: '',
                        comment:''
                    },
                    {
                        id:2,
                        title: 'New haircut',
                        description: 'To make a new haircut in that fashionable barber shop',
                        completed: '',
                        comment:''
                    }
                ]
            }else{
                return state;
            }
    }
}