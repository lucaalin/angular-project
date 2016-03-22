(function () {
    'use strict';

    angular.module('app.navigation').directive('ngNavigation', ngNavigation);

    function ngNavigation() {
        var directive = {
            restrict: 'AE',
            templateUrl: '/app/navigation/navigation.directive.view.html',
            link: linkFunc,
            controller: NavigationController,
            controllerAs: 'vm',
            bindToController: true
        }

        return directive;

        function linkFunc(scope, element, attr, ctrl) {
            console.log('works');
        }
    }

    NavigationController.$inject = ['$scope'];

    function NavigationController($scope) {
        var vm = this;
        vm.name = 'Alin'
    }

})();