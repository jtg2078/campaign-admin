var keyMirror = require('react/lib/keyMirror');

module.exports = {

    ActionTypes: keyMirror({
        CLICK_USER_INBOX: null,
        CLICK_USER_TASK: null,
        CLICK_USER_ALERT: null,
        CLICK_USER_SETTINGS: null,
        CLICK_USER_PROFILE: null,
        CLICK_USER_LOGOUT: null,
        CLICK_CAMPAIGN: null,
        CLICK_CAMPAIGN_IMPRESSIONS: null,
        CLICK_CAMPAIGN_CLICKS: null,
        CLICK_CAMPAIGN_ACTIONS: null,
        LOAD_MOCK_CAMPAIGNS: null
    })
};