var express = require('express');
var router = express.Router();
var placeList = require('../places.js');
var data = require('../data.js');

let stateNames = [];
for(state in placeList.US.divisions) {
  stateNames.push(placeList.US.divisions[state].name.replace(" ", "-").toLowerCase());
}

let statePairs = { };
for(state in placeList.US.divisions) {
  statePairs[placeList.US.divisions[state].name.replace(" ", "-").toLowerCase()] = state;
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index-state', { title: 'OpenGIS - States', list : statePairs });
});

router.get('/:state', function(req, res, next) {
  const requestedState = req.params.state;

  if(stateNames.includes(requestedState.toLowerCase())) {
    const state = statePairs[requestedState.toLowerCase()]
    const stateData = data.US.divisions[statePairs[requestedState.toLowerCase()]];
    res.render('state-view', { title: 'OpenGIS - State: ' + stateData.name, state: state, data: stateData});

  }
  else{
    res.render('index-state', { title: 'Open Source GIS Explorer - States'});
  }


});

module.exports = router;
