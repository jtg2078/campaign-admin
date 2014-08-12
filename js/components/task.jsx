/**
 * @jsx React.DOM
 */

var React = require('react');

var TaskItem = React.createClass({

    render: function() {
        var style = { width: '40%'};
        return (
            <li>
                <a>
                    <div>
                        <p>
                            <strong>Task 1</strong>
                            <span className="pull-right text-muted">40% Complete</span>
                        </p>
                        <div className="progress progress-striped active">
                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={style}>
                                <span className="sr-only">40% Complete (success)</span>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        );
    }

});


var Task = React.createClass({

    render: function() {
        return (
            <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i className="fa fa-tasks fa-fw"></i>
                    <i className="fa fa-caret-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-tasks">
                    <TaskItem />
                    <li className="divider"></li>
                    <TaskItem />
                    <li className="divider"></li>
                    <li>
                        <a className="text-center" href="#">
                            <strong>See All Tasks</strong>{' '}
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
            </li>
        );
    }

});

module.exports = Task;
