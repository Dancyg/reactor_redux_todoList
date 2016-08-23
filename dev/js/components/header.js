import React, {Component} from 'react';
import {connect} from 'react-redux';
import TaskAdd from '../containers/task-add'

class Header extends Component{
    render(){
        return(
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-xs-8">
                            <p>
                                Kind Reminder
                            </p>
                        </div>
                        <div className="col-md-4 col-xs-4 text-right">
                            <TaskAdd/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <input id="title" placeholder="task..." type="text" className="form-control btst-custom"/>
                        </div>
                        <div className="col-md-8">
                            <input id="description" placeholder="description..." className="form-control btst-custom" type="text"/>
                        </div>
                    </div>

                </div>
            </header>
        );
    }
}

export default Header;
