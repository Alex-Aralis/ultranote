(function(){
    angular.module('fathersday.envelope', [
        'ui.router',
        'fathersday.loadingbar',
    ])

    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            
        .state('envelope',{
            url: '/envelope',
            templateUrl: 'views/envelope.html',
            controller: ['loadingbar', function(loadingbar){
                loadingbar.setProgress(33);
            }],
        });
            
    }])
})();