/**
 * @jsx React.DOM
 */

var CampaignActions = require('../actions/CampaignActions');
var React = require('react');

var CampaignImpression = React.createClass({

    propTypes: {
        campaign: React.PropTypes.object
    },

    render: function() {
        var campaign = this.props.campaign;
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-xs-3">
                            <i className="fa fa-bullseye fa-5x"></i>
                        </div>
                        <div className="col-xs-9 text-right">
                            <div className="huge">{campaign.impressions}</div>
                            <div>Impressions</div>
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
        CampaignActions.clickCampaignImpression(this.props.campaign.id);
    }

});

module.exports = CampaignImpression;