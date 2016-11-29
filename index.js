var chalk = require('chalk');
var http = require('http');

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
var options = {
  host: 'quotes.rest',
  path: '/qod.json'
};

callback = function(response) {
  var str = '';

  response.on('data', function (chunk) {
    str += chunk;
  });


  response.on('end', function () {
  	console.log(chalk.red("QUOTE OF THE DAY"));
    console.log(chalk.yellow(str));
  });
}

http.request(options, callback).end();
