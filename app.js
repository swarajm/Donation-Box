var app = angular.module('donationBox',['ngMaterial'])
app.controller('donationBoxController',["$scope","$mdDialog", function($scope,  $mdDialog){
var iMaxValue = 1000,
   iDonationAmount = 0;
// Progress Bar calculation
$scope.progress = 0;
$scope.amount = 0;
$scope.getDonation = function(amt){
$scope.progress = amt /iMaxValue * 100 ;
}
$scope.showAlert = function(ev) {
    console.log(ev);
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('body')))
        .clickOutsideToClose(true)
        .title('Saved')
        .textContent('Your Donation has been saved for Future.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };
}])
