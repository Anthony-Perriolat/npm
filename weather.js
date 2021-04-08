var weather = require('weather-js');
weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);
    JSON.stringify(result, null, 2)
    console.log(`Temp en F° : ${result[0].current.temperature} l'état du ciel : ${result[0].current.skytext}`);
  });