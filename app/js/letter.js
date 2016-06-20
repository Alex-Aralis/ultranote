(function(){
    angular.module('fathersday.letter', [
        'ui.router',
        'fathersday.loadingbar'
    ])

    .config(['$stateProvider', function($stateProvider){
        $stateProvider
        
        .state('letter', {
            url: '/letter',
            templateUrl: 'views/letter.html',
            controller: ['loadingbar', function(loadingbar){
                loadingbar.setProgress(66);
            }],
        });
    }]);
})();   
