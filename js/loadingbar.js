(function(){
    angular.module('fathersday.loadingbar', [])
    
    .service('loadingbar', function loadingbarService(){
        console.log('creating new loadingbar obj');

        this.progress = 0;

        this.getProgress = function(){
            return this.progress;
        };

        this.setProgress = function(prog){
            if (prog < 100){
                prog = prog;
            }
            this.progress = prog;
        }
    })

    .controller('loadingbarController', ['$scope', 'loadingbar', function($scope, loadingbar){
        $scope.loadingbar = loadingbar;
    }]);
})()
