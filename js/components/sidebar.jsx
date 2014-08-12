/**
 * @jsx React.DOM
 */

var React = require('react');
var CampaignList = require('../components/campaign-list.jsx');

var SideBar = React.createClass({

    render: function() {
        return (
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <CampaignList />
                    </ul>
                </div>
            </div>
        );
    }

});

module.exports = SideBar;