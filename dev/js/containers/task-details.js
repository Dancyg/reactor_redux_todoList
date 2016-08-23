import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCommentsToTask} from '../actions/index'

class TaskDetails extends Component{
    displayComments(){
        return(
            <div>
                {this.props.task.comments.map((comment, i)=>{
                    return(
                        <p key={i}>
                        {comment}
                        </p>
                    )
                })}
            </div>

        )
    }

    render(){
        if(!this.props.task){
            return (
                <div className="col-md-5">
                    <div>
                        <h3 className="task task-header">Task Details:</h3>
                        <div className="task-details task">
                            Please select a task...
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="col-md-5">
                <div>
                    <h3 className="task task-header">Task Details:</h3>
                    <div className="task-details task">
                        <h4>{this.props.task.title}</h4>
                        <p>{this.props.task.description}</p>
                        <hr/>
                        <h4>Comments</h4>
                        {this.displayComments()}
                        <textarea id='comments' className="form-control comments-on-task btst-custom"></textarea>
                        <button type="text" className="btn btn-default btst-custom"
                            onClick={()=>this.props.addCommentsToTask(this.props.task)}
                        >add comments</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state){
    return{
        task: state.activeTask
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addCommentsToTask: addCommentsToTask}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskDetails);