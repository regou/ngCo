'use strict';
var isGeneratorFn = require('is-generator').fn

angular.module('ng-co', [])
	.factory('$co', require('./co_$q.js'));

function coc (serviceFunction) {
	if(isGeneratorFn(serviceFunction)){
		return function () {
			var co = arguments[0];
			co(serviceFunction.apply(this,arguments))
				.catch(function (error) {
					console.error(error);
				});
		}
	}else{
		return serviceFunction;
	}
}

module.exports = coc;
