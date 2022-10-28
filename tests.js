var placeList = require('./places.js');
var data = require('./data.js');


for(state in placeList.US.divisions) {
    console.log(placeList.US.divisions[state].name);
}