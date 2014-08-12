var Dispatcher = require('./Dispatcher');

var copyProperties = require('react/lib/copyProperties');

var AppDispatcher = copyProperties(new Dispatcher(), {

    handleDataAction: function(action) {
        this.dispatch({
            source: 'DATA_ACTION',
            action: action
        });
    },

    handleViewAction: function(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }

});

module.exports = AppDispatcher;