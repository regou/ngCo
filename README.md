# ng-co
Generator based ng-controller inspired by the famous co

# Install

`npm install ng-co --save`

# Usage

## Import
```javascript
require('ng-co');

angular.module('my-module', ['ng-co'])
	.controller('myFirstCtrl', ['$co',function($co) {
		$co(function*() {
			var data = yield $http.get('/users');
			$scope.data = data;
		});
	}]);
```

## Convert a controller
```javascript
var coc = require('ng-co');

function *ctrlFun($co, $http){ 
	var vm = this;
	vm.data = yield $http.get('/list');
}

//Important ! the $co dependency is required and MUST be the first!
mymodule.controller('myCtrl',['$co','$http',coc(ctrlFun)])

```


