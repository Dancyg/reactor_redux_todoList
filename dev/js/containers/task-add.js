import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addListItem} from '../actions/index'
import json2csv from 'json2csv';

class TaskAdd extends Component{
    csvCreate(){
        var fields = ['title', 'description', 'comments'];

        try {
            let result = json2csv({ data: this.props.tasks, fields: fields });
            var url = 'data:text/json;charset=utf8,' + encodeURIComponent(result);
            window.open(url, 'download_window', 'toolbar=0,location=no,directories=0,status=0,scrollbars=0,resizeable=0,width=10,height=1,top=0,left=0');
            window.focus();
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