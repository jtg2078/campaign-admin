/**
 * @jsx React.DOM
 */

var CampaignActions = require('../actions/CampaignActions');
var React = require('react');

var CampaignAction = React.createClass({

    propTypes: {
        campaign: React.PropTypes.object
    },

    render: function() {
        var campaign = this.props.campaign;
        return (
            <div className="panel panel-yellow">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-xs-3">
                            <i className="fa fa-shopping-cart fa-5x"></i>
                        </div>
                        <div className="col-xs-9 text-right">
                            <div className="huge">{campaign.actions}</div>
                            <div>Actions</div>
                        </div>
                    </div>
                </div>
                <a onClick={this.handleClick}>
                    <div className="panel-footer">
                        <span className="pull-left">View Details</span>
                        <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                        <div className="clearfix"></div>
                    </div>
                </a>
            </div>
        );
    },

    handleClick: function () {
        CampaignActions.clickCampaignAction(this.props.campaign.id);
    }

});

module.exports = CampaignAction;