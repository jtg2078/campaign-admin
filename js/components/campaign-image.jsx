/**
 * @jsx React.DOM
 */

var React = require('react');

var CampaignImage = React.createClass({

    propTypes: {
        campaign: React.PropTypes.object
    },

    render: function() {
        var campaign = this.props.campaign;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <i className="fa fa-file-image-o fa-fw"></i> Compaign Image
                </div>
                <div className="panel-body">
                    <img src={campaign.image} />
                </div>
            </div>
        );
    }

});

module.exports = CampaignImage;