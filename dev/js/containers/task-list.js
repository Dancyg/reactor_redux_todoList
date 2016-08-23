import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectTask} from '../actions/index'
import {taskCompleted} from '../actions/index'

class TaskList extends Component {
    createListItems(){
        return this.props.tasks.map((task, i)=>{
            return (
                <li className="task-list task "
                    key={i}
                    onClick={() => this.props.selectTask(task)}
                ><div className="row">
                    <div className={"col-md-10 col-xs-9 " + task.completed}>
                        {task.title}
                    </div>
                    <div className="col-md-2 col-xs-3 text-right">
                        <button onClick={() => this.props.taskCompleted(task)}
                                type="text"
                                className="btn btn-default btst-custom"
                        >done</button>
                    </div>
                </div>

                </li>
            )
        })
    }

    render (){
        return(
            <div className="col-md-7">
                <div>
                    <h3 className="task-list task task-header">Task List:</h3>
                    <div className="list-container">
                        <ul>
                            {this.createListItems()}
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps (state){
    return{
        tasks: state.tasks
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        selectTask: selectTask,
        taskCompleted: taskCompleted}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskList);