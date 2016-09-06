'use strict';

angular.module('ng-co', [])
	.factory('$co', require('./co_$q.js'));

function coc (serviceFunction) {
	return function () {
		var co = arguments[0];
		co(serviceFunction.apply(this,arguments))
			.catch(function (error) {
				console.error(error);
			});
	}
}

module.exports = coc;
