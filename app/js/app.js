(function(){
    var app = angular.module('fathersday', [
        'ui.router',
        'fathersday.envelope'
    ]);

    config.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
    function config($urlRouterProvider, $urlMatcherFactoryProvider){
        //$urlMatcherFactoryProvider.caseInsensitive(true);

        //$urlRouterProvider.when('/envelope/', '//');

        //$urlRouterProvider.otherwise('/envelope');
    }

    app.config(config);

    app.run(['$urlMatcherFactory', function($urlMatcherFactory){
        //$urlMatcherFactory.caseInsensitive(true);
    }]);
})();
