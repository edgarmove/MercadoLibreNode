var meli = require('../index.js');
var sys = require("sys");
var config = require("../config.js");

var meliObject = new meli.Meli();


var examples = {
    1: "Get categories from mercado libre argentina",
    2: "Get users/77169310",
    3: "Get users?ids=[n,n]"
};
function printOptions() {
    console.log("Ingrese un numero:");
    for (var i in examples) {
        console.log(i + ": " + examples[i]);

    }
}



printOptions();
var stdin = process.openStdin();
stdin.addListener("data", function (d) {
    var end = d.toString();

    if (d == 1) {
        meliObject.get('sites/' + config.config.site_id +'/categories', function (err, res) {
            console.log(err, res);
        });
    }
    else if (d == 2) {
        meliObject.get('users/101897633?access_token=' + config.config.access_token, function (err, res) {
             console.log(err, res);
        });
    }
    else if (d == 3) {
        meliObject.get('users', {
            ids: [145925943, 145925951]
        }, function (err, res) {
            console.log(err, res);
        });
    }
    else if (d == 4) {

    }
});



