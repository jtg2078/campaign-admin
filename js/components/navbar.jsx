/**
 * @jsx React.DOM
 */

var React = require('react');
var Inbox = require('../components/inbox.jsx');
var Task = require('../components/task.jsx');
var Alert = require('../components/alert.jsx');
var User = require('../components/user.jsx');

var NavBarTopLinks = React.createClass({

    render: function() {
        return (
            <ul className="nav navbar-top-links navbar-right">
                <Inbox />
                <Task />
                <Alert />
                <User />
            </ul>
        );
    }

});

module.exports = NavBarTopLinks;
