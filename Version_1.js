var appModule = angular.module('appModule', []);

appModule.controller('calcCrtl', function ($scope) {

  
  $scope.displayValue = 0;
  $scope.pendingValue = 0;
  $scope.runningTotal = 0;

  $scope.selectedOperation = null;
  $scope.clearValue = true;

  $scope.btnClick = function(btn) 
  {
    if($scope.clearValue)
     {
      $scope.displayValue = btn;
      $scope.clearValue = false;
    } 
    else 
    {
        $scope.displayValue = $scope.displayValue * 10 + btn;
    }

    $scope.pendingValue = $scope.displayValue;

  };

  $scope.add = function()
  {
    if($scope.pendingValue)
    {
     
       $scope.runningTotal += $scope.pendingValue; 
       $scope.displayValue = $scope.runningTotal;
           
    }
    if($scope.selectedOperation = "+")
    {
      $scope.runningTotal += $scope.pendingValue; 
      $scope.displayValue = $scope.runningTotal;
    }
    
    $scope.selectedOperation = "+";
    $scope.pendingValue = null;
    $scope.clearValue = true;

  };

  $scope.subtract = function()
  {
    if($scope.runningTotal == 0)
    {
        $scope.runningTotal = $scope.pendingValue;   
    }
    else
     {
        $scope.displayValue = $scope.runningTotal -= $scope.pendingValue;
     }
    
    $scope.selectedOperation = "-";
    $scope.pendingValue = null;
    $scope.clearValue = true;

  };

  $scope.multiple = function()
  {
    if($scope.pendingValue)
    {
        $scope.runningTotal = 1;
        $scope.runningTotal *= $scope.pendingValue;
        $scope.displayValue = $scope.runningTotal;
    }
    $scope.selectedOperation = "*"
    $scope.pendingValue = null;
    $scope.clearValue = true;
  };

  $scope.calculate = function()
  {
    if($scope.selectedOperation == "+")
    { 
       
          $scope.runningTotal += $scope.pendingValue; 
          $scope.displayValue = $scope.runningTotal;
          $scope.clearValue = true;
          $scope.pendingValue = null;
          $scope.runningTotal = 0;

     }
    
    
    if($scope.selectedOperation == "-")
      {
        $scope.runningTotal -= $scope.pendingValue;
        $scope.displayValue = $scope.runningTotal;
        $scope.clearValue = true;
        $scope.pendingValue = null;
        $scope.runningTotal = 0;
      }

    if($scope.selectedOperation == "*")
      {
        $scope.runningTotal *= $scope.pendingValue;
        $scope.displayValue = $scope.runningTotal;
        $scope.clearValue = true;
        $scope.pendingValue = null
        $scope.runningTotal = 0;
        
      }
      $scope.clearValue = true;
      $scope.selectedOperation = null;
      $scope.pendingValue = null;
    
  };


  $scope.clear = function()
  {
    $scope.runningTotal = 0;
    $scope.pendingValue = 0;
    $scope.displayValue = 0;
    $scope.clearValue = true;
    $scope.selectedOperation = null;
    $scope.operation= null;
  };

})
