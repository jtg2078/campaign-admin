/**
 * @jsx React.DOM
 */

var React = require('react');
var CampaignActions = require('./actions/CampaignActions');
// components
var NavBarTopLinks = require('./components/navbar.jsx');
var SideBar = require('./components/sidebar.jsx');
var Campaign = require('./components/campaign.jsx');

// populate mock data
var mockCampaigns = [
    {
        'id': '1',
        'name': 'Apple',
        'image': 'http://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/440px-Red_Apple.jpg',
        'impressions': 10,
        'clicks': 20,
        'actions': 30,
    },
    {
        'id': '2',
        'name': 'Banana',
        'image': 'http://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        'impressions': 40,
        'clicks': 50,
        'actions': 60,
    },
    {
        'id': '3',
        'name': 'Cherry',
        'image': 'http://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Cherry_Stella444.jpg/440px-Cherry_Stella444.jpg',
        'impressions': 70,
        'clicks': 80,
        'actions': 90,
    }
];

// load the mock data
CampaignActions.loadMockCampaigns(mockCampaigns);


// hook up all the react components
React.renderComponent(
    <NavBarTopLinks />,
    document.getElementById('NavBarTopLinks')
);

React.renderComponent(
    <SideBar />,
    document.getElementById('SideBar')
);

React.renderComponent(
    <Campaign />,
    document.getElementById('Campaign')
);