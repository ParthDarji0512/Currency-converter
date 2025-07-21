 var app = angular.module('currencyApp', []);

    app.controller('CurrencyController', function($scope, $http) {
      $scope.currencies = ["USD", "EUR", "INR", "GBP", "CAD", "AUD", "JPY"];
      $scope.fromCurrency = "USD";
      $scope.toCurrency = "INR";
      $scope.amount = 1;
      $scope.convertedAmount = null;

      $scope.convertCurrency = function () {
        const apiKey = "a70572ebe606107b829215e2";  // 🔑 Replace with your key
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${$scope.fromCurrency}/${$scope.toCurrency}/${$scope.amount}`;

        $http.get(url)
          .then(function(response) {
            $scope.convertedAmount = response.data.conversion_result;
          }, function(error) {
            console.error("Error fetching exchange rate:", error);
            alert("Failed to convert currency. Please check your API key and internet connection.");
          });
      };
    });