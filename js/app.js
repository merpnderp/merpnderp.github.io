/**
* Created by kalebmurphy on 7/31/14.
*/
/// <reference path="typescriptDefs/angularjs/angular.d.ts" />
angular.module("mainModule", []);

var main;
(function (main) {
    var mainController = (function () {
        function mainController($scope) {
            this.$scope = $scope;
            this.$scope.projectName = "Merpnderp";
        }
        mainController.$inject = [
            '$scope'
        ];
        return mainController;
    })();
    main.mainController = mainController;

    angular.module("mainModule").controller("mainController", mainController);
})(main || (main = {}));
//# sourceMappingURL=app.js.map
