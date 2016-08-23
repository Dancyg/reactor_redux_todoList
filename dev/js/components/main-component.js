import React, {Component} from 'react';
import TaskDetails from '../containers/task-details';
import TaskList from '../containers/task-list';

class MainComponent extends Component{
    render(){
        return(
            <main className="container">
                <div className="row">
                    <TaskList/>
                    <TaskDetails/>
                </div>
            </main>
        )
    }
}
export default MainComponent;