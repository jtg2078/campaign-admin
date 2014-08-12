/**
 * @jsx React.DOM
 */

var React = require('react');
var CampaignStore = require('../stores/CampaignStore');
var CampaignListItem = require('../components/campaign-listitem.jsx');

var CampaignList = React.createClass({

    getInitialState: function() {
        return {
            campaigns: CampaignStore.getAll(),
            currentCampaignID: CampaignStore.getCurrentID()
        };
    },

    componentDidMount: function() {
        CampaignStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        CampaignStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var items = this.state.campaigns.map(function(campaign) {
            return (
                <CampaignListItem key={campaign.id}
                                  campaign={campaign}
                                  currentCampaignID={this.state.currentCampaignID} />
            );
        }, this);
        return (
            <li className="active">
                <a href="#"><i className="fa fa-files-o fa-fw"></i> Campaigns<span className="fa arrow"></span></a>
                <ul className="nav nav-second-level">
                    {items}
                </ul>
            </li>
        );
    },

    _onChange: function() {
        this.setState(this.getInitialState());
    }

});

module.exports = CampaignList;
