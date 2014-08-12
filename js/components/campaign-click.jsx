/**
 * @jsx React.DOM
 */

var CampaignActions = require('../actions/CampaignActions');
var React = require('react');

var CampaignClick = React.createClass({

    propTypes: {
        campaign: React.PropTypes.object
    },

    render: function() {
        var campaign = this.props.campaign;
        return (
            <div className="panel panel-green">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col-xs-3">
                            <i className="fa fa-external-link fa-5x"></i>
                        </div>
                        <div className="col-xs-9 text-right">
                            <div className="huge">{campaign.clicks}</div>
                            <div>Clicks</div>
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
        CampaignActions.clickCampaignClick(this.props.campaign.id);
    }

});

module.exports = CampaignClick;