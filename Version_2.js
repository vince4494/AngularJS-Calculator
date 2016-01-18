
var appModule = angular.module('appModule', []);

appModule.controller('calcCrtl', function ($scope) {
	$scope.val = 0;
	$scope.old = 0;
	$scope.op = "=";
	$scope.isClean = true;


$scope.clear = function(){
  $scope.val = 0;
  $scope.old = 0;
  $scope.op = "=";
  $scope.isClean = true;
};

$scope.btnClick = function (digit) {
	var d = digit;
    if ($scope.isClean) {
        $scope.old = $scope.val;
        $scope.val = d;
    } else {
        $scope.val = $scope.val * 10 + d;
    }
    $scope.isClean = false;
};

$scope.operationClicked = function (operation) {
	var v = $scope.evalulateOperation($scope.op, $scope.old, $scope.val);
	if (!$scope.isClean) {
		$scope.old = $scope.val
	}
    $scope.val = v;
    $scope.op = operation;
    $scope.isClean = true;
};


$scope.evalulateOperation = function (op, m, n){
	switch (op){
		case ("+"):
			return m + n;
			break;
		case ("-"):
			return m - n;
			break;
		case ("*"):
			return m * n;
			break;
		case ("="):
			return n;
			break;
  }
};
})