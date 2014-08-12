/**
 * @jsx React.DOM
 */


var React = require('react');
var CampaignStore = require('../stores/CampaignStore');
var CampaignImage = require('../components/campaign-image.jsx');
var CampaignImpression = require('../components/campaign-impression.jsx');
var CampaignClick = require('../components/campaign-click.jsx');
var CampaignAction = require('../components/campaign-action.jsx');


var Campaign = React.createClass({

    getInitialState: function() {
        return {
            campaign: CampaignStore.getCurrentCampaign()
        };
    },

    componentDidMount: function() {
        CampaignStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        CampaignStore.removeChangeListener(this._onChange);
    },

    render: function() {
        var campaign = this.state.campaign;
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">{'Campaign ' + campaign.name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6"><CampaignImpression campaign={campaign} /></div>
                    <div className="col-lg-3 col-md-6"><CampaignClick campaign={campaign} /></div>
                    <div className="col-lg-3 col-md-6"><CampaignAction campaign={campaign} /></div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <CampaignImage campaign={campaign} />
                    </div>
                </div>
            </div>
        );
    },

    _onChange: function() {
        this.setState(this.getInitialState());
    }

});

module.exports = Campaign;