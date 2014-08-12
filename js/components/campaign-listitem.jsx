/**
 * @jsx React.DOM
 */
 
 var CampaignActions = require('../actions/CampaignActions');
 var React = require('react');
 var cx = require('react/lib/cx');
 
 var CampaignListItem = React.createClass({

    propTypes: {
        campaign: React.PropTypes.object,
        currentCampaignID: React.PropTypes.string
    },
 
    render: function() {
        var campaign = this.props.campaign;
        var classes = cx({
            'active': campaign.id === this.props.currentCampaignID
        });
        return (
            <li>
                <a className={classes} onClick={this.handleClick}>{campaign.name}</a>
            </li>
        );
    },

    handleClick: function () {
        CampaignActions.clickCampaign(this.props.campaign.id);
    }
 
 });

 module.exports = CampaignListItem;