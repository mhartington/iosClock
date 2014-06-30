angular.module('starter.controllers', [])

.controller('WorldClockCtrl', function($scope) {})

.controller('AlarmCtrl', function($scope, $ionicModal, AlarmService) {
  $scope.data = {
    showDelete: false
  };


  $scope.times = AlarmService.all();

  var newId = 0;

  $scope.add = function(alarm) {
    newId += 1;
    $scope.times.push({
      'alarm': alarm.alarm,
      'id': newId,
      'checked': true
    });

    $scope.modal.hide();
  };


  $ionicModal.fromTemplateUrl('templates/alarm-modal.html', function(modal) {
    $scope.modal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up',
    focusFirstInput: true
  });



})

// $scope.modalData.msg = msg;

// .controller('ModalCtrl', function ($scope) {
//
//     var newId = 0;
//     $scope.add = function (msg) {
//         newId += 1;
//         $scope.times.push({
//             'alarm': msg,
//             'id': newId,
//             'checked': true
//         });
//
//         $scope.modal.hide();
//     };
//
//
// })

.controller('TimerCtrl', function($scope) {

})

.controller('StopWatchCtrl', function($scope) {});
