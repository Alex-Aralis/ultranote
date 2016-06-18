(function(){
    var app = angular.module('ultranote', [
        'ui.router'
    ]);

    function config($urlRouterProvider){
        $urlRouterProvider.otherwise('/notes/');
    }

    config.$inject = ['$urlRouterProvider'];
    app.config(config);
})();
