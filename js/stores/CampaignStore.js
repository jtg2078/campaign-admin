var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var CampaignConstants = require('../constants/CampaignConstants');
var merge = require('react/lib/merge');

var ActionTypes = CampaignConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _currentID = null;
var _campaigns = {};

function add(id, name, image, impressions, clicks, actions) {
    _campaigns[id] = {
        id: id,
        name: name,
        image: image,
        impressions: impressions,
        clicks: clicks,
        actions: actions
    };
}

function bulkAdd(items) {
    items.forEach(function(item){
        add(item.id, item.name, item.image, item.impressions, item.clicks, item.actions);
    });
}

var CampaignStore = merge(EventEmitter.prototype, {

    get: function(id) {
        return _campaigns[id];
    },

    getAll: function () {
        var campaignList = [];
        for(var id in _campaigns) {
            campaignList.push(_campaigns[id]);
        }
        return campaignList;
    },

    getCurrentID: function () {
        return _currentID;
    },

    getCurrentCampaign: function () {
        return this.get(this.getCurrentID());
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

CampaignStore.dispatchToken = AppDispatcher.register(function(payload) {
    
    var action = payload.action;

    switch(action.type) {

        case ActionTypes.CLICK_CAMPAIGN:
            _currentID = action.campaignID;
            CampaignStore.emitChange();
            break;

        case ActionTypes.LOAD_MOCK_CAMPAIGNS:
            bulkAdd(action.campaigns);
            _currentID = action.campaigns[0].id;
            CampaignStore.emitChange();
            break;

        default:
            // nada
    }
});

module.exports = CampaignStore;