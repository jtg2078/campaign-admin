/** @jsx React.DOM */

var React = require('react');

var AlertItem = React.createClass({
    render: function () {
        return (
            <li>
                <a href="#">
                    <div>
                        <i className="fa fa-comment fa-fw" /> New Comment
                        <span className="pull-right text-muted small">4 minutes ago</span>
                    </div>
                </a>
            </li>
        );
    }
});


var Alert = React.createClass({
    getInitialState: function () {
        return {
            alerts: []
        };
    },
    render: function () {
        return (
            <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i className="fa fa-bell fa-fw" />
                    <i className="fa fa-caret-down" />
                </a>
                <ul className="dropdown-menu dropdown-alerts">
                    <AlertItem />
                    <li className="divider"></li>
                    <AlertItem />
                    <li className="divider"></li>
                    <AlertItem />
                    <li className="divider"></li>
                    <li>
                        <a className="text-center" href="#">
                            <strong>See All Alerts</strong>{' '}
                            <i className="fa fa-angle-right" />
                        </a>
                    </li>
                </ul>
            </li>
        );
    }
});

module.exports = Alert;

