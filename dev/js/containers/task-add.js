import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addListItem} from '../actions/index'
import json2csv from 'json2csv';

class TaskAdd extends Component{
    csvCreate(){
        var fields = ['title', 'description', 'comments'];

        try {
            var result = json2csv({ data: this.props.tasks, fields: fields });
            console.log(result);
        } catch (err) {
            console.error(err);
        }
    }

    render(){
        return(
            <div className="task-add-wrapper">
                <button onClick={()=>this.csvCreate()} className="btn btn-default btst-custom csv-button">crate csv</button>
                <button onClick={()=>this.props.addTask({id:3,title:'hello world', descriptio:'desc'})} className="btn btn-default btst-custom task-add-container">
                        Add new task
                </button>
            </div>
        );
    }

}

function mapStateToProps (state){
    return{
        tasks: state.tasks
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addTask: addListItem}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TaskAdd);