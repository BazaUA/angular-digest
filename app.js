angular.module('learndigest', []);

angular.module('learndigest').controller('PlaygroundCtrl', function($scope) {
    var vm = this;

    vm.enableForceEdit = true;
    vm.force = 30;

    vm.resetForce = function() {
        vm.force = 0;
    }

    $scope.$watch('vm.force', function() {
        console.log(vm.force);
    });
});

angular.module('learndigest').controller('InternalCtrl', function($scope) {

    $scope.secret = "shhh";
});