(function(){
    angular.module('fathersday.github', [
        'ui.router',
        'fathersday.loadingbar',
    ])

    .config(['$stateProvider', function($stateProvider){
        $stateProvider

        .state('github', {
            url: '/github',
            templateUrl: 'views/github.html',
            controller: ['loadingbar', function(loadingbar){
                loadingbar.setProgress(100);
            }],
        });
    }]);
})()
