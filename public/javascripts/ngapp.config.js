var Lesson06;
(function (Lesson06) {
    Configuration.$inject = ['$locationProvider', '$urlRouterProvider'];
    function Configuration($locationProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }
    Lesson06.Configuration = Configuration;
})(Lesson06 || (Lesson06 = {}));
//# sourceMappingURL=ngapp.config.js.map