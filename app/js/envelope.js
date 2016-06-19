(function(){
    angular.module('fathersday.envelope', [
        'ui.router'
    ])

    .config(['$stateProvider', function($stateProvider){
        $stateProvider
            
            .state('envelope',{
                url: '/envelope',
                templateUrl: 'views/envelope.html',
            })
    }])
})();
