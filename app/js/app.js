(function(){
    var app = angular.module('ultranote', [
        'ui.router'
    ]);

    config.$inject = ['$urlRouterProvider', '$urlMatcherFactory'];
    function config($urlRouterProvider, $urlMatcherFactory){
        $urlMatcherFactory.caseInsencitive(true);

        $urlRouterProvider.when('/note/', '/notes/');

        $urlRouterProvider.otherwise('/home/');
    }

    app.config(config);
})();
