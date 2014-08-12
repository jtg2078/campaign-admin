/**
 * @jsx React.DOM
 */

var React = require('react');

var InboxItem = React.createClass({

    render: function() {
        return (
            <li>
                <a>
                    <div>
                        <strong>John Smith</strong>
                        <span className="pull-right text-muted">
                            <em>Yesterday</em>
                        </span>
                    </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                </a>
            </li>
        );
    }

});


var Inbox = React.createClass({

    render: function () {
        return (
            <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i className="fa fa-envelope fa-fw"></i>
                    <i className="fa fa-caret-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-messages">
                    <InboxItem />
                    <li className="divider"></li>
                    <InboxItem />
                    <li className="divider"></li>
                    <li>
                        <a className="text-center" href="#">
                            <strong>Read All Messages</strong>{' '}
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
            </li>
        );
    }
});

module.exports = Inbox;
