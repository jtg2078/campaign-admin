var AppDispatcher = require('../dispatcher/AppDispatcher');
var CampaignConstants = require('../constants/CampaignConstants');

var ActionTypes = CampaignConstants.ActionTypes;

module.exports = {

    clickCampaign: function (campaignID) {
        AppDispatcher.handleViewAction({
            type: ActionTypes.CLICK_CAMPAIGN,
            campaignID: campaignID
        });
    },

    clickCampaignAction: function (campaignID) {
        console.log('not implemented');
    },

    clickCampaignClick: function (campaignID) {
        console.log('not implemented');
    },

    clickCampaignImpression: function (campaignID) {
        console.log('not implemented');
    },

    loadMockCampaigns: function (campaigns) {
        AppDispatcher.handleDataAction({
            type: ActionTypes.LOAD_MOCK_CAMPAIGNS,
            campaigns: campaigns
        });
    }
};