/**
 * Created by kalebmurphy on 7/31/14.
 */

/// <reference path="typescriptDefs/angularjs/angular.d.ts" />

angular.module("mainModule", []);

module main{

    export class mainController{

        public static $inject = [
            '$scope'
        ];

        constructor(public $scope){
            this.$scope.projectName = "Merpnderp";
        }
    }

    angular.module("mainModule").controller("mainController", mainController);
}

